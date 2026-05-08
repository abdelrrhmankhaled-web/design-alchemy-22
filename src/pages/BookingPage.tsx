import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { COURSES } from "@/data/courses";
import { toast } from "@/hooks/use-toast";

const COUNTRIES = [
  { code: "+20", label: "🇪🇬 +20" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+965", label: "🇰🇼 +965" },
  { code: "+974", label: "🇶🇦 +974" },
  { code: "+973", label: "🇧🇭 +973" },
  { code: "+962", label: "🇯🇴 +962" },
];

const SOURCES = ["Google", "Instagram", "Facebook", "TikTok", "صديق", "أخرى"];

const schema = z.object({
  name: z.string().trim().min(2, "الاسم قصير جداً").max(100),
  country: z.string().min(1),
  phone: z.string().trim().min(6, "رقم غير صالح").max(20),
  email: z.string().trim().email("بريد غير صالح").max(255),
  course: z.string().min(1, "اختر الدورة"),
  level: z.enum(["مبتدئ", "متوسط", "متقدم"]),
  source: z.string().min(1, "اختر مصدر التعرف"),
  notes: z.string().max(500).optional(),
  terms: z.literal(true, { errorMap: () => ({ message: "يجب الموافقة على الشروط" }) }),
});

const BookingPage = () => {
  const [params] = useSearchParams();
  const preselected = params.get("course") ?? "";

  const [form, setForm] = useState({
    name: "",
    country: "+20",
    phone: "",
    email: "",
    course: preselected,
    level: "مبتدئ" as "مبتدئ" | "متوسط" | "متقدم",
    source: "",
    notes: "",
    terms: false,
    promo: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.errors.forEach((er) => {
        errs[er.path[0] as string] = er.message;
      });
      setErrors(errs);
      toast({ title: "تحقق من البيانات", description: "هناك حقول غير صحيحة", variant: "destructive" });
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <section className="container max-w-xl py-20">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-8 text-center md:p-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">تم استلام طلبك</h1>
          <p className="mt-2 text-foreground/75">سنتواصل معك خلال 24 ساعة لتأكيد الحجز.</p>
          <Button
            asChild
            size="lg"
            className="mt-6 gap-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
          >
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل معنا مباشرة
            </a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container max-w-2xl py-16 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">احجز مقعدك</h1>
        <p className="mt-2 text-foreground/70">املأ البيانات وسنتواصل معك خلال 24 ساعة</p>
      </div>

      <form onSubmit={submit} className="space-y-6 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="space-y-2">
          <Label htmlFor="name">الاسم بالكامل *</Label>
          <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label>رقم الهاتف *</Label>
          <div className="flex gap-2">
            <Select value={form.country} onValueChange={(v) => update("country", v)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((c) => (
                  <SelectItem key={c.code} value={c.code}>{c.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="flex-1"
            />
          </div>
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">البريد الإلكتروني *</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label>الدورة المختارة *</Label>
          <Select value={form.course} onValueChange={(v) => update("course", v)}>
            <SelectTrigger>
              <SelectValue placeholder="اختر دورة" />
            </SelectTrigger>
            <SelectContent>
              {COURSES.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>{c.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.course && <p className="text-xs text-destructive">{errors.course}</p>}
        </div>

        <div className="space-y-2">
          <Label>المستوى الحالي</Label>
          <RadioGroup
            value={form.level}
            onValueChange={(v) => update("level", v as typeof form.level)}
            className="flex flex-wrap gap-4"
          >
            {(["مبتدئ", "متوسط", "متقدم"] as const).map((l) => (
              <label key={l} className="flex items-center gap-2 text-sm">
                <RadioGroupItem value={l} />
                {l}
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>كيف عرفت عنا؟</Label>
          <Select value={form.source} onValueChange={(v) => update("source", v)}>
            <SelectTrigger>
              <SelectValue placeholder="اختر مصدر" />
            </SelectTrigger>
            <SelectContent>
              {SOURCES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.source && <p className="text-xs text-destructive">{errors.source}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">ملاحظات (اختياري)</Label>
          <Textarea id="notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={3} />
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 text-sm">
            <Checkbox
              checked={form.terms}
              onCheckedChange={(v) => update("terms", Boolean(v))}
              className="mt-0.5"
            />
            <span>أوافق على الشروط والأحكام</span>
          </label>
          {errors.terms && <p className="text-xs text-destructive">{errors.terms}</p>}
          <label className="flex items-start gap-3 text-sm">
            <Checkbox
              checked={form.promo}
              onCheckedChange={(v) => update("promo", Boolean(v))}
              className="mt-0.5"
            />
            <span>أرغب في تلقي العروض والنصائح</span>
          </label>
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              جاري الإرسال...
            </>
          ) : (
            "تأكيد الحجز"
          )}
        </Button>
      </form>
    </section>
  );
};

export default BookingPage;
