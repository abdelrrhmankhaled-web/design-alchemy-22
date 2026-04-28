import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { GraduationCap, Loader2, Mail, Lock, User as UserIcon } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";

const signUpSchema = z.object({
  displayName: z.string().min(2, "الاسم قصير جدًا").max(60, "الاسم طويل جدًا"),
  email: z.string().email("بريد إلكتروني غير صحيح"),
  password: z.string().min(6, "كلمة السر 6 أحرف على الأقل").max(72, "كلمة السر طويلة جدًا"),
});
const signInSchema = z.object({
  email: z.string().email("بريد إلكتروني غير صحيح"),
  password: z.string().min(1, "أدخل كلمة السر"),
});

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
    <path fill="#FBBC05" d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.66-2.84Z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
  </svg>
);

const Auth = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const initialMode = params.get("mode") === "signup" ? "signup" : "signin";
  const [tab, setTab] = useState<"signin" | "signup">(initialMode);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    document.title = "تسجيل الدخول | 3lemny Academy";
  }, []);

  useEffect(() => {
    if (!loading && user) navigate("/dashboard", { replace: true });
  }, [user, loading, navigate]);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = signUpSchema.safeParse({
      displayName: fd.get("displayName"),
      email: fd.get("email"),
      password: fd.get("password"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: { display_name: parsed.data.displayName },
      },
    });
    setBusy(false);
    if (error) {
      toast.error(error.message.includes("already") ? "هذا الحساب موجود مسبقًا" : error.message);
      return;
    }
    toast.success("تم إنشاء الحساب! تحقق من بريدك للتفعيل.");
    setTab("signin");
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = signInSchema.safeParse({
      email: fd.get("email"),
      password: fd.get("password"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword(parsed.data);
    setBusy(false);
    if (error) {
      toast.error("بيانات الدخول غير صحيحة");
      return;
    }
    toast.success("أهلاً بعودتك!");
    navigate("/dashboard");
  };

  const handleGoogle = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}/dashboard`,
    });
    if (result.error) {
      setBusy(false);
      toast.error("فشل تسجيل الدخول بجوجل");
      return;
    }
    if (result.redirected) return;
    navigate("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 font-arabic" dir="rtl">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2 font-bold">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-text text-primary-foreground shadow-glow">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg">3LEMNY ACADEMY</span>
        </Link>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
          <Tabs value={tab} onValueChange={(v) => setTab(v as "signin" | "signup")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">دخول</TabsTrigger>
              <TabsTrigger value="signup">حساب جديد</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="mt-6 space-y-4">
              <div className="space-y-1 text-center">
                <h1 className="text-2xl font-bold">أهلاً بعودتك</h1>
                <p className="text-sm text-muted-foreground">سجّل دخولك لمتابعة تعلّمك</p>
              </div>
              <Button type="button" variant="outline" className="w-full gap-2" onClick={handleGoogle} disabled={busy}>
                <GoogleIcon />
                المتابعة باستخدام جوجل
              </Button>
              <div className="relative my-2 text-center text-xs text-muted-foreground">
                <span className="bg-card px-2 relative z-10">أو</span>
                <div className="absolute left-0 right-0 top-1/2 -z-0 h-px bg-border" />
              </div>
              <form onSubmit={handleSignIn} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="email-in">البريد الإلكتروني</Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="email-in" name="email" type="email" required className="pe-10 text-right" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pw-in">كلمة السر</Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="pw-in" name="password" type="password" required className="pe-10 text-right" placeholder="••••••••" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={busy}>
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "تسجيل الدخول"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-6 space-y-4">
              <div className="space-y-1 text-center">
                <h1 className="text-2xl font-bold">ابدأ رحلتك معنا</h1>
                <p className="text-sm text-muted-foreground">أنشئ حسابك مجانًا في ثوانٍ</p>
              </div>
              <Button type="button" variant="outline" className="w-full gap-2" onClick={handleGoogle} disabled={busy}>
                <GoogleIcon />
                التسجيل باستخدام جوجل
              </Button>
              <div className="relative my-2 text-center text-xs text-muted-foreground">
                <span className="bg-card px-2 relative z-10">أو</span>
                <div className="absolute left-0 right-0 top-1/2 -z-0 h-px bg-border" />
              </div>
              <form onSubmit={handleSignUp} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name-up">الاسم بالكامل</Label>
                  <div className="relative">
                    <UserIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="name-up" name="displayName" required className="pe-10 text-right" placeholder="أحمد محمد" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email-up">البريد الإلكتروني</Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="email-up" name="email" type="email" required className="pe-10 text-right" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pw-up">كلمة السر</Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="pw-up" name="password" type="password" required minLength={6} className="pe-10 text-right" placeholder="6 أحرف على الأقل" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={busy}>
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "إنشاء حساب"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          بمتابعتك أنت توافق على{" "}
          <Link to="/" className="text-primary hover:underline">شروط الاستخدام</Link> و{" "}
          <Link to="/" className="text-primary hover:underline">سياسة الخصوصية</Link>
        </p>
      </div>
    </main>
  );
};

export default Auth;
