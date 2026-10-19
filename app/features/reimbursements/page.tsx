import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Expense Reimbursement Software for Businesses | HRVico',
  description:
    'Manage employee expense claims and reimbursement records in one HRMS. Keep business expense management organised with HRVico.',
  alternates: {
    canonical: 'https://www.hrvico.com/features/reimbursements/',
  },
  openGraph: {
    title: 'Expense Reimbursement Software | HRVico',
    description:
      'Organise employee expense claims and reimbursement records with HRVico\'s HRMS platform.',
    url: 'https://www.hrvico.com/features/reimbursements/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://www.hrvico.com/assets/images/hrvico-expense-reimbursement-software-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico employee reimbursement management interface for organising expense records',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expense Reimbursement Software | HRVico',
    description:
      'Organise employee expense claims and reimbursement records with HRVico\'s HRMS platform.',
    images: ['https://www.hrvico.com/assets/images/hrvico-expense-reimbursement-software-og.webp'],
  },
};

const reimbursementManagementFaqs = [
  {
    question: 'What is employee reimbursement software?',
    answer:
      'Employee reimbursement software helps businesses organise employee expense claims and reimbursement records through a structured system. It can help HR and finance teams maintain expense information more consistently.',
  },
  {
    question: 'What does HRVico Reimbursements do?',
    answer:
      'HRVico includes Reimbursements within its wider HRMS environment. The exact claim management, documentation and reimbursement workflows should be confirmed against the current product.',
  },
  {
    question: 'Why do businesses need reimbursement management software?',
    answer:
      'As employee expense claims increase, tracking claim details and maintaining supporting records can become difficult. A structured reimbursement process helps businesses organise expense information more consistently.',
  },
  {
    question: 'Is reimbursement software suitable for small businesses?',
    answer:
      'Yes. Small businesses can benefit from a consistent process for organising employee expense records. Businesses should check which HRVico plan includes the reimbursement features they need.',
  },
  {
    question: 'Can employee reimbursements be managed alongside other HR activities?',
    answer:
      'HRVico brings Reimbursements into its wider HRMS environment alongside other HR functions. The exact workflow and available integrations depend on the current product.',
  },
  {
    question: 'Can employees access reimbursement information in HRVico?',
    answer:
      'Employee access depends on the reimbursement features and permissions supported by the current HRVico product. Confirm the available employee-facing workflow before relying on it.',
  },
  {
    question: 'How can I explore HRVico Reimbursements?',
    answer:
      'Review the HRVico features and pricing pages or book a demo to understand the reimbursement functionality and identify the plan that suits your business.',
  },
];

