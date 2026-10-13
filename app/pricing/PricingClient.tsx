'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import PricingGrid from '@/components/PricingGrid';
import Breadcrumb from '@/components/Breadcrumb';

const pricingFaqs = [
  {
    question: 'How much does HRVico HRMS software cost?',
    answer:
      "HRVico's published pricing starts at ₹0/month for up to 5 employees. Basic costs ₹999/month for up to 25 employees, Standard costs ₹1,999/month for up to 50 employees, and Premium costs ₹3,999/month for up to 100 employees. Enterprise pricing is customised.",
  },
  {
    question: 'Does HRVico offer a free plan?',
    answer:
      'Yes. HRVico lists a Free plan for up to 5 employees, including employee management, attendance management, leave management, a holiday calendar and reports and analytics.',
  },
  {
    question: 'Which HRVico plan includes payroll management?',
    answer:
      'Payroll management is listed in the Standard and Premium plans. Enterprise customers should confirm their payroll requirements and inclusions with HRVico.',
  },
  {
    question: 'Which plan is best for a small business?',
    answer:
      'The right plan depends on your employee count and required features. Free supports up to 5 employees, while Basic supports up to 25. Compare the feature lists before choosing.',
  },
  {
    question: 'Can I upgrade my plan as my business grows?',
    answer:
      'Choose the plan that fits your current employee count and needs. Contact HRVico to confirm available upgrades, billing adjustments and applicable terms.',
  },
  {
    question: 'Does HRVico charge separately for setup?',
    answer:
      'HRVico advertises free setup support. Confirm what the support includes and whether any custom implementation or integration work incurs additional charges.',
  },
  {
    question: 'Are there any hidden charges?',
    answer:
      'HRVico advertises no hidden charges. Review the current subscription terms and confirm any applicable taxes, custom integrations or separately chargeable services before purchase.',
  },
  {
    question: 'Does HRVico support GST billing?',
    answer:
      'GST billing is advertised on the pricing page. Confirm the applicable invoice details and tax treatment during purchase.',
  },
  {
    question: 'Which plan includes multi-branch management?',
    answer:
      'Multi-branch management is listed under Premium. Contact HRVico to confirm whether its available functionality suits your organisation.',
  },
  {
    question: 'How do I choose the right HRVico plan?',
    answer:
      'Start with your employee count, whether you need payroll, and whether you require multi-branch management or custom integrations. Compare those needs with the published plan details before deciding.',
  },
];

