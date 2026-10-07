'use client';

import React, { useState, useEffect } from 'react';
import { HRVICO_API_BASE, PricingPlan } from '@/lib/api';

const defaultPlans: PricingPlan[] = [
  {
    name: 'Essential',
    subtitle: 'Best for Small Teams & Startups',
    priceMonthly: 49,
    priceAnnual: 39,
    badge: 'Popular',
    features: [
      'Up to 25 Employees',
      'Attendance & Leave Management',
      'Employee Directory & Profiles',
      'Basic Payroll Processing',
      'Mobile App Punching',
      'Email & Chat Support',
    ],
    ctaText: 'Start Free Trial',
  },
  {
    name: 'Growth',
    subtitle: 'Best for Growing Companies',
    priceMonthly: 99,
    priceAnnual: 79,
    isPopular: true,
    features: [
      'Up to 100 Employees',
      'Everything in Essential',
      'Automated Payroll & Statutory Taxes',
      'Performance Appraisals & 360 Reviews',
      'Role-Based Admin Approvals',
      'Priority Support 24/7',
    ],
    ctaText: 'Get Started Now',
  },
  {
    name: 'Pro Enterprise',
    subtitle: 'Best for Mid-size Enterprises',
    priceMonthly: 199,
    priceAnnual: 159,
    features: [
      'Up to 250 Employees',
      'Everything in Growth',
      'Multi-Company Management',
      'Custom Approval Workflows',
      'Dedicated Account Manager',
      'Custom API & Integration',
    ],
    ctaText: 'Contact Sales',
  },
];

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [plans, setPlans] = useState<PricingPlan[]>(defaultPlans);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlans() {
      try {
        const res = await fetch(`${HRVICO_API_BASE}/Pricing/get-plans`);
        if (res.ok) {
          const data = await res.json();
          const items = Array.isArray(data) ? data : data.data || data.plans || [];
          if (items.length > 0) {
            setPlans(items);
          }
        }
      } catch (err) {
        console.warn('Using default fallback pricing plans.');
      } finally {
        setLoading(false);
      }
    }
    loadPlans();
  }, []);

  const openDemoModal = () => {
    window.dispatchEvent(new CustomEvent('open-demo-modal'));
  };

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Flexible Pricing</p>
          <h2 className="section-title">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your business. No hidden setup fees or surprise charges.
          </p>

          {/* Toggle */}
          <div className="pricing-toggle" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: '24px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '30px' }}>
            <span style={{ fontWeight: !isAnnual ? 700 : 500, cursor: 'pointer' }} onClick={() => setIsAnnual(false)}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                width: '50px',
                height: '26px',
                borderRadius: '13px',
                background: isAnnual ? '#6366f1' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.3s',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  position: 'absolute',
                  top: '3px',
                  left: isAnnual ? '27px' : '3px',
                  transition: 'left 0.3s',
                }}
              />
            </button>
            <span style={{ fontWeight: isAnnual ? 700 : 500, cursor: 'pointer' }} onClick={() => setIsAnnual(true)}>
              Annual Billing <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 700 }}>(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {plans.map((plan, idx) => {
            const price = isAnnual
              ? (plan.priceAnnual || plan.priceMonthly)
              : (plan.priceMonthly || plan.priceAnnual);

            const isHighlighted = plan.isPopular || plan.popular || idx === 1;

            return (
              <div
                key={idx}
                className={`pricing-card ${isHighlighted ? 'pricing-card--popular' : ''}`}
                style={{
                  background: '#ffffff',
                  border: isHighlighted ? '2px solid #6366f1' : '1px solid #eaeaea',
                  borderRadius: '20px',
                  padding: '32px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: isHighlighted ? '0 10px 30px rgba(99, 102, 241, 0.15)' : 'none',
                }}
              >
                {isHighlighted && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      right: '24px',
                      background: '#6366f1',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 14px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0e2a46', marginBottom: '8px' }}>
                  {plan.name || plan.planName}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '24px' }}>
                  {plan.subtitle || 'All essential HR tools included'}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0e2a46' }}>
                    ₹{price}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}> / employee / month</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {plan.features?.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: '#334155' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn ${isHighlighted ? 'btn--primary' : 'btn--outline'}`}
                  onClick={openDemoModal}
                  style={{ width: '100%' }}
                >
                  {plan.ctaText || 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
