import React from 'react';
import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Flexible HRMS Pricing Plans — HRVICO',
  description: 'Simple, transparent HRMS pricing plans for growing teams, startups, and large enterprises. No hidden fees.',
  keywords: ['HRMS pricing', 'HR software cost', 'payroll software pricing', 'HRVICO plans', 'affordable HRMS India'],
  alternates: {
    canonical: 'https://hrvico.com/pricing',
  },
  openGraph: {
    title: 'Flexible HRMS Pricing Plans — HRVICO',
    description: 'Simple, transparent HRMS pricing plans for growing teams, startups, and large enterprises.',
    url: 'https://hrvico.com/pricing',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flexible HRMS Pricing Plans — HRVICO',
    description: 'Simple, transparent HRMS pricing plans for growing teams, startups, and large enterprises.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
