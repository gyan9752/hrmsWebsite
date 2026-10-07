import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — HRVICO HRMS Support & Sales',
  description: 'Get in touch with HRVICO. Have questions about our HRMS software platform? Schedule a consultation or reach out to our support team.',
  keywords: ['contact HRVICO', 'HRMS support', 'HR software consultation', 'HRVICO office Greater Noida'],
  alternates: {
    canonical: 'https://hrvico.com/contact',
  },
  openGraph: {
    title: 'Contact Us — HRVICO HRMS Support & Sales',
    description: 'Get in touch with HRVICO. Schedule a free consultation or reach out to our dedicated HR support team.',
    url: 'https://hrvico.com/contact',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — HRVICO HRMS Support & Sales',
    description: 'Get in touch with HRVICO. Schedule a free consultation or reach out to our dedicated HR support team.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
