import { Brain, Trophy, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  variant: "quiz" | "certificate";
  className?: string;
}

export const FloatingBadge = ({ variant, className }: FloatingBadgeProps) => {
  if (variant === "quiz") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 pe-4 shadow-card backdrop-blur-md",
          className,
        )}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Brain className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">نتيجة الاختبار</p>
          <p className="text-sm font-bold leading-tight">
            <span className="text-primary">90</span>
            <span className="text-foreground/60">/100</span>
            <span className="ms-2 text-xs font-medium text-foreground/70">Meta Ads · M2</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 pe-4 shadow-card backdrop-blur-md",
        className,
      )}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-text text-primary-foreground">
        <Trophy className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">شهادة جاهزة</p>
        <p className="text-sm font-bold leading-tight">التسويق الرقمي</p>
      </div>
      <button
        type="button"
        className="ms-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/25"
      >
        <Download className="h-3.5 w-3.5" />
        تحميل
      </button>
    </div>
  );
};
