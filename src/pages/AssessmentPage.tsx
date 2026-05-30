import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Share2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { COURSES } from "@/data/courses";

type Question = {
  q: string;
  area: "design" | "marketing" | "content" | "languages" | "general";
  options: { label: string; weight: number }[];
};

const QUESTIONS: Question[] = [
  {
    q: "ما هدفك الأساسي من التعلم؟",
    area: "general",
    options: [
      { label: "بدء مهنة جديدة من الصفر", weight: 1 },
      { label: "تطوير مهاراتي الحالية", weight: 2 },
      { label: "زيادة الدخل بمشاريع جانبية", weight: 2 },
      { label: "الاحتراف والوصول للقمة", weight: 3 },
    ],
  },
  {
    q: "كم من الوقت يمكنك تخصيصه أسبوعياً؟",
    area: "general",
    options: [
      { label: "أقل من 3 ساعات", weight: 1 },
      { label: "3 إلى 6 ساعات", weight: 2 },
      { label: "6 إلى 10 ساعات", weight: 2 },
      { label: "أكثر من 10 ساعات", weight: 3 },
    ],
  },
  {
    q: "أي مجال يجذبك أكثر؟",
    area: "general",
    options: [
      { label: "التصميم والإبداع", weight: 2 },
      { label: "التسويق والمبيعات", weight: 2 },
      { label: "المحتوى والتصوير", weight: 2 },
      { label: "اللغات والتواصل", weight: 1 },
    ],
  },
  {
    q: "ما مستواك في التصميم الجرافيكي؟",
    area: "design",
    options: [
      { label: "لا أعرف شيئاً", weight: 1 },
      { label: "أساسيات Photoshop", weight: 2 },
      { label: "أصمم بمستوى متوسط", weight: 2 },
      { label: "محترف", weight: 3 },
    ],
  },
  {
    q: "هل سبق وأدرت حملة إعلانية ممولة؟",
    area: "marketing",
    options: [
      { label: "أبداً", weight: 1 },
      { label: "حملة أو اثنتين", weight: 2 },
      { label: "نعم بانتظام", weight: 2 },
      { label: "أدير حملات بميزانيات كبيرة", weight: 3 },
    ],
  },
  {
    q: "كيف تقيّم مستواك في الإنجليزية؟",
    area: "languages",
    options: [
      { label: "ضعيف جداً", weight: 1 },
      { label: "أساسي", weight: 2 },
      { label: "جيد", weight: 2 },
      { label: "ممتاز", weight: 3 },
    ],
  },
  {
    q: "هل تنشئ محتوى للسوشيال ميديا؟",
    area: "content",
    options: [
      { label: "لا", weight: 1 },
      { label: "بشكل عابر", weight: 2 },
      { label: "بانتظام", weight: 2 },
      { label: "كصانع محتوى محترف", weight: 3 },
    ],
  },
  {
    q: "ما خبرتك في التصوير؟",
    area: "content",
    options: [
      { label: "صور موبايل عادية", weight: 1 },
      { label: "أعرف الأساسيات", weight: 2 },
      { label: "أصور بالكاميرا الاحترافية", weight: 2 },
      { label: "مصور محترف", weight: 3 },
    ],
  },
  {
    q: "هل تدير حسابات سوشيال ميديا لشركة أو متجر؟",
    area: "marketing",
    options: [
      { label: "لا", weight: 1 },
      { label: "حسابي الشخصي فقط", weight: 1 },
      { label: "حساب أو اثنين", weight: 2 },
      { label: "عدة حسابات احترافياً", weight: 3 },
    ],
  },
  {
    q: "ما النتيجة المثالية بعد 3 أشهر؟",
    area: "general",
    options: [
      { label: "فهم الأساسيات بثقة", weight: 1 },
      { label: "تنفيذ مشاريع صغيرة", weight: 2 },
      { label: "العمل كفريلانسر", weight: 2 },
      { label: "الحصول على وظيفة احترافية", weight: 3 },
    ],
  },
];

const AssessmentPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [done, setDone] = useState(false);

  const progress = ((step + (done ? 1 : 0)) / QUESTIONS.length) * 100;
  const firstUnansweredIndex = answers.findIndex((answer) => answer == null);
  const isComplete = firstUnansweredIndex === -1;

  const result = useMemo(() => {
    const totals: Record<string, { score: number; count: number }> = {
      design: { score: 0, count: 0 },
      marketing: { score: 0, count: 0 },
      content: { score: 0, count: 0 },
      languages: { score: 0, count: 0 },
      general: { score: 0, count: 0 },
    };
    QUESTIONS.forEach((q, i) => {
      const a = answers[i];
      if (a == null) return;
      totals[q.area].score += q.options[a].weight;
      totals[q.area].count += 1;
    });
    const totalScore = Object.values(totals).reduce((s, t) => s + t.score, 0);
    const maxScore = QUESTIONS.reduce((s, q) => s + Math.max(...q.options.map((o) => o.weight)), 0);
    const ratio = totalScore / maxScore;
    const level = ratio < 0.5 ? "مبتدئ" : ratio < 0.78 ? "متوسط" : "متقدم";

    const breakdown = (["design", "marketing", "content", "languages"] as const).map((key) => {
      const t = totals[key];
      const max = QUESTIONS.filter((q) => q.area === key).length * 3;
      const pct = max > 0 ? Math.round((t.score / max) * 100) : 0;
      return {
        key,
        label:
          key === "design"
            ? "التصميم"
            : key === "marketing"
              ? "التسويق"
              : key === "content"
                ? "المحتوى والتصوير"
                : "اللغات",
        pct,
      };
    });

    const top = [...breakdown].sort((a, b) => b.pct - a.pct)[0];
    const recommendation =
      COURSES.find((c) => {
        if (top.key === "design") return c.categoryKey === "design";
        if (top.key === "marketing") return c.categoryKey === "marketing";
        if (top.key === "content") return c.categoryKey === "content";
        return c.categoryKey === "languages";
      }) ?? COURSES[0];

    const others = COURSES.filter((c) => c.slug !== recommendation.slug && c.level === "مبتدئ").slice(0, 3);

    return { level, breakdown, recommendation, others };
  }, [answers]);

  const select = (idx: number) => {
    const next = [...answers];
    next[step] = idx;
    setAnswers(next);
  };

  const goNext = () => {
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else if (isComplete) setDone(true);
    else setStep(firstUnansweredIndex);
  };

  const reset = () => {
    setStep(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setDone(false);
  };

  if (done) {
    return (
      <section className="container max-w-4xl py-16 md:py-20">
        <div className="space-y-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold md:text-4xl">
              مستواك: <span className="text-gradient">{result.level}</span>
            </h1>
            <p className="mt-2 text-foreground/70">إليك تحليل مهاراتك والدورة المناسبة لك</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="mb-6 text-xl font-bold">تحليل المهارات</h2>
            <div className="space-y-5">
              {result.breakdown.map((b) => (
                <div key={b.key} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{b.label}</span>
                    <span className="text-muted-foreground">{b.pct}%</span>
                  </div>
                  <Progress value={b.pct} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card p-6 md:p-8">
            <span className="text-sm font-medium text-primary">الدورة المناسبة لك</span>
            <h3 className="mt-2 text-2xl font-bold">{result.recommendation.title}</h3>
            <p className="mt-2 text-foreground/75">{result.recommendation.shortDescription}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="text-2xl font-bold text-primary">${result.recommendation.price}</span>
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to={`/course/${result.recommendation.slug}`}>
                  ابدأ الدورة
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">أو ابدأ من هنا</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {result.others.map((c) => (
                <Link
                  key={c.slug}
                  to={`/course/${c.slug}`}
                  className="rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                >
                  <span className="text-xs text-muted-foreground">{c.category}</span>
                  <h4 className="mt-1 font-bold">{c.title}</h4>
                  <span className="mt-2 inline-block font-bold text-primary">${c.price}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">شارك نتيجتك</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="rounded-full" onClick={reset}>
                <RotateCcw className="h-4 w-4" />
                أعد الاختبار
              </Button>
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`اختبرت مستواي على 3lemny Academy والنتيجة: ${result.level}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  واتساب
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`اختبرت مستواي على 3lemny Academy والنتيجة: ${result.level}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  X
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const current = QUESTIONS[step];
  const selected = answers[step];

  return (
    <section className="container max-w-3xl py-16 md:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <Target className="h-7 w-7" />
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">اختبار تحديد المستوى</h1>
          <p className="mt-2 text-foreground/70">اكتشف مستواك واحصل على توصية بالدورة المناسبة</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>سؤال {step + 1} من {QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-xl font-bold leading-snug md:text-2xl">{current.q}</h2>
          <div className="space-y-3">
            {current.options.map((opt, idx) => {
              const isSelected = selected === idx;
              return (
                <button
                  key={idx}
                  onClick={() => select(idx)}
                  className={`w-full rounded-xl border p-4 text-right transition-all ${
                    isSelected
                      ? "border-primary bg-primary/10 text-foreground shadow-glow"
                      : "border-border bg-secondary/30 hover:border-primary/40 hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="h-3 w-3" />}
                    </span>
                    <span className="text-sm font-medium md:text-base">{opt.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
            السابق
          </Button>
          <Button
            disabled={selected == null}
            onClick={goNext}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {step === QUESTIONS.length - 1 ? "عرض النتيجة" : "التالي"}
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {QUESTIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              disabled={answers[i] == null && i > step}
              aria-label={`الانتقال إلى السؤال ${i + 1}`}
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-45 ${
                i === step
                  ? "border-primary bg-primary text-primary-foreground"
                  : answers[i] != null
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-secondary/40 text-muted-foreground"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentPage;
