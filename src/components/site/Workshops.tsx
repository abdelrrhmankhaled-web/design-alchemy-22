import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WORKSHOPS = [
  {
    title: "فن تحويل الزائر إلى مشتري",
    description:
      "أسرار خدمة العملاء التي تضاعف مبيعاتك — تعلم كيف تحول كل استفسار إلى عملية بيع.",
    date: "15 مايو",
    time: "8:00 م",
    duration: "ساعتان",
    price: "$29",
    mode: "أونلاين",
    accent: "from-violet-500/30 to-indigo-500/10",
  },
  {
    title: "الإعلانات التي تبيع وحدها",
    description:
      "استراتيجيات الحملات الإعلانية للمتاجر الإلكترونية — من الاستهداف للتتبع لتحقيق أعلى عائد.",
    date: "22 مايو",
    time: "9:00 م",
    duration: "3 ساعات",
    price: "$39",
    mode: "أونلاين",
    accent: "from-emerald-500/30 to-primary/10",
  },
  {
    title: "كلمات تصنع مبيعات",
    description:
      "كتابة المحتوى البيعي الذي يرفع معدل التحويل 10 أضعاف — صيغ جاهزة وأمثلة عملية.",
    date: "29 مايو",
    time: "8:30 م",
    duration: "ساعتان",
    price: "$25",
    mode: "أونلاين",
    accent: "from-amber-500/30 to-rose-500/10",
  },
];

export const Workshops = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-10 space-y-2 text-center">
        <span className="text-sm font-medium text-primary">ورش عملية</span>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">ورش عملية تنقلك للمستوى التالي</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {WORKSHOPS.map((w) => (
          <article
            key={w.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className={`relative aspect-[16/9] bg-gradient-to-br ${w.accent}`}>
              <span className="absolute right-3 top-3 rounded-md border border-primary/30 bg-background/80 px-2 py-0.5 text-[10px] font-semibold text-primary backdrop-blur">
                ورشة عمل
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-base font-bold leading-snug">{w.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{w.description}</p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {w.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {w.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {w.mode}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
                <span className="text-base font-bold text-primary">{w.price}</span>
                <Button
                  size="sm"
                  className="rounded-full bg-primary text-primary-foreground transition-opacity hover:bg-primary/90 md:opacity-0 md:group-hover:opacity-100"
                >
                  سجل الآن
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
