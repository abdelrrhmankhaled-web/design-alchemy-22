import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, Layers3, Route, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { COURSES } from "@/data/courses";

const getCourse = (slug: string) => COURSES.find((course) => course.slug === slug);

const CAREER_PATHS = [
  {
    id: "marketing-growth",
    title: "مسار التسويق والنمو",
    audience: "للي عايز يدير حضور السوشيال والإعلانات بثقة",
    duration: "8 أسابيع",
    level: "من مبتدئ لمتوسط",
    color: "from-emerald-500/25 to-cyan-500/10",
    courses: ["social-media", "paid-ads"],
    workshops: ["الإعلانات التي تبيع وحدها", "فن تحويل الزائر إلى مشتري"],
    outcomes: ["تجهيز خطة محتوى", "إطلاق حملة Meta/TikTok", "قراءة النتائج وتحسينها"],
  },
  {
    id: "content-creator",
    title: "مسار المحتوى والتصوير",
    audience: "للي عايز يكتب ويصور محتوى قابل للنشر والبيع",
    duration: "7 أسابيع",
    level: "مبتدئ",
    color: "from-amber-500/25 to-rose-500/10",
    courses: ["content-writing", "photography"],
    workshops: ["كلمات تصنع مبيعات"],
    outcomes: ["كتابة Hooks أقوى", "تصوير محتوى واضح", "بناء تقويم نشر"],
  },
  {
    id: "design-visualization",
    title: "مسار التصميم والإخراج",
    audience: "للي عايز ينتقل من التصميم الأساسي لشغل احترافي",
    duration: "10 أسابيع",
    level: "مبتدئ لمتوسط",
    color: "from-sky-500/25 to-violet-500/10",
    courses: ["graphic-design", "autocad", "3ds-max"],
    workshops: ["كلمات تصنع مبيعات"],
    outcomes: ["تصميم محتوى بصري", "رسم مخططات أوتوكاد", "إخراج مشاهد 3D"],
  },
  {
    id: "clinic-skills",
    title: "مسار مهارات العيادات",
    audience: "للعاملين في العناية بالبشرة والليزر",
    duration: "9 أسابيع",
    level: "متقدم",
    color: "from-teal-500/25 to-emerald-500/10",
    courses: ["skincare", "laser"],
    workshops: ["فن تحويل الزائر إلى مشتري"],
    outcomes: ["تحليل حالة العميل", "تطبيق بروتوكولات آمنة", "تحسين تجربة الحجز والبيع"],
  },
];

const STEPS = ["اختبار مستوى", "دورات مرتبة", "ورشة تطبيق", "مشروع/نتيجة"];

const PathsPage = () => (
  <main>
    <section className="border-b border-border bg-card/30">
      <div className="container grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1fr_420px]">
        <div className="space-y-6">
          <Badge className="bg-primary/15 text-primary hover:bg-primary/15">المسارات المهنية</Badge>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            اختار طريق واضح بدل ما تختار كورس عشوائي
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            كل مسار هنا مبني من دورات موجودة فعلًا في الأكاديمية، ومعاه ورش ومخرجات تساعدك تعرف تبدأ منين وتتحرك إزاي.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
              <Link to="/assessment">
                اختبر مستواك
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/courses">تصفح كل الدورات</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-background/60 p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Route className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">شكل الرحلة</h2>
              <p className="text-sm text-muted-foreground">من التشخيص للنتيجة</p>
            </div>
          </div>
          <div className="space-y-3">
            {STEPS.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {index + 1}
                </span>
                <span className="font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="container py-16 md:py-20">
      <div className="mb-10 max-w-2xl space-y-2">
        <span className="text-sm font-medium text-primary">المسارات المتاحة</span>
        <h2 className="text-3xl font-bold md:text-4xl">مسارات مبنية على أهداف حقيقية</h2>
        <p className="text-muted-foreground">كل كارت يوضح لمن المسار، ما الدورات داخله، وما النتيجة المتوقعة.</p>
      </div>

      <div className="space-y-6">
        {CAREER_PATHS.map((path) => {
          const courses = path.courses.map(getCourse).filter(Boolean);

          return (
            <article key={path.id} className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
                <div className={`flex min-h-full flex-col justify-between bg-gradient-to-br ${path.color} p-6`}>
                  <div>
                    <Badge variant="outline" className="border-primary/30 bg-background/50 text-primary">
                      {path.level}
                    </Badge>
                    <h3 className="mt-5 text-2xl font-bold">{path.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/75">{path.audience}</p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-border/70 bg-background/50 p-3">
                      <Clock className="mb-2 h-4 w-4 text-primary" />
                      <strong>{path.duration}</strong>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/50 p-3">
                      <Layers3 className="mb-2 h-4 w-4 text-primary" />
                      <strong>{courses.length} دورات</strong>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 p-6">
                  <div>
                    <h4 className="mb-3 font-bold">الدورات داخل المسار</h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      {courses.map((course) => (
                        <Link
                          key={course.slug}
                          to={`/course/${course.slug}`}
                          className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/50"
                        >
                          <div>
                            <span className="text-xs text-primary">{course.category}</span>
                            <h5 className="font-bold">{course.title}</h5>
                          </div>
                          <ArrowLeft className="h-4 w-4 text-primary" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-bold">هتخرج بإيه؟</h4>
                      <ul className="space-y-2">
                        {path.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm leading-7 text-muted-foreground">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-bold">ورش مقترحة</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.workshops.map((workshop) => (
                          <span key={workshop} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                            {workshop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 border-t border-border pt-5">
                    <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link to={`/course/${path.courses[0]}`}>ابدأ أول دورة</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
                      <Link to="/assessment">مش متأكد؟ اختبر مستواك</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>

    <section className="border-y border-border bg-card/30">
      <div className="container grid gap-6 py-14 md:grid-cols-3 md:py-16">
        {[
          ["ابدأ بالتشخيص", "اختبار المستوى يحدد أقرب مجال مناسب لك."],
          ["التزم بالترتيب", "الدورات داخل كل مسار مترتبة حسب الأولوية."],
          ["طبّق بسرعة", "الورش والمشاريع تخليك تحول التعلم لنتيجة."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-border bg-background/60 p-6">
            <Sparkles className="mb-4 h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-16 md:py-20">
      <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-8 text-center md:p-12">
        <Target className="mx-auto mb-4 h-9 w-9 text-primary" />
        <h2 className="text-3xl font-bold">خلينا نرشح لك المسار الأنسب</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          لو لسه محتار بين التسويق، المحتوى، التصميم، أو مهارات العيادات، ابدأ باختبار المستوى وخد ترشيح مباشر.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
          <Link to="/assessment">
            ابدأ اختبار المستوى
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  </main>
);

export default PathsPage;
