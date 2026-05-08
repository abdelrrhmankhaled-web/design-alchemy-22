## نظرة عامة

ده تحديث كبير يشمل: صفحات جديدة (اختبار تحديد المستوى، صفحة الدورة الداخلية، صفحة الحجز)، تحديث محتوى الدورات والورش، تعديلات تصميم شاملة، وإضافة filters وتفاصيل.

## ٢. الدورات (10 دورات + filters)

تحديث `src/components/site/Courses.tsx`:

- مصفوفة الدورات الـ 10 بالأسعار بـ USD والـ slug والكاتيجوري
- Filter tabs: الكل | لغات | تصميم | تسويق | طبية | إعلام
- Grid 3/2/1، gap 24px
- كل كارت: thumbnail 16:9 (gradient placeholder حسب الكاتيجوري) + عنوان + سعر + CTA "سجل الآن" يربط بـ `/course/{slug}`
- Hover: translate-y-1 + gold glow

## ٣. صفحة الدورة `/course/:slug`

`src/pages/CourseDetailPage.tsx` جديدة + route في `App.tsx`:

- Hero مع breadcrumb + عنوان + مدرب + rating + مدة + مستوى
- Sticky sidebar فيه السعر، CTA "احجز مقعدك الآن" يروح `/booking?course={slug}`، features list
- "عن الدورة" + "ماذا ستتعلم" بـ checkmarks
- Accordion للمراحل (Radix Accordion موجود)
- بطاقة المدرب
- Reviews (placeholder)
- CTA نهائي
- بيانات الدورات في ملف مشترك `src/data/courses.ts` (title, slug, price, description, instructor, modules[])

## ٤. صفحة الحجز `/booking`

`src/pages/BookingPage.tsx` جديدة:

- Form بـ react-hook-form + zod validation:
الاسم، الهاتف، الإيميل، الدورة (pre-filled من query string)، المستوى، كيف عرفت عنا، ملاحظات، checkboxes
- CTA "تأكيد الحجز" gold
- Success state بدل الفورم بعد submit + WhatsApp CTA
- بدون backend دلوقتي — حفظ محلي/عرض success فقط

## ٥. اختبار تحديد المستوى `/assessment`

`src/pages/AssessmentPage.tsx` جديدة:

- 10 أسئلة (mock) بـ 4 خيارات لكل سؤال، كل خيار له score لمجال معين
- State: currentQuestion, answers
- Progress bar gold + nav circles لكل سؤال (filled/outlined/gray)
- Card السؤال: 4 خيارات كـ buttons، selected → gold bg
- زرار "التالي" / "عرض النتيجة"
- صفحة النتيجة: مستوى (مبتدئ/متوسط/متقدم) محسوب من المجموع، توصية دورة (gold border)، 2-3 دورات ثانوية، أزرار إعادة + share

## ٦. تحديث `PlacementQuiz.tsx` (السكشن في الهوم)

- استبدال أيقونة Compass بـ SVG dائري gold 88px فيه target/check (lucide `Target` أو `CircleCheck`)
- background دائرة `#12121a` مع gold accent
- CTA "اختبر مستواك" → `Link` لـ `/assessment`

## ٧. الورش `Workshops.tsx`

تحديث المحتوى لـ 3 ورش بالعناوين والأوصاف الجديدة:

- "فن تحويل الزائر إلى مشتري"
- "الإعلانات التي تبيع وحدها"
- "كلمات تصنع مبيعات"
- 3 أعمدة، badge gold "ورشة عمل"، CTA "سجل الآن" يظهر on hover، السعر بـ $

## ٨. الـ Routes

تحديث `App.tsx` بإضافة:

- `/assessment` → AssessmentPage
- `/course/:slug` → CourseDetailPage
- `/booking` → BookingPage
كلهم داخل `SiteLayout`.

## ملاحظات فنية

- العملة USD في كل المكونات (Courses, Workshops, CourseDetail, Booking)
- استخدام semantic tokens فقط (gold = `primary`)، مفيش hex مباشر في الـ components
- RTL سليم عبر logical classes
- مفيش backend — الفورم وlocalStorage بس
- Routes الجديدة لازم يكون عندها روابط من الـ Courses cards و PlacementQuiz button و Workshops cards

## الملفات المتأثرة

**جديدة:**

- `src/data/courses.ts`
- `src/data/assessment.ts`
- `src/pages/AssessmentPage.tsx`
- `src/pages/CourseDetailPage.tsx`
- `src/pages/BookingPage.tsx`

**معدّلة:**

- `index.html` (fonts)
- `src/index.css` (tokens + font-family)
- `tailwind.config.ts` (لو محتاج tweaks)
- `src/App.tsx` (routes)
- `src/components/site/Courses.tsx` (10 دورات + filters + USD + روابط)
- `src/components/site/Workshops.tsx` (3 ورش جديدة)
- `src/components/site/PlacementQuiz.tsx` (icon + link)