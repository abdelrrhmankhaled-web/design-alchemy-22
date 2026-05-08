import { ArrowLeft, Sparkles, Target, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const PlacementQuiz = () => {
  return (
    <section id="quiz" className="container py-16 md:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/40 p-8 md:p-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" aria-hidden />

        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              اختبار تحديد المستوى
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              لا تعرف من أين <span className="text-gradient">تبدأ؟</span>
            </h2>
            <p className="max-w-xl text-foreground/75">
              جاوب على بضعة أسئلة سريعة هنرشّحلك المسار التعليمي الأنسب لمستواك وأهدافك المهنية في أقل من 3 دقائق.
            </p>
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-105 hover:bg-primary/90"
            >
              <Link to="/assessment">
                <Target className="h-5 w-5" />
                اختبر مستواك
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="hidden md:block">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-primary/30 bg-primary/5 shadow-glow">
              <Target className="h-20 w-20 text-primary" strokeWidth={1.5} />
              <span className="absolute -bottom-2 -left-2 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-glow">
                <CheckCircle2 className="h-7 w-7" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
