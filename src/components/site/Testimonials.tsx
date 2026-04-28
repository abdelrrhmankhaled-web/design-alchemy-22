import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "أحمد محمود",
    role: "مصمم جرافيك",
    quote:
      "اتعلمت من 3lemny مهارات حقيقية ساعدتني أشتغل فريلانس وأكسب أكتر من 15 ألف جنيه شهريًا.",
  },
  {
    name: "منى خالد",
    role: "مسوّقة رقمية",
    quote:
      "المحتوى عملي جدًا، والمدربين متعاونين. خلال 3 شهور قدرت أحوّل مهنتي بالكامل لمجال التسويق.",
  },
  {
    name: "كريم السيد",
    role: "Media Buyer",
    quote:
      "أفضل قرار أخدته إني اشتركت في مسار البيرفورمانس. النتائج بانت من أول حملة شغّلتها لعميل.",
  },
];

const HIGHLIGHT = [
  { value: "150+", label: "خريج" },
  { value: "8.2K+", label: "طالب" },
  { value: "12.5K+", label: "شهادة" },
  { value: "4.8/5", label: "تقييم" },
];

export const Testimonials = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-10 space-y-2 text-center">
        <span className="text-sm font-medium text-primary">قصص نجاح</span>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">قصص نجاح طلابنا</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <article
            key={t.name}
            className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40"
          >
            <Quote className="h-7 w-7 text-primary/60" />
            <p className="text-sm leading-relaxed text-foreground/85">{t.quote}</p>

            <div className="mt-auto flex items-center gap-3 border-t border-border/60 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-bold text-primary">
                {t.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card/40 p-6 md:grid-cols-4">
        {HIGHLIGHT.map((h) => (
          <div key={h.label} className="text-center">
            <div className="text-2xl font-extrabold text-primary">{h.value}</div>
            <div className="text-xs text-muted-foreground">{h.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
