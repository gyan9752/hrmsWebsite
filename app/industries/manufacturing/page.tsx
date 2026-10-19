import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'HRMS Software for Manufacturing Companies in India | HRVico',
  description:
    'Manage employee records, attendance and leave with HRVico HRMS for manufacturing companies across India.',
  alternates: {
    canonical: 'https://hrvico.com/industries/manufacturing/',
  },
  openGraph: {
    title: 'HRMS for Manufacturing Companies | HRVico',
    description:
      'Organise workforce information and everyday HR activities with HRVico for manufacturing businesses and factory teams.',
    url: 'https://hrvico.com/industries/manufacturing/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-hrms-for-manufacturing-companies-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS software for manufacturing companies in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS for Manufacturing Companies | HRVico',
    description:
      'Organise workforce information and everyday HR activities with HRVico for manufacturing businesses and factory teams.',
    images: ['https://hrvico.com/assets/images/hrvico-hrms-for-manufacturing-companies-og.webp'],
  },
};

const manufacturingFaqs = [
  {
    question: 'What is HRMS software for manufacturing companies?',
    answer:
      'HRMS software helps manufacturing businesses organise employee information and everyday HR processes through one digital platform. Depending on the product and plan, it can include employee records, attendance, leave and payroll.',
  },
  {
    question: 'Why do manufacturing companies need HRMS software?',
    answer:
      'Manufacturing businesses need to maintain employee records and manage routine workforce administration alongside their operational priorities. An HRMS can provide a structured way to organise employee information and related HR activities.',
  },
  {
    question: 'Can HRVico manage attendance for manufacturing employees?',
    answer:
      'HRVico lists Attendance Management among its HRMS features. Review the current product and subscription details to confirm whether its attendance functionality meets your manufacturing workforce requirements.',
  },
  {
    question: 'Does HRVico support factory shift scheduling?',
    answer:
      'Confirm this capability with the HRVico product team before relying on it. Do not assume shift scheduling or automatic shift rotation is included unless the current product documentation confirms it.',
  },
  {
    question: 'Does HRVico support biometric attendance machines?',
    answer:
      'Check the current product documentation or book a demo to confirm whether your specific biometric device or attendance system is supported.',
  },
  {
    question: 'How much does HRVico cost for a manufacturing business?',
    answer:
      "The previously reviewed pricing lists Free at ₹0 per month for up to 5 employees, Basic at ₹999 per month for up to 25 employees, Standard at ₹1,999 per month for up to 50 employees, and Premium at ₹3,999 per month for up to 100 employees. Check the current pricing page for the latest terms.",
  },
  {
    question: 'Does HRVico include payroll management?',
    answer:
      'Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed. Verify current plan inclusions before purchasing.',
  },
  {
    question: 'Can HRVico support a growing manufacturing workforce?',
    answer:
      'HRVico offers subscription options for different employee counts. Compare available plans as your workforce and HR requirements change. Businesses exceeding the listed limits should enquire about an appropriate higher-capacity option.',
  },
  {
    question: 'How can a manufacturing company get started with HRVico?',
    answer:
      'Review the available plans, identify the HR features your workforce needs and create an account or book a demo to evaluate the platform.',
  },
];

