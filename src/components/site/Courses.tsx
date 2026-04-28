import { Clock, PlayCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

type Course = {
  title: string;
  category: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  duration: string;
  students: number;
  price: string;
  accent: string;
};

const COURSES: Course[] = [
  {
    title: "تصميم الجرافيك للمبتدئين",
    category: "تصميم",
    level: "مبتدئ",
    duration: "12 ساعة",
    students: 2840,
    price: "299 ج.م",
    accent: "from-pink-500/30 to-purple-500/10",
  },
  {
    title: "أساسيات التسويق الرقمي",
    category: "تسويق",
    level: "مبتدئ",
    duration: "18 ساعة",
    students: 4120,
    price: "399 ج.م",
    accent: "from-amber-500/30 to-orange-500/10",
  },
  {
    title: "احتراف إعلانات Meta و TikTok",
    category: "إعلانات",
    level: "متوسط",
    duration: "22 ساعة",
    students: 1560,
    price: "499 ج.م",
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "مدخل إلى الذكاء الاصطناعي للعمل",
    category: "AI",
    level: "متوسط",
    duration: "16 ساعة",
    students: 3210,
    price: "449 ج.م",
    accent: "from-emerald-500/30 to-primary/10",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="container py-16 md:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-sm font-medium text-primary">الدورات</span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">الدورات الأكثر طلبًا</h2>
        </div>
        <Button variant="outline" className="rounded-full border-border hover:bg-secondary">
          استعرض كل الدورات
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {COURSES.map((course) => (
          <article
            key={course.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div
              className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${course.accent}`}
            >
              <PlayCircle className="h-14 w-14 text-foreground/90 transition-transform group-hover:scale-110" />
              <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
                {course.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="line-clamp-2 text-base font-bold leading-snug">{course.title}</h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {course.students.toLocaleString("ar-EG")}
                </span>
                <span className="rounded-md border border-border bg-secondary/60 px-1.5 py-0.5 text-[10px] font-semibold">
                  {course.level}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
                <span className="text-base font-bold text-primary">{course.price}</span>
                <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  اشترك
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
