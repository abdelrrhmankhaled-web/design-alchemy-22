import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle2, Clock, MapPin, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WORKSHOPS } from "@/data/workshops";

const featuredWorkshop = WORKSHOPS[1] ?? WORKSHOPS[0];

const WorkshopsPage = () => (
  <main>
    <section className="border-b border-border bg-card/30">
      <div className="container grid items-center gap-8 py-14 md:grid-cols-[1fr_460px] md:py-20">
        <div className="space-y-5">
          <Badge className="bg-primary/15 text-primary hover:bg-primary/15">ورش العمل</Badge>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            جلسات تطبيقية قصيرة بنتيجة واضحة
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            ورش مركزة مع خبراء السوق، تخرج منها بقوالب وخطوات قابلة للتنفيذ فورًا في مشروعك أو شغلك.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background/60 p-4">
              <strong className="block text-2xl text-primary">{WORKSHOPS.length}</strong>
              <span className="text-sm text-muted-foreground">ورش متاحة</span>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-4">
              <strong className="block text-2xl text-primary">2-3</strong>
              <span className="text-sm text-muted-foreground">ساعات تطبيق</span>
            </div>
            <div className="rounded-2xl border border-border bg-background/60 p-4">
              <strong className="block text-2xl text-primary">Live</strong>
              <span className="text-sm text-muted-foreground">تفاعل مباشر</span>
            </div>
          </div>
        </div>

        <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
          <div className="relative aspect-video overflow-hidden bg-secondary">
            <img src={featuredWorkshop.image} alt={featuredWorkshop.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <Badge className="absolute right-4 top-4 bg-background/85 text-primary backdrop-blur hover:bg-background/85">
              الورشة الأقرب
            </Badge>
          </div>
          <div className="space-y-4 p-6">
            <div>
              <span className="text-sm text-primary">{featuredWorkshop.category}</span>
              <h2 className="mt-1 text-2xl font-bold">{featuredWorkshop.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{featuredWorkshop.description}</p>
            </div>
            <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />{featuredWorkshop.date}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{featuredWorkshop.duration}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{featuredWorkshop.mode}</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" />{featuredWorkshop.seats}</span>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <strong className="text-2xl text-primary">{featuredWorkshop.price}</strong>
              <Button asChild className="rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
                <Link to={`/workshop/${featuredWorkshop.slug}`}>عرض التفاصيل</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="container py-16 md:py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-2">
          <span className="text-sm font-medium text-primary">كل الورش</span>
          <h2 className="text-3xl font-bold md:text-4xl">اختار الورشة المناسبة لهدفك</h2>
        </div>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/contact">اسأل قبل الحجز</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {WORKSHOPS.map((workshop) => (
          <article key={workshop.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
              <img src={workshop.image} alt={workshop.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/20 to-transparent" />
              <Badge className="absolute right-3 top-3 bg-background/85 text-primary backdrop-blur hover:bg-background/85">
                {workshop.category}
              </Badge>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <div className="mb-2 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>{workshop.level}</span>
                  <span>{workshop.seats}</span>
                </div>
                <h3 className="text-lg font-bold">{workshop.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted-foreground">{workshop.description}</p>
              </div>
              <ul className="space-y-2">
                {workshop.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <div className="mt-auto grid gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" />{workshop.date} - {workshop.time}</span>
                <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" />{workshop.duration}</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <strong className="text-lg text-primary">{workshop.price}</strong>
                <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to={`/workshop/${workshop.slug}`}>التفاصيل</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="border-y border-border bg-card/30">
      <div className="container grid gap-6 py-14 md:grid-cols-3 md:py-16">
        {[
          ["اختر الورشة", "راجع الهدف والمخرجات والتاريخ المناسب."],
          ["احجز مكانك", "اترك بياناتك وسنؤكد التفاصيل قبل الموعد."],
          ["طبّق مباشرة", "احضر الورشة واخرج بخطوات عملية جاهزة."],
        ].map(([title, text], index) => (
          <div key={title} className="rounded-2xl border border-border bg-background/60 p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xs font-semibold text-primary">0{index + 1}</span>
            <h3 className="mt-2 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16 md:py-20">
      <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-8 text-center md:p-12">
        <h2 className="text-3xl font-bold">مش متأكد تبدأ بأي ورشة؟</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          ابعت لنا هدفك الحالي، ونرشح لك الورشة الأنسب حسب مستواك والنتيجة اللي محتاج توصل لها.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
          <Link to="/contact">
            اطلب ترشيح ورشة
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  </main>
);

export default WorkshopsPage;
