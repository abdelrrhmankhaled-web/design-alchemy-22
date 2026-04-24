import { Check, GraduationCap, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseProgressCard } from "./CourseProgressCard";
import { FloatingBadge } from "./FloatingBadge";

const FEATURES = [
  "دورات عملية مصممة لسوق العمل الفعلي",
  "مسارات مهنية واضحة خطوة بخطوة",
  "شهادات معتمدة قابلة للمشاركة",
];

const PARTNERS = ["Meta", "Google", "AWS", "HubSpot"];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div className="absolute inset-0 hero-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[80%] bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Text column */}
        <div className="max-w-3xl space-y-7 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            المنصة الأولى للتعلم المهني باللغة العربية
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            تعلّم المهارات اللي{" "}
            <span className="text-gradient">تصنع مستقبلك</span> المهني
          </h1>

          {/* Description */}
          <p className="max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            منصة تعليمية تجمع بين المحتوى العملي، المسارات المهنية الواضحة، والمدربين
            المتخصصين لتبدأ رحلتك بثقة وتحقق تقدمًا حقيقيًا.
          </p>

          {/* Feature list */}
          <ul className="space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm sm:text-base">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-primary px-7 text-primary-foreground shadow-glow transition-transform hover:scale-105 hover:bg-primary/90 animate-pulse-glow"
            >
              <GraduationCap className="h-5 w-5" />
              ابدأ التعلم
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent px-7 hover:bg-secondary"
            >
              تصفح الدورات
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-bold">4.8</span>
              <span className="text-sm text-muted-foreground">من +12.5K طالب</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">شركاؤنا:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {PARTNERS.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual column — all cards inside ONE relative wrapper */}
        <div className="relative mx-auto w-full max-w-md animate-fade-in-up [animation-delay:200ms]">
          {/* Decorative glow behind card */}
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/20 blur-3xl"
            aria-hidden
          />

          {/* Main course card */}
          <CourseProgressCard />

          {/* Quiz badge — anchored to top-left of wrapper */}
          <FloatingBadge
            variant="quiz"
            className="absolute -top-6 -left-4 sm:-left-10 animate-float"
          />

          {/* Certificate badge — anchored to bottom-right of wrapper */}
          <FloatingBadge
            variant="certificate"
            className="absolute -bottom-8 -right-4 sm:-right-10 animate-float [animation-delay:1.5s]"
          />
        </div>
      </div>
    </section>
  );
};
