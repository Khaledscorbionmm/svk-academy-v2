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

// We use a client wrapper to add the floating AI chat
// but keep layout as server component for SEO
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#060612" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Cairo', sans-serif", background: '#060612' }}>
        {children}
        {/* Global AI Chat Widget - excluded from admin pages via CSS */}
        <div id="ai-chat-root" className="ai-chat-global" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Load AI chat widget dynamically to keep layout as server component
            (function() {
              var path = window.location.pathname;
              if (path.startsWith('/admin')) return; // Skip on admin pages
              
              var script = document.createElement('script');
              script.type = 'module';
              script.innerHTML = \`
                import('/ai-chat-init.js').catch(function() {});
              \`;
            })();
          `
        }} />
      </body>
    </html>
  );
}
