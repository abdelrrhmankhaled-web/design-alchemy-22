import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const COLUMNS = [
  {
    title: "الأكاديمية",
    links: [
      { label: "عن 3LEMNY", href: "/contact" },
      { label: "المدربين", href: "/instructors" },
      { label: "الشهادات", href: "/courses" },
      { label: "تواصل معنا", href: "/contact" },
    ],
  },
  {
    title: "تعلّم",
    links: [
      { label: "كل الدورات", href: "/courses" },
      { label: "المسارات المهنية", href: "/paths" },
      { label: "الورش المباشرة", href: "/workshops" },
      { label: "اختبار تحديد المستوى", href: "/assessment" },
    ],
  },
  {
    title: "مساعدة",
    links: [
      { label: "الأسئلة الشائعة", href: "/contact" },
      { label: "سياسة الاسترداد", href: "/contact" },
      { label: "الشروط والأحكام", href: "/auth" },
      { label: "سياسة الخصوصية", href: "/auth" },
    ],
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="3LEMNY ACADEMY" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain" />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              المنصة الأولى للتعلم المهني باللغة العربية — كورسات عملية ومسارات مصممة لسوق العمل.
            </p>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
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
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
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
