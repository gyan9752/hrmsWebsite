import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Leave Management Software for Businesses | HRVico',
  description:
    'Manage employee leave requests, records and approvals in one simple HRMS. Simplify leave management with HRVico.',
  alternates: {
    canonical: 'https://www.hrvico.com/features/leave-management/',
  },
  openGraph: {
    title: 'Leave Management Software | HRVico',
    description:
      'Manage employee leave requests, records and approvals in one HRMS. Start free with HRVico.',
    url: 'https://www.hrvico.com/features/leave-management/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://www.hrvico.com/assets/images/hrvico-leave-management-software-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico leave management software for managing employee leave',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leave Management Software | HRVico',
    description:
      'Manage employee leave requests, records and approvals in one HRMS. Start free with HRVico.',
    images: ['https://www.hrvico.com/assets/images/hrvico-leave-management-software-og.webp'],
  },
};

const leaveManagementFaqs = [
  {
    question: 'What is leave management software?',
    answer:
      'Leave management software helps businesses organise employee leave requests, records and approvals through a central system. It reduces the need to manage leave information across separate spreadsheets, messages and manual records.',
  },
  {
    question: 'What does HRVico leave management software do?',
    answer:
      'HRVico helps businesses manage employee leave information, requests and records within a central HRMS platform.',
  },
  {
    question: 'Is HRVico suitable for small businesses?',
    answer:
      'Yes. HRVico offers a Free plan for up to 5 employees, with paid plans available for larger teams.',
  },
  {
    question: 'Can HR manage employee leave in one place?',
    answer:
      'Yes. HRVico provides a central HRMS environment for managing employee leave information alongside other HR operations.',
  },
  {
    question: 'Can employees access their leave information?',
    answer:
      'Yes. HRVico provides role-based experiences for Super Admin, HR/Admin and Employee users.',
  },
  {
    question: 'Can leave management work with attendance?',
    answer:
      'Yes. Leave management and attendance are part of the wider HRVico HRMS environment, allowing businesses to manage these HR processes within the same platform.',
  },
  {
    question: 'How do I start using HRVico?',
    answer:
      'Verify your email with an OTP, set up your organisation and create your administrator account. You can then access your HRVico dashboard and begin managing your workforce.',
  },
];

