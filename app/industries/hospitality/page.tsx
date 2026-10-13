import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Hospitality HRMS Software in India | HRVico',
  description:
    'Manage hospitality staff records, attendance and leave with HRVico HRMS. Simplify everyday HR for hotels, resorts and hospitality businesses.',
  alternates: {
    canonical: 'https://hrvico.com/industries/hospitality/',
  },
  openGraph: {
    title: 'HRMS Software for Hotels and Hospitality Businesses | HRVico',
    description:
      'Spend less time managing HR paperwork. Organise employee records, attendance and leave with HRVico HRMS.',
    url: 'https://hrvico.com/industries/hospitality/',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hospitality-hrms-employee-management.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS software for employee management in hotels and hospitality businesses.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Software for Hotels and Hospitality Businesses | HRVico',
    description:
      'Spend less time managing HR paperwork. Organise employee records, attendance and leave with HRVico HRMS.',
    images: ['https://hrvico.com/assets/images/hospitality-hrms-employee-management.webp'],
  },
};

const hospitalityFaqs = [
  {
    question: 'What is HRMS software for the hospitality industry?',
    answer:
      'Hospitality HRMS software helps hotels, resorts and other hospitality businesses organise employee records and HR processes, including attendance, leave and payroll where supported.',
  },
  {
    question: 'Is HRVico suitable for hotels and resorts?',
    answer:
      'HRVico offers employee management, attendance and leave features that can support hospitality HR administration. Review the available modules and plan limits to confirm suitability for your operation.',
  },
  {
    question: 'Can HRVico manage attendance for hotel employees?',
    answer:
      "Yes. Attendance management is listed among HRVico's core features. Available tracking methods and configuration options should be confirmed for your selected plan.",
  },
  {
    question: 'Does HRVico include payroll management?',
    answer:
      "Payroll management is listed on HRVico's Standard and Premium plans. Check the current pricing page for the complete feature list and plan terms.",
  },
  {
    question: 'Can HRVico support multiple hotel properties?',
    answer:
      'HRVico lists multi-branch management under its Premium plan. Contact the HRVico team to confirm whether the available functionality suits your property structure.',
  },
  {
    question: 'Can hospitality employees apply for leave through HRVico?',
    answer:
      'HRVico includes leave management features for applications, balances and approval workflows. The exact workflow depends on the platform configuration.',
  },
  {
    question: 'Does HRVico manage hotel bookings or room reservations?',
    answer:
      'No. HRVico is focused on HR and workforce administration. It should not be presented as a hotel booking or property management system.',
  },
  {
    question: 'How much does HRVico cost for hospitality businesses?',
    answer:
      'Published plans start at ₹0 per month for up to 5 employees, ₹999 for up to 25, ₹1,999 for up to 50, and ₹3,999 for up to 100 employees. Enterprise pricing is customised. Verify the current pricing page before making a purchasing decision.',
  },
];

