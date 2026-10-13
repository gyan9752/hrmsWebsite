import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'HRMS Software for Healthcare in India | HRVico',
  description:
    'Manage employee records, staff attendance and leave with HRVico HRMS for hospitals, clinics and healthcare organisations in India.',
  alternates: {
    canonical: 'https://hrvico.com/industries/healthcare/',
  },
  openGraph: {
    title: 'HRMS for Hospitals, Clinics & Healthcare Teams | HRVico',
    description:
      "Organise healthcare staff information and everyday HR activities with HRVico's HRMS platform.",
    url: 'https://hrvico.com/industries/healthcare/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-hrms-for-healthcare-india-og.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS software for hospitals, clinics and healthcare organisations in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS for Hospitals, Clinics & Healthcare Teams | HRVico',
    description:
      "Organise healthcare staff information and everyday HR activities with HRVico's HRMS platform.",
    images: ['https://hrvico.com/assets/images/hrvico-hrms-for-healthcare-india-og.webp'],
  },
};

const healthcareFaqs = [
  {
    question: 'What is HRMS software for healthcare organisations?',
    answer:
      'HRMS software helps hospitals, clinics and other healthcare providers organise employee information and everyday HR processes through one digital platform. Depending on the product and plan, it can include staff records, attendance, leave and payroll.',
  },
  {
    question: 'Why do hospitals and clinics need HRMS software?',
    answer:
      'Healthcare organisations need to maintain employee information and manage routine staff administration alongside their daily responsibilities. An HRMS provides a structured way to organise workforce information and everyday HR activities.',
  },
  {
    question: 'Can HRVico manage healthcare staff attendance?',
    answer:
      "HRVico lists Attendance Management among its HRMS features. Review the current product and subscription details to confirm whether its attendance functionality meets your organisation's requirements.",
  },
  {
    question: 'Can HRVico manage staff leave records?',
    answer:
      'HRVico lists Leave Management among its HRMS features. Check your chosen plan for availability and specific functionality.',
  },
  {
    question: 'Does HRVico support hospital duty rosters and shift scheduling?',
    answer:
      'Confirm these capabilities with the HRVico product team before relying on them. Do not assume automated duty rosters or clinical shift scheduling are included unless current product documentation confirms it.',
  },
  {
    question: 'Does HRVico manage patients or medical records?',
    answer:
      "This page focuses on HRVico's workforce management capabilities. Confirm with the product team whether patient records, clinical workflows or hospital information system integrations are supported before relying on them.",
  },
  {
    question: 'How much does HRVico cost for a healthcare organisation?',
    answer:
      "The previously reviewed pricing lists Free at ₹0 per month for up to 5 employees, Basic at ₹999 per month for up to 25 employees, Standard at ₹1,999 per month for up to 50 employees, and Premium at ₹3,999 per month for up to 100 employees. Check the current pricing page for the latest terms.",
  },
  {
    question: 'Does HRVico include payroll management?',
    answer:
      'Payroll Management is listed in the Standard and Premium plans in the pricing information previously reviewed. Verify current subscription details before purchasing.',
  },
  {
    question: 'How can a healthcare organisation get started with HRVico?',
    answer:
      'Review the available plans, identify the HR features your organisation needs and create an account or book a demo to evaluate the platform.',
  },
];

