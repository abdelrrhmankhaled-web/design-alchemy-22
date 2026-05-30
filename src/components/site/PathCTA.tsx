import { BriefcaseBusiness, Route, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PATHS = [
  {
    icon: Route,
    title: "محترف الإعلانات",
    meta: "6 دورات · 12 أسبوع",
    description: "من أساسيات المنصات إلى إدارة ميزانيات وقراءة نتائج الحملات.",
  },
  {
    icon: Target,
    title: "صانع المحتوى",
    meta: "5 دورات · 10 أسابيع",
    description: "كتابة، تصوير، تقويم نشر، وتحويل الأفكار إلى محتوى قابل للبيع.",
  },
  {
    icon: BriefcaseBusiness,
    title: "مهارات العيادات",
    meta: "3 دورات · تطبيق عملي",
    description: "مسار طبي وتجميلي واضح للّيزر، العناية بالبشرة، وPRP.",
  },
];

export const PathCTA = () => {
  return (
    <section id="paths" className="border-y border-border/60 bg-card/30">
      <div className="container py-14 md:py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">المسارات المهنية</span>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              ابدأ بمسار واضح نحو <span className="text-gradient">تخصصك</span>
            </h2>
            <p className="text-foreground/75">
              مسارات تجمع الدورات والورش بالترتيب الصحيح حتى تبدأ من نقطة واضحة وتصل لنتيجة عملية.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
          >
            <Link to="/paths">
              <Route className="h-5 w-5" />
              استعرض المسارات
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PATHS.map((path) => {
            const Icon = path.icon;

            return (
              <article key={path.title} className="rounded-2xl border border-border bg-background/60 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-primary">{path.meta}</span>
                  <h3 className="text-lg font-bold">{path.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{path.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
