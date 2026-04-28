import { Outlet } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const SiteLayout = () => {
  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SiteLayout;
