import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, PlayCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COURSES, CATEGORIES } from "@/data/courses";

export const Courses = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? COURSES : COURSES.filter((c) => c.categoryKey === filter);

  return (
    <section id="courses" className="container py-16 md:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <span className="text-sm font-medium text-primary">الدورات</span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">دورات تنقلك لسوق العمل</h2>
        </div>
        <Button asChild variant="outline" className="rounded-full border-border hover:bg-secondary">
          <Link to="/courses">استعرض كل الدورات</Link>
        </Button>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat.key
                ? "border-primary bg-primary text-primary-foreground shadow-glow"
                : "border-border bg-secondary/40 text-foreground/80 hover:border-primary/40 hover:bg-secondary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <article
            key={course.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <Link to={`/course/${course.slug}`} className="contents">
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
                    {course.students.toLocaleString("en-US")}
                  </span>
                  <span className="rounded-md border border-border bg-secondary/60 px-1.5 py-0.5 text-[10px] font-semibold">
                    {course.level}
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="text-base font-bold text-primary">${course.price}</span>
                  <Button
                    size="sm"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    سجل الآن
                  </Button>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
