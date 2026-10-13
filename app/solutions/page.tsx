import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';

export const metadata: Metadata = {
  title: 'HRMS Solutions by Business Size & Stage | HRVico',
  description:
    'Discover HRVico HRMS solutions tailored for Startups, Small Businesses, SMEs, and Growing Enterprises with dedicated Super Admin, HR Manager, and Employee portals.',
  keywords: [
    'HRMS solutions',
    'HR software by business size',
    'HRMS for small business',
    'HRMS for startups',
    'HRMS for SMEs',
    'enterprise HR software',
    'workforce management solutions',
  ],
  alternates: {
    canonical: 'https://hrvico.com/solutions',
  },
  openGraph: {
    title: 'HRMS Solutions by Business Size & Stage | HRVico',
    description:
      'Discover HRVico HRMS solutions tailored for Startups, Small Businesses, SMEs, and Growing Enterprises.',
    url: 'https://hrvico.com/solutions',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Solutions by Business Size & Stage | HRVico',
    description:
      'Discover HRVico HRMS solutions tailored for Startups, Small Businesses, SMEs, and Growing Enterprises.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

const solutionCategories = [
  {
    badge: '5 – 25 STAFF',
    title: 'Small Businesses',
    desc: 'Zero-bloat, intuitive HR setup that replaces manual registers and WhatsApp leave chats.',
    highlights: [
      '₹0 Free Forever plan for up to 5 employees',
      'One-click salary calculation with PDF payslips',
      'Mobile attendance with GPS geofencing',
    ],
    ctaText: 'Explore Solution →',
    href: '/solutions/hrms-for-small-businesses',
  },
  {
    badge: 'FAST-GROWING',
    title: 'Startups',
    desc: 'Agile workforce management designed to help tech & modern venture teams scale fast.',
    highlights: [
      'Digital offer letters & KYC onboarding',
      'Flexible remote, hybrid, & shift schedules',
      'Employee Self-Service (ESS) web portal',
    ],
    ctaText: 'Explore Solution →',
    href: '/solutions/hrms-for-startups',
  },
  {
    badge: '25 – 250 STAFF',
    title: 'SMEs',
    desc: 'Full-spectrum automation covering statutory labor compliance, multi-shift rosters, and payroll.',
    highlights: [
      'Indian compliance: EPF, ESIC, PT & TDS',
      'Biometric machine sync & shift rotation',
      'Multi-level leave approval workflows',
    ],
    ctaText: 'Explore Solution →',
    href: '/solutions/hrms-for-smes',
  },
  {
    badge: 'MULTI-BRANCH',
    title: 'Growing Enterprises',
    desc: 'Enterprise-grade infrastructure for multi-location businesses, factories, and franchises.',
    highlights: [
      'Multi-branch & multi-entity central control',
      'Custom role-based access permissions',
      'Bank-grade security & audit trails',
    ],
    ctaText: 'Explore Solution →',
    href: '/solutions/hrms-for-growing-businesses',
  },
];

const roleSolutions = [
  {
    role: 'Super Admin Portal',
    desc: 'Complete control over company policies, branch settings, system users, billing, and organizational architecture.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    role: 'HR Manager Dashboard',
    desc: 'Streamline daily check-ins, leave requests, document verification, monthly payroll generation, and appraisals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    role: 'Employee Self-Service (ESS)',
    desc: 'Empower staff to mark attendance, apply for leaves, download password-protected pay slips, and update KYC records.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const solutionFaqs = [
  {
    question: 'How do I choose the right HRVico solution for my company?',
    answer:
      'HRVico offers solutions tailored by employee headcount and operational complexity. Small teams can start with our Free Plan for essential attendance & leave tracking, while growing teams can unlock statutory payroll compliance, biometric sync, and multi-branch features as needed.',
  },
  {
    question: 'Can I switch solutions or upgrade as my business grows?',
    answer:
      'Yes, absolutely. HRVico is built on a scalable cloud architecture. You can upgrade your plan or enable additional modules at any time without losing any historical employee or attendance data.',
  },
  {
    question: 'Does HRVico support multi-branch or multi-location businesses?',
    answer:
      'Yes. Our Growing Businesses & Enterprise solutions allow Super Admins to manage multiple branches, store locations, or factory units with branch-specific attendance rules and central reporting.',
  },
  {
    question: 'Are role-based permissions configurable in HRVico?',
    answer:
      'Yes. HRVico provides dedicated portals and permissions for Super Admins, HR Managers, Department Heads, and Employees, ensuring strict data access controls.',
  },
];

export default function SolutionsLandingPage() {
  return (
    <>
      {/* =========================================================================
          SECTION 1 — MAIN HERO SECTION (EXACT SITE THEME)
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
              <span>TAILORED HRMS SOLUTIONS</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              The Right HRMS Solution for <span className="gradient-text">Your Exact Stage</span>
            </h1>

            <p className="hero__subtitle" data-animate="fade-up">
              Whether you are managing your very first 5 hires or orchestrating hundreds of employees across multiple locations, HRVico unifies attendance, payroll, leaves, and workforce operations into one simple platform.
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

      {/* =========================================================================
          SECTION 2 — 1x4 CARDS GRID (SOLUTIONS BY BUSINESS SIZE)
          ========================================================================= */}
      <section className="section" style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '800px', margin: '0 auto 48px' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              Tailored by Company Stage
            </p>
            <h2 className="section-title" style={{ fontSize: '2.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px 0' }}>
              Built for Every Phase of Growth
            </h2>
            <p className="section-subtitle" style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Select your organization size below to discover the exact capabilities designed for your workforce.
            </p>
          </div>

          {/* 1x4 Card Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {solutionCategories.map((sol, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(108, 63, 197, 0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(108, 63, 197, 0.08)',
                      color: '#6C3FC5',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      marginBottom: '14px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {sol.badge}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                    {sol.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '18px' }}>
                    {sol.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {sol.highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={sol.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 16px',
                    background: '#faf5ff',
                    border: '1.5px solid #c4b5fd',
                    borderRadius: '10px',
                    color: '#6C3FC5',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {sol.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — MULTI-ROLE ACCESS ARCHITECTURE
          ========================================================================= */}
      <section className="section" style={{ padding: '70px 0', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '800px', margin: '0 auto 48px' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              Multi-Role Access Control
            </p>
            <h2 className="section-title" style={{ fontSize: '2.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 14px 0' }}>
              Dedicated Experiences for Every Team Member
            </h2>
            <p className="section-subtitle" style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
              HRVico provides role-tailored web & mobile portals to maintain privacy, clarity, and security.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {roleSolutions.map((role, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(108, 63, 197, 0.1)',
                    color: '#6C3FC5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  {role.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                  {role.role}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {role.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link
              href="/roles"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#6C3FC5',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              <span>Explore Full Role-Based Architecture & Access Control →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — SOLUTION FAQS
          ========================================================================= */}
      <FAQAccordion faqs={solutionFaqs} title="Frequently Asked Questions About HRMS Solutions" />

      {/* =========================================================================
          SECTION 5 — FINAL CALLING CTA (MATCHES ALL SUBPAGES EXACTLY)
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Your Team Deserves Better Than <span className="gradient-text">Endless HR Follow-Ups</span>
            </h2>
            <p className="final-cta__subtitle">
              Your time is better spent building your business than searching for records and repeating administrative tasks. Start with the HR features you need today and find a plan that fits your team.
            </p>
            <div className="final-cta__actions">
              <a href="https://app.hrvico.com/onboard-company" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--large">
                <span>Start Free →</span>
              </a>
              <HomeBookDemoBtn className="btn btn--secondary btn--large hero__btn-secondary">
                <span>Book a Demo</span>
              </HomeBookDemoBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
