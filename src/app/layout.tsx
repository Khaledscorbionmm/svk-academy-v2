import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SVK Academy | أكاديمية SVK",
    template: "%s | SVK Academy",
  },
  description: "منصة تعليمية احترافية للشرق الأوسط وشمال أفريقيا - SVK Academy",
  keywords: ["SVK Academy", "أكاديمية", "تعليم", "كورسات", "مصر", "عربي"],
  authors: [{ name: "SVK Academy" }],
  creator: "SmartVenom",
  metadataBase: new URL("https://svk-academy.com"),
  openGraph: {
    type: "website",
    locale: "ar_EG",
    title: "SVK Academy | أكاديمية SVK",
    description: "منصة تعليمية احترافية للشرق الأوسط وشمال أفريقيا",
    siteName: "SVK Academy",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="gradient-bg min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
