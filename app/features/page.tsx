/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Features, Industry Solutions & Modules — HRVICO',
  description:
    'Complete suite of 15 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and industry-tailored workflows.',
  alternates: {
    canonical: 'https://hrvico.com/features',
  },
  openGraph: {
    title: 'Features, Industry Solutions & Modules — HRVICO',
    description:
      'Complete suite of 15 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and industry-tailored workflows.',
    url: 'https://hrvico.com/features',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features, Industry Solutions & Modules — HRVICO',
    description:
      'Complete suite of 15 powerful HRMS modules matching app.hrvico.com: attendance, payroll, leave, appraisals, reimbursements, documents, recruitment, and industry-tailored workflows.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

const hrvicoModules = [
  {
    id: 'dashboard-analytics',
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
    id: 'employee-management',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Employee Management',
    desc: 'Centralized employee directory, department-wise & designation-wise staff records, organization structure, and profiles.',
  },
  {
    id: 'attendance-tracking',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Attendance Management',
    desc: 'Daily attendance logs, face recognition & biometric sync, GPS geofenced clock-in/out, shift schedules, and monthly logs.',
  },
  {
    id: 'leave-management',
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
    id: 'payroll-processing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: 'Payroll Management',
    desc: 'Automated salary calculation, PF / ESIC / TDS statutory deductions, 1-click payslip generation, and bank export disbursals.',
  },
  {
    id: 'documents',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Employee Documents',
    desc: 'Secure document repository, digital onboarding verification, identity cards, contract papers, and policy compliance files.',
  },
  {
    id: 'performance',
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
    id: 'expenses',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
      </svg>
    ),
    title: 'Reimbursements & Expenses',
    desc: 'Employee expense claim submissions, receipt image uploads, finance approval workflows, and claim status tracking.',
  },
  {
    id: 'announcements',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: 'Holidays & Announcements',
    desc: 'Company-wide notice broadcasts, policy updates, holiday calendar management, event alerts, and team feed notices.',
  },
  {
    id: 'recruitment',
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
    id: 'notifications',
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
    id: 'wellness',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Health & Wellness Monitor',
    desc: 'Workforce health tracking, employee activity monitoring, wellness check-ins, and safety protocols for employees.',
  },
  {
    id: 'team-chat',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Built-In Team Chat',
    desc: 'Real-time team communication, 1:1 direct messages, group channels, document sharing, and birthday/anniversary feeds.',
  },
  {
    id: 'security',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Security & Access Control',
    desc: 'Multi-role permission controls, data encryption, role-based access for Super Admins, HR Managers, and Employees.',
  },
  {
    id: 'holiday-calendar',
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
];

const industriesData = [
  {
    category: 'Technology & Services',
    items: [
      {
        id: 'tech',
        name: 'IT & Software',
        desc: 'Built for fast-moving engineering teams, SaaS companies, and remote-first organizations.',
        points: ['GPS & IP geofenced clock-in', 'Flexible sprint schedules', '360° reviews & goal alignment'],
      },
      {
        id: 'services',
        name: 'Agencies & Professional Services',
        desc: 'Engineered for design agencies, marketing consultancies, and legal/financial service firms.',
        points: ['Client billing timesheets', 'Contractor retainer tracking', 'Expense claim approvals'],
      },
      {
        id: 'real-estate',
        name: 'Real Estate & Properties',
        desc: 'Designed for property brokerages, real estate builders, and on-field sales agents.',
        points: ['Site-level GPS geofencing', 'Field agent travel claims', 'Multi-project staff allocation'],
      },
    ],
  },
  {
    category: 'Operations & Workforce',
    items: [
      {
        id: 'manufacturing',
        name: 'Manufacturing & Plants',
        desc: 'Robust management for factory floors, manufacturing plants, and heavy industrial units.',
        points: ['Multi-shift rotational rosters', 'Biometric device synchronization', 'Overtime & labor compliance'],
      },
      {
        id: 'retail',
        name: 'Retail & Multi-Outlet Stores',
        desc: 'Optimized for retail chains, showrooms, supermarket branches, and franchise outlets.',
        points: ['Store-wise attendance logs', 'Casual & part-time shift rotas', 'Centralized branch reporting'],
      },
      {
        id: 'hospitality',
        name: 'Hospitality & Restaurants',
        desc: 'Flexible scheduling for hotels, restaurant chains, catering services, and event teams.',
        points: ['Dynamic rota management', 'Instant tips & expense payouts', 'Fast seasonal worker onboarding'],
      },
    ],
  },
  {
    category: 'People-Focused Organisations',
    items: [
      {
        id: 'education',
        name: 'Education & Academics',
        desc: 'Structured for schools, colleges, coaching institutions, and universities.',
        points: ['Academic term holiday policies', 'Faculty lecture attendance', 'Centralized staff credentials'],
      },
      {
        id: 'healthcare',
        name: 'Healthcare & Clinics',
        desc: '24/7 mission-critical operations for hospitals, pathology labs, and clinics.',
        points: ['24/7 rotating roster shifts', 'Doctor & nursing standby logs', 'Statutory audit record compliance'],
      },
    ],
  },
];

const comparisonData = [
  {
    dimension: 'Attendance Tracking',
    excel: 'Manual punch logs, WhatsApp check-ins, high risk of buddy punching',
    hrvico: 'Biometric device integration, face sync, and GPS mobile geofencing',
  },
  {
    dimension: 'Payroll Computation',
    excel: 'Fragile formulas that break on edits; manual tax & bonus calculations',
    hrvico: '1-click automated payroll with zero formula errors and direct bank export',
  },
  {
    dimension: 'Indian Statutory Compliance',
    excel: 'High risk of calculating wrong PF, ESIC, PT or TDS with penalty risks',
    hrvico: '100% automated EPF, ESIC, PT & TDS rules updated to latest labor laws',
  },
  {
    dimension: 'Leave & Absence Management',
    excel: 'Scattered email threads, lost slips, manual balance updates',
    hrvico: 'Employee self-service portal, automated accruals, and instant approvals',
  },
  {
    dimension: 'Data Security & Storage',
    excel: 'Unencrypted spreadsheets on desktops; risk of accidental overwrites',
    hrvico: 'Enterprise 256-bit SSL encryption, automated daily cloud backups, role permissions',
  },
  {
    dimension: 'Payslip Distribution',
    excel: 'Manual individual emailing or printed paper pay slips',
    hrvico: 'Automated 1-click password-protected PDF payslips via web & mobile portal',
  },
];

export default function FeaturesPage() {
  return (
    <main style={{ paddingTop: '75px' }}>
      {/* HERO SECTION */}
      <section className="section section--alt features" id="features-hero" style={{ paddingTop: '50px', paddingBottom: '40px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '16px', maxWidth: '850px', margin: '0 auto' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              Platform Capabilities
            </p>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0', lineHeight: 1.25 }}>
              Everything Your HR Team Needs{' '}
              <span className="gradient-text">Nothing It Doesn't</span>
            </h1>
            <p className="section-subtitle" style={{ fontSize: '1.1rem', color: '#64748b', margin: '0 auto', lineHeight: 1.6 }}>
              Fifteen powerful modules. One unified cloud experience. Designed to eliminate spreadsheets and administrative chaos.
            </p>
          </div>
        </div>
      </section>

      {/* 15 CORE MODULES GRID */}
      <section className="section" id="all-modules" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="features__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {hrvicoModules.map((mod) => (
              <div
                key={mod.id}
                id={mod.id}
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
                  scrollMarginTop: '110px',
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
                <h2 className="feature-card__title" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px', width: '100%', textAlign: 'center' }}>
                  {mod.title}
                </h2>
                <p className="feature-card__desc" style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS SECTION */}
      <section className="section section--alt" id="industries" style={{ padding: '70px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              Industry Solutions
            </p>
            <h2 className="section-title" style={{ fontSize: '2.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              Tailored HR Workflows for <span className="gradient-text">Your Industry</span>
            </h2>
            <p className="section-subtitle" style={{ fontSize: '1.05rem', color: '#64748b', margin: '0 auto', lineHeight: 1.6 }}>
              Whether you manage shift workers on a factory floor or developers across hybrid workspaces, HRVICO adapts seamlessly.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {industriesData.map((group, gIdx) => (
              <div key={gIdx}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ width: '4px', height: '24px', background: '#6C3FC5', borderRadius: '4px' }}></span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {group.category}
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        scrollMarginTop: '110px',
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                          {item.name}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                          {item.desc}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155', fontWeight: 500 }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6C3FC5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                        <Link
                          href="/contact"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#6C3FC5',
                            fontWeight: 700,
                            fontSize: '13px',
                            textDecoration: 'none',
                          }}
                        >
                          <span>Explore {item.name} Solutions</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HRMS VS EXCEL COMPARISON SECTION */}
      <section className="section" id="hrms-vs-excel" style={{ padding: '70px 0', scrollMarginTop: '110px' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 48px' }}>
            <p className="section-eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6C3FC5', marginBottom: '8px' }}>
              Compare &amp; Decide
            </p>
            <h2 className="section-title" style={{ fontSize: '2.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              HRMS vs Manual Excel: <span className="gradient-text">Why Spreadsheets Fail</span>
            </h2>
            <p className="section-subtitle" style={{ fontSize: '1.05rem', color: '#64748b', margin: '0 auto', lineHeight: 1.6 }}>
              Spreadsheets are great for ad-hoc scratch calculations, but using them for payroll, attendance, and employee data leads to chaos. Here is why modern companies upgrade to HRVICO:
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 6px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '18px 24px', fontSize: '14px', fontWeight: 800, color: '#0f172a', width: '25%' }}>Capability</th>
                    <th style={{ padding: '18px 24px', fontSize: '14px', fontWeight: 800, color: '#ef4444', width: '37.5%' }}>Manual Excel / Spreadsheets</th>
                    <th style={{ padding: '18px 24px', fontSize: '14px', fontWeight: 800, color: '#6C3FC5', width: '37.5%' }}>HRVICO All-in-One HRMS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, rIdx) => (
                    <tr key={rIdx} style={{ borderBottom: '1px solid #f1f5f9', background: rIdx % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                      <td style={{ padding: '18px 24px', fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>
                        {row.dimension}
                      </td>
                      <td style={{ padding: '18px 24px', fontSize: '13.5px', color: '#64748b', lineHeight: 1.5 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#ef4444', fontWeight: 800, flexShrink: 0 }}>✕</span>
                          <span>{row.excel}</span>
                        </div>
                      </td>
                      <td style={{ padding: '18px 24px', fontSize: '13.5px', color: '#1e293b', lineHeight: 1.5, fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#10b981', fontWeight: 800, flexShrink: 0 }}>✓</span>
                          <span>{row.hrvico}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
              Free setup for up to 5 employees. Zero spreadsheets required.
            </p>
            <div style={{ display: 'inline-flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ padding: '12px 28px', borderRadius: '9999px', fontWeight: 700 }}
              >
                Start Free (No Spreadsheets)
              </a>
              <Link
                href="/pricing"
                className="btn btn--secondary"
                style={{ padding: '12px 28px', borderRadius: '9999px', fontWeight: 600 }}
              >
                View Pricing Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section style={{ background: 'linear-gradient(135deg, #0A061C 0%, #1A0D3F 100%)', padding: '60px 16px', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Ready to Experience the HRVICO Advantage?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '28px', lineHeight: 1.6 }}>
            Automate payroll, streamline attendance, and eliminate spreadsheet headaches today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://app.hrvico.com/onboard-company"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)',
                color: '#ffffff',
                fontWeight: 700,
                padding: '14px 32px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '15px',
                boxShadow: '0 6px 20px rgba(108, 63, 197, 0.4)',
              }}
            >
              Start Free (Up to 5 Staff)
            </a>
            <Link
              href="/contact"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.25)',
                fontWeight: 600,
                padding: '14px 32px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontSize: '15px',
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
