import type { Metadata } from 'next';
import './globals.css';
import AmbientAudio from '@/components/AmbientAudio';
import VersionNotifier from '@/components/VersionNotifier';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var CURRENT_VERSION = '1.4.0';
              var testKey = '__svk_storage_test__';
              try {
                localStorage.setItem(testKey, '1');
                localStorage.removeItem(testKey);
              } catch (e) {
                return; // localStorage is disabled/blocked, abort to prevent infinite loop
              }

              var savedVersion = localStorage.getItem('svk_app_version');
              if (savedVersion !== CURRENT_VERSION) {
                localStorage.setItem('svk_app_version', CURRENT_VERSION);
                var verified = localStorage.getItem('svk_app_version');
                if (verified === CURRENT_VERSION) {
                  if ('caches' in window) {
                    caches.keys().then(function(names) {
                      names.forEach(function(name) { caches.delete(name); });
                    });
                  }
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.getRegistrations().then(function(registrations) {
                      registrations.forEach(function(r) { r.unregister(); });
                    });
                  }
                  localStorage.clear();
                  sessionStorage.clear();
                  localStorage.setItem('svk_app_version', CURRENT_VERSION);
                  var cookies = document.cookie.split(';');
                  for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    var eqPos = cookie.indexOf('=');
                    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    if (name.indexOf('svk_') === 0) {
                      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    }
                  }
                  window.location.reload();
                }
              }
            } catch(e) {}
          })();
        ` }} />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Cairo', sans-serif", background: '#060612' }}>
        {children}
        <AmbientAudio />
        <VersionNotifier />
      </body>
    </html>
  );
}
