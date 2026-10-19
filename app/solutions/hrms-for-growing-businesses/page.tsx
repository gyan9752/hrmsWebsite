import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'HRMS for Growing Businesses in India | HRVico',
  description:
    'Manage employee records, attendance and leave as your business grows. Explore HRVico HRMS plans for growing teams in India.',
  alternates: {
    canonical: 'https://hrvico.com/solutions/hrms-for-growing-businesses/',
  },
  openGraph: {
    title: 'HRMS Software for Growing Businesses | HRVico',
    description:
      'As your team grows, keep employee information and everyday HR processes organised with HRVico.',
    url: 'https://hrvico.com/solutions/hrms-for-growing-businesses/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-hrms-for-growing-businesses-india-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS software for growing businesses in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Software for Growing Businesses | HRVico',
    description:
      'As your team grows, keep employee information and everyday HR processes organised with HRVico.',
    images: ['https://hrvico.com/assets/images/hrvico-hrms-for-growing-businesses-india-og.webp'],
  },
};

const growingFaqs = [
  {
    question: 'What is HRMS software for growing businesses?',
    answer:
      'HRMS software helps growing businesses organise employee information and everyday HR processes through one digital system. Depending on the product and subscription, it may include employee records, attendance, leave and payroll.',
  },
  {
    question: 'Why does a growing business need HRMS software?',
    answer:
      'As the workforce expands, maintaining employee records and routine HR activities manually can become more difficult. An HRMS provides a structured way to manage workforce information and everyday HR tasks.',
  },
  {
    question: 'Which HRMS software is suitable for growing businesses in India?',
    answer:
      'The right HRMS depends on your employee count, budget and required features. Compare employee management, attendance, leave, payroll availability, reporting and subscription limits before selecting a solution.',
  },
  {
    question: 'How much does HRVico cost for a growing business?',
    answer:
      "HRVico's previously reviewed pricing lists Free at ₹0 per month for up to 5 employees, Basic at ₹999 per month for up to 25 employees, Standard at ₹1,999 per month for up to 50 employees, and Premium at ₹3,999 per month for up to 100 employees. Check the current pricing page for the latest terms.",
  },
  {
    question: 'Can HRVico manage attendance and leave?',
    answer:
      'HRVico lists Attendance Management and Leave Management among its HRMS features. Check your chosen subscription plan for availability and specific functionality.',
  },
  {
    question: 'Does HRVico include payroll management?',
    answer:
      'Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed. Verify current subscription details before purchasing.',
  },
  {
    question: 'Can HRVico support a business as employee numbers increase?',
    answer:
      'HRVico offers subscription options for different employee counts. Review the available plans as your workforce and HR requirements change. Businesses exceeding the published limits should enquire about a suitable higher-capacity option.',
  },
  {
    question: 'How do I choose the right HRMS plan for my business?',
    answer:
      'Start by identifying your current employee count, the HR tasks you need to manage and any features you expect to need as your business grows. Compare the plans or book a demo to discuss your requirements.',
  },
];

export default function HRMSForGrowingBusinessesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: growingFaqs.map((faq) => ({
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
        name: 'Solutions',
        item: 'https://hrvico.com/solutions/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'HRMS for Growing Businesses',
        item: 'https://hrvico.com/solutions/hrms-for-growing-businesses/',
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
              <span>HRMS FOR GROWING BUSINESSES</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Your Business Is Growing. Is Your <span className="gradient-text">HR Keeping Up?</span>
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
              Bring employee information, attendance and leave management into one organised HRMS with HRVico.
            </p>

            <p
              className="hero__subtitle"
              data-animate="fade-up"
              style={{ maxWidth: '820px', margin: '0 auto 32px' }}
            >
              Growing a business brings new opportunities—and new responsibilities. More people join your
              team, employee records increase, and everyday HR tasks become harder to manage through
              separate spreadsheets and messages. What worked when your team was smaller may no longer
              work as smoothly today. HRVico helps you bring employee information and everyday HR
              activities into one platform, giving your business a more organised way to manage its
              growing workforce.
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
                Compare plans based on your employee count and required features.
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
                alt="HRVico HRMS dashboard for growing businesses managing employee information and HR activities"
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
              What Is HRMS Software <span className="gradient-text">for Growing Businesses?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            HRMS software for growing businesses helps organisations manage employee information and
            everyday human resource activities through one digital platform. Depending on the
            software and subscription, this may include employee records, attendance, leave management,
            payroll and other workforce processes.
          </p>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', fontWeight: 600 }}>
            HRVico provides a central HRMS environment with subscription options for different
            employee counts, helping businesses organise their HR activities as their workforce
            expands.
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
              More People Shouldn&apos;t Mean <span className="gradient-text">More HR Chaos</span>
            </h2>
            <p className="pain-solution__pain-p">
              As your business expands, the number of employee records, attendance entries and leave
              requests grows too. When these activities depend on scattered files and manual follow-ups,
              maintaining a consistent process can become increasingly difficult.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Employee Records Keep Increasing
              </h3>
              <p className="pain-solution__card-sol">
                New hires mean more employee information to collect, maintain and find when needed.
              </p>
            </div>

            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Everyday HR Tasks Take More Time
              </h3>
              <p className="pain-solution__card-sol">
                Attendance, leave information and employee records require ongoing attention as the team
                expands.
              </p>
            </div>

            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Old Processes Struggle to Keep Up
              </h3>
              <p className="pain-solution__card-sol">
                Spreadsheets and disconnected records can become harder to maintain consistently as the
                workforce grows.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Give Your Growing Team a More Organised HR Process
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              HRVico helps businesses manage employee information and everyday HR activities through one
              HRMS environment. Choose the features that meet your current needs and review your plan
              as your business develops.
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
              The HR Tools Your <span className="gradient-text">Growing Business Needs</span>
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
                  Explore payroll functionality available in eligible HRVico plans as your business&apos;s
                  salary-related requirements develop.
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
              Build Better HR Processes as <span className="gradient-text">Your Business Expands</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                One Place for Workforce Information
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Reduce dependence on scattered records by keeping employee information within your HRMS environment.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                More Consistent Everyday Processes
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Bring employee information, attendance and leave into a central system rather than managing every task separately.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Plans for Different Team Sizes
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Choose a subscription based on your current employee count and the features your business needs.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Role-Based Experiences
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                HRVico offers Super Admin, HR/Admin and Employee experiences, with access depending on assigned roles and permissions.
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
          SECTION 6 — INDUSTRY USE CASES
          ========================================================================= */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              HRMS for Growing Businesses <span className="gradient-text">Across Different Industries</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>IT and Professional Services</h3>
              <p className="role-card-item__desc">Organise workforce information as your team and client responsibilities expand.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Manufacturing and Trading</h3>
              <p className="role-card-item__desc">Maintain employee information and everyday HR records as your workforce grows.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Retail and Distribution</h3>
              <p className="role-card-item__desc">Keep employee records and related HR activities structured as your operations expand.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Agencies and Service Businesses</h3>
              <p className="role-card-item__desc">Bring employee information and everyday HR processes into one organised environment.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo for Your Business →</span>
            </HomeBookDemoBtn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — INDIA SEO SECTION
          ========================================================================= */}
      <section className="india-industry">
        <div className="container">
          <h2 className="india-industry__title">
              HRMS Software for Growing <span className="gradient-text">Businesses Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            Businesses across India need HR processes that can keep up with changing workforce requirements. As your organisation expands, maintaining employee information and everyday HR activities through separate records can become more difficult.
          </p>
          <p className="india-industry__p" style={{ marginBottom: '20px' }}>
            HRVico provides a central HRMS platform for organising employee information and related HR activities, with subscription options for different team sizes. Whether your business operates from one office or manages employees across locations, choose a plan that matches your workforce and the features your team needs.
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
          SECTION 8 — MANUAL VS HRVICO COMPARISON TABLE
          ========================================================================= */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Still Managing a Growing Workforce <span className="gradient-text">Through Separate Files?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Manual processes may work for a smaller team, but maintaining records and finding information can become more demanding as employee numbers increase.
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Different tools used for different HR activities</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Multiple HR functions within one platform</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#64748b', textAlign: 'center', marginTop: '24px', marginBottom: '28px' }}>
            HRVico brings employee management, attendance and leave into one HRMS environment, helping businesses organise everyday workforce information.
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
              Choose an HRMS Plan That Fits <span className="gradient-text">Your Growing Team</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '10px' }}>
              Your workforce and HR requirements may change as your business expands. Compare HRVico plans based on employee count and the functionality your team needs.
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
              <p className="step-box__desc">Add your business details and create your administrator account.</p>
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
              Choose the plan that fits your current workforce and HR requirements.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — FAQS
          ========================================================================= */}
      <FAQAccordion
        faqs={growingFaqs}
        title="Frequently Asked Questions About HRMS for Growing Businesses"
      />

      {/* =========================================================================
          SECTION 12 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Keep Your Business Moving as <span className="gradient-text">Your Team Grows</span>
            </h2>
            <p className="final-cta__subtitle">
              Your business is moving forward. Your HR processes should help you keep up, not create another layer of administration. Explore HRVico and find a practical way to organise employee information and everyday HR activities.
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
              Explore the features and subscription options that fit your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}