import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SVK Academy - الأكاديمية الأولى عربياً للبرمجة',
  description: 'تعلم البرمجة بالعربي من الصفر للاحتراف مع SVK Academy - Python, JavaScript, React, AI والمزيد',
  keywords: 'تعلم برمجة, أكاديمية عربية, بايثون, جافاسكريبت, ريأكت, ذكاء اصطناعي, مصر',
  openGraph: {
    title: 'SVK Academy - الأكاديمية الأولى عربياً للبرمجة',
    description: 'تعلم البرمجة بالعربي من الصفر للاحتراف',
    url: 'https://www.smartvenomk.xyz',
    siteName: 'SVK Academy',
    locale: 'ar_EG',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Cairo', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
