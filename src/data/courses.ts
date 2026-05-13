export type Course = {
  slug: string;
  title: string;
  category: string;
  categoryKey: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: number;
  accent: string;
  image?: string;
  imageAlt?: string;
  shortDescription: string;
  description: string[];
  whatYouLearn: string[];
  requirements: string[];
  instructor: { name: string; bio: string; initials: string };
  stages: { title: string; duration: string; lessons: string[] }[];
  reviews: { name: string; rating: number; text: string }[];
};

export const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  languages: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  design: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1200&q=80",
  marketing: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
  medical: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  media: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
};

export const CATEGORIES = [
  { key: "all", label: "الكل" },
  { key: "languages", label: "لغات" },
  { key: "design", label: "تصميم" },
  { key: "marketing", label: "تسويق" },
  { key: "medical", label: "طبية" },
  { key: "media", label: "إعلام" },
];

const baseInstructor = (name: string, initials: string) => ({
  name,
  initials,
  bio: "خبير محترف بسنوات طويلة من العمل الميداني والتدريب العملي على مشاريع حقيقية مع كبرى الشركات والعملاء.",
});

const baseStages = [
  {
    title: "المرحلة 1: الأساسيات",
    duration: "4 ساعات",
    lessons: ["مقدمة شاملة", "إعداد بيئة العمل", "المفاهيم الأساسية", "تطبيق عملي أول"],
  },
  {
    title: "المرحلة 2: المستوى المتوسط",
    duration: "6 ساعات",
    lessons: ["تقنيات متقدمة", "أمثلة من السوق", "ورشة تطبيقية", "حل المشكلات الشائعة"],
  },
  {
    title: "المرحلة 3: الاحتراف",
    duration: "5 ساعات",
    lessons: ["مشاريع حقيقية", "تحسين الأداء", "أفضل الممارسات", "مشروع التخرج"],
  },
];

const baseReviews = [
  { name: "أحمد محمود", rating: 5, text: "محتوى عملي وشرح ممتاز، استفدت كتير وبدأت أطبّق فعلاً." },
  { name: "سارة علي", rating: 5, text: "أفضل دورة في المجال، المدرب محترف والمعلومات حديثة." },
  { name: "محمد حسن", rating: 4, text: "تجربة رائعة، التطبيقات العملية ساعدتني أفهم بسرعة." },
];

