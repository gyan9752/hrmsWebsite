import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Payroll Management Software for Businesses | HRVico',
  description:
    'Simplify salary processing, payroll calculations and payslips with HRVico payroll management software for growing businesses.',
  alternates: {
    canonical: 'https://www.hrvico.com/features/payroll-management/',
  },
  openGraph: {
    title: 'Payroll Management Software | HRVico',
    description:
      'Manage salary processing and payroll records in one HRMS. Explore HRVico payroll management for your business.',
    url: 'https://www.hrvico.com/features/payroll-management/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://www.hrvico.com/assets/images/hrvico-payroll-management-software-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico payroll management software dashboard for salary processing and employee payroll records',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Management Software | HRVico',
    description:
      'Manage salary processing and payroll records in one HRMS. Explore HRVico payroll management for your business.',
    images: ['https://www.hrvico.com/assets/images/hrvico-payroll-management-software-og.webp'],
  },
};

const payrollManagementFaqs = [
  {
    question: 'What is payroll management software?',
    answer:
      'Payroll management software helps businesses manage salary calculations, deductions, payroll records and payslips through a structured system. It can reduce repetitive manual work and help HR teams keep payroll information organised.',
  },
  {
    question: 'What does HRVico payroll management software do?',
    answer:
      'HRVico provides payroll processing tools within its HRMS, including salary calculation, supported statutory deductions, payslip generation and bank-export functionality. The available functions depend on the current product and subscription plan.',
  },
  {
    question: 'How much does HRVico payroll management cost?',
    answer:
      'The published Standard plan costs ₹1,999 per month for up to 50 employees, and the Premium plan costs ₹3,999 per month for up to 100 employees. Both list Payroll Management among their included features. Check the live pricing page for current terms.',
  },
  {
    question: 'Is HRVico payroll software suitable for small businesses?',
    answer:
      'HRVico offers plans for different team sizes. Businesses should choose a plan that includes Payroll Management and matches their employee count and required features.',
  },
  {
    question: 'Can HRVico help manage payroll deductions?',
    answer:
      'HRVico\'s published feature list includes PF, ESIC and TDS deductions. Businesses should verify the applicable calculations, configuration options and reporting requirements with the HRVico team before relying on the software for a specific statutory obligation.',
  },
  {
    question: 'Can HRVico generate employee payslips?',
    answer:
      'Yes. HRVico\'s published feature list describes one-click payslip generation as part of its payroll capabilities. Confirm the available format and employee access options during a demo.',
  },
  {
    question: 'Does HRVico offer payroll in its Free plan?',
    answer:
      'The current published pricing page lists Payroll Management in Standard and Premium, but not in the Free or Basic plan. Check the current plan details before subscribing.',
  },
  {
    question: 'How can I see HRVico payroll before subscribing?',
    answer:
      'You can review the pricing page and request a demo to understand the payroll workflow, supported features and plan inclusions.',
  },
];

