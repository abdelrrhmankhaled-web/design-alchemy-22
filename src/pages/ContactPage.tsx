import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "الاسم قصير جدًا").max(80),
  email: z.string().email("بريد غير صحيح"),
  message: z.string().min(10, "الرسالة قصيرة جدًا").max(2000),
});

const ContactPage = () => {
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      toast.success("تم استلام رسالتك! هنرد عليك في أقرب وقت.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <PageHero
        eyebrow="تواصل معنا"
        title="عايز تسأل عن حاجة؟"
        description="فريقنا متاح للرد على استفساراتك حول الدورات، المسارات، والشراكات."
      />
      <section className="container grid gap-8 py-16 md:grid-cols-3">
        <aside className="space-y-4 md:col-span-1">
          {[
            { icon: Mail, label: "البريد", value: "hello@3lemny.com" },
            { icon: Phone, label: "الهاتف", value: "+20 100 000 0000" },
            { icon: MapPin, label: "العنوان", value: "القاهرة، مصر" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}
        </aside>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">الاسم</Label>
              <Input id="name" name="name" required maxLength={80} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">رسالتك</Label>
            <Textarea id="message" name="message" rows={6} required maxLength={2000} />
          </div>
          <Button type="submit" disabled={busy} className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            إرسال الرسالة
          </Button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
