'use client';

import React, { useState, useEffect } from 'react';

const HRVICO_API_BASE = 'https://app.hrvico.com/back/api';

const FALLBACK_PLANS = [
  {
    planId: '117807',
    plan: 'Free Plan',
    userLimit: '5',
    pricePerMonth: 0,
    pricePerYear: 0,
    description: 'For teams getting started with digital HR.',
    supportingText: 'Get started with essential HR management for a small team.',
    features: [
      { featuresName: 'Up to 5 employees' },
      { featuresName: 'Employee management' },
      { featuresName: 'Attendance management' },
      { featuresName: 'Leave management' },
      { featuresName: 'Holiday calendar' },
      { featuresName: 'Reports and analytics' },
    ],
    status: 'Active',
  },
  {
    planId: '537180',
    plan: 'Basic Plan',
    userLimit: '25',
    pricePerMonth: 999,
    pricePerYear: 11988,
    description: 'For small businesses that need more organised HR processes.',
    supportingText: 'Organise employee information and everyday HR activities.',
    features: [
      { featuresName: 'Up to 25 employees' },
      { featuresName: 'Attendance management' },
      { featuresName: 'Leave management' },
      { featuresName: 'Employee dashboard' },
      { featuresName: 'Holiday calendar' },
      { featuresName: 'Reports and analytics' },
      { featuresName: 'Text chat box' },
      { featuresName: 'Employee document management' },
      { featuresName: 'Employee management' },
    ],
    status: 'Active',
  },
  {
    planId: '551739',
    plan: 'Standard Plan',
    userLimit: '50',
    pricePerMonth: 1999,
    pricePerYear: 23988,
    description: 'For growing teams that need payroll and additional HR capabilities.',
    supportingText: 'Bring payroll and more HR activities into one platform.',
    features: [
      { featuresName: 'Up to 50 employees' },
      { featuresName: 'Attendance management' },
      { featuresName: 'Payroll management' },
      { featuresName: 'Leave management' },
      { featuresName: 'Reports and analytics' },
      { featuresName: 'Document management' },
      { featuresName: 'Mobile dashboard app' },
      { featuresName: 'HR automation' },
      { featuresName: 'Audio/video chat box' },
      { featuresName: 'Employee dashboard' },
      { featuresName: 'Holiday calendar' },
      { featuresName: 'Employee document management' },
      { featuresName: 'Appraisals management' },
      { featuresName: 'Reimbursement' },
    ],
    status: 'Active',
  },
  {
    planId: '739205',
    plan: 'Premium Plan',
    userLimit: '100',
    pricePerMonth: 3999,
    pricePerYear: 48000,
    description: 'For larger teams and businesses managing multiple branches.',
    supportingText: 'Support a growing workforce with additional management capabilities.',
    features: [
      { featuresName: 'Up to 100 employees' },
      { featuresName: 'Everything in Standard' },
      { featuresName: 'Multi-branch management' },
      { featuresName: 'HR automation' },
      { featuresName: 'Priority onboarding' },
      { featuresName: 'Job management' },
      { featuresName: 'Website health monitoring' },
      { featuresName: 'Priority support' },
      { featuresName: 'Payroll management' },
      { featuresName: 'Audio/video chat box' },
    ],
    status: 'Active',
  },
];

export default function PricingGrid() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [plans, setPlans] = useState(FALLBACK_PLANS);

  useEffect(() => {
    fetch(`${HRVICO_API_BASE}/superadmin/subscriptionPlan/getAllPlans`)
      .then((res) => res.json())
      .then((data) => {
        const rawPlans = data.plans || data.data || [];
        if (Array.isArray(rawPlans) && rawPlans.length > 0) {
          const activePlans = rawPlans
            .filter((p: any) => p.status === 'Active')
            .sort((a: any, b: any) => (a.pricePerMonth || 0) - (b.pricePerMonth || 0));
          if (activePlans.length > 0) {
            setPlans(activePlans);
          }
        }
      })
      .catch(() => {
        // Fallback plans retained
      });
  }, []);

  return (
    <div className={`pricing-page__grid ${isAnnual ? 'annual' : ''}`} id="pricingGrid">
      {plans.map((plan: any, index: number) => {
        const isPopular = plan.plan.toLowerCase().includes('standard');
        const price = isAnnual
          ? Math.round((plan.pricePerYear || plan.pricePerMonth * 12) / 12)
          : plan.pricePerMonth;

        const formattedPrice = price === 0 ? '₹0' : `₹${price.toLocaleString('en-IN')}`;

        return (
          <div
            key={plan.planId || index}
            className={`pricing-card ${isPopular ? 'pricing-card--popular' : ''}`}
          >
            {isPopular && (
              <div className="pricing-card__popular-header">
                <span className="popular-header__icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span> Popular Choice
              </div>
            )}

            <div className={isPopular ? 'pricing-card__body' : 'pricing-card__inner'}>
              <h3 className="pricing-card__name">{plan.plan}</h3>
              <p className="pricing-card__desc">
                Up to {plan.userLimit || '∞'} employees
              </p>

              <div className="pricing-card__price">
                <span className="pricing-card__amount">{formattedPrice}</span>
                <span className="pricing-card__period">/mo</span>
              </div>

              <div className="pricing-card__price-subtext">
                {price === 0 ? 'free setup' : isAnnual ? 'billed annually' : 'billed monthly'}
              </div>

              <div className="pricing-card__features">
                {plan.features?.map((f: any, fIdx: number) => (
                  <div key={fIdx} className="pricing-feature">
                    <span className="pricing-feature__check" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>{' '}
                    {f.featuresName || f.name}
                  </div>
                ))}
              </div>

              <div className="pricing-card__feature-highlight">
                Up to {plan.userLimit || '∞'} Employees Included
              </div>

              <a
                href="https://app.hrvico.com/onboard-company"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${isPopular ? 'btn--primary' : 'btn--light-grey'} pricing-card__cta`}
              >
                {price === 0 ? 'Start Free' : 'Get Started'}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