export default function LeaveManagementPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: leaveManagementFaqs.map((faq) => ({
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
        name: 'Leave Management',
        item: 'https://www.hrvico.com/features/leave-management/',
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
              <span>LEAVE MANAGEMENT SOFTWARE</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Make Employee Leave <span className="gradient-text">Easier to Manage</span>
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
              Manage employee leave, requests and records from one simple HRVico HRMS.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px' }}>
              Stop managing leave requests across spreadsheets, messages and separate records. HRVico gives your HR team one organised place to manage employee leave information and keep leave processes easier to track as your business grows.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://app.hrvico.com/onboard-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large hero__btn-primary"
                >
                  <span>Start Free →</span>
                </a>
                <HomeBookDemoBtn className="btn btn--secondary btn--large hero__btn-secondary" />
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                Free for up to 5 employees
              </p>
            </div>

            <div className="hero__dashboard" data-animate="scale-in" style={{ marginTop: '40px' }}>
              <div className="hero__mockup-window">
                <div className="hero__mockup-header">
                  <div className="hero__mockup-dots" aria-hidden="true">
                    <span className="hero__mockup-dot hero__mockup-dot--red"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--yellow"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--green"></span>
                  </div>
                  <div className="hero__mockup-url">
                    <span>app.hrvico.com/leave</span>
                  </div>
                </div>
                <div className="hero__mockup-body">
                  <Image
                    className="hero__mockup-img"
                    src="/assets/images/User.webp"
                    alt="HRVico leave management software dashboard for managing employee leave"
                    loading="eager"
                    priority
                    width={1000}
                    height={666}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT IS LEAVE MANAGEMENT SOFTWARE?
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is Leave <span className="gradient-text">Management Software?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7' }}>
            Leave management software helps businesses organise employee leave requests, records and approvals in one central system. HRVico brings employee leave information into one HRMS so HR teams can spend less time managing leave manually and more time managing their workforce.
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
              Still Managing Employee <span className="gradient-text">Leave Manually?</span>
            </h2>
            <p className="pain-solution__pain-p">
              Managing a few leave requests may be simple when your team is small. But as your workforce grows, keeping leave information organised, tracking requests and maintaining accurate records can become another daily task for HR.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Leave Requests Get Scattered
              </h3>
              <p className="pain-solution__card-sol">
                Leave requests can end up across spreadsheets, emails, messages and separate records.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Tracking Takes Time
              </h3>
              <p className="pain-solution__card-sol">
                Finding an employee's leave information shouldn't require checking multiple places.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Growing Teams Need Better Visibility
              </h3>
              <p className="pain-solution__card-sol">
                As your workforce grows, keeping leave information organised becomes increasingly important.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              HRVico Gives Your Team One Place to Manage Leave
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              Keep employee leave information organised within HRVico instead of relying on disconnected records and manual processes.
            </p>
          </div>

          <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--large">
              <span>See Leave Management in Action →</span>
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
              Everything HR Needs to Manage Employee <span className="gradient-text">Leave More Easily</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div className="feature-box">
              <h3 className="feature-box__title">Leave Requests</h3>
              <p className="feature-box__desc">
                Keep employee leave requests organised within your HRMS.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Leave Records</h3>
              <p className="feature-box__desc">
                Keep employee leave information structured and easier to access.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Leave Approvals</h3>
              <p className="feature-box__desc">
                Keep the leave management process organised for HR and administrators.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Leave Visibility</h3>
              <p className="feature-box__desc">
                Get a clearer view of employee leave information from one central place.
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
              See Employee Leave Information <span className="gradient-text">at a Glance</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              HRVico gives HR and administrators a central place to manage employee leave information, helping them keep requests and leave records organised as their workforce grows.
            </p>
          </div>

          <div style={{ textAlign: 'center', position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
            <Image
              src="/assets/images/User.webp"
              alt="HRVico leave management software dashboard for managing employee leave"
              width={1000}
              height={666}
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 16px 36px rgba(108, 63, 197, 0.14))' }}
            />
            {/* 3 Callout Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Leave Requests
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Leave Records
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Leave Management
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
              <span>Start Free →</span>
            </a>
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
              Built for Growing Businesses. Simple <span className="gradient-text">for HR Teams.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Startup</h3>
              <p className="role-card-item__desc">Create an organised leave management process as your team grows.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Small Business</h3>
              <p className="role-card-item__desc">Manage employee leave without relying on scattered spreadsheets and manual records.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>SME</h3>
              <p className="role-card-item__desc">Keep leave information organised within one central HRMS.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Growing Business</h3>
              <p className="role-card-item__desc">Maintain a structured leave process as your workforce expands.</p>
            </div>
          </div>

          {/* Roles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>HR &amp; Admin</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Manage employee leave information from one central platform.</p>
            </div>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employees</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Access relevant leave information through your HRVico account.</p>
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
              <span>Explore User Roles</span>
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
              Leave Management Software for <span className="gradient-text">Businesses Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            Whether you're a startup, small business, SME or growing organisation, HRVico gives Indian businesses one organised place to manage employee leave and workforce information.
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
          SECTION 8 — STILL MANAGING LEAVE THROUGH SPREADSHEETS? (COMPARISON)
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Still Managing Leave <span className="gradient-text">Through Spreadsheets?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Spreadsheets can work for a small team. But as employee leave requests and records increase, keeping everything updated, organised and easy to find can become difficult.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#ef4444' }}>Traditional Approach</th>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#10B981' }}>With HRVico</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Leave information across separate files</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Centralised leave information</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Manual request tracking</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Leave managed through one HRMS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Difficult to find leave records</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Organised employee leave records</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Harder to manage as teams grow</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Designed for growing businesses</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
              <span>Move Leave Management to HRVico →</span>
            </a>
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
              Leave Management Connects With Your <span className="gradient-text">Other HR Operations</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Employee leave doesn't work in isolation. HRVico brings leave management together with the other HR processes your team needs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employee Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee leave connected with employee profiles and workforce information.</p>
              <Link href="/features/employee-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Employee Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Attendance Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Manage employee leave alongside attendance information within the same HRMS.</p>
              <Link href="/features/attendance-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Attendance →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Payroll Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee and leave information connected with your wider HR operations.</p>
              <Link href="/features/payroll-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Payroll →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employee Documents</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee-related information and documents organised within HRVico.</p>
              <Link href="/features/employee-documents" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Employee Documents →
              </Link>
            </div>
          </div>

          {/* Why Businesses Can Start With HRVico Strip */}
          <div style={{ textAlign: 'center', background: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.14)', maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Why Businesses Can Start With HRVico</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 14px', background: '#F5F3FF', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600, color: '#6C3FC5' }}>Free up to 5 employees</span>
              <span style={{ padding: '6px 14px', background: '#F5F3FF', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600, color: '#6C3FC5' }}>Centralised HRMS</span>
              <span style={{ padding: '6px 14px', background: '#F5F3FF', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600, color: '#6C3FC5' }}>Role-based access</span>
              <span style={{ padding: '6px 14px', background: '#F5F3FF', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 600, color: '#6C3FC5' }}>Plans for growing teams</span>
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
              Start With a Plan That <span className="gradient-text">Fits Your Team</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1240px', margin: '0 auto 36px' }}>
            {/* Free */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">FREE</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">0</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">Up to 5 employees</div>
              <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                Start Free →
              </a>
            </div>

            {/* Basic */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">BASIC</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">Up to 25 employees</div>
              <Link href="/pricing" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                View Plan →
              </Link>
            </div>

            {/* Standard */}
            <div className="home-price-card home-price-card--featured">
              <span className="home-price-card__badge">Popular</span>
              <h3 className="home-price-card__name">STANDARD</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">1,999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">Up to 50 employees</div>
              <Link href="/pricing" className="btn btn--primary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                View Plan →
              </Link>
            </div>

            {/* Premium */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">PREMIUM</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">3,999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">Up to 100 employees</div>
              <Link href="/pricing" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                View Plan →
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/pricing" className="btn btn--secondary btn--large">
              <span>Compare All Plans →</span>
            </Link>
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
              Start Managing Employee Leave in <span className="gradient-text">3 Simple Steps</span>
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
              <h3 className="step-box__title">Verify Your Email</h3>
              <p className="step-box__desc">Enter your email and verify it with an OTP.</p>
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
              <p className="step-box__desc">Add your company details and create your administrator account.</p>
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
              <h3 className="step-box__title">Start Managing Leave</h3>
              <p className="step-box__desc">Open your HRVico dashboard and begin managing your employee leave information.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
              <span>Start Free →</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={leaveManagementFaqs} title="Leave Management Software FAQs" />

      {/* =========================================================================
          SECTION 13 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Give Your HR Team One Place to <span className="gradient-text">Manage Employee Leave</span>
            </h2>
            <p className="final-cta__subtitle">
              Keep leave information organised, easier to access and simpler to manage as your business grows.
            </p>
            <div className="final-cta__actions">
              <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
                <span>Start Free →</span>
              </a>
              <HomeBookDemoBtn className="btn btn--secondary btn--large" />
            </div>
            <p className="final-cta__note">
              Free for up to 5 employees
            </p>
          </div>
        </div>
      </section>
    </>
  );
}