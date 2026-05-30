import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WORKSHOPS } from "@/data/workshops";

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
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
              <img
                src={w.image}
                alt={w.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-background/10" />
              <span className="absolute right-3 top-3 z-10 rounded-md border border-primary/30 bg-background/80 px-2 py-0.5 text-[10px] font-semibold text-primary backdrop-blur">
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
                  asChild
                  size="sm"
                  className="rounded-full bg-primary text-primary-foreground transition-opacity hover:bg-primary/90 md:opacity-0 md:group-hover:opacity-100"
                >
                  <Link to={`/workshop/${w.slug}`}>التفاصيل</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
