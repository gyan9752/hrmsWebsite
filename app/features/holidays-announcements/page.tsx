import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Holiday Management Software for Businesses | HRVico',
  description:
    'Manage employee holidays and workplace announcements in one HRMS. Keep your team informed with HRVico.',
  alternates: {
    canonical: 'https://www.hrvico.com/features/holidays-announcements/',
  },
  openGraph: {
    title: 'Holiday Management & Employee Announcements | HRVico',
    description:
      'Organise holiday information and share important workplace updates through your HRMS with HRVico.',
    url: 'https://www.hrvico.com/features/holidays-announcements/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://www.hrvico.com/assets/images/hrvico-holiday-announcement-management-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico holiday calendar and employee announcements management interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holiday Management & Employee Announcements | HRVico',
    description:
      'Organise holiday information and share important workplace updates through your HRMS with HRVico.',
    images: ['https://www.hrvico.com/assets/images/hrvico-holiday-announcement-management-og.webp'],
  },
};

const holidayAnnouncementsFaqs = [
  {
    question: 'What is holiday management software?',
    answer:
      'Holiday management software helps businesses organise company holidays, planned days off and holiday calendar information. It gives employees and HR teams a more structured way to refer to important dates.',
  },
  {
    question: 'What is employee announcement software?',
    answer:
      'Employee announcement software helps businesses share important workplace information, such as company notices and policy updates, through a central communication channel.',
  },
  {
    question: 'What can I manage with HRVico Holidays & Announcements?',
    answer:
      'HRVico lists holiday calendar management, company-wide notice broadcasts, policy updates, event alerts and team feed notices as capabilities of this module.',
  },
  {
    question: 'Can HRVico help communicate company policies?',
    answer:
      'HRVico\'s feature overview includes policy updates as part of Holidays & Announcements. Confirm the specific publishing, distribution and acknowledgement functions available in the current product before relying on them.',
  },
  {
    question: 'Is HRVico suitable for small businesses in India?',
    answer:
      'HRVico offers HRMS solutions for small businesses and other growing organisations. Businesses should review the current pricing and feature availability to choose a suitable plan.',
  },
  {
    question: 'Can employees view holiday information and announcements?',
    answer:
      'The module is designed around holiday calendar management and workplace notices. The exact employee-facing screens and permissions should be confirmed in the live HRVico application.',
  },
  {
    question: 'Does HRVico support different holiday calendars for different locations?',
    answer:
      'Please check the current product configuration or book a demo to confirm whether location-specific, state-specific or branch-specific holiday calendars are supported.',
  },
  {
    question: 'How can I get started with HRVico?',
    answer:
      'Explore the HRVico platform, compare available plans or book a demo to understand how Holidays & Announcements fits your organisation\'s needs.',
  },
];

