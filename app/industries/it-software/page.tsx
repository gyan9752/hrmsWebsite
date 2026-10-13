import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'HRMS Software for IT Companies in India | HRVico',
  description:
    'Manage employee records, attendance and leave with HRVico HRMS for IT companies and software teams across India.',
  alternates: {
    canonical: 'https://hrvico.com/industries/it-software/',
  },
  openGraph: {
    title: 'HRMS for IT & Software Companies | HRVico',
    description:
      'Organise employee information and everyday HR activities with HRVico, built for growing IT companies and software teams.',
    url: 'https://hrvico.com/industries/it-software/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-hrms-for-it-software-companies-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS software for IT and software companies in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS for IT & Software Companies | HRVico',
    description:
      'Organise employee information and everyday HR activities with HRVico, built for growing IT companies and software teams.',
    images: ['https://hrvico.com/assets/images/hrvico-hrms-for-it-software-companies-og.webp'],
  },
};

const itFaqs = [
  {
    question: 'What is HRMS software for IT companies?',
    answer:
      'HRMS software helps IT companies organise employee information and everyday HR processes through one digital system. Depending on the product and plan, it can include employee records, attendance, leave and payroll.',
  },
  {
    question: 'Why do IT companies need HRMS software?',
    answer:
      'As technology teams grow, maintaining employee information and everyday HR records manually can become harder to manage. An HRMS provides a structured way to organise workforce information and related HR activities.',
  },
  {
    question: 'Is HRVico suitable for software development companies?',
    answer:
      "HRVico can be considered by software development companies that need to organise employee information and everyday HR processes. Review the available features and subscription plans to confirm that they meet your team's requirements.",
  },
  {
    question: 'Can HRVico manage attendance and leave for IT employees?',
    answer:
      'HRVico lists Attendance Management and Leave Management among its HRMS features. Check the selected plan for availability and specific functionality.',
  },
  {
    question: 'How much does HRVico cost for an IT company?',
    answer:
      "The previously reviewed pricing lists Free at ₹0 per month for up to 5 employees, Basic at ₹999 per month for up to 25 employees, Standard at ₹1,999 per month for up to 50 employees, and Premium at ₹3,999 per month for up to 100 employees. Check the current pricing page for the latest terms.",
  },
  {
    question: 'Does HRVico include payroll management?',
    answer:
      'Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed. Confirm current subscription details before purchasing.',
  },
  {
    question: 'Can HRVico support a growing technology team?',
    answer:
      'HRVico offers subscription options for different employee counts. Compare available plans as your workforce and HR requirements change.',
  },
  {
    question: 'Does HRVico integrate with project management or developer tools?',
    answer:
      'Check the current product documentation or book a demo to confirm whether specific integrations, such as project management or developer tools, are supported. Do not assume an integration is available without verification.',
  },
  {
    question: 'How can an IT company get started with HRVico?',
    answer:
      'Review the available plans, identify the features your team needs and create an account or book a demo to evaluate the platform.',
  },
];

