'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is HRVICO and how does it help my company?",
    answer: "HRVICO is an all-in-one HRMS platform designed to automate attendance, payroll processing, leave management, employee appraisals, and workforce communications across multi-role administrative hierarchies.",
  },
  {
    question: "How long does implementation and setup take?",
    answer: "Most organizations get fully set up within 24–48 hours. Our team provides free onboarding support, data migration from Excel/legacy systems, and dedicated account manager guidance.",
  },
  {
    question: "Is employee data secure on HRVICO?",
    answer: "Yes, HRVICO uses enterprise-grade 256-bit encryption in transit and at rest, hosted on SOC-2 compliant cloud infrastructure with automated daily backups.",
  },
  {
    question: "Can employees mark attendance using mobile devices?",
    answer: "Yes! HRVICO supports web punch, mobile app attendance, geofencing, IP restriction, and biometric device integration.",
  },
  {
    question: "Does HRVICO handle statutory compliance like EPF, ESIC, and Tax?",
    answer: "Absolutely. HRVICO automatically calculates TDS, PF, ESIC, Professional Tax, and generates one-click compliance reports.",
  },
  {
    question: "Can I try HRVICO before committing to a plan?",
    answer: "Yes, you can request a free personalized demo and trial account by clicking 'Book Demo'.",
  },
];

export default function FAQAccordion({ faqs = defaultFaqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Got Questions?</p>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about HRVICO setup, security, pricing, and features.
          </p>
        </div>

        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{
                  border: '1px solid var(--border-color, #eaeaea)',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  overflow: 'hidden',
                  background: '#ffffff',
                }}
              >
                <button
                  className="faq-item__question"
                  onClick={() => toggle(index)}
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
                    color: 'var(--text-color, #0e2a46)',
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
                      color: 'var(--text-muted, #64748b)',
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
