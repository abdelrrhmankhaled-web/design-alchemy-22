import { Link, Navigate, useParams } from "react-router-dom";
import {
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  Infinity as InfinityIcon,
  PlayCircle,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  const courseImage = course.image || "";
  const originalPrice = course.price + 30;
  const idealFor = [
    `تريد دخول مجال ${course.category} بخطة واضحة`,
    "تحتاج تطبيقات عملية بدل الشرح النظري فقط",
    "تبحث عن شهادة ومشروع يساعدانك في عرض مهارتك",
  ];

  return (
    <>
      <section className={`relative overflow-hidden border-b border-border bg-gradient-to-br ${course.accent}`}>
        <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" aria-hidden />
        <div className="container relative py-12 md:py-16">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">الرئيسية</Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <Link to="/courses" className="hover:text-primary">الدورات</Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <span className="text-foreground/80">{course.title}</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_460px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-primary/15 text-primary hover:bg-primary/15">{course.category}</Badge>
                <Badge variant="outline" className="border-border bg-background/50">{course.level}</Badge>
              </div>
              <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{course.title}</h1>
              <p className="text-base leading-8 text-foreground/80 md:text-lg">{course.shortDescription}</p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/70 bg-background/50 p-4 backdrop-blur">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs font-semibold">المدة</span>
                  </div>
                  <strong>{course.duration}</strong>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/50 p-4 backdrop-blur">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-xs font-semibold">المحتوى</span>
                  </div>
                  <strong>{course.lessons} درس</strong>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/50 p-4 backdrop-blur">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Star className="h-4 w-4 fill-primary" />
                    <span className="text-xs font-semibold">التقييم</span>
                  </div>
                  <strong>{course.rating}/5</strong>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {course.instructor.initials}
                  </span>
                  <div>
                    <span className="block text-sm font-medium">{course.instructor.name}</span>
                    <span className="text-xs text-muted-foreground">مدرب الدورة</span>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString("en-US")} طالب التحقوا
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <img
                  src={courseImage}
                  alt={course.imageAlt || course.title}
                  className="h-full w-full object-cover"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-background/85 px-3 py-2 text-sm font-semibold backdrop-blur">
                  <PlayCircle className="h-4 w-4 text-primary" />
                  معاينة الدورة
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">السعر الحالي</span>
                    <div className="flex items-baseline gap-2">
                      <strong className="text-3xl text-primary">${course.price}</strong>
                      <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">شهادة + مشروع</Badge>
                </div>
                <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
                  <Link to={`/booking?course=${course.slug}`}>احجز مقعدك الآن</Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">جلسة توجيه ومتابعة تطبيقية ضمن البرنامج</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Main content */}
          <div className="space-y-12">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5">
                <Target className="mb-3 h-6 w-6 text-primary" />
                <h2 className="text-lg font-bold">النتيجة</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{course.shortDescription}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <CalendarCheck className="mb-3 h-6 w-6 text-primary" />
                <h2 className="text-lg font-bold">خطة واضحة</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">مراحل مرتبة من الأساسيات حتى مشروع التخرج.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <ShieldCheck className="mb-3 h-6 w-6 text-primary" />
                <h2 className="text-lg font-bold">ثقة أكبر</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">شهادة إتمام ودعم مباشر أثناء التطبيق.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">عن هذه الدورة</h2>
              <div className="rounded-2xl border border-border bg-card p-6">
                {course.description.map((p, i) => (
                  <p key={i} className="leading-8 text-foreground/80 [&:not(:last-child)]:mb-3">{p}</p>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">ماذا ستتعلم</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {course.whatYouLearn.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">مناسب لك إذا</h2>
                <ul className="space-y-3 rounded-2xl border border-border bg-card p-5">
                  {idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-foreground/80">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">متطلبات البدء</h2>
                <ul className="space-y-3 rounded-2xl border border-border bg-card p-5">
                  {course.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm leading-7 text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">مراحل الدورة</h2>
              <Accordion type="single" collapsible defaultValue="stage-0" className="space-y-3">
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
          <aside className="hidden lg:sticky lg:top-28 lg:block lg:h-fit">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-secondary">
                <img
                  src={courseImage}
                  alt={course.imageAlt || course.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-background/20" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">${course.price}</span>
                <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
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

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <div className="container flex items-center justify-between gap-3">
          <div>
            <span className="block text-xs text-muted-foreground">السعر الحالي</span>
            <strong className="text-lg text-primary">${course.price}</strong>
          </div>
          <Button asChild className="rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
            <Link to={`/booking?course=${course.slug}`}>احجز الآن</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;
