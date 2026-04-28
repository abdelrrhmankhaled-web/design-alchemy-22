import { PageHero } from "@/components/site/PageHero";
import { Articles } from "@/components/site/Articles";
import { Newsletter } from "@/components/site/Newsletter";

const BlogPage = () => (
  <>
    <PageHero
      eyebrow="المدوّنة"
      title="مقالات تساعدك تتعلّم وتقرر"
      description="نصائح عملية، قصص نجاح، ودلائل شاملة عن المهن الرقمية والتعلّم الذاتي."
    />
    <Articles />
    <Newsletter />
  </>
);

export default BlogPage;
