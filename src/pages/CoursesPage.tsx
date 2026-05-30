import { PageHero } from "@/components/site/PageHero";
import { Courses as CoursesGrid } from "@/components/site/Courses";

const CoursesPage = () => (
  <>
    <PageHero
      eyebrow="الدورات"
      title="استكشف كل دوراتنا"
      description="اختر من بين دورات عملية في اللغة الإنجليزية، المحتوى، السوشيال ميديا، التصميم، الحملات الإعلانية، أو المهارات الطبية."
    />
    <CoursesGrid />
  </>
);

export default CoursesPage;
