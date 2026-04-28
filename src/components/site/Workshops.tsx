import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WORKSHOPS = [
  {
    title: "أدوات الذكاء الاصطناعي العملية لمهنتك",
    date: "15 مايو",
    time: "8:00 م",
    mode: "أونلاين",
    accent: "from-violet-500/30 to-indigo-500/10",
  },
  {
    title: "تحسين أداء فريقك بالذكاء الاصطناعي",
    date: "22 مايو",
    time: "9:00 م",
    mode: "أونلاين",
    accent: "from-emerald-500/30 to-primary/10",
  },
  {
    title: "حملات بيرفورمانس إعلانية للمحلات",
    date: "29 مايو",
    time: "8:30 م",
    mode: "أونلاين",
    accent: "from-amber-500/30 to-rose-500/10",
  },
];

export const Workshops = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-10 space-y-2 text-center">
        <span className="text-sm font-medium text-primary">ورش عملية</span>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">ورش عملية لتطوير مهاراتك بسرعة</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {WORKSHOPS.map((w) => (
          <article
            key={w.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className={`aspect-[16/9] bg-gradient-to-br ${w.accent}`} />

            <div className="space-y-4 p-5">
              <span className="inline-block rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                ورشة مباشرة
              </span>
              <h3 className="text-base font-bold leading-snug">{w.title}</h3>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {w.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {w.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {w.mode}
                </span>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="w-full rounded-full border-border hover:border-primary/50 hover:bg-secondary"
              >
                احجز مكانك
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
