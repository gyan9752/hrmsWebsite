import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HomeBookDemoBtn from '@/components/HomeBookDemoBtn';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About HRVico | Simplifying HR Management',
  description:
    'Discover HRVico, an HRMS platform developed by Scriza Pvt Ltd to help businesses organise employee management, attendance and leave.',
  keywords: [
    'HRVico HRMS Software',
    'About HRVico',
    'HRMS software for businesses',
    'Employee management software',
    'HR management software in India',
    'HR software for growing businesses',
    'Attendance and leave management software',
  ],
  alternates: {
    canonical: 'https://hrvico.com/about',
  },
  openGraph: {
    title: 'About HRVico — A Simpler Way to Manage HR',
    description:
      'Learn how HRVico helps businesses organise essential HR activities through a practical, digital HR management platform.',
    url: 'https://hrvico.com/about',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-about-us-hr-management-team.webp',
        width: 1200,
        height: 630,
        alt: 'HRVico HRMS platform for organised employee and workforce management.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About HRVico — A Simpler Way to Manage HR',
    description:
      'Learn how HRVico helps businesses organise essential HR activities through a practical, digital HR management platform.',
    images: ['https://hrvico.com/assets/images/hrvico-about-us-hr-management-team.webp'],
  },
};

const aboutFaqs = [
  {
    question: 'What is HRVico?',
    answer:
      'HRVico is an HRMS platform developed by Scriza Pvt Ltd. It provides features for employee management, attendance, leave and other supported HR activities.',
  },
  {
    question: 'Who developed HRVico?',
    answer: 'HRVico is developed by Scriza Pvt Ltd.',
  },
  {
    question: 'Who can use HRVico?',
    answer:
      'Businesses looking to organise employee information and HR administration can evaluate HRVico. Its plans support different employee limits and feature requirements.',
  },
  {
    question: 'What can I manage with HRVico?',
    answer:
      'Depending on your plan, HRVico supports employee management, attendance, leave, documents, reports, payroll and additional HR functions.',
  },
  {
    question: 'Does HRVico offer a free plan?',
    answer:
      "Yes. HRVico's published pricing lists a Free plan for up to 5 employees. Review the pricing page for the current inclusions.",
  },
  {
    question: 'How can I find the right HRVico plan?',
    answer:
      'Compare employee limits and available features on the pricing page. If your requirements are more complex, contact the HRVico team or book a demo.',
  },
  {
    question: "Where can I learn more about HRVico's features?",
    answer: 'Visit the Features page to explore the available modules and workflows.',
  },
];

