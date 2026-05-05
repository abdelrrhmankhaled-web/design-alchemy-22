import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogIn, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/courses", label: "الدورات" },
  { to: "/paths", label: "المسارات" },
  { to: "/workshops", label: "الورش" },
  { to: "/instructors", label: "المدربون" },
  { to: "/blog", label: "المدونة" },
  { to: "/contact", label: "تواصل معنا" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="3LEMNY ACADEMY" className="h-12 sm:h-14 lg:h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate("/dashboard")}>
                <LayoutDashboard className="h-4 w-4" />
                لوحتي
              </Button>
              <Button variant="outline" size="sm" className="gap-2" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
                خروج
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => navigate("/auth")}>
                <LogIn className="h-4 w-4" />
                تسجيل الدخول
              </Button>
              <Button
                size="sm"
                onClick={() => navigate("/auth?mode=signup")}
                className="gap-2 rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-105 hover:bg-primary/90"
              >
                <GraduationCap className="h-4 w-4" />
                ابدأ التعلم
              </Button>
            </>
          )}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-l border-border bg-background">
            <nav className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary hover:text-primary ${
                      isActive ? "bg-secondary text-primary" : "text-foreground/90"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-6 flex flex-col gap-2">
                {user ? (
                  <>
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2"
                      onClick={() => {
                        setOpen(false);
                        navigate("/dashboard");
                      }}
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      لوحتي
                    </Button>
                    <Button
                      className="w-full justify-center gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => {
                        setOpen(false);
                        handleSignOut();
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      تسجيل الخروج
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2"
                      onClick={() => {
                        setOpen(false);
                        navigate("/auth");
                      }}
                    >
                      <LogIn className="h-4 w-4" />
                      تسجيل الدخول
                    </Button>
                    <Button
                      className="w-full justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
                      onClick={() => {
                        setOpen(false);
                        navigate("/auth?mode=signup");
                      }}
                    >
                      <GraduationCap className="h-4 w-4" />
                      ابدأ التعلم
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