export default function PricingClient() {
  useEffect(() => {
    document.body.classList.add('pricing-page');
    return () => {
      document.body.classList.remove('pricing-page');
    };
  }, []);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((faq) => ({
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
        name: 'Pricing',
        item: 'https://hrvico.com/pricing',
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
              <span>SIMPLE, TRANSPARENT HRMS PRICING</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Simple HRMS Pricing for Every Stage <span className="gradient-text">of Business Growth</span>
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
              Better HR Management Starts With the Right Plan.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              Still juggling employee records, attendance sheets and leave requests? Bring your essential HR activities into one organised platform with HRVico. Start free, choose a plan for your current team, and explore more capabilities as your business grows.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <a
                  href="https://app.hrvico.com/onboard-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large hero__btn-primary"
                >
                  <span>Start Free →</span>
                </a>
                <a href="#pricingGrid" className="btn btn--secondary btn--large hero__btn-secondary">
                  <span>Compare Plans</span>
                </a>
              </div>
            </div>

            {/* Highlight Badges */}
            <div className="pricing-page-bullets" style={{ marginTop: '30px', justifyContent: 'center' }}>
              <div className="pricing-page-bullet">
                <span className="pricing-page-bullet-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span> No Hidden Charges
              </div>
              <div className="pricing-page-bullet">
                <span className="pricing-page-bullet-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span> Free Setup Support
              </div>
              <div className="pricing-page-bullet">
                <span className="pricing-page-bullet-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span> Secure Cloud HRMS
              </div>
              <div className="pricing-page-bullet">
                <span className="pricing-page-bullet-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span> GST Billing Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PRICING PLANS GRID
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Choose the Plan That <span className="gradient-text">Fits Your Team</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.05rem', color: '#64748B', marginTop: '10px' }}>
              From a small team taking its first step towards digital HR to a growing organisation with more complex needs, find the plan that matches your employee count and required features.
            </p>
          </div>

          <div className="pricing-grid-wrapper">
            <PricingGrid />

            {/* Enterprise Horizontal Pricing Card */}
            <div className="pricing-card-horizontal">
              <div className="pricing-card-horizontal__left">
                <div>
                  <h3 className="pricing-card-horizontal__name">Enterprise Plan</h3>
                  <p className="pricing-card-horizontal__desc">
                    For enterprises with 100+ employees and specialised requirements.
                  </p>
                </div>
                <div className="pricing-card-horizontal__price">
                  <span className="pricing-card-horizontal__amount">Custom</span>
                  <span
                    className="pricing-card-horizontal__period"
                    style={{
                      fontSize: '0.75rem',
                      color: '#888',
                      maxWidth: '70px',
                      lineHeight: 1.2,
                    }}
                  >
                    tailored pricing
                  </span>
                </div>
              </div>
              <div className="pricing-card-horizontal__middle">
                <h4 className="pricing-card-horizontal__title">
                  TAILORED HRMS SOLUTIONS
                </h4>
                <div className="pricing-card-horizontal__features">
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Unlimited Employees
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Custom Modules
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Custom Integrations
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Enterprise Level Automation
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> API Access
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Premium Support
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Dedicated Account Manager
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Custom Support SLA
                  </div>
                  <div className="pricing-card-horizontal__feature">
                    <span className="pricing-card-horizontal__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span> Advanced Security
                  </div>
                </div>
              </div>
              <div className="pricing-card-horizontal__right">
                <div className="pricing-card-horizontal__badge">
                  Unlimited<br />Employees Included
                </div>
                <Link href="/contact" className="btn btn--primary pricing-card-horizontal__btn">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — HELP VISITORS CHOOSE
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', padding: '40px 48px', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Not Sure Which Plan Is <span className="gradient-text">Right for You?</span>
            </h2>
            <ul style={{ textAlign: 'left', margin: '0 auto 32px', maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.98rem', color: '#475569', lineHeight: '1.6' }}>
              <li style={{ background: '#FAF5FF', padding: '12px 18px', borderRadius: '10px', border: '1px solid rgba(108, 63, 197, 0.1)' }}>
                <strong style={{ color: '#6C3FC5' }}>Choose Free:</strong> If you have up to 5 employees and need essential HR management.
              </li>
              <li style={{ background: '#FAF5FF', padding: '12px 18px', borderRadius: '10px', border: '1px solid rgba(108, 63, 197, 0.1)' }}>
                <strong style={{ color: '#6C3FC5' }}>Choose Basic:</strong> If your team has up to 25 employees and needs employee records, attendance, leave and document management.
              </li>
              <li style={{ background: '#FAF5FF', padding: '12px 18px', borderRadius: '10px', border: '1px solid rgba(108, 63, 197, 0.1)' }}>
                <strong style={{ color: '#6C3FC5' }}>Choose Standard:</strong> If you have up to 50 employees and need payroll, appraisals and reimbursements.
              </li>
              <li style={{ background: '#FAF5FF', padding: '12px 18px', borderRadius: '10px', border: '1px solid rgba(108, 63, 197, 0.1)' }}>
                <strong style={{ color: '#6C3FC5' }}>Choose Premium:</strong> If you have up to 100 employees and need multi-branch management and additional support.
              </li>
              <li style={{ background: '#FAF5FF', padding: '12px 18px', borderRadius: '10px', border: '1px solid rgba(108, 63, 197, 0.1)' }}>
                <strong style={{ color: '#6C3FC5' }}>Choose Enterprise:</strong> If you have more than 100 employees or require custom modules, integrations or enterprise options.
              </li>
            </ul>
            <Link href="/contact" className="btn btn--primary btn--large">
              <span>Need Help Choosing? Contact Us →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — PAIN POINTS AND VALUE PROPOSITION
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Stop Letting HR Paperwork Take <span className="gradient-text">Up Your Workday</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.05rem', color: '#64748B', marginTop: '12px', lineHeight: '1.65' }}>
              As your team grows, maintaining employee records, checking attendance, tracking leave and preparing payroll can become repetitive and difficult to coordinate. HRVico gives you a more structured way to manage supported HR activities, with plans for different team sizes and requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 18px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📁
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>
                Scattered Employee Records
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Keep employee information organised through employee management features.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 18px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⏱️
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>
                Attendance and Leave Follow-Ups
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Manage attendance information and leave workflows through the available platform features.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 18px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                💳
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>
                Payroll Administration
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Choose Standard or Premium when you need the listed payroll management module.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, margin: '0 auto 18px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📈
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>
                More People, More HR Responsibilities
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Compare plans as your team grows and your HR requirements change.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#pricingGrid" className="btn btn--secondary btn--large">
              <span>Compare Plans →</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — FEATURE COMPARISON TABLE
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              See What Each <span className="gradient-text">Plan Includes</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.05rem', color: '#64748B', marginTop: '10px' }}>
              Side-by-side feature comparison table across all HRVico plans.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)', background: '#FFFFFF' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 20px', fontWeight: 700, color: '#0F172A' }}>Feature</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700, color: '#0F172A' }}>Free</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700, color: '#0F172A' }}>Basic</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700, color: '#6C3FC5' }}>Standard</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700, color: '#0F172A' }}>Premium</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700, color: '#0F172A' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Employee limit</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Up to 5</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Up to 25</td>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#6C3FC5' }}>Up to 50</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Up to 100</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Unlimited</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Employee management</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Custom options</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Attendance management</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Leave management</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Holiday calendar</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Included in Standard</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Reports and analytics</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Included in Standard</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Employee dashboard</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Included in Standard</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Employee documents</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Included in Standard</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Payroll management</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Appraisals management</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Included in Standard</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Reimbursement</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Included in Standard</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Multi-branch management</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Custom options</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Job management</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Custom options</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Website health monitoring</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                  <td style={{ padding: '14px 20px', color: '#475569' }}>Discuss requirements</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 20px', fontWeight: 600, color: '#0F172A' }}>Custom integrations</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#94A3B8' }}>Not listed</td>
                  <td style={{ padding: '14px 20px', color: '#10B981', fontWeight: 600 }}>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/features" className="btn btn--primary btn--large">
              <span>View All Features →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — TRUST SECTION
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Choose <span className="gradient-text">With Confidence</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.05rem', color: '#64748B', marginTop: '10px' }}>
              Transparent pricing principles that give you complete peace of mind.
            </p>
          </div>

          {/* Row 1 — 3 Cards Top */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📋
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>Clear Plan Limits</h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>Know how many employees each plan supports before subscribing.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🎁
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>A Free Starting Point</h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>Explore the Free plan for teams of up to 5 employees.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🛠️
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>Setup Support</h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>HRVico advertises free setup support. Confirm the scope of support available for your subscription.</p>
            </div>
          </div>

          {/* Row 2 — 2 Cards Bottom Centered */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 280px', maxWidth: '360px', background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ☁️
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>Cloud-Based HRMS</h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>Manage supported HR activities through the HRVico platform.</p>
            </div>

            <div style={{ flex: '1 1 280px', maxWidth: '360px', background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🧾
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>GST Billing</h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>GST billing is advertised on the pricing page. Confirm applicable invoice and tax details during purchase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — 3-STEP GETTING STARTED
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Three Steps to a More <span className="gradient-text">Organised HR Process</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Fast onboarding to digitise your workforce management today.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', maxWidth: '960px', margin: '0 auto 40px' }}>
            <div className="step-box">
              <div className="step-box__num">01</div>
              <h3 className="step-box__title">Compare Plans</h3>
              <p className="step-box__desc">Review employee limits and the features your team needs.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num">02</div>
              <h3 className="step-box__title">Choose Your Plan</h3>
              <p className="step-box__desc">Start free, select a paid plan or contact sales for enterprise requirements.</p>
            </div>

            <div className="step-box">
              <div className="step-box__num">03</div>
              <h3 className="step-box__title">Organise Your HR Activities</h3>
              <p className="step-box__desc">Set up employee information and begin using the features included in your plan.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://app.hrvico.com/onboard-company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
            >
              <span>Start Free →</span>
            </a>
            <HomeBookDemoBtn className="btn btn--secondary btn--large" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — FAQS (ACCORDION)
          ========================================================================= */}
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Clear answers to common questions about HRVico plans, features and setup."
        faqs={pricingFaqs}
      />

      {/* =========================================================================
          SECTION 9 — FINAL CONVERSION SECTION
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Your Business Is Growing. Let Your HR Process <span className="gradient-text">Grow With It.</span>
            </h2>
            <p className="final-cta__subtitle">
              Choose a plan that fits your team, organise your everyday HR activities and explore additional capabilities when your requirements change.
            </p>
            <div className="final-cta__actions">
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--large"
              >
                <span>Start Free →</span>
              </a>
              <Link href="/contact" className="btn btn--secondary btn--large">
                <span>Contact Sales</span>
              </Link>
            </div>
            <p className="final-cta__note">
              Start with up to 5 employees on the Free plan or compare paid plans for additional features and capacity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