export default function HealthcareIndustryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: healthcareFaqs.map((faq) => ({
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
        name: 'Healthcare',
        item: 'https://hrvico.com/industries/healthcare/',
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
              <span>HRMS FOR HEALTHCARE ORGANISATIONS</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Your Healthcare Team Cares for People. We&apos;ll Help You Organise <span className="gradient-text">the HR Work.</span>
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
              Manage staff information, attendance and leave through one organised HRMS with HRVico.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              Healthcare teams have demanding responsibilities. Doctors, nurses, technicians, receptionists and administrative staff all play a part in keeping a healthcare organisation running. Behind that work, someone still needs to maintain employee records, manage attendance information and organise leave requests. When these details are scattered across spreadsheets, paper files and separate records, routine administration can become harder to manage. HRVico helps healthcare organisations bring everyday HR activities into one platform, making workforce information easier to organise while teams focus on their responsibilities.
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

            <div className="hero__dashboard" data-animate="scale-in" style={{ marginTop: '40px' }}>
              <div className="hero__mockup-window">
                <div className="hero__mockup-header">
                  <div className="hero__mockup-dots" aria-hidden="true">
                    <span className="hero__mockup-dot hero__mockup-dot--red"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--yellow"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--green"></span>
                  </div>
                  <div className="hero__mockup-url">
                    <span>app.hrvico.com/industries/healthcare</span>
                  </div>
                </div>
                <div className="hero__mockup-body">
                  <Image
                    className="hero__mockup-img"
                    src="/assets/images/Group 237586 1.webp"
                    alt="HRVico HRMS dashboard for healthcare organisations managing employee information and staff attendance"
                    loading="eager"
                    priority
                    width={970}
                    height={675}
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
              What Is HRMS Software <span className="gradient-text">for Healthcare Organisations?</span>
            </h2>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
            HRMS software for healthcare organisations helps hospitals, clinics and other healthcare providers organise employee information and everyday HR processes through one digital platform. Depending on the software and subscription, it can include staff records, attendance, leave management, payroll and other workforce activities.
          </p>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: '1.7', fontWeight: 600 }}>
            HRVico provides a central HRMS environment for managing employee information and related HR activities within a healthcare organisation.
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
              Caring for Patients Is Demanding Enough. Staff Administration <span className="gradient-text">Should Be Organised.</span>
            </h2>
            <p className="pain-solution__pain-p">
              Healthcare organisations depend on people working together. As the workforce grows, keeping staff records updated, maintaining attendance information and managing leave requests can create additional administrative work.
            </p>
          </div>

          <div className="pain-solution__cards-grid" data-stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Staff Records Are Scattered
              </h3>
              <p className="pain-solution__card-sol">
                Employee details stored across paper files and spreadsheets can take time to find and maintain.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Attendance Needs Consistent Records
              </h3>
              <p className="pain-solution__card-sol">
                Maintaining attendance information across different staff roles requires an organised process.
              </p>
            </div>
            <div className="pain-solution__card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                Leave Information Needs Attention
              </h3>
              <p className="pain-solution__card-sol">
                Keeping staff leave records organised becomes more difficult when information is maintained across different files and messages.
              </p>
            </div>
          </div>

          <div className="pain-solution__switch" style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3 className="pain-solution__switch-heading" style={{ textAlign: 'center' }}>
              Give Your Healthcare Team a More Organised HR Process
            </h3>
            <p className="pain-solution__switch-p" style={{ textAlign: 'center', maxWidth: '800px', margin: '10px auto 0' }}>
              HRVico helps healthcare organisations manage employee information, attendance and leave through one HRMS environment. Explore the available features to find the right fit for your organisation.
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
              The HRMS Essentials <span className="gradient-text">for Healthcare Teams</span>
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
                  Manage staff attendance records through your HRMS.
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
                  Explore payroll functionality available in eligible HRVico plans to support salary-related processes.
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
              Make Everyday Healthcare Staff Administration <span className="gradient-text">Easier to Organise</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" style={{ marginBottom: '40px' }}>
            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                One Place for Staff Information
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Keep employee profiles and workforce records within a central HRMS environment.
              </p>
            </div>

            <div style={{ background: '#F5F3FF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                More Organised Attendance Records
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                Manage staff attendance information through the available HRVico attendance functionality.
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
          SECTION 6 — HEALTHCARE TYPES
          ========================================================================= */}
      <section className="roles-business" id="business-size">
        <div className="container">
          <div className="roles-business__header" data-animate="fade-up">
            <h2 className="roles-business__title">
              HRMS for Different Types <span className="gradient-text">of Healthcare Organisations</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '36px' }}>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Hospitals</h3>
              <p className="role-card-item__desc">Organise employee information and everyday HR activities for clinical and administrative staff.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Clinics and Medical Centres</h3>
              <p className="role-card-item__desc">Maintain staff records and related HR information within one organised environment.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Diagnostic Centres and Laboratories</h3>
              <p className="role-card-item__desc">Manage employee information and attendance records for technicians and support staff.</p>
            </div>
            <div className="role-card-item">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Healthcare Service Providers</h3>
              <p className="role-card-item__desc">Bring workforce information and everyday HR processes into one HRMS platform.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <HomeBookDemoBtn className="btn btn--secondary btn--large">
              <span>Book a Demo for Your Healthcare Organisation →</span>
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
              HRMS Software for Healthcare <span className="gradient-text">Organisations Across India</span>
            </h2>
          <p className="india-industry__p" style={{ marginBottom: '16px' }}>
            Healthcare organisations across India need practical ways to manage staff information alongside their daily responsibilities. As teams expand, maintaining employee records, attendance and leave information through separate files can become more demanding.
          </p>
          <p className="india-industry__p" style={{ marginBottom: '20px' }}>
            HRVico provides a central HRMS platform for organising employee information and everyday HR activities, with subscription options for different workforce sizes. Whether you manage a hospital, clinic, diagnostic centre or healthcare service business, compare the available features and plans to find the right fit for your team.
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
              Still Managing Healthcare <span className="gradient-text">Staff Records Manually?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Paper records and spreadsheets may work for a smaller organisation. As staff numbers increase, maintaining consistent information and finding the right records can become more time-consuming.
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Staff details maintained across separate files</td>
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
            HRVico brings employee management, attendance and leave into one HRMS environment, helping healthcare organisations organise everyday workforce information.
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
              Choose an HRMS Plan for <span className="gradient-text">Your Healthcare Organisation</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '10px' }}>
              Every healthcare organisation has different workforce requirements. Compare HRVico plans based on your employee count and the features your administrative team needs.
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
                An option for smaller healthcare teams that need additional employee capacity.
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
                Explore this plan if your organisation needs additional HR functionality, including payroll management.
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
                An option for healthcare organisations managing a larger workforce and needing additional plan capabilities.
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
              <div className="step-box__num">01</div>
              <h3 className="step-box__title">Create Your Account</h3>
              <p className="step-box__desc">Verify your email and begin setting up your HRVico account.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num">02</div>
              <h3 className="step-box__title">Set Up Your Organisation</h3>
              <p className="step-box__desc">Add your healthcare organisation&apos;s details and create your administrator account.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num">03</div>
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
      <FAQAccordion faqs={healthcareFaqs} title="Frequently Asked Questions About HRMS for Healthcare" />

      {/* =========================================================================
          SECTION 12 — FINAL CTA
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Give Your Healthcare Team More Time <span className="gradient-text">for What Matters</span>
            </h2>
            <p className="final-cta__subtitle">
              Healthcare professionals have important work to do. Help your administrative team keep employee information and everyday HR activities organised with HRVico.
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
              Explore the features and subscription options that fit your organisation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
