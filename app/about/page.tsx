import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — HRVICO HRMS Vision & Story',
  description: 'Reimagining how modern companies manage, support, and connect with their workforce through unified intelligent HR management software.',
  keywords: ['about HRVICO', 'HRMS company', 'workforce management vision', 'HR software story'],
  alternates: {
    canonical: 'https://hrvico.com/about',
  },
  openGraph: {
    title: 'About Us — HRVICO HRMS Vision & Story',
    description: 'Reimagining how modern companies manage, support, and connect with their workforce through unified intelligent HR management software.',
    url: 'https://hrvico.com/about',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — HRVICO HRMS Vision & Story',
    description: 'Reimagining how modern companies manage, support, and connect with their workforce through unified intelligent HR management software.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

export default function AboutPage() {
  return (
    <>
      <header className="subpage__header" style={{ paddingTop: '100px', paddingBottom: '30px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <p className="subpage__eyebrow" data-animate="fade-up">OUR STORY &amp; VISION</p>
          <h1 className="subpage__title" data-animate="fade-up">About HRVico</h1>
          <p className="subpage__subtitle" data-animate="fade-up" style={{ maxWidth: '800px' }}>
            Reimagining how modern companies manage, support, and connect with their people.
          </p>
        </div>
      </header>

      <main className="subpage__container" style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 16px', width: '100%' }}>
        <div className="subpage__card rich-text">
          <p>
            At HRVico, we believe human resource management shouldn&rsquo;t be complicated, slow, or fragmented. In a fast-paced corporate world, administrative overhead and disconnected platforms often slow down growth and frustrate employees.
          </p>
          <p>
            We set out to build an all-in-one HRMS solution that unifies the key pillars of HR operations into a single cohesive experience: <strong>Attendance, Leave, Payroll, Performance, and Instant Communication.</strong>
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <div
                className="about-stat__number"
                data-counter="500"
                data-counter-suffix="+"
              >
                500+
              </div>
              <div className="about-stat__label">Companies Active</div>
            </div>
            <div className="about-stat">
              <div
                className="about-stat__number"
                data-counter="100"
                data-counter-suffix="k+"
              >
                100k+
              </div>
              <div className="about-stat__label">Employees Managed</div>
            </div>
            <div className="about-stat">
              <div
                className="about-stat__number"
                data-counter="99.9"
                data-counter-decimals="1"
                data-counter-suffix="%"
              >
                99.9%
              </div>
              <div className="about-stat__label">System Uptime</div>
            </div>
          </div>

          <h2>Our Core Mission</h2>
          <p>
            Our mission is simple: to empower organizations of all sizes—from growing startups to mature enterprises—to build high-performing, connected workforces. By automating complex manual processes, we give HR managers and executives the freedom to focus on what truly matters: <strong>nurturing talent and driving business success.</strong>
          </p>

          <h2>Why Choose HRVICO?</h2>
          <p>
            Unlike traditional, heavy enterprise systems that require months of setup and training, HRVICO is designed with modern simplicity:
          </p>
          <ul>
            <li>
              <strong>Super Admins &amp; Leaders:</strong> Gain complete operational visibility with dashboard charts, real-time rosters, automated salary releases, and deep compliance tracking.
            </li>
            <li>
              <strong>HR Managers:</strong> Effortlessly run leave approval cycles, compute payouts, coordinate shifts, track onboarding, and structure annual appraisals.
            </li>
            <li>
              <strong>Employees:</strong> Clock in using GPS-verified facial recognition, apply for leaves, download salaries, update profiles, and coordinate with teams instantly.
            </li>
          </ul>

          <h2>Our Cultural Principles</h2>
          <p>Our work is driven by three foundational values:</p>
          <ul>
            <li>
              <strong>Privacy &amp; Security First:</strong> We deploy robust SSL encryption, multi-layered cloud protections, and role-based access to safeguard your organizational and employee data.
            </li>
            <li>
              <strong>Elegant, Human Design:</strong> We create user experiences that feel fluid, clean, and delightful, making daily clock-ins or leave submissions a breeze.
            </li>
            <li>
              <strong>Continuous Innovation:</strong> We frequently roll out updates, system upgrades, and tool integrations to ensure your operations are always ahead of the curve.
            </li>
          </ul>

          <h2>Get in Touch</h2>
          <p>
            We are always eager to learn how we can improve your HR workflows. Reach out to our customer success or engineering team at any time:
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <strong>General Inquiry</strong>
              <a href="mailto:info@hrvico.com">info@hrvico.com</a>
            </div>
            <div className="contact-item">
              <strong>Support Team</strong>
              <a href="mailto:support@hrvico.com">support@hrvico.com</a>
            </div>
            <div className="contact-item">
              <strong>Official Website</strong>
              <a href="https://hrvico.com/" target="_blank" rel="noopener noreferrer">hrvico.com</a>
            </div>
            <div className="contact-item">
              <strong>Office Address</strong>
              <a
                href="https://maps.google.com/?q=NX-ONE,+Tech+Zone+IV,+Plot+No+17,+Tech+Zone+IV,+Amrapali+Dream+Valley,+Greater+Noida,+Uttar+Pradesh+201318"
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                NX-ONE, Tech Zone IV, Plot No 17, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
