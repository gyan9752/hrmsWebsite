import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'HRMS Software for Agencies & Services | HRVico',
  description:
    'Simplify employee management, attendance and leave with HRVico HRMS for digital agencies, consultancies and professional service firms.',
  alternates: {
    canonical: 'https://hrvico.com/industries/agencies-professional-services/',
  },
  openGraph: {
    title: 'HRMS for Agencies and Professional Service Businesses | HRVico',
    description:
      'Keep employee records, attendance and leave organised with HRVico HRMS, built to support growing service-based teams.',
    url: 'https://hrvico.com/industries/agencies-professional-services/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/agency-hrms-employee-management-dashboard.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS dashboard for employee management in an agency or professional services company.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS for Agencies and Professional Service Businesses | HRVico',
    description:
      'Keep employee records, attendance and leave organised with HRVico HRMS, built to support growing service-based teams.',
    images: ['https://hrvico.com/assets/images/agency-hrms-employee-management-dashboard.webp'],
  },
};

const agenciesFaqs = [
  {
    question: 'What is HRMS software for agencies?',
    answer:
      'HRMS software for agencies helps digital marketing firms, consulting companies, creative studios and other service-based businesses organise employee information and HR activities such as attendance, leave and payroll where supported.',
  },
  {
    question: 'Is HRVico suitable for digital marketing agencies?',
    answer:
      "HRVico offers employee management, attendance and leave features that can support a digital agency's HR administration. Review the available modules and plan limits to confirm that they meet your needs.",
  },
  {
    question: 'Can HRVico manage attendance for agency employees?',
    answer:
      "Yes. Attendance management is listed among HRVico's core features. Confirm the available attendance methods and configuration options for your selected plan.",
  },
  {
    question: 'Does HRVico provide payroll management?',
    answer:
      "Payroll management is listed on HRVico's Standard and Premium plans. Review the current pricing page for the complete feature list and plan terms.",
  },
  {
    question: 'Can HRVico support a growing professional services team?',
    answer:
      "HRVico offers plans for different employee counts. Compare the available modules and limits to determine whether a plan fits your team's current and expected requirements.",
  },
  {
    question: 'Can employees apply for leave through HRVico?',
    answer:
      'HRVico lists leave management features for applications, balances and approval workflows. The exact process depends on the platform configuration.',
  },
  {
    question: 'Does HRVico include project management or client billing?',
    answer:
      'HRVico is focused on HR and workforce administration. Do not treat it as a project management, CRM, client billing or agency profitability platform unless these capabilities are confirmed.',
  },
  {
    question: 'How much does HRVico cost for an agency?',
    answer:
      'Published plans start at ₹0 per month for up to 5 employees, ₹999 per month for up to 25, ₹1,999 per month for up to 50, and ₹3,999 per month for up to 100 employees. Enterprise pricing is customised. Check the live pricing page for the latest details.',
  },
  {
    question: 'Is HRVico suitable for professional services companies across India?',
    answer:
      'HRVico offers a digital HRMS platform with plans for different employee counts. Review the available features and subscription limits to assess suitability for your business.',
  },
];