export default function HolidaysAnnouncementsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: holidayAnnouncementsFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.hrvico.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://www.hrvico.com/features/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Holidays & Announcements',
        item: 'https://www.hrvico.com/features/holidays-announcements/',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <div className="hero__bg-gradient"></div>
          <div className="hero__bg-grid"></div>
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
        </div>

        <div className="container">
          <Breadcrumb />
          <div className="hero__content">
            <div className="hero__eyebrow" data-animate="fade-up">
              <span className="hero__eyebrow-pulse" aria-hidden="true"></span>
              <span>HOLIDAY CALENDAR &amp; EMPLOYEE COMMUNICATIONS</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Keep Your Team Informed. Keep <span className="gradient-text">Every Holiday Organised.</span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--accent-purple, #6C3FC5)',
                margin: '-6px auto 18px',
                letterSpacing: '-0.01em',
                maxWidth: '780px',
              }}
              data-animate="fade-up"
            >
              Manage company holidays, share important announcements and keep employees informed through one connected HRMS.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px' }}>
              A holiday gets missed. A policy update gets buried in a message. Employees keep asking HR about dates and company notices. HRVico helps businesses organise holiday calendars and share workplace updates through company-wide notices, policy updates, event alerts and team feed notices. Keep important information easier for your team to find, without relying entirely on scattered messages.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <HomeBookDemoBtn className="btn btn--primary btn--large hero__btn-primary" />
                <Link
                  href="/features"
                  className="btn btn--secondary btn--large hero__btn-secondary"
                >
                  <span>Explore HRVico Features</span>
                </Link>
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                See how HRVico can support your team's everyday HR operations.
              </p>
            </div>

            <div
              className="hero__dashboard"
              data-animate="scale-in"
              style={{
                marginTop: '40px',
                maxWidth: '840px',
                margin: '40px auto 0',
              }}
            >
              <Image
                src="/assets/images/Admin 1.webp"
                alt="HRVico holiday calendar and employee announcements management interface"
                loading="eager"
                priority
                width={1000}
                height={707}
                sizes="(max-width: 768px) 100vw, 840px"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 20px 40px rgba(108, 63, 197, 0.16))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT IS HOLIDAY MANAGEMENT AND ANNOUNCEMENT SOFTWARE?
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is Holiday Management and <span className="gradient-text">Employee Announcement Software?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7' }}>
            Holiday management software helps businesses organise company holidays, working days and holiday calendar information. Employee announcement software helps HR teams share important workplace updates, policy notices and company communications with employees. HRVico brings holiday calendar management and employee announcements into its HRMS platform, giving businesses a more organised way to manage these everyday activities.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — BUSINESS PAIN → SOLUTION
          ========================================================================= */}
      <section className="pain-solution" id="solution">
        <div className="container">
          <div className="pain-solution__intro-box" data-animate="fade-up">
            <h2 className="pain-solution__title">
              Still Sharing Holiday Updates <span className="gradient-text">Through Scattered Messages?</span>
            </h2>
            <p className="pain-solution__pain-p">
              When holiday dates and company announcements are shared across different chats, emails and documents, employees may miss important updates or struggle to find the latest information. HR teams then spend additional time answering repeat questions and sharing the same notice again.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Holiday Dates Are Hard to Find
              </h3>
              <p className="pain-solution__card-sol">
                Employees need a clear place to check company holidays and planned days off.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Important Notices Get Missed
              </h3>
              <p className="pain-solution__card-sol">
                Policy updates and workplace announcements can get buried among everyday messages.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                HR Repeats the Same Information
              </h3>
              <p className="pain-solution__card-sol">
                When employees cannot easily find an update, HR may need to answer the same questions repeatedly.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Bring Holiday Information and Company Updates Into One Place
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              Use HRVico's holiday calendar and announcement capabilities to organise important dates and share workplace information through your HRMS.
            </p>
          </div>

          <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--large">
              <span>See HRVico in Action →</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — 2 x 2 CORE FEATURES GRID
          ========================================================================= */}
      <section className="core-features" id="features">
        <div className="container">
          <div className="core-features__header" data-animate="fade-up">
            <h2 className="core-features__title">
              Everything Your Team Needs <span className="gradient-text">to Stay Informed</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div className="feature-box">
              <h3 className="feature-box__title">Holiday Calendar Management</h3>
              <p className="feature-box__desc">
                Organise company holidays and planned days off through a central holiday calendar.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Company-Wide Announcements</h3>
              <p className="feature-box__desc">
                Share important notices with employees through company-wide broadcasts.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Policy Updates</h3>
              <p className="feature-box__desc">
                Communicate workplace policy updates so employees can stay informed about important changes.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Event Alerts &amp; Team Notices</h3>
              <p className="feature-box__desc">
                Share relevant event alerts and team feed notices through HRVico's HRMS environment.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>Explore All HRMS Features →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — VISUAL SHOWCASE & CALLOUTS
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              A Clearer Way to Share <span className="gradient-text">Important Workplace Information</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              From holiday dates to company notices, HRVico brings everyday employee communications into your wider HRMS environment. Give your team a more organised way to access the information relevant to their work.
            </p>
          </div>

          <div style={{ textAlign: 'center', position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
            <Image
              src="/assets/images/Admin 1.webp"
              alt="HRVico HRMS interface showing holiday calendar management and employee announcements"
              width={1000}
              height={707}
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 16px 36px rgba(108, 63, 197, 0.14))' }}
            />
            {/* 3 Callout Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Holiday Calendar
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Company Announcements
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Policy Updates
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <HomeBookDemoBtn className="btn btn--primary btn--large" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — BUILT FOR GROWING BUSINESSES & ROLES
          ========================================================================= */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              Designed for Teams <span className="gradient-text">of Different Sizes</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Startups</h3>
              <p className="role-card-item__desc">Set up a consistent way to communicate company holidays and important updates as your team grows.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Small Businesses</h3>
              <p className="role-card-item__desc">Keep employees informed without depending entirely on separate messages and manually shared notices.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>SMEs</h3>
              <p className="role-card-item__desc">Organise holiday information and workplace announcements across a growing workforce.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Growing Businesses</h3>
              <p className="role-card-item__desc">Build a more consistent approach to company communications as teams and operations expand.</p>
            </div>
          </div>

          {/* User Roles */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
              Keep HR and Employees on the Same Page
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>HR &amp; Admin</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Organise holiday information and communicate important workplace updates using the available HRMS features.</p>
            </div>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employees</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Access relevant holiday information and workplace notices through the employee experience, subject to available features and permissions.</p>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '16px auto 0', display: 'flex', justifyContent: 'flex-end', padding: '0 4px' }}>
            <Link
              href="/roles"
              className="section-text-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#6C3FC5',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}
            >
              <span>Explore HRVico User Roles</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — INDIA SEO
          ========================================================================= */}
      <section className="india-industry">
        <div className="container">
          <h2 className="india-industry__title">
              Holiday Management Software for <span className="gradient-text">Businesses Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            From startups and small businesses to SMEs and growing organisations, HRVico helps Indian businesses organise company holiday calendars and communicate important workplace updates through one HRMS platform. Whether your team works from one office or across different locations, a clear approach to holiday information and employee communication can help reduce confusion and make everyday HR administration easier.
          </p>
          <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '28px' }}>
            Built for Indian businesses. Designed for growing teams.
          </p>
          <Link href="/#india-states" className="btn btn--secondary btn--large">
            <span>Explore HRMS Software in India →</span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — MANUAL VS HRVICO (COMPARISON)
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Managing Holidays and Announcements <span className="gradient-text">Manually vs HRVico</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              When holiday details and workplace notices are spread across multiple channels, keeping everyone informed becomes harder to manage. A central HRMS environment offers a more organised alternative.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#ef4444' }}>Manual Approach</th>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#10B981' }}>With HRVico</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Holiday dates stored in separate files</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Holiday calendar management within the HRMS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Important notices shared across different channels</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Company-wide notice broadcasts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Policy updates communicated inconsistently</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>A dedicated capability for policy updates</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Employees search through old messages</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Team feed notices and event alerts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/features" className="btn btn--primary btn--large">
              <span>Explore HRVico Features →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — MODULE CONNECTIVITY
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#FBF9FF', borderTop: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Holidays Work Better Alongside Your <span className="gradient-text">Other HR Activities</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Holiday information is connected to other everyday HR activities. Explore how HRVico brings multiple HR functions into one platform.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Leave Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Manage employee leave applications, leave policies and leave balances.</p>
              <Link href="/features/leave-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Leave Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Attendance Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Manage employee attendance records and attendance-related activities.</p>
              <Link href="/features/attendance-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Attendance Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employee Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee profiles and workforce information organised.</p>
              <Link href="/features/employee-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Employee Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Notifications &amp; Push Alerts</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Explore HRVico's notification capabilities for system alerts and pending actions.</p>
              <Link href="/features" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore HRMS Features →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — PRICING
          ========================================================================= */}
      <section className="homepage-pricing" id="pricing">
        <div className="container">
          <div className="homepage-pricing__header" data-animate="fade-up">
            <h2 className="homepage-pricing__title">
              Find the Right HRVico Plan <span className="gradient-text">for Your Team</span>
            </h2>
            <p className="homepage-pricing__microcopy">
              Choose an HRMS plan based on your team size and the features your business needs. Review the available plans to confirm that Holidays &amp; Announcements is included in your chosen subscription.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }} data-animate="fade-up">
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Compare Pricing Plans →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary btn--large" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — 3 SIMPLE STEPS
          ========================================================================= */}
      <section className="homepage-steps" id="how-it-works">
        <div className="container">
          <div className="homepage-steps__header" data-animate="fade-up">
            <h2 className="homepage-steps__title">
              Get Started With HRVico in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          </div>

          <div className="homepage-steps__grid" data-stagger>
            <div className="step-box">
              <div
                className="step-box__num"
                style={{
                  background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)',
                }}
              >
                01
              </div>
              <h3 className="step-box__title">Create Your Account</h3>
              <p className="step-box__desc">Verify your email and begin setting up your HRVico account.</p>
            </div>

            <div className="step-box">
              <div
                className="step-box__num"
                style={{
                  background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)',
                }}
              >
                02
              </div>
              <h3 className="step-box__title">Set Up Your Organisation</h3>
              <p className="step-box__desc">Add your business details and configure your organisation.</p>
            </div>

            <div className="step-box">
              <div
                className="step-box__num"
                style={{
                  background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)',
                }}
              >
                03
              </div>
              <h3 className="step-box__title">Organise Your HR Activities</h3>
              <p className="step-box__desc">Explore the holiday calendar and announcements functionality available in your account and subscription.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
              <span>Get Started With HRVico →</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={holidayAnnouncementsFaqs} title="Frequently Asked Questions About Holidays & Announcements" />

      {/* =========================================================================
          SECTION 13 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Keep Every Important <span className="gradient-text">Update Within Reach</span>
            </h2>
            <p className="final-cta__subtitle">
              Help your team stay informed about company holidays, policy updates and workplace notices. Explore how HRVico can bring holiday management and employee announcements into your everyday HR operations.
            </p>
            <div className="final-cta__actions">
              <HomeBookDemoBtn className="btn btn--primary btn--large" />
              <Link href="/pricing" className="btn btn--secondary btn--large">
                <span>Compare Pricing Plans</span>
              </Link>
            </div>
            <p className="final-cta__note">
              Explore the HRVico features that fit your team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}