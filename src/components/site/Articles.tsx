import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ARTICLES = [
  {
    title: "10 استخدامات لـ ChatGPT ستغيّر طريقة عملك في التسويق الرقمي",
    category: "AI",
    readTime: "5 د",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "واجهة أدوات ذكاء اصطناعي وتحليل بيانات",
  },
  {
    title: "كيف تختار الدورة المناسبة لمسارك المهني في 2026",
    category: "تطوير ذاتي",
    readTime: "7 د",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "دفتر ملاحظات وخطة تعلم",
  },
  {
    title: "دليل شامل لمهنة Media Buyer في الوطن العربي",
    category: "مهن",
    readTime: "10 د",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "لوحة تحليلات تسويق رقمي",
  },
];

export const Articles = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-10 space-y-2 text-center">
        <span className="text-sm font-medium text-primary">المدوّنة</span>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
          مقالات تساعدك على التعلّم واتخاذ القرار
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {ARTICLES.map((a) => (
          <article
            key={a.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
              <img
                src={a.image}
                alt={a.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-semibold">
                  {a.category}
                </span>
                <span>{a.readTime} قراءة</span>
              </div>
              <h3 className="text-base font-bold leading-snug transition-colors group-hover:text-primary">
                {a.title}
              </h3>
              <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                اقرأ المقال
                <ArrowLeft className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
