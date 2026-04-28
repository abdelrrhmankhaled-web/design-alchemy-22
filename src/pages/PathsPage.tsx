import { PageHero } from "@/components/site/PageHero";
import { Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PATHS = [
  { name: "مسار التصميم الرقمي", duration: "6 أشهر", courses: 8, color: "from-rose-500/30 to-pink-500/10" },
  { name: "مسار التسويق الرقمي", duration: "5 أشهر", courses: 7, color: "from-emerald-500/30 to-primary/10" },
  { name: "مسار البرمجة وتطوير الويب", duration: "8 أشهر", courses: 10, color: "from-cyan-500/30 to-blue-500/10" },
  { name: "مسار الذكاء الاصطناعي", duration: "4 أشهر", courses: 6, color: "from-violet-500/30 to-indigo-500/10" },
  { name: "مسار صناعة المحتوى", duration: "3 أشهر", courses: 5, color: "from-amber-500/30 to-orange-500/10" },
  { name: "مسار إدارة المنتجات", duration: "5 أشهر", courses: 7, color: "from-teal-500/30 to-emerald-500/10" },
];

const PathsPage = () => (
  <>
    <PageHero
      eyebrow="المسارات المهنية"
      title="مسارات منظّمة من الصفر للاحتراف"
      description="كل مسار بيوديك من المبتدئ للمحترف بترتيب علمي، بمشاريع تطبيقية وشهادة معتمدة."
    />
    <section className="container py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PATHS.map((p) => (
          <article
            key={p.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className={`flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${p.color}`}>
              <Compass className="h-12 w-12 text-foreground/80" />
            </div>
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{p.name}</h3>
              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="rounded-md border border-border bg-secondary/60 px-2 py-0.5">{p.duration}</span>
                <span className="rounded-md border border-border bg-secondary/60 px-2 py-0.5">{p.courses} كورس</span>
              </div>
              <Button size="sm" variant="ghost" className="gap-1 text-primary hover:text-primary">
                ابدأ المسار
                <ArrowLeft className="h-3.5 w-3.5" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default PathsPage;
