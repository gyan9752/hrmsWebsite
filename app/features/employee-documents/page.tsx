import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Employee Document Management Software | HRVico',
  description:
    'Organise employee documents and records in one HRMS. Keep workforce information easier to manage with HRVico.',
  alternates: {
    canonical: 'https://www.hrvico.com/features/employee-documents/',
  },
  openGraph: {
    title: 'Employee Document Management Software | HRVico',
    description:
      'Keep employee documents and workforce records organised with HRVico\'s HRMS platform.',
    url: 'https://www.hrvico.com/features/employee-documents/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://www.hrvico.com/assets/images/hrvico-employee-document-management-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico employee document management interface for organising employee records',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employee Document Management Software | HRVico',
    description:
      'Keep employee documents and workforce records organised with HRVico\'s HRMS platform.',
    images: ['https://www.hrvico.com/assets/images/hrvico-employee-document-management-og.webp'],
  },
};

const documentManagementFaqs = [
  {
    question: 'What is employee document management software?',
    answer:
      'Employee document management software helps businesses organise and manage employee-related documents through a central system. It can make workforce records easier to maintain and reduce reliance on scattered folders and disconnected processes.',
  },
  {
    question: 'What does HRVico employee document management do?',
    answer:
      'HRVico includes employee document management within its wider HRMS environment, helping businesses manage employee-related documentation alongside their broader HR operations. The specific tools available depend on the current product and plan.',
  },
  {
    question: 'Why do businesses need employee document management software?',
    answer:
      'As a workforce grows, employee-related documents can become harder to organise and locate. A structured document management process helps HR teams maintain records more consistently and makes information easier to manage.',
  },
  {
    question: 'Is employee document management software suitable for small businesses?',
    answer:
      'Yes. Small businesses can benefit from having a consistent process for organising employee documents from the beginning. Businesses should check which HRVico plan includes the document management features they require.',
  },
  {
    question: 'Can employee documents be managed alongside other HR activities?',
    answer:
      'HRVico brings employee document management into its wider HRMS environment, alongside functions such as employee management, attendance, leave and payroll. Check the available plan and feature details for the exact functionality.',
  },
  {
    question: 'Can employees access their documents in HRVico?',
    answer:
      'Employee access depends on the document functionality available in HRVico and the permissions assigned to each role. Confirm the supported employee-facing document actions before relying on them for your workflow.',
  },
  {
    question: 'How can I explore HRVico employee document management?',
    answer:
      'You can review the HRVico features and pricing pages or book a demo to understand how employee document management works and which plan suits your business.',
  },
];

