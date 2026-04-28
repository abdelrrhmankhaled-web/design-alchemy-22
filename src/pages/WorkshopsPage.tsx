import { PageHero } from "@/components/site/PageHero";
import { Workshops } from "@/components/site/Workshops";

const WorkshopsPage = () => (
  <>
    <PageHero
      eyebrow="الورش"
      title="ورش عمل حيّة مع خبراء المجال"
      description="انضم لجلسات تفاعلية مباشرة، اطرح أسئلتك، وطبّق على مشاريع حقيقية."
    />
    <Workshops />
  </>
);

export default WorkshopsPage;
