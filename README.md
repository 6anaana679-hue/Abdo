# نظام إدارة السنتر التعليمي
**Educational Center Management System**

## 📋 نظرة عامة
نظام متكامل لإدارة المراكز التعليمية يوفر حلاً شاملاً لإدارة الطلاب والحضور والامتحانات والدفعات والمصروفات.

## ✨ المميزات الرئيسية
- 📚 إدارة الطلاب والبيانات الشخصية
- 📅 تتبع الحضور والغياب
- 📝 إدارة الامتحانات والدرجات
- 💰 إدارة الدفعات والمصروفات
- 📊 تقارير تفصيلية وإحصائيات
- 🌐 واجهة رسومية عصرية وسهلة الاستخدام
- 🎨 تصميم استجابي يعمل على جميع الأجهزة

## 🛠️ التقنيات المستخدمة
- **React 18** - مكتبة واجهات المستخدم
- **React Router** - التوجيه والملاحة
- **TanStack Query** - إدارة البيانات والطلبات
- **Tailwind CSS** - تصميم الواجهات
- **Vite** - أداة البناء والتطوير السريع
- **Base44** - قاعدة البيانات
- **Lucide React** - أيقونات عصرية

## 📦 المتطلبات
- Node.js 16+ 
- npm أو yarn

## 🚀 البدء السريع

### 1. التثبيت
```bash
npm install
# أو
yarn install
```

### 2. إعداد المتغيرات البيئية
انسخ ملف `.env.example` إلى `.env.local`:
```bash
cp .env.example .env.local
```

ثم قم بتعديل القيم:
```
VITE_BASE44_WORKSPACE_ID=your_workspace_id
VITE_BASE44_API_KEY=your_api_key
VITE_BASE44_API_URL=https://api.base44.com
```

### 3. تشغيل الخادم الإنمائي
```bash
npm run dev
# أو
yarn dev
```

سيتم فتح التطبيق على `http://localhost:5173`

### 4. البناء للإنتاج
```bash
npm run build
# أو
yarn build
```

## 📁 هيكل المشروع

```
Abdo/
├── src/
│   ├── components/        # مكونات React
│   │   ├── ui/           # مكونات واجهة المستخدم
│   │   └── pages/        # الصفحات الرئيسية
│   ├── lib/              # مكتبات وأدوات
│   ├── api/              # عملاء API والخدمات
│   ├── App.jsx           # المكون الرئيسي
│   ├── main.jsx          # نقطة الدخول
│   └── index.css         # الأنماط العامة
├── public/               # الملفات الثابتة
├── .env.example          # متغيرات البيئة النموذجية
├── vite.config.js        # إعدادات Vite
├── tailwind.config.js    # إعدادات Tailwind CSS
├── postcss.config.js     # إعدادات PostCSS
├── jsconfig.json         # إعدادات JavaScript
└── package.json          # المتطلبات والسكريبتات
```

## 🎨 الألوان المخصصة

| اللون | القيمة | الاستخدام |
|------|-------|----------|
| Primary | `#D48C2E` | الأزرار والرموز الأساسية |
| Secondary | `#1A1F2E` | الخلفيات الثانوية |
| Accent | `#2A2F45` | العناصر المشددة |

## 📝 المكونات الرئيسية

### UI Components
- `Button` - أزرار بأنماط مختلفة
- `Input` - حقول إدخال النصوص
- `Label` - تسميات العناصر
- `Textarea` - مربع نص متعدد الأسطر
- `Toaster` - إشعارات التطبيق

### Hooks & Contexts
- `useAuth` - إدارة المصادقة
- `useToast` - إدارة الإشعارات
- `AuthProvider` - موفر المصادقة

## 🔧 API Client

استخدم عميل Base44 للتفاعل مع API:

```javascript
import { base44 } from '@/api/base44Client'

// جلب البيانات
const students = await base44.entities.Student.list()

// البحث والتصفية
const filtered = await base44.entities.Student.filter({ 
  grade: '10' 
})

// إنشاء سجل جديد
const newStudent = await base44.entities.Student.create({
  name: 'محمد',
  grade: '10'
})

// تحديث سجل
await base44.entities.Student.update(studentId, {
  grade: '11'
})

// حذف سجل
await base44.entities.Student.delete(studentId)
```

## 📞 التواصل والدعم
للمساعدة والاستفسارات: **01039399243**

## 📄 الترخيص
جميع الحقوق محفوظة © 2024
