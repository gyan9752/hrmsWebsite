import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';

export const metadata = {
  title: 'HRVICO — Intelligent HRMS Software Platform 2026',
  description:
    'The all-in-one professional HRMS platform designed to streamline payroll, automate attendance, and elevate employee experiences.',
  alternates: {
    canonical: 'https://hrvico.com',
  },
  openGraph: {
    title: 'HRVICO — Intelligent HRMS Software Platform 2026',
    description:
      'The all-in-one professional HRMS platform designed to streamline payroll, automate attendance, and elevate employee experiences.',
    url: 'https://hrvico.com',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/blogs_image_prev.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRVICO — Intelligent HRMS Software Platform 2026',
    description:
      'The all-in-one professional HRMS platform designed to streamline payroll, automate attendance, and elevate employee experiences.',
    images: ['https://hrvico.com/assets/images/blogs_image_prev.webp'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* UPGRADED HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <div className="hero__bg-gradient"></div>
          <div className="hero__bg-grid"></div>
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__orb hero__orb--3"></div>
        </div>

        <div className="container">
          <div className="hero__content">
            {/* Pill Badge */}
            <div className="hero__eyebrow" data-animate="fade-up">
              <span className="hero__eyebrow-pulse" aria-hidden="true"></span>
              <span>Intelligent All-in-One HRMS Platform</span>
            </div>

            {/* Upgraded Headline */}
            <h1 className="hero__title" data-animate="fade-up">
              Run payroll. Track attendance.<br />
              Manage your entire team.
              <span className="hero__title-sub">
                Without spreadsheets and HR chaos.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="hero__subtitle" data-animate="fade-up">
              HRVICO combines employee management, attendance, leave, payroll, documents, and performance into one intuitive platform—giving modern businesses complete clarity and control.
            </p>

            {/* Core Capability Chips */}
            <div className="hero__modules" data-animate="fade-up" aria-label="Core HRVICO Modules">
              <span className="hero__module-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Employee Management
              </span>
              <span className="hero__module-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Attendance
              </span>
              <span className="hero__module-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Leave
              </span>
              <span className="hero__module-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
                Payroll
              </span>
              <span className="hero__module-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Documents
              </span>
              <span className="hero__module-tag">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                Performance
              </span>
            </div>

            {/* CTAs and Friction Reducers */}
            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas">
                {/* Primary CTA */}
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

                {/* Secondary CTA */}
                <HomeBookDemoBtn className="hero__btn-secondary" />

                {/* Tertiary Link */}
                <Link
                  href="/features"
                  className="hero__link-tertiary"
                >
                  <span>Explore Product</span>
                  <span className="hero__link-arrow" aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Factual Friction Reducers */}
              <div className="hero__trust-strip">
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

            {/* Dashboard Showcase with Browser Chrome & Floating Micro-Stats */}
            <div className="hero__dashboard" data-animate="scale-in">
              <div className="hero__mockup-window">
                <div className="hero__mockup-header">
                  <div className="hero__mockup-dots" aria-hidden="true">
                    <span className="hero__mockup-dot hero__mockup-dot--red"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--yellow"></span>
                    <span className="hero__mockup-dot hero__mockup-dot--green"></span>
                  </div>
                  <div className="hero__mockup-url">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>app.hrvico.com/dashboard</span>
                  </div>
                  <div className="hero__mockup-status">
                    <span className="hero__eyebrow-pulse" style={{ width: '6px', height: '6px' }} aria-hidden="true"></span>
                    <span>Live</span>
                  </div>
                </div>
                <div className="hero__mockup-body">
                  <img
                    className="hero__mockup-img"
                    src="/assets/images/Group 237586 1.webp"
                    alt="HRVICO Unified HRMS Dashboard"
                    loading="eager"
                    fetchPriority="high"
                    width={1300}
                    height={720}
                  />
                </div>
              </div>

              {/* Floating micro-stat card 1: Payroll */}
              <div className="hero__floating-badge hero__floating-badge--left" aria-hidden="true">
                <div className="hero__floating-badge-icon hero__floating-badge-icon--purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <div className="hero__floating-badge-title">1-Click Payroll Automation</div>
                  <div className="hero__floating-badge-subtitle">Auto-calculated salary, tax &amp; payslips</div>
                </div>
              </div>

              {/* Floating micro-stat card 2: Attendance */}
              <div className="hero__floating-badge hero__floating-badge--right" aria-hidden="true">
                <div className="hero__floating-badge-icon hero__floating-badge-icon--green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="hero__floating-badge-title">Real-Time Attendance Sync</div>
                  <div className="hero__floating-badge-subtitle">Geofenced check-in &amp; leave tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / STATS */}
      <section className="social-proof" data-animate="fade-in">
        <div className="container">
          <p className="social-proof__label">TRUSTED BY INDUSTRY LEADERS WORLDWIDE</p>
          <div className="social-proof__stats" data-stagger>
            <div className="social-proof__stat">
              <div
                className="social-proof__stat-value"
                data-counter="500"
                data-counter-suffix="+"
              >
                0
              </div>
              <div className="social-proof__stat-label">Companies</div>
            </div>
            <div className="social-proof__stat">
              <div
                className="social-proof__stat-value"
                data-counter="100"
                data-counter-suffix="k+"
              >
                0
              </div>
              <div className="social-proof__stat-label">Employees Managed</div>
            </div>
            <div className="social-proof__stat">
              <div
                className="social-proof__stat-value"
                data-counter="99.9"
                data-counter-suffix="%"
                data-counter-decimals="1"
              >
                0
              </div>
              <div className="social-proof__stat-label">Uptime</div>
            </div>
            <div className="social-proof__stat">
              <div
                className="social-proof__stat-value"
                data-counter="4.9"
                data-counter-decimals="1"
              >
                0
              </div>
              <div className="social-proof__stat-label" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F7941D" stroke="#F7941D" strokeWidth="1" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                User Rating (4.9 / 5)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HRVICO ADVANTAGE */}
      <section className="section pain-points" id="advantage">
        <div className="container">
          <div className="section-header" data-animate="fade-up" style={{ textAlign: 'center' }}>
            <p className="section-eyebrow">Why HRVICO</p>
            <h2 className="section-title">
              The <span className="gradient-text">Advantage</span> of a Unified Platform
            </h2>
            <p className="section-subtitle">
              Experience seamless operations, eliminate manual tasks, and make data-driven decisions effortlessly.
            </p>
          </div>

          <div className="pain-points__grid" data-stagger>
            <div className="pain-card">
              <div className="pain-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="pain-card__title">Automated Workflows</h3>
              <p className="pain-card__desc">
                Free your HR team from repetitive tasks. Automate attendance tracking, payroll calculations, and leave approvals seamlessly.
              </p>
            </div>

            <div className="pain-card">
              <div className="pain-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="pain-card__title">Unmatched Security</h3>
              <p className="pain-card__desc">
                Your data is secured with enterprise-grade encryption. Ensure compliance and protect sensitive employee information at all times.
              </p>
            </div>

            <div className="pain-card">
              <div className="pain-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="pain-card__title">Actionable Analytics</h3>
              <p className="pain-card__desc">
                Leverage real-time dashboards to gain insights into attendance trends, performance metrics, and workforce distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES */}
      <section className="section section--alt dashboard-preview" id="capabilities">
        <div className="container">
          <div className="section-header" data-animate="fade-up" style={{ textAlign: 'center' }}>
            <p className="section-eyebrow">Platform Capabilities</p>
            <h2 className="section-title">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="section-subtitle">
              From onboarding to offboarding, discover a comprehensive suite of tools built for modern enterprises.
            </p>
          </div>

          <div className="dashboard-preview__visual" data-animate="scale-in">
            <div className="dashboard-preview__glow"></div>
            <img
              className="dashboard-preview__image"
              src="/assets/images/Powerful Analytics at Your Fingertips.webp"
              alt="HRVICO comprehensive workforce analytics dashboard"
              loading="lazy"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} data-animate="fade-up">
            <Link href="/features" className="btn btn--secondary btn--large">
              See All Features →
            </Link>
          </div>
        </div>
      </section>

      {/* BUILT FOR EVERY ROLE */}
      <section className="section how-it-works" id="roles-teaser">
        <div className="container">
          <div className="section-header" data-animate="fade-up" style={{ textAlign: 'center' }}>
            <p className="section-eyebrow">Multi-Role Architecture</p>
            <h2 className="section-title">
              Designed for <span className="gradient-text">Every Role</span>
            </h2>
            <p className="section-subtitle">
              A tailored experience whether you are managing the entire organization or simply checking your payslip.
            </p>
          </div>

          <div className="how-it-works__steps" data-stagger>
            <div className="step-card" style={{ textAlign: 'center' }}>
              <div className="step-card__icon" style={{ margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M8 10h.01" />
                  <path d="M16 10h.01" />
                  <path d="M8 14h.01" />
                  <path d="M16 14h.01" />
                </svg>
              </div>
              <h3 className="step-card__title">Super Admin</h3>
              <p className="step-card__desc">
                Complete command center for multi-company management and platform oversight.
              </p>
            </div>

            <div className="step-card" style={{ textAlign: 'center' }}>
              <div className="step-card__icon" style={{ margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="step-card__title">Admin</h3>
              <p className="step-card__desc">
                Powerful automation for payroll, attendance, and complete employee lifecycle management.
              </p>
            </div>

            <div className="step-card" style={{ textAlign: 'center' }}>
              <div className="step-card__icon" style={{ margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="step-card__title">Employee</h3>
              <p className="step-card__desc">
                Intuitive self-service portal for one-tap attendance, leave requests, and payslips.
              </p>
            </div>
          </div>

          <div className="how-it-works__cta" data-animate="fade-up" style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/roles" className="btn btn--primary btn--large">
              View Role Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQAccordion />
    </>
  );
}
