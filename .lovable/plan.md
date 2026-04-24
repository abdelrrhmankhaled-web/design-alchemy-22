
# الخطة: نسخة محسّنة من Hero Section لـ 3lemny Academy

## 🎯 الهدف
بناء نسخة محسّنة من قسم البطل (Hero) بنفس هوية موقع 3lemny Academy البصرية (أخضر نيون على خلفية داكنة، RTL عربي، grid pattern في الخلفية)، مع إصلاح كل المشاكل اللي اتحددت في الريفيو.

---

## 🎨 Design System (هيتحط في `src/index.css` و `tailwind.config.ts`)

### الألوان (HSL tokens)
- `--background`: أسود مائل للأخضر `150 15% 4%`
- `--foreground`: أبيض ناصع `0 0% 98%`
- `--primary` (الأخضر النيون المميز): `155 85% 55%`
- `--primary-glow`: نسخة فاتحة للـ glow effects
- `--muted-foreground`: رمادي فاتح بكونتراست أعلى من الأصلي (`0 0% 75%` بدل الرمادي الباهت)
- `--card`: `150 12% 8%` للكروت العائمة
- `--border`: `150 10% 15%`

### الـ Gradients & Effects
- `--gradient-hero`: radial gradient من الأخضر النيون من اليسار
- `--gradient-text`: linear gradient للكلمات المميزة
- `--shadow-glow`: green glow للـ CTAs والكروت
- `--grid-pattern`: SVG grid background خفيف

### Typography
- خط عربي حديث: **Cairo** أو **Tajawal** من Google Fonts (الموقع الأصلي بيستخدم خط مشابه)
- أحجام: `text-6xl md:text-7xl` للعنوان الرئيسي بـ `tracking-tight` و `leading-tight`

---

## 📁 الملفات اللي هتتعدّل/تتعمل

### 1. `src/index.css` — تحديث كامل
- استبدال الـ design tokens بالـ palette الداكنة الخضرا
- إضافة `dir="rtl"` styles
- إضافة الـ grid background pattern
- إضافة keyframes للـ animations (fade-in, glow-pulse, float)
- استيراد خط Cairo من Google Fonts

### 2. `tailwind.config.ts` — توسيع
- إضافة `fontFamily.arabic`
- إضافة `boxShadow.glow` و `boxShadow.glow-lg`
- إضافة `backgroundImage` للـ gradients والـ grid
- إضافة animations جديدة (fade-in-up, float, pulse-glow)

### 3. `index.html` — تعديل
- إضافة `lang="ar"` و `dir="rtl"` على الـ `<html>`
- preconnect لـ Google Fonts

### 4. `src/pages/Index.tsx` — استبدال كامل
الصفحة هتحتوي على:
- `<Header />`
- `<Hero />`

### 5. `src/components/site/Header.tsx` — جديد
**إصلاح بَج التنقل الأصلي** (الأيقونتين المتداخلتين):
- Logo "3LEMNY ACADEMY" يمين (في RTL = البداية البصرية)
- Nav links في النص (الرئيسية، الدورات، المسارات، عنّا)
- Buttons "تسجيل الدخول" + "ابدأ التعلم" (primary glow) شمال
- على الموبايل: زر واحد فقط (☰) يتحول لـ (✕) بـ state واحد — **مش أيقونتين منفصلتين**
- استخدام مكون `Sheet` من shadcn للقائمة الجانبية على الموبايل

### 6. `src/components/site/Hero.tsx` — جديد
**إصلاحات وتحسينات:**

**أ) العنوان الرئيسي:**
- `max-w-3xl` (مش `max-w-full`) عشان يبقى مقروء على الديسكتوب
- مفيش `&nbsp;` يدوية — leading-tight و word-spacing طبيعي
- "تعلّم المهارات اللي **تصنع مستقبلك** المهني" — الجزء الأوسط بـ `bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent`

**ب) Badge فوق العنوان:**
- "⚡ المنصة الأولى للتعلم المهني باللغة العربية" داخل pill بـ border خفيف وخلفية شبه شفافة

