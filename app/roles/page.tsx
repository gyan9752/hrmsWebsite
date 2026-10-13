import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import RoleSwitcher from '@/components/RoleSwitcher';
import Breadcrumb from '@/components/Breadcrumb';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';

export const metadata: Metadata = {
  title: 'HRMS Solutions by Business Size & Role — HRVICO',
  description: 'Tailored HRMS solutions for Small Businesses, Startups, SMEs, and Growing Enterprises with dedicated Super Admin, Admin, and Employee portals.',
  keywords: ['HRMS for small business', 'HRMS for startups', 'HRMS for SMEs', 'enterprise HRMS', 'HRMS roles', 'role based access control', 'employee self service'],
  alternates: {
    canonical: 'https://hrvico.com/roles',
  },
  openGraph: {
    title: 'HRMS Solutions by Business Size & Role — HRVICO',
    description: 'Tailored HRMS solutions for Small Businesses, Startups, SMEs, and Growing Enterprises.',
    url: 'https://hrvico.com/roles',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Solutions by Business Size & Role — HRVICO',
    description: 'Tailored HRMS solutions for Small Businesses, Startups, SMEs, and Growing Enterprises.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

const solutionsByStage = [
  {
    id: 'small-business',
    badge: '5 – 25 Employees',
    title: 'HRMS for Small Businesses',
    subtitle: 'Zero-bloat, intuitive HR setup that replaces manual registers and WhatsApp leave chats.',
    features: [
      '₹0 Free Forever for up to 5 employees',
      'One-click salary calculation with instant WhatsApp/PDF payslips',
      'Mobile attendance with GPS geofencing (no expensive hardware needed)',
      'Digital document repository to organize employee records in one place',
    ],
    ctaText: 'Start Free for Small Business',
    ctaLink: 'https://app.hrvico.com/onboard-company',
  },
  {
    id: 'startups',
    badge: 'Fast-Growing Teams',
    title: 'HRMS for Startups',
    subtitle: 'Agile workforce management designed to help tech & modern venture teams scale without HR chaos.',
    features: [
      'Rapid digital onboarding — send offer letters & collect KYC in minutes',
      'Flexible remote, hybrid, and flexible shift schedules',
      'Employee Self-Service (ESS) so founders do not spend time on administrative questions',
      '360° performance reviews & OKR tracking to keep teams aligned',
    ],
    ctaText: 'Launch for Startups',
    ctaLink: 'https://app.hrvico.com/onboard-company',
  },
  {
    id: 'sme',
    badge: '25 – 250 Employees',
    title: 'HRMS for SMEs',
    subtitle: 'Full-spectrum automation covering statutory labor compliance, multi-shift rosters, and payroll.',
    features: [
      'Automated Indian statutory compliance: EPF, ESIC, Professional Tax & TDS',
      'Biometric machine sync & real-time shift rotation rules',
      'Multi-level leave approval hierarchies (Team Lead → HR Manager → Finance)',
      'Employee expense reimbursement workflows with digital receipt verification',
    ],
    ctaText: 'Explore SME Solution',
    ctaLink: '/pricing',
  },
  {
    id: 'growing-business',
    badge: '250+ Employees & Multi-Branch',
    title: 'HRMS for Growing Businesses',
    subtitle: 'Enterprise-grade governance, multi-entity hierarchies, and custom role permissions.',
    features: [
      'Multi-entity & multi-branch command center under a single Super Admin',
      'Granular Role-Based Access Control (RBAC) with audit logs',
      'Custom shift rosters, overtime computation, and department expense tracking',
      'Dedicated account manager and custom ERP / API integration options',
    ],
    ctaText: 'Request Enterprise Demo',
    ctaLink: '/contact',
  },
];

export default function RolesPage() {
  return (
    <main>
      {/* HERO SECTION */}
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
              <span>SOLUTIONS BY BUSINESS STAGE</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              The Right HRMS for <span className="gradient-text">Your Exact Stage</span>
            </h1>

            <p className="hero__subtitle" data-animate="fade-up">
              Whether you are managing your very first 5 hires or orchestrating hundreds of employees across multiple locations, HRVico scales effortlessly with your team.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large hero__btn-primary">
                  <span>Start Free Trial →</span>
                </a>
                <HomeBookDemoBtn className="btn btn--secondary btn--large hero__btn-secondary">
                  <span>Book a Demo</span>
                </HomeBookDemoBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS BY BUSINESS SIZE GRID */}
      <section className="section" id="solutions-by-size" style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {solutionsByStage.map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  scrollMarginTop: '110px',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(108, 63, 197, 0.08)',
                      color: '#6C3FC5',
                      fontWeight: 700,
                      fontSize: '12px',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      marginBottom: '16px',
                      border: '1px solid rgba(108, 63, 197, 0.2)',
                    }}
                  >
                    {sol.badge}
                  </span>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                    {sol.title}
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {sol.subtitle}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {sol.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#334155' }}>
                        <span style={{ color: '#6C3FC5', marginTop: '2px', flexShrink: 0 }} aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {sol.ctaLink.startsWith('http') ? (
                    <a
                      href={sol.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px 20px', borderRadius: '12px', fontWeight: 700 }}
                    >
                      {sol.ctaText} →
                    </a>
                  ) : (
                    <Link
                      href={sol.ctaLink}
                      className="btn btn--primary"
                      style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px 20px', borderRadius: '12px', fontWeight: 700 }}
                    >
                      {sol.ctaText} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href="/features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#6C3FC5',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              <span>Explore All 15 Platform Features &amp; Modules</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MULTI-ROLE SWITCHER */}
      <RoleSwitcher style={{ paddingTop: '20px', paddingBottom: '60px' }} />

      {/* FINAL CALL TO ACTION */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Empower Every Role. <span className="gradient-text">Streamline Every Workflow.</span>
            </h2>
            <p className="final-cta__subtitle">
              Free setup for up to 5 employees. Zero hidden charges. Take control of your HR operations today.
            </p>
            <div className="final-cta__actions">
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
              >
                <span>Start Free (Up to 5 Staff) →</span>
              </a>
              <Link href="/contact" className="btn btn--secondary btn--large">
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