export default function EmployeeDocumentsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: documentManagementFaqs.map((faq) => ({
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
        name: 'Employee Documents',
        item: 'https://www.hrvico.com/features/employee-documents/',
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
              <span>EMPLOYEE DOCUMENT MANAGEMENT</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Keep Employee Documents Organised <span className="gradient-text">in One Place</span>
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
              Manage employee documents and workforce records through one simple HRVico HRMS
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              Employee documents are easy to overlook when they are spread across folders, files and different systems. HRVico gives your team one organised place to manage employee-related documents and keep important workforce records easier to find.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://app.hrvico.com/onboard-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large hero__btn-primary"
                >
                  <span>Explore HRVico →</span>
                </a>
                <HomeBookDemoBtn className="btn btn--secondary btn--large hero__btn-secondary" />
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                Explore plans for your team's needs
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
                src="/assets/images/Super Admin 1.webp"
                alt="HRVico employee document management interface for organising employee records"
                loading="eager"
                priority
                width={1000}
                height={598}
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
          SECTION 2 — WHAT IS EMPLOYEE DOCUMENT MANAGEMENT SOFTWARE?
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is Employee <span className="gradient-text">Document Management Software?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7' }}>
            Employee document management software helps businesses organise and manage employee-related documents in a central system. HRVico brings employee document management into its wider HRMS environment, helping HR teams keep workforce records organised and easier to access.
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
              Still Searching Through Folders <span className="gradient-text">for Employee Documents?</span>
            </h2>
            <p className="pain-solution__pain-p">
              Finding one employee document shouldn't mean checking multiple folders or asking different people where it was saved. As your team grows, keeping documents organised can become another time-consuming task for HR.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Documents Scattered Across Folders
              </h3>
              <p className="pain-solution__card-sol">
                Employee-related files can end up in different folders, making the right document harder to find.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Too Much Time Spent Searching
              </h3>
              <p className="pain-solution__card-sol">
                Finding a specific record can take longer when documents are not organised consistently.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Records Become Harder to Maintain
              </h3>
              <p className="pain-solution__card-sol">
                As employees join and details change, keeping workforce documents organised takes ongoing effort.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Growing Teams Need a Clear Process
              </h3>
              <p className="pain-solution__card-sol">
                A growing workforce needs a more structured way to manage employee-related records.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Give Your HR Team One Organised Place for Employee Documents
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              Keep employee-related documents within HRVico's HRMS environment instead of relying on disconnected folders and scattered records.
            </p>
          </div>

          <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--large">
              <span>See Employee Documents in Action →</span>
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
              Make Employee Document <span className="gradient-text">Management Easier</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div className="feature-box">
              <h3 className="feature-box__title">Employee Documents</h3>
              <p className="feature-box__desc">
                Keep employee-related documents organised within HRVico.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Workforce Records</h3>
              <p className="feature-box__desc">
                Maintain a more structured approach to employee documentation.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Easier Document Access</h3>
              <p className="feature-box__desc">
                Keep documents organised so your team can locate relevant records more easily.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Connected HR Operations</h3>
              <p className="feature-box__desc">
                Manage employee documentation as part of your wider HRMS workflow.
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
              See Employee Documents <span className="gradient-text">Within Your HRMS</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              HRVico brings employee document management into the same platform your team uses for everyday HR operations. See how the available document tools fit into your existing workflow.
            </p>
          </div>

          <div style={{ textAlign: 'center', position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
            <Image
              src="/assets/images/Super Admin 1.webp"
              alt="HRVico employee document management interface for organising employee records"
              width={1000}
              height={598}
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 16px 36px rgba(108, 63, 197, 0.14))' }}
            />
            {/* 3 Callout Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Employee Documents
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Employee Records
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ HRVico Dashboard
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <HomeBookDemoBtn className="btn btn--primary btn--large" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — BUILT FOR BUSINESSES THAT ARE GROWING & USER ROLES
          ========================================================================= */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              Built for Businesses <span className="gradient-text">That Are Growing</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Startup</h3>
              <p className="role-card-item__desc">Build an organised approach to employee documentation as your team takes shape.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Small Business</h3>
              <p className="role-card-item__desc">Keep employee-related records structured without depending entirely on scattered folders.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>SME</h3>
              <p className="role-card-item__desc">Bring employee documentation into your wider HR management process.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Growing Business</h3>
              <p className="role-card-item__desc">Maintain a consistent approach to employee records as your workforce expands.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Link href="/solutions" className="btn btn--secondary btn--large">
              <span>Explore HRVico Solutions →</span>
            </Link>
          </div>

          {/* Made for Everyone Who Uses HRVico */}
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              Made for Everyone <span className="gradient-text">Who Uses HRVico</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>HR &amp; Admin</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Manage employee-related documents according to the permissions and tools available in HRVico.</p>
            </div>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employees</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Access relevant employee information through your HRVico account where supported by your role and permissions.</p>
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
              Employee Document Management Software for <span className="gradient-text">Businesses Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            From startups and small businesses to SMEs and growing organisations, HRVico gives Indian businesses a central HRMS environment for managing employee-related documents and workforce records.
          </p>
          <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '28px' }}>
            Built for Indian businesses. Designed for growing teams.
          </p>
          <Link href="/hrms-software-2026" className="btn btn--secondary btn--large">
            <span>Explore HRMS Software in India →</span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — STILL MANAGING EMPLOYEE DOCUMENTS ACROSS DIFFERENT FOLDERS? (COMPARISON)
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Still Managing Employee Documents <span className="gradient-text">Across Different Folders?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Separate folders and spreadsheets may seem manageable at first. But when employee records increase, maintaining a consistent structure and finding the right information can become harder.
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Documents spread across different folders</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Employee documents managed within the HRMS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Inconsistent ways of organising files</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>A more structured document management process</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Time spent looking in different places</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>A central environment for employee-related records</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>More records as the team grows</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>An HRMS designed for growing businesses</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
              <span>Explore Employee Documents →</span>
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
              Employee Documents Are Part of the <span className="gradient-text">Bigger HR Picture</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Employee documentation doesn't sit in isolation. It is part of the employee information and HR processes your business manages every day.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employee Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee profiles and workforce information organised alongside employee documentation.</p>
              <Link href="/features/employee-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Employee Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Attendance Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Manage attendance information within your wider HRMS environment.</p>
              <Link href="/features/attendance-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Attendance →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Leave Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee leave information within the same HR management platform.</p>
              <Link href="/features/leave-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Leave Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Payroll Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Bring payroll into your wider employee management workflow.</p>
              <Link href="/features/payroll-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Payroll →
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
              Choose a plan based on your team size and the HR features your business needs. Review the included features before subscribing.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }} data-animate="fade-up">
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Compare Plans →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary btn--large" />
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link href="/pricing" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
              View All Pricing Plans →
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
              Get Started With HRVico in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          </div>

          <div className="homepage-steps__grid" data-stagger>
            <div className="step-box">
              <div className="step-box__num" style={{ background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#ffffff', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>01</div>
              <h3 className="step-box__title">Create Your Account</h3>
              <p className="step-box__desc">Verify your email using the OTP process.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num" style={{ background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#ffffff', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>02</div>
              <h3 className="step-box__title">Set Up Your Organisation</h3>
              <p className="step-box__desc">Add your business details and create your administrator account.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num" style={{ background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#ffffff', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>03</div>
              <h3 className="step-box__title">Explore Employee Document Management</h3>
              <p className="step-box__desc">Open your HRVico dashboard and explore the document management tools available in your selected plan.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
              <span>Explore HRVico →</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={documentManagementFaqs} title="Employee Document Management Software FAQs" />

      {/* =========================================================================
          SECTION 13 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Give Employee Documents a <span className="gradient-text">More Organised Home</span>
            </h2>
            <p className="final-cta__subtitle">
              Spend less time looking for employee records and more time taking care of your team. Explore how HRVico fits employee document management into your everyday HR workflow.
            </p>
            <div className="final-cta__actions">
              <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
                <span>Explore HRVico →</span>
              </a>
              <HomeBookDemoBtn className="btn btn--secondary btn--large" />
            </div>
            <p className="final-cta__note">
              Review the features and choose the plan that fits your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}