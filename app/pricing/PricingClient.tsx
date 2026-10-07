'use client';

import React, { useEffect } from 'react';
import PricingGrid from '@/components/PricingGrid';

export default function PricingClient() {
  useEffect(() => {
    document.body.classList.add('pricing-page');
    return () => {
      document.body.classList.remove('pricing-page');
    };
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #FAF8FF 0%, #F5F3FF 50%, #F0F4FF 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '40px',
      }}
    >
      {/* Background Grid Lines Pattern */}
      <div className="subpage__bg-grid" />

      {/* Hero Header */}
      <header className="subpage__header" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '60px', paddingBottom: '20px' }}>
        <div className="container">
          <p className="subpage__eyebrow">PRICING PLANS</p>
          <h1 className="subpage__title">
            Workforce Management without hassle,<br />
            Leave admin to <span className="gradient-text">HRVICO</span>.
          </h1>
          <p className="subpage__subtitle">
            Plans for every kind of business
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="pricing-page__container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Highlight Badges */}
        <div className="pricing-page-bullets">
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

        {/* Pricing Grid Wrapper */}
        <div className="pricing-grid-wrapper">
          <PricingGrid />

          {/* Enterprise Horizontal Pricing Card */}
          <div className="pricing-card-horizontal">
            <div className="pricing-card-horizontal__left">
              <div>
                <h3 className="pricing-card-horizontal__name">Enterprise Plan</h3>
                <p className="pricing-card-horizontal__desc">
                  Best For: 100+ Employees &amp; Enterprises
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
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-demo-modal'));
                }}
                className="btn btn--primary pricing-card-horizontal__btn"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
