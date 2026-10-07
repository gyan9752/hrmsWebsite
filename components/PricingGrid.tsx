'use client';

import React, { useState, useEffect } from 'react';

const HRVICO_API_BASE = 'https://app.hrvico.com/back/api';

const FALLBACK_PLANS = [
  {
    planId: '117807',
    plan: 'Free',
    userLimit: '5',
    pricePerMonth: 0,
    pricePerYear: 0,
    features: [
      { featuresName: 'Upto 5 Staff' },
      { featuresName: 'Employee Management' },
      { featuresName: 'Attendance Management' },
      { featuresName: 'Leave Management' },
      { featuresName: 'Holiday Calendar' },
      { featuresName: 'Reports & Analytics' },
    ],
    status: 'Active',
  },
  {
    planId: '537180',
    plan: 'Basic Plan',
    userLimit: '25',
    pricePerMonth: 999,
    pricePerYear: 11988,
    features: [
      { featuresName: 'Upto 25 Employees' },
      { featuresName: 'Attendance Management' },
      { featuresName: 'Leave Management' },
      { featuresName: 'Employee Dashboard' },
      { featuresName: 'Holiday calendar' },
      { featuresName: 'Reports Analytics' },
      { featuresName: 'Texting Chat Box' },
      { featuresName: 'Manage Employee Documents' },
      { featuresName: 'Employee Management' },
    ],
    status: 'Active',
  },
  {
    planId: '551739',
    plan: 'Standard Plan',
    userLimit: '50',
    pricePerMonth: 1999,
    pricePerYear: 23988,
    features: [
      { featuresName: 'Upto 50 Employees' },
      { featuresName: 'Attendance Management' },
      { featuresName: 'Payroll Management' },
      { featuresName: 'Leave Management' },
      { featuresName: 'Reports & Analytics' },
      { featuresName: 'Document Management' },
      { featuresName: 'Mobile Dashboard App' },
      { featuresName: 'HR Automation' },
      { featuresName: 'Chat Box(Audio/Video)' },
      { featuresName: 'Employee Dashboard' },
    ],
    status: 'Active',
  },
  {
    planId: '739205',
    plan: 'Premium Plan',
    userLimit: '100',
    pricePerMonth: 3999,
    pricePerYear: 48000,
    features: [
      { featuresName: 'Up To 100 Employees' },
      { featuresName: 'Everything in Standard' },
      { featuresName: 'Multi-Branch Management' },
      { featuresName: 'HR Automation' },
      { featuresName: 'Priority Onboarding' },
      { featuresName: 'Job Management' },
      { featuresName: 'Priority Support' },
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
                <span className="popular-header__icon">🔥</span> Popular Choice
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
                    <span className="pricing-feature__check">✔</span>{' '}
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
