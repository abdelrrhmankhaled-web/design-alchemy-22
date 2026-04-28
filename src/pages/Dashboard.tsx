import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, BookOpen, Award, User as UserIcon, Receipt, GraduationCap, LogOut, PlayCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const ENROLLED = [
  { id: 1, title: "أساسيات تصميم واجهات المستخدم UI", progress: 65, lessons: 24, completed: 16, level: "مبتدئ" },
  { id: 2, title: "إعلانات فيسبوك للمبتدئين", progress: 30, lessons: 18, completed: 5, level: "متوسط" },
  { id: 3, title: "ChatGPT للتسويق الرقمي", progress: 100, lessons: 12, completed: 12, level: "متقدم" },
];

const CERTS = [
  { title: "ChatGPT للتسويق الرقمي", date: "2026-03-12", id: "CERT-3LMN-2031" },
  { title: "أساسيات SEO", date: "2025-11-04", id: "CERT-3LMN-1842" },
];

const INVOICES = [
  { id: "INV-2031", date: "2026-03-12", item: "ChatGPT للتسويق", amount: "499 ج.م", status: "مدفوع" },
  { id: "INV-1842", date: "2025-11-04", item: "أساسيات SEO", amount: "299 ج.م", status: "مدفوع" },
  { id: "INV-1620", date: "2025-08-20", item: "تصميم UI", amount: "799 ج.م", status: "مدفوع" },
];

interface Profile {
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    document.title = "لوحتي | 3lemny Academy";
  }, []);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("display_name, avatar_url, bio")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        setProfile(data ?? { display_name: "", avatar_url: "", bio: "" });
        setLoading(false);
      });
  }, [user]);

  const handleSaveProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    const fd = new FormData(e.currentTarget);
    setSaving(true);
    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      display_name: String(fd.get("display_name") || "").slice(0, 60),
      bio: String(fd.get("bio") || "").slice(0, 500),
      avatar_url: String(fd.get("avatar_url") || "").slice(0, 500),
    });
    setSaving(false);
    if (error) {
      toast.error("فشل حفظ التغييرات");
      return;
    }
    toast.success("تم حفظ ملفك الشخصي");
    setProfile({
      display_name: String(fd.get("display_name") || ""),
      bio: String(fd.get("bio") || ""),
      avatar_url: String(fd.get("avatar_url") || ""),
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const initials = (profile?.display_name || user?.email || "U").slice(0, 2).toUpperCase();

  return (
    <main className="min-h-screen bg-background font-arabic" dir="rtl">
      <header className="border-b border-border bg-card/40 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-text text-primary-foreground shadow-glow">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">3LEMNY ACADEMY</span>
          </a>
          <Button variant="outline" size="sm" className="gap-2" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" />
            خروج
          </Button>
        </div>
      </header>

      <section className="container py-8">
        <div className="mb-8 flex flex-col items-start gap-4 rounded-2xl border border-border bg-gradient-to-br from-card to-card/40 p-6 sm:flex-row sm:items-center">
          <Avatar className="h-16 w-16 border-2 border-primary/40">
            <AvatarImage src={profile?.avatar_url || undefined} />
            <AvatarFallback className="bg-primary/15 text-primary font-bold">{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">أهلاً، {profile?.display_name || "متعلّم"} 👋</h1>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-xl border border-border bg-background/60 px-4 py-2 text-center">
              <div className="text-xl font-extrabold text-primary">{ENROLLED.length}</div>
              <div className="text-[10px] text-muted-foreground">كورس</div>
            </div>
            <div className="rounded-xl border border-border bg-background/60 px-4 py-2 text-center">
              <div className="text-xl font-extrabold text-primary">{CERTS.length}</div>
              <div className="text-[10px] text-muted-foreground">شهادة</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="courses">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
            <TabsTrigger value="courses" className="gap-2"><BookOpen className="h-4 w-4" />كورساتي</TabsTrigger>
            <TabsTrigger value="certs" className="gap-2"><Award className="h-4 w-4" />الشهادات</TabsTrigger>
            <TabsTrigger value="profile" className="gap-2"><UserIcon className="h-4 w-4" />الملف</TabsTrigger>
            <TabsTrigger value="billing" className="gap-2"><Receipt className="h-4 w-4" />الفواتير</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6 space-y-4">
            {ENROLLED.map((c) => (
              <article key={c.id} className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold">{c.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary">{c.level}</Badge>
                      <span>{c.completed}/{c.lessons} درس</span>
                    </div>
                  </div>
                  <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <PlayCircle className="h-4 w-4" />
                    {c.progress === 100 ? "مراجعة" : "متابعة"}
                  </Button>
                </div>
                <Progress value={c.progress} className="h-2" />
                <div className="mt-2 text-xs text-muted-foreground">{c.progress}% مكتمل</div>
              </article>
            ))}
          </TabsContent>

          <TabsContent value="certs" className="mt-6 grid gap-4 md:grid-cols-2">
            {CERTS.map((c) => (
              <article key={c.id} className="rounded-2xl border border-border bg-gradient-to-br from-card to-primary/5 p-6">
                <Award className="mb-3 h-10 w-10 text-primary" />
                <h3 className="text-base font-bold">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">رقم الشهادة: {c.id}</p>
                <p className="text-xs text-muted-foreground">تاريخ الإصدار: {c.date}</p>
                <Button size="sm" variant="outline" className="mt-4 gap-2">
                  <Download className="h-4 w-4" />
                  تحميل PDF
                </Button>
              </article>
            ))}
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <form onSubmit={handleSaveProfile} className="max-w-2xl space-y-4 rounded-2xl border border-border bg-card p-6">
              <div className="space-y-1.5">
                <Label htmlFor="display_name">الاسم بالكامل</Label>
                <Input id="display_name" name="display_name" defaultValue={profile?.display_name || ""} maxLength={60} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="avatar_url">رابط الصورة الشخصية</Label>
                <Input id="avatar_url" name="avatar_url" type="url" defaultValue={profile?.avatar_url || ""} placeholder="https://..." />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bio">نبذة عنك</Label>
                <Textarea id="bio" name="bio" defaultValue={profile?.bio || ""} rows={4} maxLength={500} placeholder="مهتم بـ..." />
              </div>
              <div className="space-y-1.5">
                <Label>البريد الإلكتروني</Label>
                <Input value={user?.email || ""} disabled />
              </div>
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={saving}>
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "حفظ التعديلات"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="billing" className="mt-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-right">
                <thead className="border-b border-border bg-secondary/40 text-xs text-muted-foreground">
                  <tr>
                    <th className="p-3">الفاتورة</th>
                    <th className="p-3">التاريخ</th>
                    <th className="p-3">المنتج</th>
                    <th className="p-3">المبلغ</th>
                    <th className="p-3">الحالة</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {INVOICES.map((inv) => (
                    <tr key={inv.id}>
                      <td className="p-3 font-mono text-xs">{inv.id}</td>
                      <td className="p-3 text-muted-foreground">{inv.date}</td>
                      <td className="p-3">{inv.item}</td>
                      <td className="p-3 font-bold">{inv.amount}</td>
                      <td className="p-3">
                        <Badge className="bg-primary/15 text-primary hover:bg-primary/20">{inv.status}</Badge>
                      </td>
                      <td className="p-3">
                        <Button size="sm" variant="ghost" className="gap-1 text-xs">
                          <Download className="h-3 w-3" /> PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Dashboard;
