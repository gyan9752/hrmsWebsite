'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface RoleSwitcherProps {
  style?: React.CSSProperties;
}

export default function RoleSwitcher({ style }: RoleSwitcherProps) {
  const [activeRole, setActiveRole] = useState<'superadmin' | 'admin' | 'employee'>('superadmin');

  return (
    <section className="section role-switcher" id="roles" style={style}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">Multi-Role Architecture</p>
          <h2 className="section-title">
            Built for <span className="gradient-text">Every Role</span> in Your Organization
          </h2>
          <p className="section-subtitle">
            Whether you&apos;re overseeing 50 companies or checking your payslip HRVICO adapts to you.
          </p>
        </div>

        {/* Tabs */}
        <div className="role-tabs">
          <button
            type="button"
            className={`role-tab ${activeRole === 'superadmin' ? 'active' : ''}`}
            onClick={() => setActiveRole('superadmin')}
          >
            <span className="role-tab__icon">🏢</span>
            Super Admin
          </button>
          <button
            type="button"
            className={`role-tab ${activeRole === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveRole('admin')}
          >
            <span className="role-tab__icon">👔</span>
            Admin
          </button>
          <button
            type="button"
            className={`role-tab ${activeRole === 'employee' ? 'active' : ''}`}
            onClick={() => setActiveRole('employee')}
          >
            <span className="role-tab__icon">👤</span>
            Employee
          </button>
        </div>

        {/* Content Area */}
        <div className="role-content-area">
          {/* Super Admin */}
          <div className={`role-content ${activeRole === 'superadmin' ? 'active' : ''}`}>
            <div className="role-content__info">
              <span className="role-content__badge">Super Admin Panel</span>
              <h3 className="role-content__title">
                Complete Command Center for Platform Owners
              </h3>
              <p className="role-content__desc">
                Manage multiple companies, control subscriptions, monitor revenue, and oversee the entire platform from a single powerful dashboard.
              </p>
              <div className="role-content__features">
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Multi-Company Management</strong> — Onboard, configure, and monitor multiple organizations from one view
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Subscription &amp; Billing</strong> — Flexible plans, auto-invoicing, and revenue analytics at a glance
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Global Analytics</strong> — Cross-company dashboards with user activity and growth metrics
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Admin Provisioning</strong> — Create and manage admin accounts for each organization
                  </p>
                </div>
              </div>
            </div>
            <div className="role-content__visual">
              <div className="role-content__image-glow"></div>
              <img
                className="role-content__image"
                src="/assets/images/Super Admin 1.webp"
                alt="HRVICO Super Admin Dashboard"
                loading="lazy"
              />
            </div>
          </div>

          {/* Admin */}
          <div className={`role-content ${activeRole === 'admin' ? 'active' : ''}`}>
            <div className="role-content__info">
              <span className="role-content__badge">Admin Panel</span>
              <h3 className="role-content__title">
                Everything HR Needs to Run Like Clockwork
              </h3>
              <p className="role-content__desc">
                From employee onboarding to payroll processing — manage your entire HR operation with powerful automation and real-time insights.
              </p>
              <div className="role-content__features">
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Employee Lifecycle</strong> — Onboarding, profiles, departments, and designations in one place
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Attendance &amp; Payroll</strong> — Automated tracking, salary processing, and tax calculations
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Leave &amp; Appraisals</strong> — Policy management, approval workflows, and 360° reviews
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Department Analytics</strong> — Real-time attendance heatmaps and performance dashboards
                  </p>
                </div>
              </div>
            </div>
            <div className="role-content__visual">
              <div className="role-content__image-glow"></div>
              <img
                className="role-content__image"
                src="/assets/images/Admin 1.webp"
                alt="HRVICO Admin Dashboard"
                loading="lazy"
              />
            </div>
          </div>

          {/* Employee */}
          <div className={`role-content ${activeRole === 'employee' ? 'active' : ''}`}>
            <div className="role-content__info">
              <span className="role-content__badge">Employee Panel</span>
              <h3 className="role-content__title">
                Self-Service That Employees Actually Love
              </h3>
              <p className="role-content__desc">
                Clock in with face recognition, request leave in one tap, download payslips instantly, and chat with your team — all from a personal dashboard.
              </p>
              <div className="role-content__features">
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>One-Tap Attendance</strong> — Face recognition clock-in/out with GPS verification
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Leave Management</strong> — View balances, request time off, and track approval status
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Payslip &amp; Documents</strong> — Instant access to salary slips, tax forms, and personal documents
                  </p>
                </div>
                <div className="role-feature">
                  <span className="role-feature__check">✓</span>
                  <p className="role-feature__text">
                    <strong>Built-In Chat</strong> — Message colleagues, join group channels, and share files in real-time
                  </p>
                </div>
              </div>
            </div>
            <div className="role-content__visual">
              <div className="role-content__image-glow"></div>
              <img
                className="role-content__image"
                src="/assets/images/User.webp"
                alt="HRVICO Employee Dashboard"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
