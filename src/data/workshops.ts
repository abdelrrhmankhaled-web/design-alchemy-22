export type Workshop = {
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  mode: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  seats: string;
  category: string;
  image: string;
  imageAlt: string;
  outcomes: string[];
  agenda: string[];
  includes: string[];
};

export const WORKSHOPS: Workshop[] = [
  {
    slug: "visitor-to-buyer",
    title: "فن تحويل الزائر إلى مشتري",
    description: "أسرار خدمة العملاء التي تضاعف مبيعاتك، وتساعدك تحول كل استفسار إلى فرصة بيع حقيقية.",
    date: "15 مايو",
    time: "8:00 م",
    duration: "ساعتان",
    price: "$29",
    mode: "أونلاين",
    level: "متوسط",
    seats: "18 مقعد",
    category: "مبيعات",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "اجتماع مبيعات وخدمة عملاء",
    outcomes: ["ردود جاهزة للاعتراضات", "تحسين محادثات البيع", "رفع معدل التحويل"],
    agenda: ["تشخيص رحلة العميل", "صياغة ردود الاعتراضات", "تحويل المحادثة إلى عرض", "تطبيق على حالات حقيقية"],
    includes: ["ملف قوالب ردود", "تسجيل الورشة", "متابعة أسئلة بعد الورشة"],
  },
  {
    slug: "ads-that-sell",
    title: "الإعلانات التي تبيع وحدها",
    description: "استراتيجيات الحملات الإعلانية للمتاجر الإلكترونية من الاستهداف للتتبع وتحسين العائد.",
    date: "22 مايو",
    time: "9:00 م",
    duration: "3 ساعات",
    price: "$39",
    mode: "أونلاين",
    level: "متقدم",
    seats: "14 مقعد",
    category: "إعلانات",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "لوحة تحليلات حملة إعلانية رقمية",
    outcomes: ["هيكلة حملة كاملة", "قراءة مؤشرات الأداء", "خطة تحسين لمدة 30 يوم"],
    agenda: ["بناء هيكل الحملة", "اختيار الجمهور والعرض", "قراءة نتائج Meta و TikTok", "خطة تحسين عملية"],
    includes: ["Checklist إطلاق حملة", "نموذج تقرير أداء", "تسجيل الورشة"],
  },
  {
    slug: "copy-that-sells",
    title: "كلمات تصنع مبيعات",
    description: "كتابة المحتوى البيعي الذي يرفع معدل التحويل، مع صيغ جاهزة وأمثلة عملية قابلة للاستخدام.",
    date: "29 مايو",
    time: "8:30 م",
    duration: "ساعتان",
    price: "$25",
    mode: "أونلاين",
    level: "مبتدئ",
    seats: "22 مقعد",
    category: "محتوى",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "كتابة محتوى بيعي على لابتوب ودفتر ملاحظات",
    outcomes: ["قوالب كتابة جاهزة", "تحسين العناوين", "صياغة عروض أوضح"],
    agenda: ["تحديد زاوية الرسالة", "كتابة Hook قوي", "صياغة العرض", "تحسين النص قبل النشر"],
    includes: ["قوالب Copy جاهزة", "تمارين تطبيقية", "تسجيل الورشة"],
  },
];

export const getWorkshopBySlug = (slug: string) => WORKSHOPS.find((workshop) => workshop.slug === slug);