export default function AboutPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutFaqs.map((faq) => ({
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
        name: 'About Us',
        item: 'https://hrvico.com/about',
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
              <span>ABOUT HRVICO</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Making Everyday HR Management <span className="gradient-text">Simpler for Businesses</span>
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
              Better HR Management Starts With Better Organisation.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              Managing people is one of the most important parts of running a business. But employee records, attendance, leave requests and everyday HR administration can quickly become difficult to manage when processes are scattered. HRVico brings essential HR activities into one digital platform, helping businesses create a more organised way to manage their workforce.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <Link href="/features" className="btn btn--primary btn--large hero__btn-primary">
                  <span>Explore Features →</span>
                </Link>
                <a
                  href="https://app.hrvico.com/onboard-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary btn--large hero__btn-secondary"
                >
                  <span>Start Free</span>
                </a>
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                Discover a practical approach to everyday HR management.
              </p>
            </div>
          </div>

          <div
            className="hero__preview"
            data-animate="fade-up"
            style={{
              maxWidth: '840px',
              margin: '40px auto 0',
              position: 'relative',
            }}
          >
            <Image
              src="/assets/images/Powerful Analytics at Your Fingertips.webp"
              alt="HRVico HRMS platform for organised employee and workforce management."
              width={1200}
              height={700}
              priority
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 40px rgba(108, 63, 197, 0.16))' }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — OUR STORY
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6C3FC5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>
                OUR STORY
              </span>
              <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Built Around the Everyday Needs <span className="gradient-text">of HR Teams</span>
            </h2>
            </div>

            <div style={{ background: '#FAF9FF', padding: '40px', borderRadius: '20px', border: '1px solid rgba(108, 63, 197, 0.12)', fontSize: '1.05rem', lineHeight: '1.75', color: '#334155' }}>
              <p style={{ marginBottom: '18px' }}>
                Every business depends on its people. As teams grow, keeping employee information organised and managing routine HR activities can become increasingly demanding.
              </p>
              <p style={{ marginBottom: '18px' }}>
                HRVico is an HRMS platform developed by <strong>Scriza Pvt Ltd</strong> to help businesses manage essential HR processes through a digital system.
              </p>
              <p style={{ marginBottom: '18px' }}>
                From employee management to attendance and leave workflows, HRVico brings supported HR activities together so businesses can follow a more structured approach to workforce administration.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: '#6C3FC5' }}>
                Our focus is simple: help businesses organise everyday HR work and make employee administration easier to manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — THE PROBLEM WE WANT TO HELP SOLVE
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Running a Business Is Challenging Enough. HR Should <span className="gradient-text">Feel More Organised.</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              When HR processes depend on scattered spreadsheets, manual records and repeated follow-ups, even routine tasks can take more effort than expected.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '36px' }}>
            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📂
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Employee Information Everywhere
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Keeping employee records in different files makes it harder to maintain a consistent view of workforce information.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⏱️
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Attendance and Leave Follow-Ups
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Reviewing attendance and coordinating leave requests can create repetitive administrative work.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📈
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Growing Teams, Growing Responsibilities
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                As businesses hire more people, they need HR processes that can keep up with changing requirements.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: 600, color: '#6C3FC5' }}>
            HRVico helps businesses bring supported HR activities into a more organised digital workflow.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — WHAT HRVICO OFFERS (2x4 GRID)
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Essential HR Management <span className="gradient-text">in One Platform</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Explore the core modules built to streamline everyday workforce operations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Organise employee profiles and workforce information in a centralised system.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Attendance Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Review attendance records through the available attendance management features.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Leave Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Manage leave applications, balances and approval workflows according to your configured policies.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Payroll Management
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Use payroll management on eligible plans to support salary processing and related HR activities.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Documents
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Keep employee-related documents organised and accessible to authorised users.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Reports and Analytics
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Review available workforce information through reports and dashboards.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Employee Self-Service
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Give employees access to supported HR functions through their employee dashboard.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '14px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                Additional HR Capabilities
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Explore other available features, including appraisals, reimbursements, job management and multi-branch management, depending on your plan.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/features" className="btn btn--primary btn--large">
              <span>Explore All Features →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHO WE HELP
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              HR Management for Businesses <span className="gradient-text">at Different Stages</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px', lineHeight: '1.65' }}>
              HR needs vary from one business to another. A small team may need a simple way to organise employee information, while a growing organisation may require additional workflows and branch management. HRVico offers plans for different team sizes and requirements.
            </p>
          </div>

          {/* Row 1 — 3 Cards Top */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🚀
              </div>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500, textAlign: 'center' }}>
                Startups and small businesses looking to organise essential HR processes.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📈
              </div>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500, textAlign: 'center' }}>
                Growing companies and SMEs managing larger employee records and routine HR activities.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏢
              </div>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500, textAlign: 'center' }}>
                Agencies and professional services firms that need structured employee administration.
              </p>
            </div>
          </div>

          {/* Row 2 — 2 Cards Bottom Centered */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div style={{ flex: '1 1 280px', maxWidth: '360px', background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏬
              </div>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500, textAlign: 'center' }}>
                Manufacturing, retail and hospitality businesses looking to organise their workforce information.
              </p>
            </div>

            <div style={{ flex: '1 1 280px', maxWidth: '360px', background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⚡
              </div>
              <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500, textAlign: 'center' }}>
                Larger organisations evaluating additional capabilities for more complex HR requirements.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/roles" className="btn btn--primary btn--large">
              <span>Explore Solutions →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — WHAT WE BELIEVE IN
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Practical HR Management. Clear <span className="gradient-text">Choices. Better Organisation.</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Our core beliefs and guiding principles in designing HRVico.
            </p>
          </div>

          {/* Row 1 — 3 Cards Top */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div style={{ padding: '28px 24px', background: '#FAF9FF', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ✨
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Simplicity</h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                HR software should help people understand and manage everyday tasks without unnecessary complexity.
              </p>
            </div>

            <div style={{ padding: '28px 24px', background: '#FAF9FF', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🎯
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Organisation</h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Employee information and routine HR activities should follow a consistent, structured process.
              </p>
            </div>

            <div style={{ padding: '28px 24px', background: '#FAF9FF', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🔍
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Transparency</h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Businesses should be able to review plan prices, employee limits and available features before making a decision.
              </p>
            </div>
          </div>

          {/* Row 2 — 2 Cards Bottom Centered */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <div style={{ flex: '1 1 280px', maxWidth: '360px', padding: '28px 24px', background: '#FAF9FF', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                💡
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Flexibility</h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Different businesses have different requirements. Plan selection should reflect team size and the capabilities needed.
              </p>
            </div>

            <div style={{ flex: '1 1 280px', maxWidth: '360px', padding: '28px 24px', background: '#FAF9FF', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⚙️
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Useful Technology</h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
                Technology should support real business workflows rather than add more unnecessary steps.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.88rem', color: '#64748B' }}>
            These principles guide how we present HRVico and help visitors evaluate whether it fits their requirements.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — DEVELOPED BY SCRIZA PVT LTD
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)', padding: '48px', borderRadius: '20px', border: '1px solid rgba(108, 63, 197, 0.15)', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: 700, color: '#6C3FC5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              DEVELOPED BY SCRIZA PVT LTD
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Technology Built to <span className="gradient-text">Support Business Operations</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
              HRVico is developed by <strong>Scriza Pvt Ltd</strong> and focuses on helping businesses organise essential HR activities through a digital platform.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '28px' }}>
              By bringing employee management and supported HR workflows together, HRVico gives businesses a structured option for handling everyday workforce administration.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/features" className="btn btn--primary btn--large">
                <span>Explore HRVico Features →</span>
              </Link>
              <Link href="/contact" className="btn btn--secondary btn--large">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — OUR APPROACH TO GETTING STARTED
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Find the Right HRMS <span className="gradient-text">for Your Business</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Follow three simple steps to evaluate HRVico for your organisation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', maxWidth: '960px', margin: '0 auto 40px' }}>
            <div style={{ background: '#FAF9FF', padding: '32px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 18px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Understand Your Needs
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Identify the HR activities you want to organise and the number of employees you need to manage.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '32px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 18px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Explore HRVico
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Review the available features, roles and subscription plans.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '32px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 18px', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Choose Your Next Step
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Start with the free plan if it meets your needs, or book a demo to discuss your requirements.
              </p>
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
          SECTION 9 — FAQS (ACCORDION)
          ========================================================================= */}
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about HRVico HRMS and Scriza Pvt Ltd."
        faqs={aboutFaqs}
      />

      {/* =========================================================================
          SECTION 10 — FINAL CTA SECTION
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Your People Matter. Make Managing <span className="gradient-text">HR More Organised.</span>
            </h2>
            <p className="final-cta__subtitle">
              Every growing business needs a practical way to manage employee information and everyday HR activities. Discover how HRVico can support your HR process and find a plan that fits your team.
            </p>
            <div className="final-cta__actions">
              <Link href="/features" className="btn btn--primary btn--large">
                <span>Explore Features →</span>
              </Link>
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--large"
              >
                <span>Start Free →</span>
              </a>
            </div>
            <p className="final-cta__note">
              Review available features and plan limits before getting started.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
