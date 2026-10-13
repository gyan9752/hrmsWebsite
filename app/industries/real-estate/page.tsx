import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Real Estate HRMS Software in India | HRVico',
  description:
    'Manage real estate employee records, attendance and leave with HRVico HRMS. Organise HR for property firms, builders and real estate agencies.',
  alternates: {
    canonical: 'https://hrvico.com/industries/real-estate/',
  },
  openGraph: {
    title: 'HRMS Software for Real Estate Companies | HRVico',
    description:
      'Spend less time on HR administration. Organise employee records, attendance and leave with HRVico HRMS.',
    url: 'https://hrvico.com/industries/real-estate/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/real-estate-hrms-employee-management.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS dashboard for employee management and attendance in a real estate company.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Software for Real Estate Companies | HRVico',
    description:
      'Spend less time on HR administration. Organise employee records, attendance and leave with HRVico HRMS.',
    images: ['https://hrvico.com/assets/images/real-estate-hrms-employee-management.webp'],
  },
};

const realEstateFaqs = [
  {
    question: 'What is HRMS software for real estate companies?',
    answer:
      'Real estate HRMS software helps property firms, builders, developers and agencies organise employee information and manage HR activities such as attendance, leave and payroll where supported.',
  },
  {
    question: 'Is HRVico suitable for real estate agencies?',
    answer:
      "HRVico offers employee management, attendance and leave features that can support an agency's HR administration. Review the available modules and plan limits to confirm suitability.",
  },
  {
    question: 'Can HRVico manage attendance for real estate employees?',
    answer:
      "Yes. Attendance management is listed among HRVico's core features. Confirm the available tracking methods and configuration options for your chosen plan.",
  },
  {
    question: 'Does HRVico provide payroll management?',
    answer:
      "HRVico lists payroll management on its Standard and Premium plans. Check the current pricing page for the complete feature list and plan terms.",
  },
  {
    question: 'Can HRVico manage employees across multiple offices?',
    answer:
      'HRVico lists multi-branch management under its Premium plan. Contact the HRVico team to confirm whether the available functionality meets your organisational requirements.',
  },
  {
    question: 'Can employees apply for leave through HRVico?',
    answer:
      'HRVico includes leave management features for applications, balances and approval workflows. The precise process depends on your platform configuration.',
  },
  {
    question: 'Does HRVico manage property listings or real estate leads?',
    answer:
      'HRVico is focused on HR and workforce administration. Do not treat it as a property listing, real estate CRM or lead management platform.',
  },
  {
    question: 'How much does HRVico cost for a real estate company?',
    answer:
      'Published plans start at ₹0 per month for up to 5 employees, ₹999 per month for up to 25, ₹1,999 per month for up to 50, and ₹3,999 per month for up to 100 employees. Enterprise pricing is customised. Check the current pricing page for updated details.',
  },
  {
    question: 'Is HRVico suitable for growing real estate companies in India?',
    answer:
      "HRVico offers plans for different employee counts. Compare the available features and subscription limits to determine whether it fits your team's current and expected requirements.",
  },
];

