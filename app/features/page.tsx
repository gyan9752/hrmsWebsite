/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const metadata = {
  title: 'Features & HRMS Modules — HRVICO',
  description:
    'Complete suite of 15 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and team chat.',
  alternates: {
    canonical: 'https://hrvico.com/features',
  },
  openGraph: {
    title: 'Features & HRMS Modules — HRVICO',
    description:
      'Complete suite of 15 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and team chat.',
    url: 'https://hrvico.com/features',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features & HRMS Modules — HRVICO',
    description:
      'Complete suite of 15 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and team chat.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

const hrvicoModules = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Dashboard & Analytics',
    desc: 'Real-time attendance donut charts, department-wise pie charts, quick profile cards, and workforce analytics dashboards.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Employees Management',
    desc: 'Centralized employee directory, department-wise & designation-wise staff records, organization structure, and profiles.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Time & Attendance Tracking',
    desc: 'Daily attendance logs, face recognition & biometric sync, GPS geofenced clock-in/out, shift schedules, and monthly logs.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Leave Management',
    desc: 'Leave applications, custom leave policy management (CL/SL/PL), leave balance tracking, and multi-level approval workflows.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Appraisals & Performance',
    desc: 'Run transparent 360° appraisal cycles, performance reviews, OKR goal alignment, and employee growth tracking.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: 'Payroll & Tax Processing',
    desc: 'Automated salary calculation, PF / ESIC / TDS statutory deductions, 1-click payslip generation, and bank export disbursals.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Employee Documents Vault',
    desc: 'Secure document repository, digital onboarding verification, identity cards, contract papers, and policy compliance files.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
      </svg>
    ),
    title: 'Reimbursement & Expenses',
    desc: 'Employee expense claim submissions, receipt image uploads, finance approval workflows, and claim status tracking.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Job & Recruitment Management',
    desc: 'Internal hiring requisitions, job openings, applicant tracking system (ATS), candidate pipelines, and hiring workflows.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
    title: 'Holiday Calendar',
    desc: 'Regional & national holiday calendar management, company off-days list, and holiday notice broadcasts.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: 'Announcements & Notice Board',
    desc: 'Company-wide notice broadcasts, policy updates, event announcements, newsletters, and team feed notices.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <circle cx="18" cy="5" r="3" fill="#6C3FC5" />
      </svg>
    ),
    title: 'Notifications & Push Alerts',
    desc: 'Instant system notifications, pending action reminders, push alerts, and automated task triggers across modules.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Health & Wellness Monitor',
    desc: 'Workforce health tracking, employee activity monitoring, wellness check-ins, and safety protocols for employees.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Built-In Team Chat',
    desc: 'Real-time team communication, 1:1 direct messages, group channels, document sharing, and birthday/anniversary feeds.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Security & Access Control',
    desc: 'Multi-role permission controls, data encryption, role-based access for Super Admins, HR Managers, and Employees.',
  },
];

export default function FeaturesPage() {
  return (
    <section className="section section--alt features" id="features" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">
            Everything Your HR Team Needs{' '}
            <span className="gradient-text">Nothing It Doesn't</span>
          </h2>
          <p className="section-subtitle">
            Fifteen powerful modules. One unified experience. Zero complexity.
          </p>
        </div>

        <div className="features__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {hrvicoModules.map((mod, idx) => (
            <div
              key={idx}
              className="feature-card"
              style={{
                textAlign: 'center',
                padding: '32px 24px',
                borderRadius: '20px',
                background: '#ffffff',
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <div
                className="feature-card__icon"
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)',
                  border: '1px solid #e9d5ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6C3FC5',
                  marginBottom: '20px',
                  boxShadow: '0 8px 20px rgba(108, 63, 197, 0.08)',
                  margin: '0 auto 20px',
                }}
              >
                {mod.icon}
              </div>
              <h3 className="feature-card__title" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px', width: '100%', textAlign: 'center' }}>
                {mod.title}
              </h3>
              <p className="feature-card__desc" style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