export default function ManufacturingIndustryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: manufacturingFaqs.map((faq) => ({
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
        name: 'Manufacturing',
        item: 'https://hrvico.com/industries/manufacturing/',
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
              <span>HRMS FOR MANUFACTURING COMPANIES</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Your Production Team Is Busy. Your HR Process <span className="gradient-text">Should Keep Up.</span>
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
              Manage employee information, attendance and leave through one organised HRMS for your manufacturing business.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              Running a manufacturing business means keeping production, people and daily operations moving together. While your team focuses on meeting production requirements, HR still needs to maintain employee records, manage attendance information and keep leave details organised. When workforce information is scattered across spreadsheets, paper records and separate files, keeping everything updated becomes another challenge. HRVico brings everyday HR activities into one platform, helping manufacturing businesses organise workforce information and manage employee-related processes more consistently.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <HomeBookDemoBtn className="btn btn--primary btn--large hero__btn-primary">
                  <span>Book a Demo →</span>
                </HomeBookDemoBtn>
                <Link href="/pricing" className="btn btn--secondary btn--large hero__btn-secondary">
                  <span>Explore HRVico Plans</span>
                </Link>
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                Compare available features and plans for your workforce.
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
                alt="HRVico HRMS dashboard for manufacturing companies managing employee information and attendance records"
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
          SECTION 2 — DIRECT ANSWER / EXPLANATION
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is HRMS Software <span className="gradient-text">for Manufacturing Companies?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            HRMS software for manufacturing companies helps businesses organise employee information and everyday human resource processes through one digital platform. Depending on the software and subscription, it can include employee records, attendance, leave management, payroll and other workforce activities.
          </p>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', fontWeight: 600 }}>
            HRVico provides a central HRMS environment for managing employee information and related HR activities within a manufacturing organisation.
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
              Production Needs Attention. HR <span className="gradient-text">Records Do Too.</span>
            </h2>
            <p className="pain-solution__pain-p">
              In manufacturing, workforce administration can involve employees with different responsibilities and working patterns. As the team grows, keeping employee records, attendance information and leave details organised can become harder to manage through disconnected files.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Employee Records Are Spread Out
              </h3>
              <p className="pain-solution__card-sol">
                Employee information stored across separate files makes it harder to find and maintain the records HR needs.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Attendance Needs Consistent Tracking
              </h3>
              <p className="pain-solution__card-sol">
                Maintaining attendance information across a manufacturing workforce requires an organised process.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                HR Administration Keeps Growing
              </h3>
              <p className="pain-solution__card-sol">
                As employee numbers increase, routine recordkeeping and follow-ups can take more time away from other business priorities.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Bring Your Workforce Information Into One Organised System
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              HRVico helps manufacturing businesses organise employee information, attendance and leave through one HRMS environment. Review the available features to find the right fit for your workforce.
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
              The HRMS Essentials <span className="gradient-text">for Manufacturing Teams</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <Link href="/features/employee-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Employee Management</h3>
                <p className="feature-box__desc">
                  Keep employee profiles and workforce information organised in one place.
                </p>
              </div>
            </Link>
            <Link href="/features/attendance-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Attendance Management</h3>
                <p className="feature-box__desc">
                  Manage employee attendance records through your HRMS.
                </p>
              </div>
            </Link>
            <Link href="/features/leave-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Leave Management</h3>
                <p className="feature-box__desc">
                  Organise employee leave information and requests.
                </p>
              </div>
            </Link>
            <Link href="/features/payroll-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Payroll Management</h3>
                <p className="feature-box__desc">
                  Explore payroll functionality available in eligible HRVico plans to support your salary-related processes.
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
              Make Everyday Workforce Administration <span className="gradient-text">Easier to Organise</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                One Place for Employee Information
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Keep workforce records within a central HRMS environment instead of relying entirely on separate files.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                More Organised Attendance Records
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Manage employee attendance information through the available HRVico attendance functionality.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                A Structured Leave Process
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Keep employee leave information organised alongside other HR activities.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Plans for Different Workforce Sizes
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Compare subscription options based on your employee count and required functionality.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Find the Right Plan →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — MANUFACTURING TYPES
          ========================================================================= */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              HRMS for Different Types <span className="gradient-text">of Manufacturing Businesses</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Factory Operations</h3>
              <p className="role-card-item__desc">Organise employee information and everyday HR records for your workforce.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Industrial Manufacturing</h3>
              <p className="role-card-item__desc">Maintain employee records and attendance information as your organisation expands.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Engineering and Production Businesses</h3>
              <p className="role-card-item__desc">Bring employee information and related HR activities into one organised environment.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Small and Medium Manufacturing Enterprises</h3>
              <p className="role-card-item__desc">Choose an HRMS plan based on your workforce size and the features your business needs.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo for Your Manufacturing Business →</span>
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
              HRMS Software for Manufacturing <span className="gradient-text">Companies Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            Manufacturing businesses across India need practical ways to manage employee information alongside the demands of daily operations. As your workforce expands, maintaining attendance records, employee details and leave information through separate files can become more difficult.
          </p>
          <p className="india-industry__p" style={{ marginBottom: '20px' }}>
            HRVico provides a central HRMS platform for organising employee information and everyday HR activities, with subscription options for different workforce sizes. Whether your manufacturing business operates from one facility or has a growing team, compare the available features and plans to identify the right fit for your organisation.
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
              Still Managing Factory <span className="gradient-text">Workforce Records Manually?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Paper records and spreadsheets may work for a smaller workforce. As employee numbers increase, keeping information updated and finding the right records can become more demanding.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#ef4444' }}>Managing HR Manually</th>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#10B981' }}>With HRVico</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Employee details maintained across separate files</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Centralised employee information</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Attendance records managed separately</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Attendance management within the HRMS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Leave information tracked through different records</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>A more organised leave management process</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Different files used for everyday HR activities</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Multiple HR functions within one platform</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#64748b', textAlign: 'center', marginTop: '24px', marginBottom: '28px' }}>
            HRVico brings employee management, attendance and leave into one HRMS environment, helping manufacturing businesses organise everyday workforce information.
          </p>

          <div style={{ textAlign: 'center' }}>
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
              Choose an HRMS Plan for <span className="gradient-text">Your Manufacturing Business</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '10px' }}>
              Every manufacturing business has different workforce requirements. Compare HRVico plans based on your employee count and the features your HR team needs.
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
                Explore the included features to determine whether the plan fits your current requirements.
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
                An option for smaller teams that need additional employee capacity.
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
                Explore this plan if your business needs additional HR functionality, including payroll management.
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
                An option for businesses managing a larger workforce and needing additional plan capabilities.
              </p>
              <Link href="/pricing" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                Explore Premium →
              </Link>
            </div>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#64748b', textAlign: 'center', marginBottom: '28px' }}>
            Compare plan inclusions before choosing. Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Compare All Plans →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo →</span>
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
              Get Started With HRVico in <span className="gradient-text">3 Simple Steps</span>
            </h2>
          </div>

          <div className="homepage-steps__grid" data-stagger>
            <div className="step-box">
              <div className="step-box__num" style={{ background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#ffffff', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>01</div>
              <h3 className="step-box__title">Create Your Account</h3>
              <p className="step-box__desc">Verify your email and begin setting up your HRVico account.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num" style={{ background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#ffffff', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>02</div>
              <h3 className="step-box__title">Set Up Your Organisation</h3>
              <p className="step-box__desc">Add your company details and create your administrator account.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num" style={{ background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#ffffff', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>03</div>
              <h3 className="step-box__title">Organise Your HR Activities</h3>
              <p className="step-box__desc">Add employee information and explore the features available in your selected plan.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <Link href="/pricing" className="btn btn--primary btn--large">
              <span>Explore HRVico →</span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '14px', fontWeight: 500 }}>
              Choose a plan that fits your workforce and HR requirements.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={manufacturingFaqs} title="Frequently Asked Questions About HRMS for Manufacturing Companies" />

      {/* =========================================================================
          SECTION 12 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Keep Your Workforce Organised While <span className="gradient-text">Production Moves Forward</span>
            </h2>
            <p className="final-cta__subtitle">
              Your business needs its people and operations working together. Explore HRVico to find a more organised way to manage employee information and everyday HR activities.
            </p>
            <div className="final-cta__actions">
              <HomeBookDemoBtn className="btn btn--primary btn--large">
                <span>Book a Demo →</span>
              </HomeBookDemoBtn>
              <Link href="/pricing" className="btn btn--secondary btn--large">
                <span>Compare Pricing Plans</span>
              </Link>
            </div>
            <p className="final-cta__note">
              Explore the features and subscription options that fit your workforce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
