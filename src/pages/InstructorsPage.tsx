import { PageHero } from "@/components/site/PageHero";
import { Instructors } from "@/components/site/Instructors";

const InstructorsPage = () => (
  <>
    <PageHero
      eyebrow="المدربون"
      title="نخبة من خبراء الصناعة"
      description="فريق من المدربين أصحاب الخبرة العملية اللي بيشاركوك خلاصة سنوات من الشغل الحقيقي."
    />
    <Instructors />
  </>
);

export default InstructorsPage;
