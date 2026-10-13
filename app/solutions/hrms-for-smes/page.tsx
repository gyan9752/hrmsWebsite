import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'HRMS Software for SMEs in India | HRVico',
  description:
    'Simplify employee management, attendance and leave with HRVico HRMS for SMEs in India. Compare plans for your team.',
  alternates: {
    canonical: 'https://hrvico.com/solutions/hrms-for-smes/',
  },
  openGraph: {
    title: 'HRMS Software for SMEs | HRVico',
    description:
      'Organise workforce information and everyday HR processes with HRVico, built for small and medium-sized businesses.',
    url: 'https://hrvico.com/solutions/hrms-for-smes/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-hrms-for-smes-india-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS software for small and medium-sized businesses in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Software for SMEs | HRVico',
    description:
      'Organise workforce information and everyday HR processes with HRVico, built for small and medium-sized businesses.',
    images: ['https://hrvico.com/assets/images/hrvico-hrms-for-smes-india-og.webp'],
  },
};

const smeFaqs = [
  {
    question: 'What is HRMS software for SMEs?',
    answer:
      'HRMS software helps small and medium-sized enterprises organise employee information and everyday HR activities through one digital system. Depending on the product and plan, it may include employee records, attendance, leave and payroll.',
  },
  {
    question: 'Why do SMEs need HRMS software?',
    answer:
      'As a business expands, maintaining employee information and routine HR processes manually can become more difficult. An HRMS provides a structured way to organise workforce information and manage everyday HR activities.',
  },
  {
    question: 'Which HRMS software is suitable for SMEs in India?',
    answer:
      'The right HRMS depends on your employee count, budget and required functionality. Compare employee management, attendance, leave, payroll availability, reporting and subscription limits before choosing a solution.',
  },
  {
    question: 'How much does HRVico cost for SMEs?',
    answer:
      "HRVico's previously reviewed pricing lists Free at ₹0 per month for up to 5 employees, Basic at ₹999 per month for up to 25 employees, Standard at ₹1,999 per month for up to 50 employees, and Premium at ₹3,999 per month for up to 100 employees. Check the current pricing page for the latest terms.",
  },
  {
    question: 'Can HRVico manage employee attendance and leave?',
    answer:
      'HRVico lists Attendance Management and Leave Management among its HRMS features. Check the selected plan for availability and specific functionality.',
  },
  {
    question: 'Does HRVico include payroll management?',
    answer:
      'Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed. Confirm the current subscription details before purchasing.',
  },
  {
    question: 'Can HRVico support an SME as its workforce expands?',
    answer:
      'HRVico offers subscription options for different employee counts. Compare available plans as your workforce and HR requirements change. Businesses exceeding the listed employee limits should enquire about a suitable higher-capacity option.',
  },
  {
    question: 'How do I choose the right HRMS plan for my SME?',
    answer:
      'Start by identifying your workforce size, current HR processes and required features. Compare the available subscription plans or book a demo to discuss your requirements.',
  },
];