export default function ReimbursementsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: reimbursementManagementFaqs.map((faq) => ({
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
        name: 'Reimbursements',
        item: 'https://www.hrvico.com/features/reimbursements/',
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
              <span>EMPLOYEE REIMBURSEMENT MANAGEMENT</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Make Employee Reimbursements <span className="gradient-text">Easier to Manage</span>
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
              Manage employee reimbursement information and expense records within your HRVico HRMS.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px' }}>
              An employee submits an expense. Someone needs to check the details, find the relevant records and keep the information organised. When this happens across a growing team, reimbursement management can quickly become another administrative burden. HRVico brings reimbursement management into your wider HRMS environment, helping your team keep employee expense information organised alongside everyday HR operations.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <HomeBookDemoBtn className="btn btn--primary btn--large hero__btn-primary" />
                <Link
                  href="/pricing"
                  className="btn btn--secondary btn--large hero__btn-secondary"
                >
                  <span>Explore HRVico Plans</span>
                </Link>
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                Find the plan that fits your team's needs.
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
                src="/assets/images/Group 237586 1.webp"
                alt="HRVico employee reimbursement management interface for organising expense records"
                loading="eager"
                priority
                width={970}
                height={675}
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
          SECTION 2 — WHAT IS EXPENSE REIMBURSEMENT SOFTWARE?
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is Expense <span className="gradient-text">Reimbursement Software?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7' }}>
            Expense reimbursement software helps businesses organise employee expense claims and reimbursement records through a structured system. It gives HR and finance teams a more consistent way to manage expense-related information instead of relying entirely on scattered spreadsheets, messages and files.
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
              Still Managing Employee Expenses Through <span className="gradient-text">Spreadsheets and Messages?</span>
            </h2>
            <p className="pain-solution__pain-p">
              A few expense claims may be easy to handle. But when multiple employees submit business expenses, finding the right information, keeping records organised and following up on claims can take more time than expected.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Claims Are Hard to Track
              </h3>
              <p className="pain-solution__card-sol">
                Expense details can end up across emails, messages, spreadsheets and separate records.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Supporting Records Get Missed
              </h3>
              <p className="pain-solution__card-sol">
                Finding the relevant expense information can take longer when records are not organised consistently.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                More Employees, More Admin
              </h3>
              <p className="pain-solution__card-sol">
                As your workforce grows, maintaining a consistent approach to reimbursement records becomes increasingly important.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Give Your Team a More Organised Way to Manage Reimbursements
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              Keep reimbursement information within HRVico's HRMS environment instead of relying entirely on disconnected records and manual processes.
            </p>
          </div>

          <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--large">
              <span>See Reimbursements in Action →</span>
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
              Make Employee Expense <span className="gradient-text">Management More Organised</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div className="feature-box">
              <h3 className="feature-box__title">Reimbursement Records</h3>
              <p className="feature-box__desc">
                Keep employee reimbursement information organised within your HRMS.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Expense Information</h3>
              <p className="feature-box__desc">
                Maintain a more structured approach to business expense records.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Supporting Documentation</h3>
              <p className="feature-box__desc">
                Keep relevant expense documentation organised through the available HRVico workflow.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Connected HR Operations</h3>
              <p className="feature-box__desc">
                Manage reimbursement activities as part of your wider employee management process.
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
              See Reimbursements Within <span className="gradient-text">Your HRVico Workflow</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              HRVico brings Reimbursements into its wider HRMS environment, helping your team manage expense-related information alongside other HR operations.
            </p>
          </div>

          <div style={{ textAlign: 'center', position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
            <Image
              src="/assets/images/Group 237586 1.webp"
              alt="HRVico reimbursement management dashboard within the HRMS platform"
              width={970}
              height={675}
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 16px 36px rgba(108, 63, 197, 0.14))' }}
            />
            {/* 3 Callout Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Reimbursement Records
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Expense Information
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
          SECTION 6 — BUILT FOR GROWING BUSINESSES & ROLES
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
              <p className="role-card-item__desc">Create an organised approach to employee expenses as your team grows.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Small Business</h3>
              <p className="role-card-item__desc">Keep reimbursement records structured without relying entirely on scattered spreadsheets.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>SME</h3>
              <p className="role-card-item__desc">Bring employee expense management into your wider HR process.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Growing Business</h3>
              <p className="role-card-item__desc">Maintain a consistent approach to reimbursement records as your workforce expands.</p>
            </div>
          </div>

          {/* User Roles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>HR &amp; Admin</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Manage reimbursement-related information through the tools and permissions available in HRVico.</p>
            </div>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employees</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Access relevant employee information through your HRVico account, according to available features and permissions.</p>
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
              Expense Reimbursement Software for <span className="gradient-text">Businesses Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            From startups and small businesses to SMEs and growing organisations, HRVico gives Indian businesses a central HRMS environment for organising employee reimbursement information and related HR records.
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
          SECTION 8 — STILL TRACKING EMPLOYEE EXPENSES MANUALLY? (COMPARISON)
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Still Tracking Employee <span className="gradient-text">Expenses Manually?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Spreadsheets and separate records may work for a small team. But as reimbursement claims increase, keeping expense information organised and finding the right records can become more difficult.
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Expense details across separate files</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Reimbursement information within the HRMS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Manual organisation of expense records</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>A more structured reimbursement workflow</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Supporting information spread across different places</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>A central environment for relevant HR records</td>
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
              <span>Explore Reimbursement Management →</span>
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
              Reimbursements Connect With Your <span className="gradient-text">Other HR Operations</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Employee expenses are one part of the wider employee management process. HRVico brings Reimbursements into the same HRMS environment as other everyday HR activities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employee Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee profiles and workforce information organised alongside reimbursement activities.</p>
              <Link href="/features/employee-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Employee Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Attendance Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Manage attendance within your wider HR operations.</p>
              <Link href="/features/attendance-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Attendance →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Leave Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee leave information within the same HRMS environment.</p>
              <Link href="/features/leave-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Leave Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Payroll Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep payroll within your wider employee management workflow.</p>
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
              Choose a plan based on your team size and the HR features your business needs. Review the current plan details to confirm Reimbursements functionality before subscribing.
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
              <p className="step-box__desc">Verify your email using the OTP process.</p>
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
              <p className="step-box__desc">Add your business details and create your administrator account.</p>
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
              <h3 className="step-box__title">Explore Reimbursements</h3>
              <p className="step-box__desc">Open your HRVico dashboard and explore the reimbursement functionality available in your selected plan.</p>
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
      <FAQAccordion faqs={reimbursementManagementFaqs} title="Employee Reimbursement Software FAQs" />

      {/* =========================================================================
          SECTION 13 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Give Employee Reimbursements a <span className="gradient-text">More Organised Process</span>
            </h2>
            <p className="final-cta__subtitle">
              Spend less time chasing scattered expense records and more time running your business. Explore how HRVico fits reimbursement management into your wider HR workflow.
            </p>
            <div className="final-cta__actions">
              <HomeBookDemoBtn className="btn btn--primary btn--large" />
              <Link href="/pricing" className="btn btn--secondary btn--large">
                <span>Compare Plans</span>
              </Link>
            </div>
            <p className="final-cta__note">
              Find the plan that fits your business needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}