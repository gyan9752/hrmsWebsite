import React from 'react';
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact HRVico | Book an HRMS Software Demo',
  description:
    'Contact HRVico for HRMS software enquiries, plan guidance and product demos. Get help choosing the right HR solution for your business.',
  keywords: [
    'Contact HRVico',
    'HRVico contact',
    'HRMS software demo',
    'HRMS software enquiry',
    'HR software consultation',
    'HRMS pricing enquiry',
    'Employee management software demo',
  ],
  alternates: {
    canonical: 'https://hrvico.com/contact',
  },
  openGraph: {
    title: "Contact HRVico | We're Here to Help",
    description:
      'Have questions about HRVico? Contact our team for product information, pricing guidance or a personalised demo.',
    url: 'https://hrvico.com/contact',
    siteName: 'HRVico',
    type: 'website',
    images: [
      {
        url: 'https://hrvico.com/assets/images/hrvico-contact-us-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Contact HRVico for HRMS software enquiries, pricing guidance and product demos.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact HRVico | We're Here to Help",
    description:
      'Have questions about HRVico? Contact our team for product information, pricing guidance or a personalised demo.',
    images: ['https://hrvico.com/assets/images/hrvico-contact-us-og-image.webp'],
  },
};

const contactFaqs = [
  {
    question: 'How can I contact HRVico?',
    answer:
      'Use the contact form on this page to submit your enquiry. You can also use the verified contact details published on the website or book a demo.',
  },
  {
    question: 'Can I book a demo of HRVico?',
    answer:
      'Yes. Use the Book a Demo option to submit a demo request. Include your employee count and requirements so the team can understand what you want to explore.',
  },
  {
    question: 'Can I ask about HRVico pricing before purchasing?',
    answer:
      'Yes. Visit the Pricing page to compare plans or use the contact form to enquire about your requirements.',
  },
  {
    question: 'What information should I provide when contacting HRVico?',
    answer:
      'Your name, work email, company name, approximate employee count and the reason for your enquiry will help the team understand your needs.',
  },
  {
    question: 'Can businesses with more than 100 employees contact HRVico?',
    answer:
      'Yes. Businesses with larger teams can enquire about the Enterprise plan and discuss the available options with the HRVico team.',
  },
  {
    question: "Where can I learn more about HRVico's features?",
    answer:
      'Visit the Features page to explore the available HR modules and workflows before submitting your enquiry.',
  },
];

export default function ContactPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contactFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hrvico.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact Us',
        item: 'https://hrvico.com/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient contactFaqs={contactFaqs} />
    </>
  );
}