export default function AgenciesIndustryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: agenciesFaqs.map((faq) => ({
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
        name: 'Agencies & Professional Services',
        item: 'https://hrvico.com/industries/agencies-professional-services/',
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
              <span>HRMS FOR AGENCIES &amp; PROFESSIONAL SERVICES</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              HRMS Software for Agencies <span className="gradient-text">&amp; Professional Services</span>
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
              Great Client Work Starts With an Organised Team
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              Your team has clients to serve, deadlines to meet and business goals to achieve. Managing employee records, attendance and leave shouldn&apos;t add unnecessary pressure to your day. HRVico brings essential HR activities into one digital platform, helping agencies and professional service firms organise employee information and everyday HR administration.
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
                <HomeBookDemoBtn className="btn btn--secondary btn--large hero__btn-secondary" />
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                Explore the features and choose a plan that fits your team.
              </p>
            </div>
          </div>

          <div
            className="hero__preview"
            data-animate="fade-up"
            style={{
              marginTop: '40px',
              position: 'relative',
              maxWidth: '840px',
              margin: '40px auto 0',
            }}
          >
            <Image
              src="/assets/images/Super Admin 1.webp"
              alt="HRVico HRMS dashboard for employee management in an agency or professional services company."
              width={1000}
              height={598}
              priority
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 40px rgba(108, 63, 197, 0.16))' }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — DIRECT ANSWER (AEO / GEO SECTION)
          ========================================================================= */}
      <section style={{ padding: '60px 0', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', padding: '36px 40px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              What Is HRMS <span className="gradient-text">Software for Agencies?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155', marginBottom: '14px' }}>
              HRMS software for agencies helps service-based businesses organise employee information and manage HR activities such as attendance, leave and payroll where supported. It provides a structured way to handle employee administration as teams grow.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: '#64748B' }}>
              HRVico offers employee management, attendance tracking, leave management and additional HR modules, with availability depending on the selected plan.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — PAIN POINTS AND EMOTIONAL CONNECTION
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Your Team Should Focus on Clients, Not <span className="gradient-text">Scattered HR Records</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Overcome internal administrative friction so your team can dedicate energy to client deliverables.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📂
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Employee Information in Too Many Places
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                When employee details are spread across spreadsheets, files and messages, maintaining accurate records becomes harder.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⏱️
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Attendance That Takes Extra Effort
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Manually reviewing attendance can create repetitive work for managers and HR teams.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📅
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Leave Requests That Interrupt the Day
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Without a consistent process, tracking requests, balances and approvals can become unnecessarily complicated.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🚀
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                A Growing Team, More Administration
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                As you hire more employees, your HR process needs to scale without creating more paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — KEY FEATURES (2x4 GRID)
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Essential HR Tools for Your <span className="gradient-text">Agency&apos;s Everyday Work</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Workforce administration tools designed to streamline everyday HR processes in service-based companies.
            </p>
          </div>

          <div className="core-features__grid-2x4">
            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Keep employee profiles, designations, departments and workforce records organised in one place.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Attendance Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Review attendance records and use the available attendance features to support a consistent process.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Leave Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Manage leave applications, balances and approval workflows according to your configured policies.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Payroll Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Use HRVico&apos;s payroll module on eligible plans to support salary processing and related payroll activities.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Documents
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Keep employee-related documents organised and accessible to authorised users.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Reports and Analytics
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Review available workforce information through reports and dashboards to support HR decisions.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Announcements and Notifications
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Share relevant workplace updates using the platform&apos;s available communication features.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Dashboard
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Give employees access to supported HR functions through their own dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — INDUSTRY USE CASES
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              HR Management for <span className="gradient-text">Different Service-Based Businesses</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Tailored workforce administration across digital, creative and consulting sectors.
            </p>
          </div>

          <div className="cards-grid-3x3">
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📢
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Digital Marketing Agencies
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Organise employee records, attendance and leave for teams working across SEO, paid advertising, social media and other marketing services.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                💻
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                IT and Software Service Companies
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Maintain structured employee information and HR processes as technical teams grow.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🤝
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Consulting Firms
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Support everyday employee administration for consultants, internal teams and business support staff.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🎨
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Creative and Design Studios
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Keep employee records and leave administration organised while your team focuses on client deliverables.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📊
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Accounting and Professional Firms
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Create a more consistent process for managing employee information and HR activities.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏢
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Business and Outsourcing Services
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Use HRVico&apos;s available HR modules to support workforce administration as employee numbers increase.
              </p>
            </div>
          </div>

          <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '20px 24px', borderRadius: '12px', maxWidth: '840px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.92rem', color: '#92400E', margin: 0, lineHeight: '1.6' }}>
              <strong>Important:</strong> These are intended audiences, not claims of industry-specific integrations or specialised workflows. Do not promise project time tracking, client billing, CRM, resource allocation or profitability reporting unless those features are verified in the product.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — BENEFITS
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Less HR Clutter. More Room to Focus <span className="gradient-text">on Your Business.</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Streamline internal employee operations for maximum service quality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Keep employee records organised in a centralised system.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Make attendance information easier to review.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Create a more consistent process for leave requests.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Reduce repetitive administration where digital workflows support it.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Give authorised users clearer access to relevant HR information.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Choose a plan that fits your current workforce and HR requirements.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: '#64748B', marginTop: '30px' }}>
            HRVico supports HR administration; actual time savings depend on your existing processes, configuration and usage.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — LOCALIZED / INDIA SECTION
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)', padding: '48px', borderRadius: '20px', border: '1px solid rgba(108, 63, 197, 0.15)', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: 700, color: '#6C3FC5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              FOR AGENCIES AND SERVICE FIRMS ACROSS INDIA
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Build Your Business Without Letting HR Administration Get <span className="gradient-text">in the Way</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '28px' }}>
              Whether you&apos;re running a small creative studio, a growing digital agency or an established consulting firm, employee administration needs a process that can keep up with your team. HRVico helps businesses organise essential HR activities through a digital platform. Compare the available features and choose a plan based on your employee count and requirements.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Link href="/pricing" className="btn btn--primary btn--large">
                <span>Explore Pricing →</span>
              </Link>
              <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                Compare plan limits and features before choosing the right fit.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — MANUAL HR VS HRVICO (COMPARISON TABLE)
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Replace Scattered Records With a <span className="gradient-text">More Structured Process</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Compare traditional spreadsheet management with HRVico digital workforce software.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#475569' }}>HR Activity</th>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#ef4444' }}>Manual Process</th>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#10B981' }}>With HRVico</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Employee records</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Separate spreadsheets and files</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Centralised employee management</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Attendance</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Manual collection and review</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Digital attendance records</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Leave requests</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Messages, forms or spreadsheets</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Digital leave workflows</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Employee documents</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Files in different locations</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Employee document management</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>HR reporting</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Manual compilation</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Available reports and dashboards</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Payroll</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Separate salary records and calculations</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Payroll module on eligible plans</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: '#64748B', marginTop: '20px' }}>
            The available workflows depend on your configuration and subscription plan.
          </p>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <HomeBookDemoBtn className="btn btn--primary btn--large">
              <span>See How HRVico Works →</span>
            </HomeBookDemoBtn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — PRICING OVERVIEW
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Find a Plan That <span className="gradient-text">Fits Your Team</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Flexible HRMS pricing tailored to agency and consulting team sizes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Free</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹0<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 5 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>A starting point for very small teams.</p>
            </div>

            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Basic</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 25 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For small agencies needing essential employee, attendance and leave management.</p>
            </div>

            <div style={{ border: '2px solid #6C3FC5', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FAF5FF', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#6C3FC5', color: '#FFF', fontSize: '0.72rem', fontWeight: 700, padding: '2px 10px', borderRadius: '10px', textTransform: 'uppercase' }}>Popular</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Standard</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹1,999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 50 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For teams that also require the listed payroll module.</p>
            </div>

            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Premium</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹3,999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 100 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For larger teams that need listed multi-branch management.</p>
            </div>

            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Enterprise</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>Custom</p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>100+ employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For organisations requiring custom modules, integrations or enterprise options.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn--primary">
              <span>Compare Pricing →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary" />
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748B', marginTop: '20px' }}>
            Verify current pricing and plan inclusions against the live pricing page before publication. Payroll is listed on Standard and Premium, while multi-branch management is listed on Premium.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — 3-STEP GETTING STARTED
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Organise Your HR in <span className="gradient-text">Three Simple Steps</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Get your agency or consulting team onboarded seamlessly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', maxWidth: '960px', margin: '0 auto 40px' }}>
            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 18px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Choose Your Plan
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Compare employee limits and included features with your business requirements.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 18px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Set Up Employee Information
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Organise employee records and configure the available HR workflows.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 18px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Manage Everyday HR Activities
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Use the included features to manage employee information, attendance, leave and other supported HR tasks.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="https://app.hrvico.com/onboard-company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
            >
              <span>Start Free →</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — FAQS (ACCORDION)
          ========================================================================= */}
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about HRVico HRMS for agencies and professional service firms."
        faqs={agenciesFaqs}
      />

      {/* =========================================================================
          SECTION 12 — FINAL CTA SECTION
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Your Clients Expect Your Best. Give Your HR Process <span className="gradient-text">the Same Attention.</span>
            </h2>
            <p className="final-cta__subtitle">
              Your team works hard to deliver great service. Make employee administration more organised with a clear process for records, attendance and leave. Explore HRVico and find a plan that fits your business.
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
              <HomeBookDemoBtn className="btn btn--secondary btn--large" />
            </div>
            <p className="final-cta__note">
              Compare available features and employee limits before getting started.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
