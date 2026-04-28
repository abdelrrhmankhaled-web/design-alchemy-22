import { Linkedin } from "lucide-react";

const INSTRUCTORS = [
  { name: "حسام طارق", role: "Senior Designer", initials: "HT", expertise: "تصميم" },
  { name: "عمر الشريف", role: "Marketing Lead", initials: "OE", expertise: "تسويق" },
  { name: "أسماء الزهراني", role: "Data Scientist", initials: "LZ", expertise: "AI" },
  { name: "ريم إبراهيم", role: "Brand Strategist", initials: "RI", expertise: "براندينج" },
];

export const Instructors = () => {
  return (
    <section id="about" className="container py-16 md:py-20">
      <div className="mb-10 space-y-2 text-center">
        <span className="text-sm font-medium text-primary">المدربين</span>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">تعلّم من خبراء المجال</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {INSTRUCTORS.map((i) => (
          <article
            key={i.name}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/5 text-xl font-extrabold text-primary">
              {i.initials}
            </div>
            <div className="space-y-1">
              <div className="text-base font-bold">{i.name}</div>
              <div className="text-xs text-muted-foreground">{i.role}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[10px] font-semibold">
                {i.expertise}
              </span>
              <Linkedin className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
