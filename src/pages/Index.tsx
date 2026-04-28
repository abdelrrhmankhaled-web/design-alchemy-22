import { Articles } from "@/components/site/Articles";
import { Courses } from "@/components/site/Courses";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Instructors } from "@/components/site/Instructors";
import { Newsletter } from "@/components/site/Newsletter";
import { PathCTA } from "@/components/site/PathCTA";
import { PlacementQuiz } from "@/components/site/PlacementQuiz";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Workshops } from "@/components/site/Workshops";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-arabic" dir="rtl">
      <Header />
      <Hero />
      <Stats />
      <PlacementQuiz />
      <Courses />
      <PathCTA />
      <Workshops />
      <Testimonials />
      <Instructors />
      <Articles />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
