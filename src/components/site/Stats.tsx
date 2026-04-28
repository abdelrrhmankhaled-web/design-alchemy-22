import { Star, Users, GraduationCap, Trophy } from "lucide-react";

const STATS = [
  { icon: Star, value: "4.8/5", label: "متوسط تقييم الطلاب" },
  { icon: Users, value: "8.2K+", label: "طالب مسجّل" },
  { icon: GraduationCap, value: "87+", label: "كورس متخصص" },
  { icon: Trophy, value: "12.5K+", label: "شهادة معتمدة" },
];

export const Stats = () => {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="container grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:py-12">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon className="h-5 w-5 text-primary" />
            <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">{value}</div>
            <div className="text-xs text-muted-foreground sm:text-sm">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