export default function HRMSForSMEsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: smeFaqs.map((faq) => ({
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
        name: 'HRMS for SMEs',
        item: 'https://hrvico.com/solutions/hrms-for-smes/',
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

      {/* SECTION 1 — HERO SECTION */}
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
              <span>HRMS FOR SMALL AND MEDIUM-SIZED BUSINESSES</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Your Business Has Grown. Your HR Process Should <span className="gradient-text">Grow With It.</span>
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

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              As your business grows, managing people becomes more involved. More employees mean more records to maintain, more attendance information to review and more HR tasks to keep organised. When these activities are spread across spreadsheets, messages and separate files, it becomes harder to maintain a consistent process. HRVico helps SMEs bring everyday HR activities into one platform, giving your team a more organised way to manage workforce information as the business moves forward.
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

            <div className="hero__dashboard" data-animate="scale-in" style={{ marginTop: '40px' }}>
              <div className="hero__mockup-window">
                <div className="hero__mockup-header">
                  <div className="hero__mockup-dots" aria-hidden="true">
                    <span className="hero__mockup-dot hero__mockup-dot--red"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--yellow"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--green"></span>
                  </div>
                  <div className="hero__mockup-url">
                    <span>app.hrvico.com/solutions/hrms-for-smes</span>
                  </div>
                </div>
                <div className="hero__mockup-body">
                  <Image
                    className="hero__mockup-img"
                    src="/assets/images/Super Admin 1.webp"
                    alt="HRVico HRMS dashboard for SMEs managing employee information, attendance and HR activities"
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

      {/* SECTION 2 — DIRECT ANSWER */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is HRMS <span className="gradient-text">Software for SMEs?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            HRMS software for small and medium-sized enterprises helps businesses organise employee information and everyday human resource processes through one digital platform. Depending on the software and subscription, this can include employee records, attendance, leave management, payroll and other workforce activities.
          </p>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', fontWeight: 600 }}>
            HRVico provides a central HRMS environment for managing employee information and HR activities, with subscription options for different team sizes.
          </p>
        </div>
      </section>

      {/* SECTION 3 — BUSINESS PAIN */}
      <section className="pain-solution" id="solution">
        <div className="container">
          <div className="pain-solution__intro-box" data-animate="fade-up">
            <h2 className="pain-solution__title">
              More Employees. More Records. <span className="gradient-text">More HR Work.</span>
            </h2>
            <p className="pain-solution__pain-p">
              The processes that worked for a smaller team can become harder to maintain as your business expands. HR needs a consistent way to manage employee information while the rest of the organisation focuses on customers, operations and growth.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Workforce Information Is Scattered
              </h3>
              <p className="pain-solution__card-sol">
                Employee details across separate files make it harder to find information and maintain organised records.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Everyday HR Tasks Keep Increasing
              </h3>
              <p className="pain-solution__card-sol">
                Attendance, leave information and employee records all require ongoing attention as your workforce expands.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Manual Processes Become Harder to Maintain
              </h3>
              <p className="pain-solution__card-sol">
                As more employees join, maintaining the same manual process can require more coordination and follow-up.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Bring Your HR Processes Into One Organised System
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              HRVico helps SMEs manage employee information and everyday HR activities within one HRMS environment. Choose the features that fit your current requirements and review your options as your business develops.
            </p>
          </div>

          <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>Explore HRVico Features →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CORE FEATURES */}
      <section className="core-features" id="features">
        <div className="container">
          <div className="core-features__header" data-animate="fade-up">
            <h2 className="core-features__title">
              The HRMS Features Your <span className="gradient-text">Growing Business Needs</span>
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

      {/* SECTION 5 — BENEFITS */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Make Everyday HR <span className="gradient-text">Easier to Organise</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                One Place for Workforce Information
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Reduce dependence on scattered employee records by keeping workforce information within your HRMS environment.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                More Consistent HR Processes
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Bring employee information, attendance and leave into a central system instead of managing every task separately.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Plans for Different Team Sizes
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Compare subscription options based on your employee count and the features your business requires.
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

      {/* SECTION 6 — INDUSTRIES */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              HRMS for SMEs <span className="gradient-text">Across Different Industries</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>IT and Professional Services</h3>
              <p className="role-card-item__desc">Organise employee information and everyday HR activities while your teams focus on client work.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Manufacturing and Trading</h3>
              <p className="role-card-item__desc">Maintain workforce information and relevant HR records as your organisation expands.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Retail and Distribution</h3>
              <p className="role-card-item__desc">Keep employee records and everyday HR processes structured across your growing workforce.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Agencies and Service Businesses</h3>
              <p className="role-card-item__desc">Bring employee information and related HR activities into one organised environment.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo for Your Business →</span>
            </HomeBookDemoBtn>
          </div>
        </div>
      </section>

      {/* SECTION 7 — INDIA SEO */}
      <section className="india-industry">
        <div className="container">
          <h2 className="india-industry__title">
              HRMS Software for <span className="gradient-text">SMEs Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            Small and medium-sized businesses across India need practical ways to manage their workforce without adding unnecessary administrative complexity. HRVico provides a central HRMS platform for organising employee information and everyday HR activities, with plans based on different employee counts.
          </p>
          <p className="india-industry__p" style={{ marginBottom: '20px' }}>
            Whether your business operates from one office or manages a growing workforce across locations, choose a plan that matches your current requirements and the features your team needs.
          </p>
          <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '28px' }}>
            Built for Indian businesses. Designed for growing teams.
          </p>
          <Link href="/hrms-software-2026" className="btn btn--secondary btn--large">
            <span>Explore HRMS Software in India →</span>
          </Link>
        </div>
      </section>

      {/* SECTION 8 — COMPARISON TABLE */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              Still Managing Workforce Records <span className="gradient-text">Across Separate Files?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Spreadsheets and separate records may work for a smaller team. As your workforce expands, maintaining consistent information and finding the right records can become more demanding.
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Attendance records handled separately</td>
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
            HRVico brings employee management, attendance and leave into one HRMS environment, helping SMEs organise their everyday workforce information.
          </p>

          <div style={{ textAlign: 'center' }}>
            <HomeBookDemoBtn className="btn btn--primary btn--large">
              <span>See How HRVico Works →</span>
            </HomeBookDemoBtn>
          </div>
        </div>
      </section>

      {/* SECTION 9 — PRICING */}
      <section className="homepage-pricing" id="pricing">
        <div className="container">
          <div className="homepage-pricing__header" data-animate="fade-up">
            <h2 className="homepage-pricing__title">
              Choose an HRMS Plan That <span className="gradient-text">Fits Your Business</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '10px' }}>
              As your business grows, your HR requirements may change. Compare HRVico plans based on your employee count and the features your organisation needs.
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
                Explore the included HR features to determine whether the plan suits your current needs.
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
                An option for smaller teams that need more employee capacity.
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
            Choose a plan based on your employee count and required features. Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed.
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

      {/* SECTION 10 — 3 STEPS */}
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
              <p className="step-box__desc">Add employee information and explore the features available in your selected subscription.</p>
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

      {/* SECTION 11 — FAQS */}
      <FAQAccordion faqs={smeFaqs} title="Frequently Asked Questions About HRMS for SMEs" />

      {/* SECTION 12 — FINAL CTA */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Give Your Growing Business a More <span className="gradient-text">Organised HR Process</span>
            </h2>
            <p className="final-cta__subtitle">
              Your business has enough to manage without employee information and everyday HR tasks becoming harder to keep track of. Explore HRVico and find a practical way to organise workforce information as your organisation grows.
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
