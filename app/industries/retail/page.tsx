import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Retail HRMS Software in India | HRVico',
  description:
    'Simplify retail employee management, attendance and leave tracking with HRVico HRMS software for retail businesses across India.',
  alternates: {
    canonical: 'https://hrvico.com/industries/retail/',
  },
  openGraph: {
    title: 'HRMS Software for Retail Businesses | HRVico',
    description:
      'Organise employee records, attendance and leave management with HRVico HRMS for retail stores and growing retail businesses.',
    url: 'https://hrvico.com/industries/retail/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/retail-hrms-employee-management-dashboard.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico retail HRMS dashboard for employee management, attendance and leave tracking.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Software for Retail Businesses | HRVico',
    description:
      'Organise employee records, attendance and leave management with HRVico HRMS for retail stores and growing retail businesses.',
    images: ['https://hrvico.com/assets/images/retail-hrms-employee-management-dashboard.webp'],
  },
};

const retailFaqs = [
  {
    question: 'What is HRMS software for retail businesses?',
    answer:
      'Retail HRMS software helps businesses organise employee records and manage HR activities such as attendance, leave and payroll where available. It can provide a more structured alternative to manual paperwork and spreadsheets.',
  },
  {
    question: 'Is HRVico suitable for small retail stores?',
    answer:
      "HRVico offers a free plan for up to 5 employees and paid plans for larger teams. Review the plan inclusions to confirm that they meet your retail store's requirements.",
  },
  {
    question: 'Can HRVico manage attendance for retail employees?',
    answer:
      "Yes. Attendance management is listed among HRVico's core features. Available attendance methods and configuration options should be confirmed for your chosen plan.",
  },
  {
    question: 'Does HRVico provide payroll management for retail businesses?',
    answer:
      'HRVico lists payroll management under its Standard and Premium plans. Businesses should review the published feature list and confirm payroll requirements before subscribing.',
  },
  {
    question: 'Can I manage employees across multiple retail outlets?',
    answer:
      'HRVico lists multi-branch management under its Premium plan. Contact the HRVico team to confirm how the available functionality fits your store structure.',
  },
  {
    question: 'Can retail employees apply for leave through HRVico?',
    answer:
      'HRVico lists leave applications, leave balance tracking and approval workflows among its leave management features. The precise employee workflow depends on the platform configuration.',
  },
  {
    question: 'Does HRVico replace retail POS or inventory software?',
    answer:
      'No. HRVico is an HRMS platform focused on workforce and HR administration. It should not be treated as a replacement for point-of-sale, stock or inventory management software.',
  },
  {
    question: 'How much does HRVico cost for a retail business?',
    answer:
      "Published plans start at ₹0 per month for up to 5 employees, ₹999 per month for up to 25, ₹1,999 per month for up to 50, and ₹3,999 per month for up to 100 employees. Enterprise pricing is customised. Check the current pricing page for the latest details.",
  },
  {
    question: 'Is HRVico available for retail businesses across India?',
    answer:
      'HRVico is presented as a digital HRMS platform for businesses. Retail businesses should evaluate the available features, employee limits and support arrangements for their requirements.',
  },
];

