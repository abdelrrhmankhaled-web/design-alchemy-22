import { Link, Navigate, useParams } from "react-router-dom";
import {
  Award,
  BookOpen,
  ChevronRight,
  Clock,
  Headphones,
  Infinity as InfinityIcon,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourseBySlug } from "@/data/courses";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const course = slug ? getCourseBySlug(slug) : undefined;

  if (!course) return <Navigate to="/courses" replace />;

  const features = [
    { icon: Clock, label: `${course.duration}` },
    { icon: BookOpen, label: `${course.lessons} درس` },
    { icon: Award, label: "شهادة إتمام" },
    { icon: Headphones, label: "دعم مباشر" },
    { icon: InfinityIcon, label: "وصول مدى الحياة" },
  ];

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden border-b border-border bg-gradient-to-br ${course.accent}`}>
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" aria-hidden />
        <div className="container relative py-12 md:py-16">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">الرئيسية</Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <Link to="/courses" className="hover:text-primary">الدورات</Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <span className="text-foreground/80">{course.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {course.category}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{course.title}</h1>
            <p className="text-base text-foreground/80 md:text-lg">{course.shortDescription}</p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {course.instructor.initials}
                </span>
                <span className="text-sm font-medium">{course.instructor.name}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-bold">{course.rating}</span>
                <span className="text-muted-foreground">({course.students.toLocaleString("en-US")} طالب)</span>
              </div>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {course.duration}
              </span>
              <span className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs font-semibold backdrop-blur">
                {course.level}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">عن هذه الدورة</h2>
              {course.description.map((p, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">ماذا ستتعلم</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.whatYouLearn.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <PlayCircle className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">متطلبات البدء</h2>
              <ul className="space-y-2">
                {course.requirements.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">مراحل الدورة</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {course.stages.map((stage, idx) => (
                  <AccordionItem
                    key={stage.title}
                    value={`stage-${idx}`}
                    className="overflow-hidden rounded-xl border border-border bg-card px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex flex-1 items-center justify-between gap-4 pr-2 text-right">
                        <span className="font-bold">{stage.title}</span>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {stage.lessons.length} دروس · {stage.duration}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pb-2">
                        {stage.lessons.map((l) => (
                          <li key={l} className="flex items-center gap-3 rounded-lg bg-secondary/30 px-3 py-2 text-sm">
                            <PlayCircle className="h-4 w-4 text-primary" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">من المدرب</h2>
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {course.instructor.initials}
                </span>
                <div>
                  <h3 className="font-bold">{course.instructor.name}</h3>
                  <p className="mt-2 text-sm text-foreground/75">{course.instructor.bio}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">آراء الطلاب</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {course.reviews.map((r) => (
                  <div key={r.name} className="rounded-2xl border border-border bg-card p-5">
                    <div className="mb-2 flex items-center gap-1">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/80">"{r.text}"</p>
                    <p className="mt-3 text-xs font-bold text-muted-foreground">{r.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-8 text-center">
              <h2 className="text-2xl font-bold md:text-3xl">ابدأ رحلتك اليوم</h2>
              <p className="mx-auto mt-2 max-w-xl text-foreground/75">
                لا تأجل تطوير مهاراتك — انضم لآلاف الطلاب اللي غيروا مسارهم المهني.
              </p>
              <Button asChild size="lg" className="mt-5 rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-105 hover:bg-primary/90">
                <Link to={`/booking?course=${course.slug}`}>احجز مقعدك الآن</Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className={`mb-5 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br ${course.accent}`}>
                <PlayCircle className="h-14 w-14 text-foreground/90" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">${course.price}</span>
                <span className="text-sm text-muted-foreground line-through">${course.price + 30}</span>
              </div>
              <Button asChild size="lg" className="mt-4 w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
                <Link to={`/booking?course=${course.slug}`}>احجز مقعدك الآن</Link>
              </Button>
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <f.icon className="h-4 w-4" />
                    </span>
                    {f.label}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </span>
                  {course.students.toLocaleString("en-US")} طالب التحقوا
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default CourseDetailPage;
