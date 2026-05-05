import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const COLUMNS = [
  {
    title: "الأكاديمية",
    links: ["عن 3LEMNY", "المدربين", "الشهادات", "تواصل معنا"],
  },
  {
    title: "تعلّم",
    links: ["كل الدورات", "المسارات المهنية", "الورش المباشرة", "اختبار تحديد المستوى"],
  },
  {
    title: "مساعدة",
    links: ["الأسئلة الشائعة", "سياسة الاسترداد", "الشروط والأحكام", "سياسة الخصوصية"],
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center">
              <img src={logo} alt="3LEMNY ACADEMY" className="h-14 sm:h-16 w-auto object-contain" />
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              المنصة الأولى للتعلم المهني باللغة العربية — كورسات عملية ومسارات مصممة لسوق العمل.
            </p>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <div className="text-sm font-bold">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} 3LEMNY ACADEMY. جميع الحقوق محفوظة.</span>
          <span>صُمّمت بحب للمتعلّم العربي.</span>
        </div>
      </div>
    </footer>
  );
};
