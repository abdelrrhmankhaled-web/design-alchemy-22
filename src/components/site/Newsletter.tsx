import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const PERKS = [
  { value: "مجاني", label: "100%" },
  { value: "فوري", label: "وصول" },
  { value: "30%", label: "خصم أول كورس" },
];

export const Newsletter = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/40 p-8 text-center md:p-12">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-2xl space-y-6">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            حوّل معرفتك إلى <span className="text-gradient">دخل إضافي</span>
          </h2>
          <p className="text-foreground/75">
            اشترك في النشرة وخد أفضل الكورسات والفرص المهنية والنصائح العملية أول بأول.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {PERKS.map((p) => (
              <div key={p.label} className="rounded-xl border border-border bg-card/60 p-3">
                <div className="text-lg font-extrabold text-primary">{p.value}</div>
                <div className="text-[11px] text-muted-foreground">{p.label}</div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("تم تسجيل بريدك في النشرة.");
              e.currentTarget.reset();
            }}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                required
                placeholder="بريدك الإلكتروني"
                className="h-11 rounded-full border-border bg-background pe-10 text-right"
              />
            </div>
            <Button
              size="lg"
              type="submit"
              className="rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
            >
              اشترك مجانًا
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
