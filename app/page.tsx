import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import RoleSwitcher from '@/components/RoleSwitcher';

export const metadata = {
  title: 'HRMS Software in India | HRVico',
  description:
    'HRMS software in India for employee, attendance, leave and payroll management. Start free with HRVico.',
  alternates: {
    canonical: 'https://hrvico.com/',
  },
  openGraph: {
    title: 'HRMS Software in India | HRVico',
    description:
      'HRMS software in India for employee, attendance, leave and payroll management. Start free with HRVico.',
    url: 'https://hrvico.com/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-hrms-software-india-dashboard.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS software dashboard for Indian businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Software in India | HRVico',
    description:
      'HRMS software in India for employee, attendance, leave and payroll management. Start free with HRVico.',
    images: ['https://hrvico.com/assets/images/hrvico-hrms-software-india-dashboard.webp'],
  },
};

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HRVico',
    url: 'https://hrvico.com',
    logo: 'https://hrvico.com/assets/images/hrvico-favicon.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9116011899',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'HRVico HRMS',
    operatingSystem: 'Web, Android, iOS',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '520',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="hero hero--home" id="hero">
        <div className="hero__bg">
          <div className="hero__bg-gradient"></div>
          <div className="hero__bg-grid"></div>
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__orb hero__orb--3"></div>
        </div>

        <div className="container">
          <div className="hero__content">
            {/* Small Eyebrow Label */}
            <div className="hero__eyebrow" data-animate="fade-up">
              <span className="hero__eyebrow-pulse" aria-hidden="true"></span>
              <span>Manage Employees, Attendance, Leave &amp; Payroll in One Place</span>
            </div>

            {/* H1 Headline */}
            <h1 className="hero__title" data-animate="fade-up">
              HRMS Software for <span className="gradient-text">Indian Businesses</span>
            </h1>

            {/* Supporting Microcopy */}
            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--accent-purple, #6C3FC5)',
                margin: '-6px auto 18px',
                letterSpacing: '-0.01em',
              }}
              data-animate="fade-up"
            >
              Free for up to 5 employees. Upgrade as your team grows.
            </p>

            {/* Paragraph */}
            <p className="hero__subtitle" data-animate="fade-up">
              HRVico helps businesses simplify everyday HR management by bringing employee records, attendance, leave, payroll and essential workforce operations together in one platform.
            </p>

            {/* CTAs & Friction Reducers */}
            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                {/* Primary CTA (Start Free) */}
                <a
                  href="https://app.hrvico.com/onboard-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large hero__btn-primary"
                >
                  <span>Start Free</span>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* Secondary CTA (Book a Demo) */}
                <HomeBookDemoBtn className="btn btn--secondary btn--large hero__btn-secondary" />
              </div>

              {/* Factual Friction Reducers (Zero Emojis, Pure SVGs) */}
              <div className="hero__trust-strip" style={{ marginTop: '22px' }}>
                <div className="hero__trust-item">
                  <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>₹0 for up to 5 employees</span>
                </div>
                <div className="hero__trust-dot" aria-hidden="true">•</div>
                <div className="hero__trust-item">
                  <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free setup</span>
                </div>
                <div className="hero__trust-dot" aria-hidden="true">•</div>
                <div className="hero__trust-item">
                  <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No hidden charges</span>
                </div>
              </div>
            </div>

            {/* Dashboard Showcase */}
            <div className="hero__dashboard" data-animate="scale-in" style={{ marginTop: '36px', maxWidth: '960px', margin: '36px auto 0' }}>
              <Image
                src="/assets/images/Powerful Analytics at Your Fingertips.webp"
                alt="HRVico HRMS software multi-device analytics dashboard"
                loading="eager"
                priority
                width={1200}
                height={700}
                sizes="(max-width: 768px) 100vw, 960px"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 20px 45px rgba(108, 63, 197, 0.16))',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — TRUST / VALUE STRIP
          ========================================================================= */}
      <section className="value-strip" aria-label="Core HR Capabilities">
        <div className="container">
          <div className="value-strip__header">
            <h2 className="value-strip__heading">
              Everything Your HR Team Needs for <span className="gradient-text">Everyday Workforce Management</span>
            </h2>
          </div>
          <div className="value-strip__grid">
            {/* 1. Employee Management */}
            <div className="value-strip__item">
              <div className="value-strip__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="value-strip__label">Employee Management</span>
            </div>

            {/* 2. Attendance Management */}
            <div className="value-strip__item">
              <div className="value-strip__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <span className="value-strip__label">Attendance Management</span>
            </div>

            {/* 3. Leave Management */}
            <div className="value-strip__item">
              <div className="value-strip__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <span className="value-strip__label">Leave Management</span>
            </div>

            {/* 4. Payroll Management */}
            <div className="value-strip__item">
              <div className="value-strip__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <span className="value-strip__label">Payroll Management</span>
            </div>

            {/* 5. Employee Documents */}
            <div className="value-strip__item">
              <div className="value-strip__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <span className="value-strip__label">Employee Documents</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — BUSINESS PAIN → SOLUTION
          ========================================================================= */}
      <section className="pain-solution" id="solution">
        <div className="container">
          <div className="pain-solution__intro-box" data-animate="fade-up">
            <h2 className="pain-solution__title">
              Still Managing HR Across Spreadsheets, Messages <span className="gradient-text">&amp; Multiple Tools?</span>
            </h2>
            <p className="pain-solution__pain-p">
              Employee records in one place. Attendance somewhere else. Leave requests in messages. Payroll data in spreadsheets. As your team grows, small HR tasks can quickly become difficult to manage.
            </p>
            <div className="pain-solution__switch">
              <h3 className="pain-solution__switch-heading">
                HRVico brings your everyday HR operations together.
              </h3>
              <p className="pain-solution__switch-p">
                Manage employees, attendance, leave, payroll, documents and other workforce activities from one connected HRMS platform — giving HR teams better visibility and employees a simpler way to manage their everyday HR tasks.
              </p>
            </div>
          </div>

          <div className="pain-solution__cards-grid" data-stagger>
            {/* Card 1 */}
            <div className="pain-solution__card">
              <div className="pain-solution__card-pain">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <span>Scattered Employee Information</span>
              </div>
              <div className="pain-solution__arrow-divider">
                <span>→</span>
              </div>
              <p className="pain-solution__card-sol">
                Keep employee information organised in one place.
              </p>
            </div>

            {/* Card 2 */}
            <div className="pain-solution__card">
              <div className="pain-solution__card-pain">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Manual HR Processes</span>
              </div>
              <div className="pain-solution__arrow-divider">
                <span>→</span>
              </div>
              <p className="pain-solution__card-sol">
                Simplify routine attendance, leave and workforce operations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="pain-solution__card">
              <div className="pain-solution__card-pain">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>Growing Teams</span>
              </div>
              <div className="pain-solution__arrow-divider">
                <span>→</span>
              </div>
              <p className="pain-solution__card-sol">
                Start small and use a plan that grows with your employee count.
              </p>
            </div>
          </div>

          {/* Pain / Solution Visual Showcase */}
          <div className="pain-solution__visual" data-animate="scale-in">
            <Image
              src="/assets/images/Admin 1.webp"
              alt="HRVico Admin HRMS employee management dashboard"
              loading="lazy"
              width={1000}
              height={707}
              sizes="(max-width: 768px) 100vw, 720px"
              className="pain-solution__img"
              style={{
                maxWidth: '720px',
                margin: '0 auto',
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 16px 36px rgba(108, 63, 197, 0.14))',
              }}
            />
          </div>

          {/* <div className="pain-solution__action" data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>See How HRVico Works</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
          </div> */}
                    <div className="pain-solution__action" style={{ marginTop: '40px' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>See How HRVico Works</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — CORE FEATURES (2 × 4 GRID)
          ========================================================================= */}
      <section className="core-features" id="features">
        <div className="container">
          <div className="core-features__header" data-animate="fade-up">
            <h2 className="core-features__title">
              One HRMS for Your <span className="gradient-text">Everyday HR Operations</span>
            </h2>
          </div>

          <div className="core-features__grid-2x4" data-stagger>
            {/* 1. Employee Management */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="feature-box__title">Employee Management</h3>
              <p className="feature-box__desc">
                Keep employee information and workforce records organised in one place.
              </p>
            </div>

            {/* 2. Attendance Management */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="feature-box__title">Attendance Management</h3>
              <p className="feature-box__desc">
                Manage employee attendance and make everyday workforce tracking easier.
              </p>
            </div>

            {/* 3. Leave Management */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="feature-box__title">Leave Management</h3>
              <p className="feature-box__desc">
                Manage leave requests, approvals and leave records from one platform.
              </p>
            </div>

            {/* 4. Payroll Management */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="feature-box__title">Payroll Management</h3>
              <p className="feature-box__desc">
                Keep payroll operations connected with your employee management process.
              </p>
            </div>

            {/* 5. Employee Documents */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3 className="feature-box__title">Employee Documents</h3>
              <p className="feature-box__desc">
                Keep important employee documents organised and accessible.
              </p>
            </div>

            {/* 6. Appraisals */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="feature-box__title">Appraisals</h3>
              <p className="feature-box__desc">
                Support employee appraisal and performance-related HR processes.
              </p>
            </div>

            {/* 7. Reimbursements */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="feature-box__title">Reimbursements</h3>
              <p className="feature-box__desc">
                Manage employee reimbursement activities more systematically.
              </p>
            </div>

            {/* 8. Holidays & Announcements */}
            <div className="feature-box">
              <div className="feature-box__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="feature-box__title">Holidays &amp; Announcements</h3>
              <p className="feature-box__desc">
                Keep employees informed about holidays, announcements and important updates.
              </p>
            </div>
          </div>

          {/* Product HRMS Dashboard Visual Showcase */}
          <div className="core-features__visual" data-animate="scale-in">
            <Image
              src="/assets/images/Super Admin 1.webp"
              alt="HRVico Super Admin HRMS analytics dashboard software"
              loading="lazy"
              width={1000}
              height={598}
              sizes="(max-width: 768px) 100vw, 720px"
              className="core-features__img"
              style={{
                maxWidth: '720px',
                margin: '0 auto',
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 16px 36px rgba(108, 63, 197, 0.14))',
              }}
            />
          </div>

          {/* <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>Explore All Features</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
          </div> */}

                    <div style={{ textAlign: 'center', marginTop: '40px' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              <span>Explore All Features</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — ROLE + BUSINESS SIZE
          ========================================================================= */}
      <RoleSwitcher />

      <section className="business-size-section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          {/* Business Size Section */}
          <div className="business-size-strip" data-animate="fade-up">
            <h3 className="business-size-strip__title">
              Built for Growing Businesses
            </h3>
            <div className="business-size-strip__pills">
              <div className="business-size-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Startups</span>
              </div>
              <div className="business-size-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span>Small Businesses</span>
              </div>
              <div className="business-size-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>SMEs</span>
              </div>
              <div className="business-size-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>Growing Businesses</span>
              </div>
            </div>
            <div>
              <Link href="/roles" className="btn btn--primary btn--large">
                <span>Find the Right HRVico Solution</span>
                <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — INDIA + INDUSTRY SEO
          ========================================================================= */}
      <section className="india-industry" id="industries">
        <div className="container">
          <div className="india-industry__header" data-animate="fade-up">
            <h2 className="india-industry__title">
              HRMS Software for <span className="gradient-text">Businesses Across India</span>
            </h2>
            <p className="india-industry__p">
              From startups and small businesses to growing organisations, HRVico helps businesses across India manage essential employee and HR operations from one platform.
            </p>
          </div>

          {/* Compact Industry Row */}
          <div className="industry-pills-row" data-animate="fade-up" aria-label="Industries Supported">
            <span className="industry-pill-tag">IT &amp; Software</span>
            <span className="industry-pill-tag">Manufacturing</span>
            <span className="industry-pill-tag">Education</span>
            <span className="industry-pill-tag">Healthcare</span>
            <span className="industry-pill-tag">Retail</span>
            <span className="industry-pill-tag">Hospitality</span>
            <span className="industry-pill-tag">Real Estate</span>
            <span className="industry-pill-tag">Agencies</span>
          </div>

          {/* SEO CTAs */}
         

          {/* Visual Showcase */}
          <div className="india-industry__showcase" data-animate="scale-in">
            <Image
              src="/assets/images/User.webp"
              alt="HRVico HRMS software multi-device platform for businesses across India"
              className="india-industry__img"
              loading="lazy"
              width={1000}
              height={666}
              sizes="(max-width: 768px) 100vw, 820px"
              style={{
                maxWidth: '820px',
                height: 'auto',
                margin: '0 auto',
                display: 'block',
              }}
            />
          </div>
           {/* <div className="india-industry__ctas" data-animate="fade-up">
            <Link href="/features#industries" className="btn btn--secondary btn--large">
              <span>Explore HRMS Solutions by Industry</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
            <Link href="#india-states" className="btn btn--secondary btn--large">
              <span>Explore HRMS Software by State</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
          </div> */}
                     <div className="india-industry__ctas" style={{ marginTop: '40px', marginBottom: 0 }} data-animate="fade-up">
            <Link href="/features#industries" className="btn btn--secondary btn--large">
              <span>Explore HRMS Solutions by Industry</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
            <Link href="#india-states" className="btn btn--secondary btn--large">
              <span>Explore HRMS Software by State</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — PRODUCT + PRICING
          ========================================================================= */}
      <section className="homepage-pricing" id="pricing">
        <div className="container">
          <div className="homepage-pricing__header" data-animate="fade-up">
            <h2 className="homepage-pricing__title">
              Simple HRMS Pricing That Grows <span className="gradient-text">With Your Team</span>
            </h2>
            <p className="homepage-pricing__microcopy">
              Choose a plan based on your team size and upgrade as your business grows.
            </p>
          </div>

                  <div className="homepage-pricing__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }} data-stagger>
            {/* 1. Free Plan */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">Free</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">0</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 5 employees</div>
              <ul className="home-price-card__features">
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Employee Information Management</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Attendance &amp; Leave Tracking</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Employee Self-Service Portal</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free Forever with No Setup Fee</span>
                </li>
              </ul>
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Start Free
              </a>
            </div>

            {/* 2. Basic Plan */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">Basic Plan</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 25 employees</div>
              <ul className="home-price-card__features">
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Attendance &amp; Leave Approvals</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Employee Documents &amp; Payslips</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Texting Chat Box</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Reports &amp; Analytics</span>
                </li>
              </ul>
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Get Started
              </a>
            </div>

            {/* 3. Standard Plan */}
            <div className="home-price-card home-price-card--featured">
              <span className="home-price-card__badge">Most Popular</span>
              <h3 className="home-price-card__name">Standard Plan</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">1,999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 50 employees</div>
              <ul className="home-price-card__features">
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Automated Payroll Management</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile Dashboard App</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>HR Automation &amp; Chat Box</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Multi-Admin Role Hierarchy</span>
                </li>
              </ul>
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Get Started
              </a>
            </div>

            {/* 4. Premium Plan */}
            <div className="home-price-card">
              <h3 className="home-price-card__name">Premium Plan</h3>
              <div className="home-price-card__price-row">
                <span className="home-price-card__currency">₹</span>
                <span className="home-price-card__num">3,999</span>
                <span className="home-price-card__period">/ month</span>
              </div>
              <div className="home-price-card__team-cap">For up to 100 employees</div>
              <ul className="home-price-card__features">
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Multi-Branch Management</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority Onboarding &amp; Support</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced Job Management</span>
                </li>
                <li className="home-price-card__feature-item">
                  <svg className="home-price-card__check" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Everything in Standard Plan</span>
                </li>
              </ul>
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Get Started
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <Link href="/pricing" className="btn btn--secondary btn--large">
              <span>Compare Plans &amp; Features</span>
              <span style={{ marginLeft: '6px' }} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — HOW IT WORKS (3 SIMPLE STEPS)
          ========================================================================= */}
      <section className="homepage-steps" id="how-it-works">
        <div className="container">
          <div className="homepage-steps__header" data-animate="fade-up">
            <h2 className="homepage-steps__title">
              Start Using HRVico in <span className="gradient-text">Three Simple Steps</span>
            </h2>
          </div>

          <div className="homepage-steps__grid" data-stagger>
            {/* Step 01 */}
            <div className="step-box">
              <div className="step-box__num">01</div>
              <h3 className="step-box__title">Verify Your Email</h3>
              <p className="step-box__desc">
                Enter your email and verify it using a one-time password.
              </p>
            </div>

            {/* Step 02 */}
            <div className="step-box">
              <div className="step-box__num">02</div>
              <h3 className="step-box__title">Set Up Your Organisation</h3>
              <p className="step-box__desc">
                Add your company details and create your default administrator account.
              </p>
            </div>

            {/* Step 03 */}
            <div className="step-box">
              <div className="step-box__num">03</div>
              <h3 className="step-box__title">Start Managing HR</h3>
              <p className="step-box__desc">
                Access your HRMS dashboard and start managing your workforce.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} data-animate="fade-up">
            <a
              href="https://app.hrvico.com/onboard-company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Start Free</span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUST SECTION — FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <FAQAccordion title="Frequently Asked Questions About HRMS Software" />

      {/* =========================================================================
          FINAL CTA SECTION
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Ready to Simplify <span className="gradient-text">Your HR Operations?</span>
            </h2>
            <p className="final-cta__subtitle">
              Bring your employees, attendance, leave and payroll management together with HRVico.
            </p>
            <div className="final-cta__actions">
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Start Free</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <HomeBookDemoBtn className="btn btn--secondary btn--large" />
            </div>
            <p className="final-cta__note">
              Start with up to 5 employees on the Free plan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
