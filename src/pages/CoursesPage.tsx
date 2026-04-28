import { PageHero } from "@/components/site/PageHero";
import { Courses as CoursesGrid } from "@/components/site/Courses";

const CoursesPage = () => (
  <>
    <PageHero
      eyebrow="الدورات"
      title="استكشف كل دوراتنا"
      description="اختر من بين عشرات الدورات العملية في التصميم، التسويق، البرمجة، والذكاء الاصطناعي."
    />
    <CoursesGrid />
  </>
);

export default CoursesPage;
