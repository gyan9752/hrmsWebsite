'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is HRMS software?",
    answer: "HRMS software is a system that helps businesses manage employee information and everyday HR processes such as attendance, leave, payroll and other workforce activities from one platform.",
  },
  {
    question: "What does HRVico HRMS manage?",
    answer: "HRVico brings employee management, attendance, leave, payroll, employee documents, appraisals, reimbursements, holidays and announcements into one HRMS platform.",
  },
  {
    question: "Is HRVico suitable for small businesses?",
    answer: "Yes. HRVico offers a Free plan for up to 5 employees and paid plans designed for businesses with larger teams, making it suitable for startups, small businesses, SMEs and growing organisations.",
  },
  {
    question: "How much does HRVico cost?",
    answer: "HRVico offers a Free plan for up to 5 employees. Paid plans currently start at ₹999 per month for up to 25 employees, with Standard and Premium plans available for larger teams.",
  },
  {
    question: "Can employees use HRVico?",
    answer: "Yes. HRVico provides role-based experiences for Super Admins, HR/Admin users and employees, allowing each user type to access the functions relevant to their role.",
  },
  {
    question: "Is HRVico available for businesses across India?",
    answer: "Yes. HRVico is positioned as an HRMS platform for businesses across India, including startups, small businesses, SMEs and growing organisations.",
  },
  {
    question: "How do I start using HRVico?",
    answer: "You can start by verifying your email with an OTP, setting up your organisation and creating your default administrator account before accessing the HRVico HRMS platform.",
  },
];

export default function FAQAccordion({
  faqs = defaultFaqs,
  title,
  subtitle,
  showCta = false,
}: {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  showCta?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data Schema for FAQs (AEO & Google Rich Results)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const renderTitle = (t: string) => {
    if (t.includes('gradient-text')) return t;
    const parts = t.trim().split(' ');
    if (parts.length <= 2) return <span className="gradient-text">{t}</span>;
    const mainPart = parts.slice(0, -2).join(' ');
    const highlightPart = parts.slice(-2).join(' ');
    return (
      <>
        {mainPart}{' '}
        <span className="gradient-text">{highlightPart}</span>
      </>
    );
  };

  return (
    <section className="section faq homepage-faq" id="faq" aria-label="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        {title && (
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="homepage-faq__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: subtitle ? '10px' : 0 }}>
              {typeof title === 'string' ? renderTitle(title) : title}
            </h2>
            {subtitle && (
              <p className="section-header__subtitle" style={{ fontSize: '1.05rem', color: '#64748B', margin: '0 auto', maxWidth: '780px' }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="faq-list" style={{ maxWidth: '820px', margin: '0 auto' }}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{
                  border: '1px solid rgba(108, 63, 197, 0.12)',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: isOpen ? '0 4px 16px rgba(108, 63, 197, 0.06)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <button
                  className="faq-item__question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: '#0f172a',
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple, #6C3FC5)',
                      flexShrink: 0,
                      marginLeft: '12px',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq-item__answer"
                    style={{
                      padding: '0 24px 20px',
                      color: '#475569',
                      lineHeight: '1.65',
                      fontSize: '0.98rem',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showCta && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a
              href="https://app.hrvico.com/onboard-company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Start Free</span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