export default function RealEstateIndustryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: realEstateFaqs.map((faq) => ({
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
        name: 'Real Estate',
        item: 'https://hrvico.com/industries/real-estate/',
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
              <span>HRMS FOR REAL ESTATE BUSINESSES</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Real Estate HRMS Software for <span className="gradient-text">Better Team Management</span>
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
              Your Team Builds Relationships. HR Shouldn&apos;t Create More Paperwork.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              From sales teams and office staff to property management employees, real estate businesses need an organised way to manage their people. HRVico helps you manage employee information, attendance and leave through one digital HRMS platform—so everyday HR administration doesn&apos;t become another task competing for your attention.
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
                Explore the available features and choose a plan that fits your team.
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
              src="/assets/images/User.webp"
              alt="HRVico HRMS dashboard for employee management and attendance in a real estate company."
              width={1000}
              height={666}
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
              What Is Real <span className="gradient-text">Estate HRMS Software?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155', marginBottom: '14px' }}>
              Real estate HRMS software helps property companies, builders, developers and real estate agencies organise employee information and manage HR activities such as attendance, leave and payroll where supported.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: '#64748B' }}>
              HRVico provides employee management, attendance tracking, leave management and other HR modules to help businesses maintain a more structured HR process.
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
              Your Business Has Enough to Coordinate. <span className="gradient-text">Keep HR Organised.</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Address everyday operational challenges in managing property firm staff and real estate teams.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📂
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Employee Information Across Teams
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Employee details can become difficult to maintain when records are scattered across spreadsheets and separate files.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⏰
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Attendance Tracking
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Reviewing attendance manually can add unnecessary administrative work for office-based and field-based teams.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📋
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Leave Requests and Approvals
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Without a consistent process, keeping leave requests, balances and approvals organised can take additional time.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏗️
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Growing Teams and Responsibilities
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                As your agency, property firm or development business grows, maintaining consistent employee records becomes increasingly important.
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
              Essential HR Tools for Your <span className="gradient-text">Real Estate Team</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Comprehensive tools designed to streamline everyday employee management for property firms and developers.
            </p>
          </div>

          <div className="core-features__grid-2x4">
            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Maintain employee profiles, designations, departments and other workforce information in one place.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Attendance Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Review attendance records and use the available attendance features to support a structured process.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Leave Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Organise leave applications, balances and approval workflows according to your configured policies.
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
                Employee Document Management
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
                Review available workforce reports and dashboards to support everyday HR decisions.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Announcements and Notifications
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Share relevant workplace updates through the platform&apos;s available communication features.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Dashboard
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Allow employees to access supported HR functions without relying entirely on manual requests.
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
              HR Management for Different <span className="gradient-text">Real Estate Businesses</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Organised workforce administration for agencies, developers and property managers.
            </p>
          </div>

          <div className="cards-grid-3x2">
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏢
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Real Estate Agencies
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Organise employee information, attendance and leave for teams handling day-to-day agency operations.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏗️
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Builders and Property Developers
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Maintain employee records and HR administration as your organisation expands.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🗝️
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Property Management Companies
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Keep workforce information and employee-related HR activities organised.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏙️
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Commercial Real Estate Firms
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Create a more consistent HR process for office employees and other teams.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📈
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Growing Real Estate Businesses
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Choose a plan that fits your employee count and the HR features your business needs.
              </p>
            </div>
          </div>

          <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '20px 24px', borderRadius: '12px', maxWidth: '840px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.92rem', color: '#92400E', margin: 0, lineHeight: '1.6' }}>
              <strong>Important:</strong> HRVico is an HRMS platform. Do not claim that it manages property listings, real estate leads, broker commissions, site progress or property portfolios unless these capabilities are confirmed in the live product.
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
              Give Your Team a More Organised <span className="gradient-text">Way to Work</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Key advantages of replacing manual paperwork with HRVico workforce software.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Keep employee records in a centralised system.
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
                Manage leave requests through a more consistent process.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Reduce repetitive administrative work where digital workflows support it.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Make relevant employee information easier for authorised users to access.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Choose a plan that matches your team&apos;s size and HR requirements.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: '#64748B', marginTop: '30px' }}>
            HRVico supports workforce administration. Actual time savings depend on your existing processes, configuration and usage.
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
              REAL ESTATE HRMS FOR BUSINESSES ACROSS INDIA
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              One Organised HR Process as <span className="gradient-text">Your Business Grows</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '28px' }}>
              Whether you run a real estate agency, manage properties or operate a growing development company, your HR process needs to keep up with your team. HRVico helps businesses organise employee information and essential HR activities through a digital platform. Review the available features and choose the plan that fits your workforce.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Link href="/pricing" className="btn btn--primary btn--large">
                <span>Explore Pricing →</span>
              </Link>
              <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                Compare employee limits and included features before choosing your plan.
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
              Move Beyond Scattered <span className="gradient-text">HR Records</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Compare manual spreadsheet tracking with HRVico digital workforce management.
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Separate files and spreadsheets</td>
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Files stored in different places</td>
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
            The exact workflows depend on your configuration and subscription plan.
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
              Choose a Plan That <span className="gradient-text">Fits Your Team</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Explore HRVico subscription plans built for real estate businesses of all sizes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Free</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹0<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 5 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For very small teams getting started with digital HR.</p>
            </div>

            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Basic</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 25 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For small real estate teams needing essential employee and attendance management.</p>
            </div>

            <div style={{ border: '2px solid #6C3FC5', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FAF5FF', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#6C3FC5', color: '#FFF', fontSize: '0.72rem', fontWeight: 700, padding: '2px 10px', borderRadius: '10px', textTransform: 'uppercase' }}>Popular</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Standard</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹1,999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 50 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For businesses that also need the listed payroll module.</p>
            </div>

            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Premium</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹3,999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 100 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For larger teams that require listed multi-branch management.</p>
            </div>

            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Enterprise</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>Custom</p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>100+ employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For organisations that need custom modules, integrations or enterprise options.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn--primary">
              <span>Compare Pricing →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary" />
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748B', marginTop: '20px' }}>
            Verify prices and plan inclusions against the live HRVico pricing page before publishing. Payroll is listed on Standard and Premium, while multi-branch management is listed on Premium.
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
              Organise Your HR <span className="gradient-text">in Three Steps</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              A straightforward process to onboard your real estate workforce onto HRVico.
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
                Compare employee limits and available features with your business requirements.
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
        subtitle="Answers to common questions about HRVico HRMS for real estate companies."
        faqs={realEstateFaqs}
      />

      {/* =========================================================================
          SECTION 12 — FINAL CTA SECTION
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Build Your Real Estate Business. Keep <span className="gradient-text">HR Under Control.</span>
            </h2>
            <p className="final-cta__subtitle">
              Your team has clients to support, relationships to build and business goals to achieve. Make employee administration more organised with a structured HR process. Explore HRVico and find a plan that fits your team.
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
              Review the available features and employee limits before getting started.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
