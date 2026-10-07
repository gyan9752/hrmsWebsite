import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';

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
      {/* HERO SECTION */}
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
            <div className="hero__eyebrow" data-animate="fade-up">
              <span className="hero__eyebrow-icon">✨</span>
              Transform Your HR Operations
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Empower Your Workforce with<br />
              <span className="gradient-text">Intelligent</span> HR Management
            </h1>

            <p className="hero__subtitle" data-animate="fade-up">
              The all-in-one professional HRMS platform designed to streamline
              payroll, automate attendance, and elevate employee experiences.
            </p>

            <div className="hero__ctas" data-animate="fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <HomeBookDemoBtn />
              <Link
                href="/features"
                className="btn btn--secondary btn--large"
                style={{ minWidth: '200px', justifyContent: 'center', textAlign: 'center' }}
              >
                Explore Platform
              </Link>
            </div>

            <div className="hero__dashboard" data-animate="scale-in">
              <img
                className="my-image-set"
                src="/assets/images/Group 237586 1.webp"
                alt="HRVICO Dashboard Overview"
                loading="eager"
              />
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
                data-counter-suffix="★"
                data-counter-decimals="1"
              >
                0
              </div>
              <div className="social-proof__stat-label">User Rating</div>
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
              <div className="pain-card__icon">⚡</div>
              <h3 className="pain-card__title">Automated Workflows</h3>
              <p className="pain-card__desc">
                Free your HR team from repetitive tasks. Automate attendance tracking, payroll calculations, and leave approvals seamlessly.
              </p>
            </div>

            <div className="pain-card">
              <div className="pain-card__icon">🛡️</div>
              <h3 className="pain-card__title">Unmatched Security</h3>
              <p className="pain-card__desc">
                Your data is secured with enterprise-grade encryption. Ensure compliance and protect sensitive employee information at all times.
              </p>
            </div>

            <div className="pain-card">
              <div className="pain-card__icon">📈</div>
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
              <div className="step-card__icon" style={{ margin: '0 auto 1.5rem' }}>🏢</div>
              <h3 className="step-card__title">Super Admin</h3>
              <p className="step-card__desc">
                Complete command center for multi-company management and platform oversight.
              </p>
            </div>

            <div className="step-card" style={{ textAlign: 'center' }}>
              <div className="step-card__icon" style={{ margin: '0 auto 1.5rem' }}>👔</div>
              <h3 className="step-card__title">Admin</h3>
              <p className="step-card__desc">
                Powerful automation for payroll, attendance, and complete employee lifecycle management.
              </p>
            </div>

            <div className="step-card" style={{ textAlign: 'center' }}>
              <div className="step-card__icon" style={{ margin: '0 auto 1.5rem' }}>👤</div>
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
    </>
  );
}
