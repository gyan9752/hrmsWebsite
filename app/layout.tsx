import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import CookieBanner from '@/components/CookieBanner';
import AnimationScript from '@/components/AnimationScript';

// Import existing stylesheets directly
import '@/css/variables.css';
import '@/css/base.css';
import '@/css/navbar.css';
import '@/css/hero.css';
import '@/css/social-proof.css';
import '@/css/pain-points.css';
import '@/css/features.css';
import '@/css/role-switcher.css';
import '@/css/dashboard.css';
import '@/css/how-it-works.css';
import '@/css/testimonials.css';
import '@/css/pricing.css';
import '@/css/faq.css';
import '@/css/footer.css';
import '@/css/demo-modal.css';
import '@/css/blog-listing.css';
import '@/css/blog-detail.css';
import '@/css/contact.css';
import '@/css/subpages.css';
import '@/css/scriza-news.css';
import '@/css/blog-hero-enhanced.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hrvico.com'),
  title: 'HRVICO — One Platform to Manage Your Entire Workforce',
  description: 'HRVICO is the all-in-one HRMS platform for attendance, payroll, leave, appraisals, and team communication. Built for Super Admins, HR Managers, and Employees.',
  keywords: ['HRMS', 'HR software', 'payroll', 'attendance', 'leave management', 'employee management', 'SaaS'],
  icons: {
    icon: '/assets/images/hrvico-favicon.svg',
    apple: '/assets/images/hrvico-favicon.svg',
  },
  verification: {
    google: '75TcVrkXvzr8OeGQGFGbqzZrnDQwCY6igYneiVkIUjg',
  },
  openGraph: {
    title: 'HRVICO — One Platform to Manage Your Entire Workforce',
    description: 'From attendance to appraisals, payroll to performance HRVICO unifies every HR workflow in one intelligent platform.',
    type: 'website',
    images: ['/assets/images/hero-dashboard.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TVS20GZXDB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TVS20GZXDB');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xkp73lbkvb");
          `}
        </Script>

        <AnimationScript />
        <Navbar />
        {children}
        <Footer />
        <DemoModal />
        <CookieBanner />
      </body>
    </html>
  );
}
