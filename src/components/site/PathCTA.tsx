import { Route } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PathCTA = () => {
  return (
    <section id="paths" className="border-y border-border/60 bg-card/30">
      <div className="container flex flex-col items-center gap-5 py-14 text-center md:py-16">
        <span className="text-xs font-medium uppercase tracking-wider text-primary">المسارات المهنية</span>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
          ابدأ بمسار واضح نحو <span className="text-gradient">تخصصك</span>
        </h2>
        <p className="max-w-xl text-foreground/75">
          مسارات منظّمة بترتيب صحيح من المبتدئ للمحترف، مع مشاريع تطبيقية وشهادة معتمدة في النهاية.
        </p>
        <Button
          size="lg"
          className="mt-2 gap-2 rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-105 hover:bg-primary/90"
        >
          <Route className="h-5 w-5" />
          استعرض المسارات المهنية
        </Button>
      </div>
    </section>
  );
};
