'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  // Schema.org Structured Data for SEO, AEO, and GEO
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.hrvico.com/#organization',
        name: 'HRVICO',
        url: 'https://www.hrvico.com',
        logo: 'https://www.hrvico.com/assets/images/hrvico-logo.svg',
        description: 'All-in-one HRMS, payroll automation, attendance tracking, and employee management platform for Indian businesses.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-9116011899',
          contactType: 'customer service',
          email: 'info@scriza.in',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
        sameAs: [
          'https://www.linkedin.com/company/121494424/admin/dashboard/',
          'https://www.instagram.com/hrvico_official',
          'https://www.facebook.com/HRvicoOfficial',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.hrvico.com/#software',
        name: 'HRVICO HRMS & Payroll System',
        operatingSystem: 'Cloud, Web, Mobile-Responsive',
        applicationCategory: 'BusinessApplication',
        description: 'Cloud-based HRMS software for attendance, payroll calculation, leave approvals, and employee portal for Indian businesses.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '1250',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Place',
        '@id': 'https://www.hrvico.com/#headquarters',
        name: 'HRVICO Global Headquarters',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'NX-ONE, Tech Zone IV, Plot No 17, Amrapali Dream Valley',
          addressLocality: 'Greater Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201318',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '28.5355',
          longitude: '77.3910',
        },
      },
    ],
  };

  const openDemoModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    }
  };

  return (
    <>
      {/* Embedded AEO/GEO/SEO JSON-LD Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <footer className="footer" aria-label="Site Footer">
        <div className="container">
          {/* Top Brand & Headquarters Bar */}
          <div className="footer__top-row">
            <div className="footer__brand">
              <div className="footer__logo">
                <img
                  src="/assets/images/hrvico-logo.svg"
                  alt="HRVICO HRMS & Payroll Automation Software Logo"
                  className="footer__logo-img"
                  style={{ height: '34px', width: 'auto' }}
                />
              </div>
              <p className="footer__tagline">
                The all-in-one HRMS platform that transforms how Indian businesses manage employee records, attendance, leave, and payroll.
              </p>
              <div className="footer__socials">
                <a
                  href="https://www.linkedin.com/company/121494424/admin/dashboard/"
                  className="footer__social"
                  aria-label="LinkedIn"
                  title="Follow HRVICO on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/hrvico_official"
                  className="footer__social"
                  aria-label="Instagram"
                  title="Follow HRVICO on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/HRvicoOfficial"
                  className="footer__social"
                  aria-label="Facebook"
                  title="Follow HRVICO on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer__contact-strip" id="contact">
              <div className="footer__contact-item">
                <strong>Corporate Office:</strong>
                <a
                  href="https://maps.google.com/?q=NX-ONE,+Tech+Zone+IV,+Plot+No+17,+Tech+Zone+IV,+Amrapali+Dream+Valley,+Greater+Noida,+Uttar+Pradesh+201318"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View HRVICO Location on Google Maps"
                >
                  NX-ONE, Tech Zone IV, Plot No 17, Greater Noida, UP 201318
                </a>
              </div>
              <div className="footer__contact-item">
                <strong>Sales &amp; Support:</strong>
                <a href="tel:+919116011899" className="footer__link" title="Call HRVICO Support">
                  +91 9116011899
                </a>
                {' · '}
                <a href="mailto:info@scriza.in" className="footer__link" title="Email HRVICO Support">
                  info@scriza.in
                </a>
              </div>
            </div>
          </div>

          {/* 6 Semantic Footer Hub Columns */}
          <div className="footer__grid footer__grid--six" id="india-states">
            {/* 1. Product */}
            <div className="footer__column">
              <h4 className="footer__column-title">Product</h4>
              <nav className="footer__links" aria-label="Product Links">
                <Link href="/features" className="footer__link" title="HRMS Features">Features</Link>
                <Link href="/roles" className="footer__link" title="Multi-role HRMS Architecture">Roles</Link>
                <Link href="/pricing" className="footer__link" title="HRMS Pricing Plans">Pricing</Link>
                <a
                  href="https://app.hrvico.com/onboard-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link footer__link--highlight"
                  title="Start Free with HRVico"
                >
                  Start Free
                </a>
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="footer__link footer__link--btn"
                  title="Schedule a Personalized Demo"
                >
                  Book a Demo
                </button>
              </nav>
            </div>

            {/* 2. Solutions */}
            <div className="footer__column">
              <h4 className="footer__column-title">Solutions</h4>
              <nav className="footer__links" aria-label="Solutions Links">
                <Link href="/features#small-business" className="footer__link">HRMS for Small Businesses</Link>
                <Link href="/features#startups" className="footer__link">HRMS for Startups</Link>
                <Link href="/features#smes" className="footer__link">HRMS for SMEs</Link>
                <Link href="/features#growing-businesses" className="footer__link">HRMS for Growing Businesses</Link>
              </nav>
            </div>

            {/* 3. Industries */}
            <div className="footer__column">
              <h4 className="footer__column-title">Industries</h4>
              <nav className="footer__links" aria-label="Industries Links">
                <Link href="/features#it-software" className="footer__link">IT &amp; Software</Link>
                <Link href="/features#manufacturing" className="footer__link">Manufacturing</Link>
                <Link href="/features#education" className="footer__link">Education</Link>
                <Link href="/features#healthcare" className="footer__link">Healthcare</Link>
                <Link href="/features#retail" className="footer__link">Retail</Link>
                <Link href="/features#hospitality" className="footer__link">Hospitality</Link>
                <Link href="/features#real-estate" className="footer__link">Real Estate</Link>
                <Link href="/features#agencies" className="footer__link">Agencies</Link>
              </nav>
            </div>

            {/* 4. Resources */}
            <div className="footer__column">
              <h4 className="footer__column-title">Resources</h4>
              <nav className="footer__links" aria-label="Resources Links">
                <Link href="/hrms-software-2026" className="footer__link">HRMS Software Guide</Link>
                <Link href="/hrms-software-2026#india" className="footer__link">HRMS Software in India</Link>
                <Link href="/latest-news" className="footer__link">HRMS Blog</Link>
                <Link href="/#faq" className="footer__link">HRMS FAQs</Link>
                <Link href="/hrms-software-2026#vs-excel" className="footer__link">HRMS vs Excel</Link>
                <Link href="/pricing" className="footer__link">HRMS Pricing Guide</Link>
              </nav>
            </div>

            {/* 5. Company */}
            <div className="footer__column">
              <h4 className="footer__column-title">Company</h4>
              <nav className="footer__links" aria-label="Company Links">
                <Link href="/about" className="footer__link">About Us</Link>
                <Link href="/contact" className="footer__link">Contact</Link>
                <Link href="/privacy" className="footer__link">Privacy Policy</Link>
                <Link href="/terms" className="footer__link">Terms of Service</Link>
                <Link href="/refund" className="footer__link">Refund &amp; Cancellation</Link>
              </nav>
            </div>

            {/* 6. India (State SEO Hub) */}
            <div className="footer__column">
              <h4 className="footer__column-title">India</h4>
              <nav className="footer__links" aria-label="India State SEO Hub">
                <Link href="/#india-states" className="footer__link">HRMS Software India</Link>
                <Link href="/#india-states" className="footer__link">HRMS Software Maharashtra</Link>
                <Link href="/#india-states" className="footer__link">HRMS Software Karnataka</Link>
                <Link href="/#india-states" className="footer__link">HRMS Software Telangana</Link>
                <Link href="/#india-states" className="footer__link">HRMS Software Tamil Nadu</Link>
                <Link href="/#india-states" className="footer__link">HRMS Software Gujarat</Link>
                <Link href="/#india-states" className="footer__link">HRMS Software Uttar Pradesh</Link>
                <Link href="/#india-states" className="footer__link">HRMS Software Haryana</Link>
              </nav>
            </div>
          </div>

          {/* Bottom Copyright & Legal Strip */}
          <div className="footer__bottom">
            <p>
              © 2026 HRVICO. All rights reserved. Crafted by{' '}
              <a
                href="https://scriza.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="Scriza Software — Digital Solutions"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Scriza
              </a>
            </p>
            <div className="footer__bottom-links">
              <Link href="/privacy" className="footer__bottom-link" title="Privacy Policy">Privacy</Link>
              <Link href="/terms" className="footer__bottom-link" title="Terms of Service">Terms</Link>
              <Link href="/refund" className="footer__bottom-link" title="Refund & Cancellation Policy">Refund Policy</Link>
              <Link
                href="/sitemap"
                className="footer__bottom-link"
                title="Website Sitemap & Directory Index"
                style={{ fontSize: '0.78rem', letterSpacing: '0.05em', fontWeight: 500 }}
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <a
        href="https://wa.me/919116011899"
        target="_blank"
        rel="noopener noreferrer"
        className="float-contact-icon float-contact-icon--whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat with HRVICO on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
      <a
        href="tel:+919116011899"
        className="float-contact-icon float-contact-icon--phone"
        aria-label="Call Us"
        title="Call HRVICO Sales & Support"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </>
  );
}