export const COURSES: Course[] = [
  {
    slug: "english-conversation",
    title: "المحادثة باللغة الإنجليزية",
    category: "لغات",
    categoryKey: "languages",
    level: "مبتدئ",
    duration: "20 ساعة",
    lessons: 24,
    students: 2840,
    rating: 4.8,
    price: 49,
    accent: "from-sky-500/30 to-indigo-500/10",
    shortDescription: "تحدث الإنجليزية بثقة من اليوم الأول مع تدريبات محادثة عملية.",
    description: [
      "دورة مكثفة لتطوير مهارات المحادثة باللغة الإنجليزية بأسلوب طبيعي وعملي.",
      "تركز الدورة على المواقف اليومية وبيئة العمل لتتحدث بثقة دون تردد.",
      "تشمل تدريبات نطق، حوارات تفاعلية، ومراجعات أسبوعية مع المدرب.",
    ],
    whatYouLearn: ["نطق صحيح وواضح", "محادثات يومية ومهنية", "كسر حاجز الخوف", "مفردات عملية أساسية"],
    requirements: ["مستوى أساسي في اللغة", "لابتوب أو موبايل", "ساعة يوميًا للتدريب"],
    instructor: baseInstructor("Mohamed Tarek", "MT"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "autocad",
    title: "دورة أوتوكاد",
    category: "تصميم",
    categoryKey: "design",
    level: "مبتدئ",
    duration: "25 ساعة",
    lessons: 30,
    students: 1920,
    rating: 4.7,
    price: 79,
    accent: "from-blue-500/30 to-cyan-500/10",
    shortDescription: "احترف الرسم الهندسي ثنائي وثلاثي الأبعاد باستخدام AutoCAD.",
    description: [
      "تعلم AutoCAD من الصفر للاحتراف بأسلوب عملي مبسط.",
      "نغطي الرسم 2D و 3D، الطباعة، والمشاريع الهندسية الكاملة.",
      "تطبيقات حقيقية على مخططات معمارية وميكانيكية.",
    ],
    whatYouLearn: ["إتقان واجهة AutoCAD", "الرسم 2D و 3D", "الطباعة والإخراج النهائي", "إدارة الطبقات والـ Blocks"],
    requirements: ["كمبيوتر بمواصفات متوسطة", "تثبيت AutoCAD", "معرفة أساسيات الهندسة"],
    instructor: baseInstructor("Ahmed Saeed", "AS"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "graphic-design",
    title: "تصميم جرافيكي",
    category: "تصميم",
    categoryKey: "design",
    level: "مبتدئ",
    duration: "30 ساعة",
    lessons: 36,
    students: 3540,
    rating: 4.9,
    price: 69,
    accent: "from-pink-500/30 to-purple-500/10",
    shortDescription: "احترف Photoshop و Illustrator وصمم هوية بصرية متكاملة.",
    description: [
      "دورة شاملة في التصميم الجرافيكي تأخذك من الأساسيات للاحتراف.",
      "تغطي Photoshop، Illustrator، نظرية الألوان، والتايبوغرافي.",
      "ستنفذ مشاريع حقيقية من البريف للتسليم النهائي.",
    ],
    whatYouLearn: ["Photoshop و Illustrator", "نظرية الألوان والتكوين", "تصميم الهوية البصرية", "تجهيز الملفات للطباعة والويب"],
    requirements: ["كمبيوتر مناسب للتصميم", "Adobe Creative Cloud", "روح إبداعية"],
    instructor: baseInstructor("Mona Khaled", "MK"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "social-media",
    title: "سوشيال ميديا",
    category: "تسويق",
    categoryKey: "marketing",
    level: "مبتدئ",
    duration: "22 ساعة",
    lessons: 28,
    students: 4120,
    rating: 4.8,
    price: 59,
    accent: "from-amber-500/30 to-orange-500/10",
    shortDescription: "ابنِ حضور قوي على السوشيال ميديا وحوّل المتابعين لعملاء.",
    description: [
      "إدارة احترافية لحسابات السوشيال ميديا لكل المنصات الرئيسية.",
      "استراتيجيات محتوى، جدولة، تحليلات، والتفاعل مع الجمهور.",
      "كيف تبني هوية موحدة تظهر في كل بوست.",
    ],
    whatYouLearn: ["استراتيجية المحتوى", "الجدولة والتحليلات", "Facebook, Instagram, TikTok, LinkedIn", "بناء مجتمع متفاعل"],
    requirements: ["حساب على المنصات", "أدوات جدولة مجانية", "ساعة يوميًا"],
    instructor: baseInstructor("Nour Hassan", "NH"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "paid-ads",
    title: "الإعلانات الممولة (Meta - TikTok)",
    category: "تسويق",
    categoryKey: "marketing",
    level: "متوسط",
    duration: "26 ساعة",
    lessons: 32,
    students: 1860,
    rating: 4.9,
    price: 89,
    accent: "from-rose-500/30 to-orange-500/10",
    shortDescription: "أتقن إعلانات Meta و TikTok وحقق أعلى ROAS لمتجرك.",
    description: [
      "دورة متقدمة في إعلانات Meta و TikTok للمتاجر والخدمات.",
      "نغطي الاستهداف، الإبداعات، الـ Pixel، التتبع، وتحسين الميزانية.",
      "حالات دراسية حقيقية بأرقام وحملات ناجحة.",
    ],
    whatYouLearn: ["إنشاء حملات احترافية", "الاستهداف الذكي", "تركيب البيكسل والتتبع", "تحسين الـ ROAS"],
    requirements: ["حساب Business Manager", "ميزانية تجريبية صغيرة", "متجر أو صفحة جاهزة"],
    instructor: baseInstructor("Omar Fathy", "OF"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "laser",
    title: "احتراف الليزر",
    category: "طبية",
    categoryKey: "medical",
    level: "متقدم",
    duration: "35 ساعة",
    lessons: 28,
    students: 640,
    rating: 4.9,
    price: 129,
    accent: "from-red-500/30 to-rose-500/10",
    shortDescription: "احترف جلسات الليزر بأمان واحترافية للأنواع المختلفة.",
    description: [
      "دورة متخصصة لمحترفي العناية بالبشرة والعيادات الطبية.",
      "نغطي أنواع الليزر، البروتوكولات، السلامة، والتعامل مع الحالات.",
      "تدريب عملي على أجهزة حقيقية مع متابعة فردية.",
    ],
    whatYouLearn: ["أنواع أجهزة الليزر", "بروتوكولات العلاج", "تقييم البشرة", "السلامة والمضاعفات"],
    requirements: ["خلفية طبية أو تجميلية", "ساعات تدريب عملي", "التزام بالحضور"],
    instructor: baseInstructor("Dr. Hala Adel", "HA"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "skincare-prp",
    title: "سكين كير و PRP",
    category: "طبية",
    categoryKey: "medical",
    level: "متقدم",
    duration: "32 ساعة",
    lessons: 26,
    students: 520,
    rating: 4.9,
    price: 149,
    accent: "from-emerald-500/30 to-teal-500/10",
    shortDescription: "احترف العناية بالبشرة وتقنيات PRP بأحدث البروتوكولات.",
    description: [
      "دورة شاملة في العناية الطبية بالبشرة وتقنية PRP.",
      "نغطي التشخيص، التحضير، التطبيق، والمتابعة بعد الجلسة.",
      "تطبيق عملي بإشراف طبي متخصص.",
    ],
    whatYouLearn: ["تحليل أنواع البشرة", "تقنية PRP خطوة بخطوة", "العناية بعد الجلسة", "إدارة العيادة"],
    requirements: ["خلفية طبية", "حضور التطبيقات العملية", "التزام بالسلامة"],
    instructor: baseInstructor("Dr. Sara Ibrahim", "SI"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "media",
    title: "الإعلام",
    category: "إعلام",
    categoryKey: "media",
    level: "مبتدئ",
    duration: "24 ساعة",
    lessons: 30,
    students: 1240,
    rating: 4.7,
    price: 69,
    accent: "from-violet-500/30 to-indigo-500/10",
    shortDescription: "ادخل عالم الإعلام من الأبواب الواسعة بمهارات احترافية.",
    description: [
      "دورة شاملة في مهارات الإعلام الحديثة للتقديم والإعداد.",
      "نغطي الستوديو، المايك، الكاميرا، والإعداد الإعلامي.",
      "تدريب عملي على بيئة استوديو حقيقية.",
    ],
    whatYouLearn: ["مهارات التقديم", "إعداد المحتوى الإعلامي", "أمام وخلف الكاميرا", "بناء بيرسونال براند"],
    requirements: ["ثقة بالنفس", "ميكروفون أساسي", "رغبة حقيقية"],
    instructor: baseInstructor("Karim Yousef", "KY"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "content-creation",
    title: "صناعة المحتوى",
    category: "إعلام",
    categoryKey: "media",
    level: "متوسط",
    duration: "28 ساعة",
    lessons: 34,
    students: 2210,
    rating: 4.8,
    price: 79,
    accent: "from-fuchsia-500/30 to-pink-500/10",
    shortDescription: "ابنِ مسيرة كصانع محتوى محترف من الفكرة حتى النشر.",
    description: [
      "تعلم كيف تصنع محتوى احترافي يجذب ويحقق دخل.",
      "نغطي التصوير، المونتاج، السكريبت، والنشر الذكي.",
      "بناء استراتيجية محتوى تناسب علامتك الشخصية.",
    ],
    whatYouLearn: ["استراتيجية المحتوى", "التصوير والمونتاج", "كتابة السكريبت", "تحقيق الدخل"],
    requirements: ["موبايل بكاميرا جيدة", "تطبيق مونتاج", "أفكار للبدء"],
    instructor: baseInstructor("Lina Mostafa", "LM"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "photography",
    title: "تصوير احترافي",
    category: "إعلام",
    categoryKey: "media",
    level: "متوسط",
    duration: "30 ساعة",
    lessons: 32,
    students: 1480,
    rating: 4.9,
    price: 99,
    accent: "from-yellow-500/30 to-amber-500/10",
    shortDescription: "احترف التصوير الفوتوغرافي وقدّم صور تنافس الكبار.",
    description: [
      "دورة شاملة من شراء الكاميرا حتى تسليم الجلسة الاحترافية.",
      "نغطي الإضاءة، الكمبوزيشن، الإعدادات، والمعالجة.",
      "جلسات تدريب ميدانية لتطبيق المهارات.",
    ],
    whatYouLearn: ["إعدادات الكاميرا اليدوية", "الإضاءة الطبيعية والصناعية", "Lightroom للمعالجة", "التسعير وإدارة العميل"],
    requirements: ["كاميرا DSLR / Mirrorless", "Lightroom", "الرغبة في الممارسة"],
    instructor: baseInstructor("Yousef Adel", "YA"),
    stages: baseStages,
    reviews: baseReviews,
  },
];

export const getCourseBySlug = (slug: string) => COURSES.find((c) => c.slug === slug);
