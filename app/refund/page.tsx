import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy — HRVICO HRMS',
  description: 'Terms governing subscription refunds, cancellations, and billing policies for HRVICO HRMS software.',
  keywords: ['refund policy', 'cancellation policy', 'HRVICO billing', 'subscription refund'],
  alternates: {
    canonical: 'https://hrvico.com/refund',
  },
  openGraph: {
    title: 'Refund & Cancellation Policy — HRVICO HRMS',
    description: 'Terms governing subscription refunds, cancellations, and billing policies for HRVICO HRMS software.',
    url: 'https://hrvico.com/refund',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund & Cancellation Policy — HRVICO HRMS',
    description: 'Terms governing subscription refunds, cancellations, and billing policies for HRVICO HRMS software.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

export default function RefundPage() {
  return (
    <>
      <header className="subpage__header" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <p className="subpage__eyebrow">LEGAL &amp; TRUST</p>
          <h1 className="subpage__title">Refund &amp; Cancellation Policy</h1>
          <p className="subpage__subtitle" style={{ maxWidth: '800px' }}>
            Effective Date: May 25, 2026. These terms govern refunds and cancellations for HRVICO.
          </p>
        </div>
      </header>

      <main className="subpage__container" style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 16px', width: '100%' }}>
        <div className="subpage__card rich-text">
          <h2>Refund &amp; Cancellation Policy – HRVICO Software</h2>
          <p>
            At Scriza Private Limited, we are committed to delivering reliable and high-quality HR and recruitment software solutions through HRVICO. We value our customers and aim to ensure complete satisfaction with our services. Please read our Refund &amp; Cancellation Policy carefully before purchasing or subscribing to our software services.
          </p>

          <h2>1. Eligibility for Refund</h2>
          <p>Refund requests are accepted within 7 to 10 days from the date of purchase or subscription activation.</p>
          <p>To be eligible for a refund, the following conditions must be met:</p>
          <ul>
            <li>You must provide a valid proof of purchase (invoice, payment receipt, or order ID)</li>
            <li>The request must be submitted within the eligible refund period</li>
            <li>The service should not have been misused, intentionally damaged, or violated our terms of service</li>
            <li>Refunds for customized software solutions, implementation charges, setup fees, or third-party integrations are generally non-refundable unless otherwise agreed in writing</li>
            <li>Subscription plans already partially used may be subject to partial refund evaluation</li>
          </ul>

          <h2>2. How to Request a Refund</h2>
          <p>To initiate a refund or cancellation request, please follow these steps:</p>
          <ul>
            <li>Contact our support team at <a href="mailto:sales@scriza.in">sales@scriza.in</a></li>
            <li>Or call us at <a href="tel:+919116011899">9116011899</a></li>
            <li>Share your purchase details, registered email ID, invoice/order number, and the reason for requesting the refund</li>
          </ul>
          <p>Our support team may request additional information for verification purposes.</p>

          <h2>3. Refund Approval Process</h2>
          <p>Once your request is received, our team will review it and notify you regarding approval or rejection.</p>
          <p>Approved refunds will be processed within 7–10 business days.</p>
        </div>
      </main>
    </>
  );
}