**ج) النص الوصفي:**
- `text-foreground/80` بدل الرمادي الباهت — كونتراست أعلى يطابق WCAG AA

**د) قائمة المميزات (3 نقاط):**
- بأيقونات ✓ خضرا في دوائر صغيرة بدل bullets

**هـ) الـ CTAs:**
- "ابدأ التعلم" — primary بـ glow shadow + hover scale
- "تصفح الدورات" — outline بـ hover خفيف

**و) Social proof:**
- نجوم 4.8 + "12.5K+ طالب مسجّل" + شعارات الشركات (AE, RH, SK, MA) كـ badges مرتبة بدل النص العشوائي "MASKRHAE" — placeholders شغالة لحد ما تتحط شعارات حقيقية

**ز) الـ Visual side (يسار في الـ RTL = شمال بصرياً):**
- Card رئيسي للـ "احتراف الإعلانات على Meta" مع:
  - Header: أيقونة + اسم الكورس + "أحمد السيد"
  - Progress bar 72% بـ gradient أخضر
  - Checklist للدروس (✓ خضرا للمكتمل، ⚪ رمادي للباقي)
- Card عائم صغير "نتيجة الاختبار 90/100" — **مرتبط بصرياً بالـ container** عبر:
  - `absolute` بـ `-top-6 -left-6` (داخل نفس الـ relative wrapper)
  - line/connector خفيف اختياري
- Card عائم تحتيه "🏆 شهادة جاهزة | التسويق الرقمي | تحميل الشهادة" — بنفس المبدأ `absolute -bottom-6 -right-6`
- كل الكروت العائمة بـ `animate-float` (animation خفيف up/down)

**ح) الخلفية:**
- Grid pattern SVG خفيف
- Radial gradient أخضر من جنب واحد (يمين في الـ RTL)
- Subtle noise texture اختياري

### 7. `src/components/site/CourseProgressCard.tsx` — جديد
كومبوننت معزول للكارت الرئيسي (يسهّل إعادة الاستخدام).

### 8. `src/components/site/FloatingBadge.tsx` — جديد
كومبوننت للكروت العائمة الصغيرة (نتيجة الاختبار + الشهادة).

---

## ✅ المشاكل المُصلَحة (Checklist)

| المشكلة الأصلية | الحل |
|---|---|
| ☰ و ✕ ظاهرين مع بعض في الهيدر | State واحد `isOpen` يبدّل بين الأيقونتين |
| `&nbsp;` يدوي في العنوان يكسر التباعد | `leading-tight` + `max-w-3xl` طبيعي |
| العنوان عريض جدًا على الديسكتوب | `max-w-3xl` بدل full width |
| كونتراست منخفض في النص الثانوي | `text-foreground/80` (يطابق WCAG AA) |
| "MASKRHAE" نص عشوائي | Badges مرتبة (AE • RH • SK • MA) كـ placeholders واضحة لشعارات شركاء |
| الكروت العائمة مش مرتبطة بالـ hero | كلها داخل نفس الـ `relative` wrapper بـ `absolute` positioning |
| مفيش hover states واضحة | كل CTA و card فيه hover transition |

---

## 🎬 Animations
- `fade-in-up` على عناصر الـ hero بـ stagger delay
- `float` خفيف على الكروت العائمة (3s ease-in-out infinite)
- `pulse-glow` على الـ primary CTA
- `glow` متحرك على الخلفية radial gradient

---

## 📱 Responsive
- Mobile (<768px): العمود الواحد — Hero text فوق، الـ visual cards تحت
- Tablet (768-1024px): grid-cols-2 لكن بـ gaps أصغر
- Desktop (>1024px): Layout كامل بكل العناصر العائمة

---

## ❓ نقطة محتاج رأيك فيها قبل التنفيذ
هل تحب الـ branding يبقى **3LEMNY ACADEMY** زي الأصلي، ولا تحب نستبدله باسم تاني (مشروعك أنت)؟ لو هتسيبه زي الأصلي تمام، هكمل بنفس الاسم.