export default function RetailIndustryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: retailFaqs.map((faq) => ({
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
        item: 'https://hrvico.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://hrvico.com/industries/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Retail',
        item: 'https://hrvico.com/industries/retail/',
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
              <span>HRMS SOFTWARE FOR RETAIL</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Manage Your Retail Team Without <span className="gradient-text">the HR Chaos</span>
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
              Retail HRMS Software for Smarter Workforce Management
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              From a single retail store to a growing chain, keeping employee records, attendance and leave organised shouldn&apos;t slow down your business. HRVico helps retail businesses bring essential HR activities into one digital platform, so your team can spend less time managing spreadsheets and more time supporting daily store operations.
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
                Start with the free plan for up to 5 employees. Compare available features before choosing a plan.
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
                src="/assets/images/User.webp"
                alt="HRVico retail HRMS dashboard for employee management, attendance and leave tracking."
                loading="eager"
                priority
                width={1000}
                height={666}
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
          SECTION 2 — DIRECT ANSWER / EXPLANATION
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is Retail <span className="gradient-text">HRMS Software?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            Retail HRMS software helps retail businesses organise employee information and manage HR activities such as attendance, leave and, where included, payroll. It provides a more structured alternative to maintaining separate spreadsheets and paper records.
          </p>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', fontWeight: 600 }}>
            HRVico offers employee management, attendance management, leave management and other HR modules for businesses looking to organise their workforce. The right plan depends on your employee count and required features.
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
              Growing Retail Teams Need <span className="gradient-text">Better HR Processes</span>
            </h2>
            <p className="pain-solution__pain-p">
              Retail operations move quickly. When employee information and attendance records are maintained manually, everyday HR tasks can become harder to coordinate.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Employee Records Across Stores
              </h3>
              <p className="pain-solution__card-sol">
                Employee details, designations and department information can become scattered across different files and locations.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Attendance Tracking Difficulties
              </h3>
              <p className="pain-solution__card-sol">
                Manually collecting and checking attendance records can create additional work for managers and HR teams.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Leave Requests and Approvals
              </h3>
              <p className="pain-solution__card-sol">
                Without a consistent process, leave requests and balances may be difficult to track across the workforce.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Supporting Business Growth
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              As a retail business hires more employees, its HR process needs to handle additional records and administrative tasks without unnecessary complexity.
            </p>
          </div>

          <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>Explore HRVico Features →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CORE FEATURES GRID (COMPACT 2x2 LAYOUT)
          ========================================================================= */}
      <section className="core-features" id="features">
        <div className="container">
          <div className="core-features__header" data-animate="fade-up">
            <h2 className="core-features__title">
              Everything Your Retail HR Process Needs <span className="gradient-text">in One Place</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <Link href="/features/employee-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Employee Management</h3>
                <p className="feature-box__desc">
                  Maintain employee profiles, designations, departments and workforce records in a centralised system.
                </p>
              </div>
            </Link>
            <Link href="/features/attendance-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Attendance Management</h3>
                <p className="feature-box__desc">
                  Review attendance logs and organise workforce attendance records using the available attendance features.
                </p>
              </div>
            </Link>
            <Link href="/features/leave-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Leave Management</h3>
                <p className="feature-box__desc">
                  Manage leave applications, leave balances and approval workflows according to your configured policies.
                </p>
              </div>
            </Link>
            <Link href="/features/payroll-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Payroll Management</h3>
                <p className="feature-box__desc">
                  Use HRVico&apos;s payroll module to support salary processing and related payroll activities on eligible plans.
                </p>
              </div>
            </Link>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>Explore All HRMS Features →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — BUSINESS BENEFITS SHOWCASE
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Make Everyday Retail HR <span className="gradient-text">Easier to Manage</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                More Organised Information
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Keep employee records structured instead of scattered across multiple files.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Clearer Attendance Records
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Make attendance information easier to review and track across your team.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                A Consistent Leave Process
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Give employees and HR teams a more structured way to manage leave applications and balances.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Room to Grow
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Compare plans as your employee count and HR requirements increase across outlets.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#94a3b8', textAlign: 'center', marginBottom: '28px' }}>
            HRVico supports HR administration. It is not a point-of-sale, inventory management or retail sales platform.
          </p>

          <div style={{ textAlign: 'center' }}>
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Find the Right Plan →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — RETAIL TYPES
          ========================================================================= */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              HR Management for Different Types <span className="gradient-text">of Retail Businesses</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Retail Stores and Showrooms</h3>
              <p className="role-card-item__desc">Organise employee information, attendance and leave for teams working in individual stores.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Supermarkets & Grocery</h3>
              <p className="role-card-item__desc">Maintain workforce records and review attendance information for your employees.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Fashion & Apparel Stores</h3>
              <p className="role-card-item__desc">Keep employee details, leave records and other essential HR information organised as your team changes.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Multi-Outlet Retail Chains</h3>
              <p className="role-card-item__desc">Explore plans that support multi-branch management when your business operates across multiple outlets.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo for Your Retail Business →</span>
            </HomeBookDemoBtn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — INDIA SEO
          ========================================================================= */}
      <section className="india-industry">
        <div className="container">
          <h2 className="india-industry__title">
              One Structured HR Process for Your <span className="gradient-text">Growing Retail Business</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            Whether your retail business operates in one city or across multiple Indian locations, a consistent HR process can make employee administration easier to organise.
          </p>
          <p className="india-industry__p" style={{ marginBottom: '20px' }}>
            HRVico is designed to help businesses manage essential HR activities through a centralised digital platform. Choose the plan that fits your workforce size, available features and business requirements.
          </p>
          <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '28px' }}>
            Built for Indian businesses. Designed for growing teams.
          </p>
          <Link href="/hrms-software-2026" className="btn btn--secondary btn--large">
            <span>Explore HRMS Software in India →</span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — TRADITIONAL VS HRVICO COMPARISON TABLE
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              What Changes When You <span className="gradient-text">Move Beyond Spreadsheets?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Manual processes can work for a smaller retail team. As employee numbers increase, keeping information updated and finding the right records can become more demanding.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#ef4444' }}>Manual Process</th>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#10B981' }}>With HRVico</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Separate files and spreadsheets</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Centralised employee management</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Manual collection and checking</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Digital attendance records</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Paper forms, messages or spreadsheets</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Digital leave applications and workflows</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Files stored across different locations</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Employee document management</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Separate calculations and records</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Payroll module on eligible plans</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <HomeBookDemoBtn className="btn btn--primary btn--large">
              <span>See How HRVico Works →</span>
            </HomeBookDemoBtn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — PRICING CARDS
          ========================================================================= */}
      <section className="homepage-pricing" id="pricing">
        <div className="container">
          <div className="homepage-pricing__header" data-animate="fade-up">
            <h2 className="homepage-pricing__title">
              Choose a Plan That Fits <span className="gradient-text">Your Retail Team</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '10px' }}>
              HRVico&apos;s published pricing provides options for different employee counts. Retail businesses should compare the included features as well as the price.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1240px', margin: '0 auto 36px' }}>
            {/* Free */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">FREE PLAN</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">0</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 5 employees</div>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '20px' }}>
                Very small retail teams looking to organize basic employee information.
              </p>
              <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                Start Free →
              </a>
            </div>

            {/* Basic */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">BASIC PLAN</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 25 employees</div>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '20px' }}>
                Small retail businesses needing employee management and attendance.
              </p>
              <Link href="/pricing" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                View Basic Plan →
              </Link>
            </div>

            {/* Standard */}
            <div className="home-price-card home-price-card--featured">
              <span className="home-price-card__badge">Popular</span>
              <h3 className="home-price-card__name">STANDARD PLAN</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">1,999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 50 employees</div>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '20px' }}>
                Growing retail teams needing HR management and payroll functionality.
              </p>
              <Link href="/pricing" className="btn btn--primary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                Explore Standard →
              </Link>
            </div>

            {/* Premium */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">PREMIUM PLAN</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">3,999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 100 employees</div>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '20px' }}>
                Larger teams needing multi-branch management across multiple outlets.
              </p>
              <Link href="/pricing" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                Explore Premium →
              </Link>
            </div>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#64748b', textAlign: 'center', marginBottom: '28px' }}>
            Free and Basic include employee management, attendance and leave features, but payroll is listed on Standard and Premium. Premium lists multi-branch management.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Compare Pricing →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo</span>
            </HomeBookDemoBtn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — 3 SIMPLE STEPS
          ========================================================================= */}
      <section className="homepage-steps" id="how-it-works">
        <div className="container">
          <div className="homepage-steps__header" data-animate="fade-up">
            <h2 className="homepage-steps__title">
              Start Organising Your Retail HR <span className="gradient-text">in Three Steps</span>
            </h2>
          </div>

          <div className="homepage-steps__grid" data-stagger>
            <div className="step-box">
              <div className="step-box__num">01</div>
              <h3 className="step-box__title">Choose Your Plan</h3>
              <p className="step-box__desc">Review the employee limit and included features to select a suitable plan for your retail business.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num">02</div>
              <h3 className="step-box__title">Set Up Your HR Records</h3>
              <p className="step-box__desc">Organise your employee information and configure the available HR workflows according to your business requirements.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num">03</div>
              <h3 className="step-box__title">Manage Everyday HR Activities</h3>
              <p className="step-box__desc">Use the included modules to manage employee records, attendance, leave and other supported HR tasks.</p>
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
          SECTION 11 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={retailFaqs} title="Frequently Asked Questions About Retail HRMS Software" />

      {/* =========================================================================
          SECTION 12 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Your Retail Team Deserves a More <span className="gradient-text">Organised HR Process</span>
            </h2>
            <p className="final-cta__subtitle">
              Don&apos;t let scattered employee records, attendance sheets and leave trackers make everyday administration harder than it needs to be. Explore HRVico and find a plan that fits your retail team&apos;s size and HR requirements.
            </p>
            <div className="final-cta__actions">
              <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
                <span>Start Free →</span>
              </a>
              <HomeBookDemoBtn className="btn btn--secondary btn--large" />
            </div>
            <p className="final-cta__note">
              Compare available features and employee limits before choosing your plan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
