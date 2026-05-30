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
  design: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
  marketing: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
  content: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  medical: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
};

export const CATEGORIES = [
  { key: "all", label: "الكل" },
  { key: "languages", label: "لغات" },
  { key: "content", label: "محتوى وتصوير" },
  { key: "design", label: "تصميم" },
  { key: "marketing", label: "تسويق" },
  { key: "medical", label: "طبية" },
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

const ALL_COURSES: Course[] = [
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
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "فصل تعلم لغة إنجليزية",
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
    title: "اوتوكاد",
    category: "تصميم",
    categoryKey: "design",
    level: "مبتدئ",
    duration: "25 ساعة",
    lessons: 30,
    students: 1920,
    rating: 4.7,
    price: 79,
    accent: "from-blue-500/30 to-cyan-500/10",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "مخططات هندسية على شاشة الكمبيوتر",
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
    slug: "3ds-max",
    title: "3Ds Max",
    category: "تصميم",
    categoryKey: "design",
    level: "متوسط",
    duration: "28 ساعة",
    lessons: 32,
    students: 980,
    rating: 4.8,
    price: 99,
    accent: "from-cyan-500/30 to-blue-500/10",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "تصميم معماري ثلاثي الأبعاد لمنزل حديث",
    shortDescription: "اتقن النمذجة والإخراج المعماري ثلاثي الأبعاد باستخدام 3Ds Max.",
    description: [
      "دورة عملية لتعلم 3Ds Max من أساسيات النمذجة حتى الإخراج النهائي.",
      "تركز على المشاهد المعمارية، الخامات، الإضاءة، وتجهيز الرندر.",
      "ستنفذ مشروعًا كاملًا يصلح لإضافته إلى معرض أعمالك.",
    ],
    whatYouLearn: ["النمذجة ثلاثية الأبعاد", "الخامات والإضاءة", "إعداد مشاهد معمارية", "إخراج رندر احترافي"],
    requirements: ["كمبيوتر مناسب للتصميم ثلاثي الأبعاد", "تثبيت 3Ds Max", "معرفة أساسية بالتصميم"],
    instructor: baseInstructor("Ahmed Saeed", "AS"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "graphic-design",
    title: "التصميم الجرافيكي",
    category: "تصميم",
    categoryKey: "design",
    level: "مبتدئ",
    duration: "30 ساعة",
    lessons: 36,
    students: 3540,
    rating: 4.9,
    price: 69,
    accent: "from-pink-500/30 to-purple-500/10",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "مصمم يعمل على واجهة تطبيق",
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
    title: "احتراف السوشيال ميديا",
    category: "تسويق",
    categoryKey: "marketing",
    level: "مبتدئ",
    duration: "22 ساعة",
    lessons: 28,
    students: 4120,
    rating: 4.8,
    price: 59,
    accent: "from-amber-500/30 to-orange-500/10",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "إدارة حملات سوشيال ميديا على الموبايل",
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
    title: "ادارة الحملات الاعلانية (Meta - TikTok)",
    category: "تسويق",
    categoryKey: "marketing",
    level: "متوسط",
    duration: "26 ساعة",
    lessons: 32,
    students: 1860,
    rating: 4.9,
    price: 89,
    accent: "from-rose-500/30 to-orange-500/10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "لوحة تحليلات إعلانات رقمية",
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
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "جهاز ليزر طبي في عيادة",
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
    slug: "skincare",
    title: "العناية بالبشرة",
    category: "طبية",
    categoryKey: "medical",
    level: "متقدم",
    duration: "32 ساعة",
    lessons: 26,
    students: 520,
    rating: 4.9,
    price: 149,
    accent: "from-emerald-500/30 to-teal-500/10",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "جلسة عناية بالبشرة في عيادة طبية",
    shortDescription: "احترف أساسيات العناية بالبشرة وبناء روتين علاجي مناسب لكل حالة.",
    description: [
      "دورة شاملة في العناية الطبية والتجميلية بالبشرة.",
      "نغطي التشخيص، اختيار المنتجات، البروتوكولات، والمتابعة بعد الجلسة.",
      "تطبيق عملي بإشراف طبي متخصص.",
    ],
    whatYouLearn: ["تحليل أنواع البشرة", "بناء روتين عناية مناسب", "العناية بعد الجلسة", "إدارة العيادة"],
    requirements: ["خلفية طبية", "حضور التطبيقات العملية", "التزام بالسلامة"],
    instructor: baseInstructor("Dr. Sara Ibrahim", "SI"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "content-writing",
    title: "كتابة المحتوى",
    category: "محتوى وتصوير",
    categoryKey: "content",
    level: "متوسط",
    duration: "28 ساعة",
    lessons: 34,
    students: 2210,
    rating: 4.8,
    price: 79,
    accent: "from-fuchsia-500/30 to-pink-500/10",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "صانع محتوى يصور بالموبايل",
    shortDescription: "اكتب محتوى واضح ومقنع يناسب السوشيال ميديا والإعلانات وصفحات البيع.",
    description: [
      "تعلم كتابة محتوى احترافي يبدأ من الفكرة وينتهي بمنشور أو إعلان جاهز للنشر.",
      "نغطي كتابة السكريبت، الكابتشن، العناوين، وصياغة الرسائل البيعية.",
      "تطبيقات عملية على محتوى البراندات، الخدمات، والمتاجر.",
    ],
    whatYouLearn: ["كتابة السكريبت", "صياغة الكابتشن", "كتابة إعلانات قصيرة", "بناء تقويم محتوى"],
    requirements: ["رغبة في الكتابة", "أمثلة محتوى للتطبيق", "ساعة يوميًا للتدريب"],
    instructor: baseInstructor("Lina Mostafa", "LM"),
    stages: baseStages,
    reviews: baseReviews,
  },
  {
    slug: "photography",
    title: "تصوير احترافي",
    category: "محتوى وتصوير",
    categoryKey: "content",
    level: "متوسط",
    duration: "30 ساعة",
    lessons: 32,
    students: 1480,
    rating: 4.9,
    price: 99,
    accent: "from-yellow-500/30 to-amber-500/10",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "كاميرا تصوير احترافية",
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

const COURSE_ORDER = [
  "english-conversation",
  "content-writing",
  "social-media",
  "graphic-design",
  "paid-ads",
  "autocad",
  "3ds-max",
  "skincare",
  "laser",
  "photography",
];

export const COURSES: Course[] = COURSE_ORDER.map((slug) => ALL_COURSES.find((course) => course.slug === slug)).filter(
  (course): course is Course => Boolean(course),
);

export const getCourseBySlug = (slug: string) => COURSES.find((c) => c.slug === slug);
