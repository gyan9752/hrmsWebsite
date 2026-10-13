import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';

export const metadata: Metadata = {
  title: 'Industry HRMS Solutions & Software in India | HRVico',
  description:
    'Tailored HRMS software for IT & Software, Manufacturing, Retail, Healthcare, Hospitality, Education, Real Estate, and Professional Service agencies across India.',
  keywords: [
    'industry HRMS software',
    'HR software for IT companies',
    'manufacturing HRMS software',
    'retail HRMS software',
    'healthcare HRMS software',
    'hospitality HRMS',
    'school HRMS software',
    'real estate HR software',
  ],
  alternates: {
    canonical: 'https://hrvico.com/industries',
  },
  openGraph: {
    title: 'Industry HRMS Solutions & Software in India | HRVico',
    description:
      'Tailored HRMS software for IT & Software, Manufacturing, Retail, Healthcare, Hospitality, Education, Real Estate, and Professional Service agencies across India.',
    url: 'https://hrvico.com/industries',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry HRMS Solutions & Software in India | HRVico',
    description:
      'Tailored HRMS software for IT, Manufacturing, Retail, Healthcare, Hospitality, Education, and Real Estate.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

const industryModules = [
  {
    category: 'Technology & Services',
    items: [
      {
        title: 'IT & Software',
        slug: 'it-software',
        desc: 'Engineered for fast-moving engineering teams, SaaS companies, and remote-first organizations.',
        points: ['GPS & IP geofenced clock-in', 'Flexible sprint schedules', '360° reviews & goal alignment'],
        href: '/industries/it-software',
      },
      {
        title: 'Agencies & Professional Services',
        slug: 'agencies-professional-services',
        desc: 'Built for design agencies, marketing consultancies, and legal/financial service firms.',
        points: ['Client billing timesheets', 'Contractor retainer tracking', 'Expense claim approvals'],
        href: '/industries/agencies-professional-services',
      },
      {
        title: 'Real Estate & Properties',
        slug: 'real-estate',
        desc: 'Designed for property brokerages, real estate builders, and on-field sales agents.',
        points: ['Site-level GPS geofencing', 'Field agent travel claims', 'Multi-project staff allocation'],
        href: '/industries/real-estate',
      },
    ],
  },
  {
    category: 'Operations & Physical Workforce',
    items: [
      {
        title: 'Manufacturing & Plants',
        slug: 'manufacturing',
        desc: 'Robust management for factory floors, manufacturing plants, and heavy industrial units.',
        points: ['Multi-shift rotational rosters', 'Biometric device synchronization', 'Overtime & labor compliance'],
        href: '/industries/manufacturing',
      },
      {
        title: 'Retail & Multi-Outlet Stores',
        slug: 'retail',
        desc: 'Optimized for retail chains, showrooms, supermarket branches, and franchise outlets.',
        points: ['Store-wise attendance logs', 'Casual & part-time shift rotas', 'Centralized branch reporting'],
        href: '/industries/retail',
      },
      {
        title: 'Hospitality & Hotels',
        slug: 'hospitality',
        desc: 'Mission-critical scheduling for hotels, resorts, banquets, and restaurant chains.',
        points: ['Front-of-house & kitchen rotas', 'Tip & incentive distributions', 'Seasonal staff management'],
        href: '/industries/hospitality',
      },
    ],
  },
  {
    category: 'Institutions & Specialized Units',
    items: [
      {
        title: 'Education & Academics',
        slug: 'education',
        desc: 'Structured for schools, colleges, coaching institutions, and universities.',
        points: ['Academic term holiday policies', 'Faculty lecture attendance', 'Centralized staff credentials'],
        href: '/industries/education',
      },
      {
        title: 'Healthcare & Clinics',
        slug: 'healthcare',
        desc: '24/7 mission-critical operations for hospitals, pathology labs, and clinics.',
        points: ['24/7 rotating roster shifts', 'Doctor & nursing standby logs', 'Statutory audit record compliance'],
        href: '/industries/healthcare',
      },
    ],
  },
];

const industryFaqs = [
  {
    question: 'Why do different industries need specialized HRMS software?',
    answer:
      'Every industry operates under unique workforce dynamics. An IT company requires flexible remote GPS tracking and OKRs, while a manufacturing plant needs biometric shift sync and labor law overtime calculations. HRVico provides configurable workflows tailored for each sector.',
  },
  {
    question: 'Does HRVico support multi-shift rosters for factories and hospitals?',
    answer:
      'Yes. HRVico allows HR managers to create 24/7 rotational shifts, night shifts, and flexible rotas with automated grace periods and shift differential tracking.',
  },
  {
    question: 'Can field agents check in using mobile GPS geofencing?',
    answer:
      'Yes. Real estate agents, sales executives, and field service staff can punch in using our GPS mobile geofencing feature with location verification.',
  },
  {
    question: 'Is HRVico compliant with Indian statutory labor laws across industries?',
    answer:
      'Yes. HRVico automates EPF, ESIC, Professional Tax (PT), and TDS deductions updated to the latest Indian statutory labor guidelines.',
  },
];

export default function IndustriesLandingPage() {
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
              <span>TAILORED INDUSTRY SOLUTIONS</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              HRMS Software Built for <span className="gradient-text">Your Industry</span>
            </h1>

            <p className="hero__subtitle" data-animate="fade-up">
              From biometric plant shift sync to field sales GPS tracking, explore specialized HR workflows engineered to solve the exact challenges of your business domain.
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
          SECTION 2 — INDUSTRY MODULES (1x4 & GRID CARDS)
          ========================================================================= */}
      {industryModules.map((cat, groupIdx) => (
        <section key={groupIdx} className="section" style={{ padding: '60px 0', background: groupIdx % 2 === 0 ? '#ffffff' : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
                {cat.category}
              </p>
              <h2 className="section-title" style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a' }}>
                {cat.category} HR Solutions
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 18px rgba(108, 63, 197, 0.04)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '20px' }}>
                      {item.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={item.href}
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
                    }}
                  >
                    View {item.title} Solution →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* =========================================================================
          SECTION 3 — FAQS
          ========================================================================= */}
      <FAQAccordion faqs={industryFaqs} title="Frequently Asked Questions About Industry HRMS Solutions" />

      {/* =========================================================================
          SECTION 4 — FINAL CALLING CTA (MATCHES ALL SUBPAGES EXACTLY)
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
