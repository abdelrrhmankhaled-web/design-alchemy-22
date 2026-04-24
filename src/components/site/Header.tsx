import { useState } from "react";
import { Menu, X, GraduationCap, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#", label: "الرئيسية" },
  { href: "#courses", label: "الدورات" },
  { href: "#paths", label: "المسارات" },
  { href: "#about", label: "عنّا" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-text text-primary-foreground shadow-glow">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-base sm:text-lg">3LEMNY ACADEMY</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            تسجيل الدخول
          </Button>
          <Button
            size="sm"
            className="gap-2 rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-105 hover:bg-primary/90"
          >
            <GraduationCap className="h-4 w-4" />
            ابدأ التعلم
          </Button>
        </div>

        {/* Mobile toggle — single state, single button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-l border-border bg-background">
            <nav className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-2">
                <Button variant="outline" className="w-full justify-center gap-2">
                  <LogIn className="h-4 w-4" />
                  تسجيل الدخول
                </Button>
                <Button className="w-full justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90">
                  <GraduationCap className="h-4 w-4" />
                  ابدأ التعلم
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
