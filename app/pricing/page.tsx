import React from 'react';
import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'HRMS Software Pricing in India | HRVico',
  description:
    'Compare HRVico HRMS plans from ₹0/month. Manage employee records, attendance, leave and payroll with a plan that fits your team.',
  keywords: [
    'HRMS Software Pricing India',
    'HRMS pricing plans',
    'HRMS software price in India',
    'affordable HRMS software',
    'HR software pricing India',
    'payroll software pricing India',
  ],
  alternates: {
    canonical: 'https://hrvico.com/pricing',
  },
  openGraph: {
    title: 'HRVico Pricing Plans | Find the Right HRMS for Your Team',
    description:
      'Start free with up to 5 employees or explore affordable HRMS plans for growing teams. Compare features and choose your plan.',
    url: 'https://hrvico.com/pricing',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hrvico-pricing-plans-og-image.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRVico Pricing Plans | Find the Right HRMS for Your Team',
    description:
      'Start free with up to 5 employees or explore affordable HRMS plans for growing teams. Compare features and choose your plan.',
    images: ['https://hrvico.com/assets/images/hrvico-pricing-plans-og-image.webp'],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
