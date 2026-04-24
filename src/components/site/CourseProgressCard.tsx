import { Check, Circle, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LESSONS = [
  { label: "أساسيات الإعلانات", done: true },
  { label: "Meta Ads Manager", done: true },
  { label: "الجماهير المخصصة", done: false },
];

export const CourseProgressCard = () => {
  return (
    <div className="relative w-full rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
      {/* Course header */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-primary">الدورة الحالية</p>
          <h3 className="mt-1 text-base font-bold leading-snug">احتراف الإعلانات على Meta</h3>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <User className="h-5 w-5" />
        </span>
      </div>

      <div className="mb-5 flex items-center gap-2 text-sm">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold">
          أ
        </span>
        <span className="text-foreground/80">أحمد السيد</span>
        <span className="ms-auto text-xs text-muted-foreground">المدرب</span>
      </div>

      {/* Progress */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-foreground/80">تقدّمك في الدورة</span>
          <span className="font-bold text-primary">72%</span>
        </div>
        <Progress
          value={72}
          className="h-2 bg-secondary [&>div]:bg-gradient-text"
        />
      </div>

      {/* Lessons checklist */}
      <ul className="space-y-2.5">
        {LESSONS.map((lesson) => (
          <li
            key={lesson.label}
            className="flex items-center gap-3 rounded-lg bg-secondary/40 px-3 py-2.5 text-sm"
          >
            {lesson.done ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
            <span className={lesson.done ? "text-foreground" : "text-muted-foreground"}>
              {lesson.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
