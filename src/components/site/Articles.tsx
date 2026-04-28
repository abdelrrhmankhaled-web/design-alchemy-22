import { ArrowLeft } from "lucide-react";

const ARTICLES = [
  {
    title: "10 استخدامات لـ ChatGPT ستغيّر طريقة عملك في التسويق الرقمي",
    category: "AI",
    readTime: "5 د",
    accent: "from-rose-500/30 to-pink-500/10",
  },
  {
    title: "كيف تختار الدورة المناسبة لمسارك المهني في 2025",
    category: "تطوير ذاتي",
    readTime: "7 د",
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "دليل شامل لمهنة Media Buyer في الوطن العربي",
    category: "مهن",
    readTime: "10 د",
    accent: "from-emerald-500/30 to-primary/10",
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
            <div className={`aspect-[16/9] bg-gradient-to-br ${a.accent}`} />
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
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                اقرأ المقال
                <ArrowLeft className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