export default function HospitalityIndustryPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hospitalityFaqs.map((faq) => ({
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
        name: 'Hospitality',
        item: 'https://hrvico.com/industries/hospitality/',
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
              <span>HRMS FOR THE HOSPITALITY INDUSTRY</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Hospitality HRMS Software for <span className="gradient-text">Better Workforce Management</span>
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
              Your Guests Deserve Great Service. Your Team Deserves Better HR.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              When your team is busy taking care of guests, managing employee records, attendance and leave shouldn&apos;t become another daily headache. HRVico helps hospitality businesses organise essential HR activities in one digital platform, giving your HR team a more structured way to manage employee information and everyday administration.
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
                Choose a plan that fits your team size and HR requirements.
              </p>
            </div>
          </div>

          <div
            className="hero__preview"
            data-animate="fade-up"
            style={{
              marginTop: '40px',
              position: 'relative',
              maxWidth: '880px',
              margin: '40px auto 0',
            }}
          >
            <Image
              src="/assets/images/Powerful Analytics at Your Fingertips.webp"
              alt="HRVico HRMS software for employee management in hotels and hospitality businesses."
              width={1200}
              height={700}
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
              What Is Hospitality <span className="gradient-text">HRMS Software?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155', marginBottom: '14px' }}>
              Hospitality HRMS software helps hotels, resorts and other hospitality businesses organise employee information and manage HR activities such as attendance, leave and payroll where supported. It can replace fragmented manual records with a more structured digital process.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: '1.65', color: '#64748B' }}>
              HRVico provides employee management, attendance tracking, leave management and additional HR modules. The available features depend on the selected subscription plan.
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
              Hospitality Is About People. HR Administration Shouldn&apos;t Get <span className="gradient-text">in the Way.</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Overcome the daily employee operational struggles that slow down hospitality teams and hotel HR managers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📁
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Too Many Employee Records
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Managing staff information across spreadsheets and separate files can make everyday HR administration harder.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⏱️
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Attendance That Takes Time to Reconcile
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Reviewing attendance records manually can add unnecessary work to an already busy hospitality operation.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📝
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Leave Requests From Different Teams
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Without a consistent process, keeping leave applications, balances and approvals organised becomes difficult.
              </p>
            </div>

            <div style={{ background: '#FAF5FF', padding: '30px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📈
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                A Growing Workforce
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                As your hotel, resort or hospitality business grows, your HR processes need to keep up with the team.
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
              The Essential HR Tools Your <span className="gradient-text">Hospitality Team Needs</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Comprehensive workforce and HR management tools designed to streamline everyday hotel and hospitality HR operations.
            </p>
          </div>

          <div className="core-features__grid-2x4">
            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Keep employee profiles, department details and staff records organised in one place.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Attendance Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Access attendance records and use the available attendance-tracking features to support a more structured process.
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
                Keep important employee-related documents organised and accessible to authorised users.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Reports and Analytics
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Review available workforce information through reports and dashboards to support everyday HR decisions.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Holiday Calendar &amp; Notifications
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Keep employees informed about company holidays, notices and relevant HR updates using available platform features.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Self-Service
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Allow employees to access supported HR functions through their employee dashboard.
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
              Designed for Different <span className="gradient-text">Hospitality Businesses</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Tailored workforce management solutions across the spectrum of hospitality operations.
            </p>
          </div>

          <div className="cards-grid-3x2">
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏨
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Hotels and Business Hotels
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Organise employee records, attendance and leave for teams supporting daily hotel operations.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏖️
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Resorts and Holiday Properties
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Maintain structured employee information and HR records as your hospitality team grows.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🍽️
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Restaurant Groups and Cafés
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Manage essential HR administration for employees across your hospitality business.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏡
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Guest Houses and Boutique Stays
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Bring everyday employee records and leave administration into a more organised process.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏢
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', textAlign: 'center' }}>
                Hospitality Groups With Multiple Properties
              </h3>
              <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: '1.55', textAlign: 'center', margin: 0 }}>
                Explore plans that support multi-branch management when your business operates across multiple locations.
              </p>
            </div>
          </div>

          <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', padding: '20px 24px', borderRadius: '12px', maxWidth: '840px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.92rem', color: '#92400E', margin: 0, lineHeight: '1.6' }}>
              <strong>Note:</strong> HRVico is an HRMS platform, not a hotel property management system. Do not imply that it handles room bookings, reservations, guest check-ins, restaurant orders or hotel inventory.
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
              Spend Less Time on HR Administration. Focus More <span className="gradient-text">on Your People.</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Empower your hospitality managers and staff with streamlined digital workflows.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Keep employee information organised.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Make attendance records easier to review.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Create a consistent process for leave requests.
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
                Give HR and employees clearer access to supported information.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <span style={{ color: '#10B981', fontSize: '1.25rem', fontWeight: 700 }}>✓</span>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
                Choose a plan that can accommodate your growing workforce.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: '#64748B', marginTop: '30px' }}>
            HRVico helps organise HR activities; actual time savings depend on your existing processes, configuration and usage.
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
              BUILT FOR HOSPITALITY BUSINESSES ACROSS INDIA
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              One More Organised Way to Manage <span className="gradient-text">Your Hospitality Team</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '28px' }}>
              Whether you run a boutique hotel, a resort or a growing hospitality group, employee administration needs a process that works for your business. HRVico helps businesses manage essential workforce information through a centralised HRMS platform. Choose a subscription based on your employee count and the features you need.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <Link href="/pricing" className="btn btn--primary btn--large">
                <span>Explore HRVico Pricing →</span>
              </Link>
              <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
                Compare employee limits and available features before choosing your plan.
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
              A More Structured Approach <span className="gradient-text">to Everyday HR</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Compare traditional manual processes with HRVico digital workforce management.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.15)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F5F3FF', borderBottom: '1px solid rgba(108, 63, 197, 0.15)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '1rem', fontWeight: 700, color: '#475569' }}>HR Task</th>
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
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Messages, paper forms or spreadsheets</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Digital leave workflows</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#FAF8FF' }}>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Documents</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Records stored in different locations</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Employee document management</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Reporting</td>
                  <td style={{ padding: '14px 24px', color: '#475569', fontSize: '0.95rem' }}>Manual compilation</td>
                  <td style={{ padding: '14px 24px', color: '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>Available reports and analytics</td>
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
            The benefits depend on the plan selected and how your business configures and uses the system.
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
              Find the Right HRMS Plan for <span className="gradient-text">Your Hospitality Team</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Transparent subscription options for businesses of every size.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Free</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹0<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 5 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>A starting point for very small hospitality teams.</p>
            </div>

            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Basic</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 25 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For small teams that need employee, attendance and leave management.</p>
            </div>

            <div style={{ border: '2px solid #6C3FC5', borderRadius: '14px', padding: '24px', textAlign: 'center', background: '#FAF5FF', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#6C3FC5', color: '#FFF', fontSize: '0.72rem', fontWeight: 700, padding: '2px 10px', borderRadius: '10px', textTransform: 'uppercase' }}>Popular</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Standard</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#6C3FC5', margin: '8px 0' }}>₹1,999<span style={{ fontSize: '0.85rem', color: '#64748B' }}>/mo</span></p>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px' }}>Up to 50 employees</p>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For businesses that also require the listed payroll module.</p>
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
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: '1.5' }}>For businesses requiring custom modules, integrations or enterprise-level options.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn--primary">
              <span>Compare Pricing →</span>
            </Link>
            <HomeBookDemoBtn className="btn btn--secondary" />
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748B', marginTop: '20px' }}>
            Prices and inclusions should be checked against the current HRVico pricing page before publication. Payroll is listed on Standard and Premium, while multi-branch management is listed on Premium.
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
              Get Your HR Process Organised <span className="gradient-text">in Three Steps</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Quick onboarding designed to get your hospitality workforce up and running fast.
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
                Compare employee limits and features with your hospitality business requirements.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 18px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Set Up Your Employee Records
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Organise employee information and configure the available HR workflows.
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
                Use the included features to manage employee records, attendance, leave and other supported HR tasks.
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
        subtitle="Answers to common questions about HRVico HRMS for hotels and hospitality businesses."
        faqs={hospitalityFaqs}
      />

      {/* =========================================================================
          SECTION 12 — FINAL CTA SECTION
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Take the Stress Out of <span className="gradient-text">Everyday HR Administration</span>
            </h2>
            <p className="final-cta__subtitle">
              Your team works hard to create a welcoming experience for every guest. Give your HR process the same attention. Explore HRVico and find a practical way to organise your employee records, attendance and leave management.
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
              Compare plans and available features to find the right fit for your hospitality business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
