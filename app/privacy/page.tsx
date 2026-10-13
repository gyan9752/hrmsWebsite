import React from 'react';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy — HRVICO HRMS Data Security',
  description: 'Learn how HRVICO collects, manages, and protects organizational and employee data under enterprise security standards.',
  keywords: ['privacy policy', 'HRVICO data security', 'data protection', 'GDPR compliance'],
  alternates: {
    canonical: 'https://hrvico.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — HRVICO HRMS Data Security',
    description: 'Learn how HRVICO collects, manages, and protects organizational and employee data under enterprise security standards.',
    url: 'https://hrvico.com/privacy',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — HRVICO HRMS Data Security',
    description: 'Learn how HRVICO collects, manages, and protects organizational and employee data under enterprise security standards.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="subpage__header" style={{ paddingTop: '86px', paddingBottom: '30px' }}>
        <div className="container">
          <Breadcrumb />
          <p className="subpage__eyebrow">LEGAL &amp; TRUST</p>
          <h1 className="subpage__title">Privacy Policy</h1>
          <p className="subpage__subtitle" style={{ maxWidth: '800px' }}>
            Effective Date: May 21, 2026. Learn how we securely manage and protect your personal and organizational data.
          </p>
        </div>
      </header>

      <main className="subpage__container" style={{ maxWidth: '1300px', margin: '0 auto 80px', padding: '0 16px', width: '100%' }}>
        <div className="subpage__card rich-text">
          <p>
            The terms “We” / “Us” / “Our” / “Company” individually and collectively refer to Scriza Private Limited and the terms “You” / “Your” / “Yourself” refer to the users, clients, recruiters, employees, candidates, and visitors using HRVICO services.
          </p>
          <p>
            This Privacy Policy is an electronic record under the Information Technology Act, 2000 and the applicable rules thereunder. It is an electronic contract and does not require any physical, electronic, or digital signature.
          </p>
          <p>
            By accessing or using HRVICO and its related services (“Platform” / “Website” / “Software”), you agree to the practices described in this Privacy Policy. If you do not agree with the terms of this policy, please do not use our services.
          </p>

          <h2>1. Legal Framework</h2>
          <p>
            This Privacy Policy is published in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
          </p>
          <p>
            The policy governs the collection, storage, usage, processing, and transfer of personal and sensitive information shared by users of HRVICO.
          </p>

          <h2>2. Your Consent</h2>
          <p>
            By registering, accessing, or using HRVICO, you consent to the collection, storage, processing, and transfer of your personal and non-personal information in accordance with this Privacy Policy.
          </p>
          <p>
            You further agree that such collection and use of information shall not cause any wrongful loss to you or wrongful gain to any other person.
          </p>

          <h2>3. Information We Collect</h2>
          <p>
            To provide HR management, recruitment, payroll, attendance, and employee management services, HRVICO may collect information including but not limited to:
          </p>
          <ul>
            <li>Full name, email address, phone number, gender, date of birth, and address</li>
            <li>Company name, designation, employee ID, and professional details</li>
            <li>Resume/CV, educational qualifications, employment history, and recruitment-related information</li>
            <li>Attendance, leave records, payroll details, and HR-related documentation</li>
            <li>Login credentials and account-related information</li>
            <li>Payment and billing information for subscriptions or services</li>
            <li>Device information, browser type, IP address, and usage analytics</li>
          </ul>
          <p>Sensitive information is collected only where necessary for service functionality and in compliance with applicable laws.</p>
          <p>We use this information to:</p>
          <ul>
            <li>Provide and improve HRVICO services</li>
            <li>Manage recruitment and employee workflows</li>
            <li>Enhance user experience and platform security</li>
            <li>Process payments and subscriptions</li>
            <li>Communicate important service-related updates</li>
          </ul>
          <p>Information freely available in the public domain will not be considered sensitive personal information.</p>

          <h2>4. Cookies &amp; IP Addresses</h2>
          <p>HRVICO may use cookies, session storage, and similar technologies to improve platform responsiveness and user experience.</p>
          <p>Cookies help us:</p>
          <ul>
            <li>Remember user preferences</li>
            <li>Maintain secure sessions</li>
            <li>Analyze platform traffic and performance</li>
            <li>Improve system functionality</li>
          </ul>
          <p>Our servers may also automatically collect IP addresses and device-related information for analytics, security monitoring, and troubleshooting purposes.</p>

          <h2>5. Data Sharing &amp; Disclosure</h2>
          <p>We do not sell personal information to third parties.</p>
          <p>Information may be shared only under the following circumstances:</p>
          <ul>
            <li>When required by law, legal process, government authority, or court order</li>
            <li>With trusted service providers or partners working on our behalf under strict confidentiality obligations</li>
            <li>For payment processing, cloud hosting, analytics, or communication services</li>
            <li>During mergers, acquisitions, or business restructuring processes, subject to legal safeguards</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>We implement appropriate administrative, technical, and physical security measures to protect user information against unauthorized access, misuse, alteration, or disclosure.</p>
          <p>While we strive to maintain high security standards, no online system or electronic storage method can guarantee absolute security.</p>
          <p>Users are responsible for maintaining the confidentiality of their login credentials and account access.</p>

          <h2>7. Third-Party Links</h2>
          <p>HRVICO may contain links to third-party websites, integrations, or services. This Privacy Policy applies only to HRVICO and not to external platforms.</p>
          <p>We are not responsible for the privacy practices, policies, or content of third-party services.</p>

          <h2>8. Data Retention</h2>
          <p>We retain user data only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
          <p>Upon account termination, certain information may be retained for compliance, legal, or security purposes where required by law.</p>

          <h2>9. Changes to Privacy Policy</h2>
          <p>We reserve the right to update or modify this Privacy Policy at any time without prior notice.</p>
          <p>Any changes will become effective immediately upon posting on the HRVICO platform. Continued use of the services after changes constitutes acceptance of the updated policy.</p>

          <h2>10. Grievance Redressal</h2>
          <p>For any complaints, concerns, or questions regarding this Privacy Policy or data handling practices, please contact:</p>
          <div className="contact-grid" style={{ marginTop: 'var(--space-md)' }}>
            <div className="contact-item">
              <strong>Grievance Officer</strong>
              <span>Scriza Private Limited</span>
            </div>
            <div className="contact-item">
              <strong>Address</strong>
              <span>NX-ONE, Tech Zone IV, Plot No 17, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318</span>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:info@scriza.in">info@scriza.in</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
