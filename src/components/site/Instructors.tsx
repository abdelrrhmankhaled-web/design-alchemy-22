import { Quote } from "lucide-react";
import founderImage from "@/assets/haneen-khalifa.jpg";

export const Instructors = () => {
  return (
    <section id="about" className="container py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Text side */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="space-y-3">
            <span className="text-sm font-medium text-primary">رسالتي لكل باحث عن تطوير ذاته</span>
            <div className="flex items-start gap-3">
              <span className="mt-2 hidden h-10 w-1 rounded-full bg-primary md:block" />
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                إلى كل من يبدأ رحلته
              </h2>
            </div>
          </div>

          <div className="relative space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <Quote className="absolute -top-2 right-0 h-6 w-6 text-primary/30" aria-hidden />
            <p className="pt-6">
              أؤمن أن كل طالب بداخله قدرة تستحق أن تُكتشف، وأن الطريق إلى النجاح لا يبدأ عندما نكون مستعدين تمامًا، بل يبدأ عندما نقرر أن نأخذ أول خطوة.
            </p>
            <p>
              مررت برحلة تعلّمت فيها أن المعرفة وحدها لا تكفي، وأن الشهادة ليست نهاية الطريق، بل البداية. الأهم هو أن تعرف كيف تستخدم ما تتعلمه، كيف تطور نفسك، وكيف تحوّل كل فرصة صغيرة إلى خطوة تقرّبك من حلمك.
            </p>
            <p>
              في علّمني أكاديمي، هدفي أن يجد كل طالب مكانًا يشعر فيه أنه قادر، وأن التعلم ليس صعبًا أو بعيدًا، بل رحلة يمكن أن تبدأ اليوم. لا تنتظر اللحظة المثالية، ابدأ بما لديك، وتعلّم، وجرّب، وثق أن كل خطوة صغيرة تصنع فرقًا كبيرًا في مستقبلك.
            </p>
          </div>

          <div className="border-t border-border/60 pt-4">
            <div className="text-base font-bold text-foreground">د. حنين خليفة</div>
            <div className="text-sm text-primary">Co-Founder — علّمني أكاديمي</div>
          </div>
        </div>

        {/* Image side */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-sm md:max-w-md">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-glow">
              <img
                src={founderImage}
                alt="د. حنين خليفة - الشريك المؤسس لعلّمني أكاديمي"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
