import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — HRVICO HRMS Terms of Service',
  description: 'Terms and conditions governing the subscription, license, and usage of the HRVICO workforce management platform.',
  keywords: ['terms of service', 'HRVICO terms', 'subscription agreement', 'software terms'],
  alternates: {
    canonical: 'https://hrvico.com/terms',
  },
  openGraph: {
    title: 'Terms & Conditions — HRVICO HRMS Terms of Service',
    description: 'Terms and conditions governing the subscription, license, and usage of the HRVICO workforce management platform.',
    url: 'https://hrvico.com/terms',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions — HRVICO HRMS Terms of Service',
    description: 'Terms and conditions governing the subscription, license, and usage of the HRVICO workforce management platform.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

export default function TermsPage() {
  return (
    <>
      <header className="subpage__header" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <p className="subpage__eyebrow">LEGAL &amp; TRUST</p>
          <h1 className="subpage__title">Terms &amp; Conditions</h1>
          <p className="subpage__subtitle" style={{ maxWidth: '800px' }}>
            Effective Date: May 21, 2026. These terms govern your subscription and use of the HRVICO platform and services.
          </p>
        </div>
      </header>

      <main className="subpage__container" style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 16px', width: '100%' }}>
        <div className="subpage__card rich-text">
          <p>
            The terms “We” / “Us” / “Our” / “Company” individually and collectively refer to Scriza Private Limited and the terms “Visitor” / “User” refer to recruiters, employers, employees, candidates, clients, and all users of the HRVICO platform.
          </p>
          <p>
            These Terms &amp; Conditions govern your use of HRVICO, including its website, software, applications, and related services (“Platform” / “Website” / “Service”). Please read these terms carefully before accessing or using HRVICO.
          </p>
          <p>
            By using HRVICO, you agree to be legally bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please discontinue use of the platform immediately.
          </p>
          <p>
            Scriza Private Limited reserves the right to modify, update, or revise these Terms &amp; Conditions at any time without prior notice. Continued use of the platform after updates constitutes acceptance of the revised terms.
          </p>

          <h2>1. Use of Content</h2>
          <p>
            All logos, trademarks, brand names, product names, software content, interface designs, graphics, text, icons, databases, reports, dashboards, and other materials available on HRVICO are the intellectual property of Scriza Private Limited or are used under appropriate licenses.
          </p>
          <p>Users are prohibited from:</p>
          <ul>
            <li>Copying, reproducing, modifying, distributing, republishing, or transmitting platform content without prior written permission</li>
            <li>Using HRVICO branding, logos, or trademarks for unauthorized purposes</li>
            <li>Reverse engineering, decompiling, or attempting to copy the software architecture or source code</li>
            <li>Using platform data for commercial resale or unauthorized business activities</li>
          </ul>
          <p>Unauthorized use of platform content may result in legal action under applicable intellectual property laws.</p>

          <h2>2. Acceptable Use of HRVICO</h2>
          <h3>(A) Security Rules</h3>
          <p>Users are strictly prohibited from violating or attempting to violate the security of HRVICO, including but not limited to:</p>
          <ul>
            <li>Accessing accounts, servers, or data without authorization</li>
            <li>Attempting to test, scan, or exploit vulnerabilities in the platform</li>
            <li>Uploading malicious software, viruses, malware, or harmful scripts</li>
            <li>Interfering with system operations, servers, or network performance</li>
            <li>Attempting unauthorized access to employee, recruiter, or company data</li>
            <li>Using automated tools, bots, or scraping technologies without permission</li>
            <li>Sending spam, promotional messages, or unauthorized communications through the platform</li>
          </ul>
          <p>Any violation of platform security may result in suspension of access, legal action, and reporting to law enforcement authorities.</p>

          <h3>(B) General User Conduct</h3>
          <p>Users agree not to use HRVICO to:</p>
          <ul>
            <li>Violate any applicable law, regulation, or government policy</li>
            <li>Upload false, misleading, defamatory, or fraudulent information</li>
            <li>Post obscene, abusive, hateful, threatening, or discriminatory content</li>
            <li>Infringe copyrights, trademarks, privacy rights, or intellectual property rights</li>
            <li>Harass, exploit, or harm other users or organizations</li>
            <li>Misuse recruitment, HR, payroll, or employee data</li>
          </ul>
          <p>Users are solely responsible for the information uploaded, shared, or managed through HRVICO.</p>

          <h2>3. User Accounts &amp; Responsibilities</h2>
          <p>Users are responsible for maintaining the confidentiality of their account credentials and login information.</p>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and updated information during registration</li>
            <li>Maintain the security of your account and password</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>Accept responsibility for all activities conducted through your account</li>
          </ul>
          <p>Scriza Private Limited shall not be liable for losses arising from unauthorized account usage caused by user negligence.</p>

          <h2>4. Subscription &amp; Service Usage</h2>
          <p>Certain HRVICO services may require paid subscriptions or licensing.</p>
          <p>By purchasing a subscription, you agree that:</p>
          <ul>
            <li>Subscription fees must be paid according to the selected plan</li>
            <li>Failure to pay may result in suspension or termination of services</li>
            <li>Subscription plans may renew automatically unless canceled before renewal</li>
            <li>Custom implementation, onboarding, and integration services may be separately chargeable</li>
          </ul>
          <p>Refunds and cancellations are governed by our Refund &amp; Cancellation Policy.</p>

          <h2>5. Indemnity</h2>
          <p>
            The User agrees to indemnify and hold harmless Scriza Private Limited, its directors, employees, affiliates, partners, and agents from any claims, liabilities, damages, losses, costs, or legal expenses arising from:
          </p>
          <ul>
            <li>Violation of these Terms &amp; Conditions</li>
            <li>Misuse of the HRVICO platform</li>
            <li>Unauthorized access or illegal activities performed through user accounts</li>
            <li>Violation of third-party rights, including intellectual property and privacy rights</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            Users understand and agree that Scriza Private Limited shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from:
          </p>
          <ul>
            <li>Use or inability to use HRVICO services</li>
            <li>Loss of data, revenue, profits, or business opportunities</li>
            <li>Service interruptions, delays, or technical failures</li>
            <li>Unauthorized access to user information</li>
            <li>Errors, bugs, or software malfunctions</li>
            <li>Third-party integrations or external service failures</li>
          </ul>
          <p>The total liability of the Company, if any, shall not exceed the amount paid by the user for the relevant service or subscription.</p>
        </div>
      </main>
    </>
  );
}
