import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features & HRMS Modules — HRVICO',
  description: 'Complete suite of 14 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and team chat.',
  keywords: [
    'HRMS features',
    'attendance tracking software',
    'automated payroll module',
    'leave management software',
    'reimbursement management',
    'HRVICO modules',
    'employee documents vault',
  ],
  alternates: {
    canonical: 'https://hrvico.com/features',
  },
  openGraph: {
    title: 'Features & HRMS Modules — HRVICO',
    description: 'Complete suite of 14 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and team chat.',
    url: 'https://hrvico.com/features',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features & HRMS Modules — HRVICO',
    description: 'Complete suite of 14 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and team chat.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

const hrvicoModules = [
  {
    icon: '📊',
    title: 'Dashboard & Analytics',
    desc: 'Real-time attendance donut charts, department-wise pie charts, quick profile cards, and workforce analytics dashboards.',
  },
  {
    icon: '👥',
    title: 'Employees Management',
    desc: 'Centralized employee directory, department-wise & designation-wise staff records, organization structure, and profiles.',
  },
  {
    icon: '⏱️',
    title: 'Time & Attendance Tracking',
    desc: 'Daily attendance logs, face recognition & biometric sync, GPS geofenced clock-in/out, shift schedules, and monthly logs.',
  },
  {
    icon: '📅',
    title: 'Leave Management',
    desc: 'Leave applications, custom leave policy management (CL/SL/PL), leave balance tracking, and multi-level approval workflows.',
  },
  {
    icon: '📈',
    title: 'Appraisals & Performance',
    desc: 'Run transparent 360° appraisal cycles, performance reviews, OKR goal alignment, and employee growth tracking.',
  },
  {
    icon: '💵',
    title: 'Payroll & Tax Processing',
    desc: 'Automated salary calculation, PF / ESIC / TDS statutory deductions, 1-click payslip generation, and bank export disbursals.',
  },
  {
    icon: '📄',
    title: 'Employee Documents Vault',
    desc: 'Secure document repository, digital onboarding verification, identity cards, contract papers, and policy compliance files.',
  },
  {
    icon: '💸',
    title: 'Reimbursement & Expenses',
    desc: 'Employee expense claim submissions, receipt image uploads, finance approval workflows, and claim status tracking.',
  },
  {
    icon: '💼',
    title: 'Job & Recruitment Management',
    desc: 'Internal hiring requisitions, job openings, applicant tracking system (ATS), candidate pipelines, and hiring workflows.',
  },
  {
    icon: '🌴',
    title: 'Holiday Calendar',
    desc: 'Regional & national holiday calendar management, company off-days list, and holiday notice broadcasts.',
  },
  {
    icon: '📢',
    title: 'Announcements & Notice Board',
    desc: 'Company-wide notice broadcasts, policy updates, event announcements, newsletters, and team feed notices.',
  },
  {
    icon: '🔔',
    title: 'Notifications & Push Alerts',
    desc: 'Instant system notifications, pending action reminders, push alerts, and automated task triggers across modules.',
  },
  {
    icon: '🩺',
    title: 'Health & Wellness Monitor',
    desc: 'Workforce health tracking, employee activity monitoring, wellness check-ins, and safety protocols for employees.',
  },
  {
    icon: '💬',
    title: 'Built-In Team Chat',
    desc: 'Real-time team communication, 1:1 direct messages, group channels, document sharing, and birthday/anniversary feeds.',
  },
  {
    icon: '🛡️',
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
                  fontSize: '2rem',
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