export default function PayrollManagementPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: payrollManagementFaqs.map((faq) => ({
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
        name: 'Payroll Management',
        item: 'https://www.hrvico.com/features/payroll-management/',
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
              <span>PAYROLL MANAGEMENT SOFTWARE</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Make Payroll Simpler. Give Your <span className="gradient-text">Team More Time.</span>
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
              Manage salary processing and payroll records in one connected HRMS.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px' }}>
              Payroll day shouldn't mean another round of spreadsheets, calculations and last-minute checks. HRVico helps your team manage payroll alongside employee and attendance information, so your salary process is easier to organise as your business grows.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  href="/pricing"
                  className="btn btn--primary btn--large hero__btn-primary"
                >
                  <span>Explore Payroll →</span>
                </Link>
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
                    <span>app.hrvico.com/payroll</span>
                  </div>
                </div>
                <div className="hero__mockup-body">
                  <Image
                    className="hero__mockup-img"
                    src="/assets/images/Super Admin 1.webp"
                    alt="HRVico payroll management software dashboard for salary processing and employee payroll records"
                    loading="eager"
                    priority
                    width={1000}
                    height={598}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT IS PAYROLL MANAGEMENT SOFTWARE?
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is Payroll <span className="gradient-text">Management Software?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7' }}>
            Payroll management software helps businesses organise salary calculations, employee pay records, deductions and payslips through a central system. HRVico brings payroll into the wider HRMS environment, helping businesses manage salary processing alongside employee and attendance information.
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
              Is Payroll Taking More Time <span className="gradient-text">Than It Should?</span>
            </h2>
            <p className="pain-solution__pain-p">
              Salary processing is a monthly responsibility. But when employee details, attendance records and salary calculations are handled separately, even routine payroll work can become difficult to manage.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Too Much Manual Work
              </h3>
              <p className="pain-solution__card-sol">
                Repeated calculations and manual updates can make payroll unnecessarily time-consuming.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Records in Different Places
              </h3>
              <p className="pain-solution__card-sol">
                Searching across employee files and attendance records makes payroll harder to organise.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Pressure Around Payday
              </h3>
              <p className="pain-solution__card-sol">
                When payroll tasks pile up near payday, HR has less time for final checks.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                More Employees, More to Manage
              </h3>
              <p className="pain-solution__card-sol">
                As your team grows, keeping salary and employee records organised becomes more important.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              A More Organised Way to Handle Payroll
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              HRVico brings payroll into your wider HRMS, helping your team manage employee information and payroll activities within a connected environment.
            </p>
          </div>

          <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <Link href="/pricing" className="btn btn--secondary btn--large">
              <span>Explore Payroll Management →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CORE FEATURES GRID (Single Line 4 Cards)
          ========================================================================= */}
      <section className="core-features" id="features">
        <div className="container">
          <div className="core-features__header" data-animate="fade-up">
            <h2 className="core-features__title">
              The Payroll Tools <span className="gradient-text">Your Business Needs</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div className="feature-box">
              <h3 className="feature-box__title">Salary Calculation</h3>
              <p className="feature-box__desc">
                Organise salary calculations through HRVico's payroll processing tools.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Payslip Generation</h3>
              <p className="feature-box__desc">
                Generate employee payslips through the payroll workflow.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Payroll Deductions</h3>
              <p className="feature-box__desc">
                Manage supported payroll deductions, including PF, ESIC and TDS.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box__title">Payroll Bank Export</h3>
              <p className="feature-box__desc">
                Prepare payroll bank-export information through supported payroll tools.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--large">
              <span>See HRVico Payroll in Action →</span>
            </a>
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
              See How Payroll Fits Into <span className="gradient-text">Your HR Workflow</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Payroll is easier to manage when employee information and attendance records are not handled in isolation. HRVico brings these HR operations together within one platform.
            </p>
          </div>

          <div style={{ textAlign: 'center', position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
            <Image
              src="/assets/images/Super Admin 1.webp"
              alt="HRVico payroll processing dashboard for managing employee salaries and payslips"
              width={1000}
              height={598}
              style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 16px 36px rgba(108, 63, 197, 0.14))' }}
            />
            {/* 3 Callout Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Salary Processing
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Payroll Records
              </span>
              <span style={{ padding: '8px 18px', background: '#F5F3FF', border: '1px solid rgba(108, 63, 197, 0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#6C3FC5' }}>
                ✓ Payslips
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
              Payroll for Growing Businesses and <span className="gradient-text">Everyday HR Teams</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '8px' }}>
              Whether you're setting up payroll for a small team or organising salary processing for a larger workforce, HRVico gives you a central HRMS environment to work from.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Startups</h3>
              <p className="role-card-item__desc">Build a more organised payroll process as your team takes shape.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Small Businesses</h3>
              <p className="role-card-item__desc">Keep employee and payroll records organised without relying on scattered files.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>SMEs</h3>
              <p className="role-card-item__desc">Manage payroll alongside your wider employee and attendance operations.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Growing Teams</h3>
              <p className="role-card-item__desc">Create a consistent process as payroll responsibilities increase.</p>
            </div>
          </div>

          {/* User Roles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>HR &amp; Admin</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Manage payroll and related HR operations according to assigned permissions.</p>
            </div>
            <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employees</h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>Access relevant employee information and payslips where supported by their account and plan.</p>
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
              Payroll Management Software for <span className="gradient-text">Businesses Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            From startups to established small and medium-sized businesses, Indian organisations need an organised way to manage employee salaries and payroll records. HRVico brings payroll into a broader HRMS that also supports employee management and attendance.
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
          SECTION 8 — STILL MANAGING PAYROLL ACROSS SPREADSHEETS? (COMPARISON)
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Still Managing Payroll <span className="gradient-text">Across Spreadsheets?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Spreadsheets may be enough for a very small team. But when employee details, attendance and salary calculations are maintained separately, payroll can become harder to review and manage.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#ef4444' }}>Traditional approach</th>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#10B981' }}>With HRVico</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Employee and payroll details in separate files</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Payroll within a wider HRMS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Repeated manual calculations</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Payroll processing tools</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Payslips prepared separately</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Payslip generation through payroll</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>More records to organise as teams grow</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Centralised HR and payroll environment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Explore Payroll Plans →</span>
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
              Payroll Works Better When HR <span className="gradient-text">Information Is Connected</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Salary processing depends on more than salary figures alone. Employee records and attendance information are part of the wider process.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employee Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep employee records organised alongside payroll operations.</p>
              <Link href="/features/employee-management" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Employee Management →
              </Link>
            </div>

            <div style={{ background: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Attendance Management</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Manage attendance as part of your wider HR and payroll workflow.</p>
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
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Employee Documents</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px' }}>Keep relevant employee records and documents organised.</p>
              <Link href="/features/employee-documents" style={{ color: 'var(--accent-purple)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                Explore Employee Documents →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — PRICING (PAYROLL ENABLED PLANS)
          ========================================================================= */}
      <section className="homepage-pricing" id="pricing">
        <div className="container">
          <div className="homepage-pricing__header" data-animate="fade-up">
            <h2 className="homepage-pricing__title">
              Choose a Plan <span className="gradient-text">That Includes Payroll</span>
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
              <span className="home-price-card__badge">Payroll Included</span>
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
              Get Started With HRVico <span className="gradient-text">in Three Steps</span>
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
              <h3 className="step-box__title">Choose a Payroll-Enabled Plan</h3>
              <p className="step-box__desc">Select a plan that includes Payroll Management, then access the available payroll tools.</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }} data-animate="fade-up">
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>View Payroll Plans →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary btn--large" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={payrollManagementFaqs} title="Payroll Management Software FAQs" />

      {/* =========================================================================
          SECTION 13 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Make Payroll Simpler. Give Your <span className="gradient-text">Team More Time.</span>
            </h2>
            <p className="final-cta__subtitle">
              Manage salary processing and payroll records in one connected HRMS.
            </p>
            <div className="final-cta__actions">
              <Link href="/pricing" className="btn btn--primary btn--large">
                <span>Explore Payroll Plans →</span>
              </Link>
              <HomeBookDemoBtn className="btn btn--secondary btn--large" />
            </div>
            <p className="final-cta__note">
              Plans available for growing teams
            </p>
          </div>
        </div>
      </section>
    </>
  );
}