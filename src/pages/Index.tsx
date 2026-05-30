import { Articles } from "@/components/site/Articles";
import { Courses } from "@/components/site/Courses";
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
    <>
      <Hero />
      <Stats />
      <PlacementQuiz />
      <PathCTA />
      <Courses compactHome />
      <Workshops />
      <Instructors />
      <Testimonials />
      <Articles />
      <Newsletter />
    </>
  );
};

export default Index;