export default function ITSoftwareIndustryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: itFaqs.map((faq) => ({
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
        name: 'IT & Software',
        item: 'https://hrvico.com/industries/it-software/',
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
              <span>HRMS FOR IT & SOFTWARE COMPANIES</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Build Great Software. Don&apos;t Get Buried <span className="gradient-text">in HR Administration.</span>
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
              Manage employee information, attendance and leave through one organised HRMS for your growing technology team.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              In an IT company, priorities can change quickly. Teams grow, new employees join and projects move forward. When these tasks are spread across spreadsheets, emails and separate files, keeping everything organised becomes another challenge for your team. HRVico brings everyday HR activities into one platform, helping IT companies organise workforce information while their teams focus on building, delivering and supporting technology.
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
                    <span>app.hrvico.com/industries/it-software</span>
                  </div>
                </div>
                <div className="hero__mockup-body">
                  <Image
                    className="hero__mockup-img"
                    src="/assets/images/Super Admin 1.webp"
                    alt="HRVico HRMS dashboard for IT companies managing employee information, attendance and leave"
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
          SECTION 2 — DIRECT ANSWER / EXPLANATION
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#ffffff', borderBottom: '1px solid rgba(108, 63, 197, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              What Is HRMS Software <span className="gradient-text">for IT Companies?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            HRMS software for IT companies helps technology businesses organise employee information and everyday HR processes through one digital platform. Depending on the software and subscription, it can include employee records, attendance, leave management, payroll and other workforce activities.
          </p>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', fontWeight: 600 }}>
            HRVico provides a central HRMS environment for managing employee information and related HR activities as technology teams grow.
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
              Your Team Builds Technology. Who Is Managing <span className="gradient-text">the HR Work?</span>
            </h2>
            <p className="pain-solution__pain-p">
              As an IT company grows, employee administration can become harder to coordinate. New hires need to be added, attendance records need attention, and leave information must remain organised while project teams focus on delivery.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Employee Information Is Scattered
              </h3>
              <p className="pain-solution__card-sol">
                Employee details stored across separate files make it harder to find information when HR or management needs it.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Attendance Needs Consistent Records
              </h3>
              <p className="pain-solution__card-sol">
                Maintaining attendance information across a growing workforce can add repetitive work to everyday HR administration.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Leave Requests Keep Coming
              </h3>
              <p className="pain-solution__card-sol">
                As the team expands, keeping leave information organised and accessible becomes increasingly important.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Give Your Technology Team a More Organised HR Process
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              HRVico helps you manage employee information, attendance and leave through one HRMS environment. Bring everyday workforce administration into a more consistent process without adding unnecessary complexity.
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
              The HRMS Essentials for IT <span className="gradient-text">& Software Teams</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <Link href="/features/employee-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Employee Management</h3>
                <p className="feature-box__desc">
                  Keep employee profiles and workforce information organised as your technology team grows.
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
                  Organise employee leave information and requests in one place.
                </p>
              </div>
            </Link>
            <Link href="/features/payroll-management" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="feature-box" style={{ height: '100%' }}>
                <h3 className="feature-box__title">Payroll Management</h3>
                <p className="feature-box__desc">
                  Explore payroll functionality available in eligible HRVico plans for your company&apos;s salary-related processes.
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
              Spend Less Time Organising HR Records. Focus <span className="gradient-text">on Your Team.</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                One Place for Employee Information
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Keep workforce information within a central HRMS environment instead of depending entirely on separate records.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                More Organised HR Administration
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Bring employee records, attendance and leave into one platform.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Plans for Different Team Sizes
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Compare subscription options based on your current employee count and required functionality.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Different Experiences for Different Roles
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
          SECTION 6 — IT BUSINESS TYPES
          ========================================================================= */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              HRMS for Different Types of IT <span className="gradient-text">& Software Businesses</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Software Development Companies</h3>
              <p className="role-card-item__desc">Organise employee information and everyday HR processes while teams focus on developing and delivering software.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>IT Services Companies</h3>
              <p className="role-card-item__desc">Maintain workforce information and HR records as teams support multiple clients and projects.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>SaaS Businesses</h3>
              <p className="role-card-item__desc">Keep employee administration organised as the company expands its product, engineering and support teams.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Technology Startups</h3>
              <p className="role-card-item__desc">Establish a consistent approach to employee records, attendance and leave as the team grows.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo for Your IT Company →</span>
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
              HRMS Software for IT <span className="gradient-text">Companies Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            Technology businesses across India need practical ways to manage employee information as their teams expand. Whether you run a software development company, an IT services business or a growing SaaS team, keeping HR records organised can support more consistent day-to-day administration.
          </p>
          <p className="india-industry__p" style={{ marginBottom: '20px' }}>
            HRVico provides a central HRMS environment for employee information and everyday HR activities, with subscription options based on employee count. Choose the features your team needs today and compare available plans as your organisation grows.
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
              Still Managing Your IT Team&apos;s <span className="gradient-text">HR Through Spreadsheets?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Spreadsheets may work for a small team. But as employee numbers increase, maintaining records and finding the right information can become more time-consuming.
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Multiple files used for everyday HR activities</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Multiple HR functions within one platform</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#64748b', textAlign: 'center', marginTop: '24px', marginBottom: '28px' }}>
            HRVico brings employee management, attendance and leave into one HRMS environment, helping IT businesses organise their everyday workforce information.
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
              Choose an HRMS Plan for <span className="gradient-text">Your IT Company</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '10px' }}>
              Whether you have a small development team or a growing technology workforce, choose a plan based on your employee count and the HR features your business needs.
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
                Explore the included HR features to determine whether the plan suits your current requirements.
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
                An option for smaller IT teams that need additional employee capacity.
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
                An option for larger technology teams that need additional plan capabilities.
              </p>
              <Link href="/pricing" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>
                Explore Premium →
              </Link>
            </div>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#64748b', textAlign: 'center', marginBottom: '28px' }}>
            Compare the current plan inclusions before choosing. Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed.
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
              Choose the plan that fits your team&apos;s size and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={itFaqs} title="Frequently Asked Questions About HRMS for IT Companies" />

      {/* =========================================================================
          SECTION 12 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Let Your Team Focus on Technology, <span className="gradient-text">Not HR Paperwork</span>
            </h2>
            <p className="final-cta__subtitle">
              Your team is building products, serving customers and solving technical problems. Keep everyday HR administration organised with a platform that brings employee information and essential HR activities together.
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
              Explore the HRVico features and plans that fit your technology team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
