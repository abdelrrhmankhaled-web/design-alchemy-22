import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle2, ChevronRight, Clock, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getWorkshopBySlug } from "@/data/workshops";

const WorkshopDetailPage = () => {
  const { slug } = useParams();
  const workshop = slug ? getWorkshopBySlug(slug) : undefined;

  if (!workshop) return <Navigate to="/workshops" replace />;

  return (
    <main>
      <section className="border-b border-border bg-card/30">
        <div className="container py-12 md:py-16">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">الرئيسية</Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <Link to="/workshops" className="hover:text-primary">الورش</Link>
            <ChevronRight className="h-3 w-3 rotate-180" />
            <span className="text-foreground/80">{workshop.title}</span>
          </nav>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_440px]">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/15 text-primary hover:bg-primary/15">{workshop.category}</Badge>
                <Badge variant="outline" className="border-border">{workshop.level}</Badge>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">{workshop.title}</h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{workshop.description}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <Calendar className="mb-2 h-4 w-4 text-primary" />
                  <strong>{workshop.date}</strong>
                  <span className="block text-xs text-muted-foreground">{workshop.time}</span>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <Clock className="mb-2 h-4 w-4 text-primary" />
                  <strong>{workshop.duration}</strong>
                  <span className="block text-xs text-muted-foreground">مدة الورشة</span>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <MapPin className="mb-2 h-4 w-4 text-primary" />
                  <strong>{workshop.mode}</strong>
                  <span className="block text-xs text-muted-foreground">طريقة الحضور</span>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-4">
                  <Users className="mb-2 h-4 w-4 text-primary" />
                  <strong>{workshop.seats}</strong>
                  <span className="block text-xs text-muted-foreground">متاحة</span>
                </div>
              </div>
            </div>

            <aside className="overflow-hidden rounded-3xl border border-border bg-card shadow-glow">
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <img src={workshop.image} alt={workshop.imageAlt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/10 to-transparent" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">سعر الورشة</span>
                  <strong className="text-3xl text-primary">{workshop.price}</strong>
                </div>
                <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
                  <Link to={`/contact?workshop=${workshop.slug}`}>احجز مكانك الآن</Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">سنؤكد التفاصيل والموعد قبل الحجز النهائي.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-16 lg:grid-cols-[1fr_360px] md:py-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">هتخرج بإيه من الورشة؟</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {workshop.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm leading-7">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">محاور الورشة</h2>
            <div className="space-y-3">
              {workshop.agenda.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-7 text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">جاهز تطبق عملي؟</h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              احجز مكانك في الورشة، وسنرسل لك تفاصيل الحضور والتجهيزات المطلوبة.
            </p>
            <Button asChild size="lg" className="mt-5 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
              <Link to={`/contact?workshop=${workshop.slug}`}>
                احجز الورشة
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-28">
          <h3 className="text-xl font-bold">يشمل الحجز</h3>
          <ul className="mt-5 space-y-3">
            {workshop.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={`/contact?workshop=${workshop.slug}`}>تأكيد الاهتمام</Link>
          </Button>
        </aside>
      </section>
    </main>
  );
};

export default WorkshopDetailPage;
