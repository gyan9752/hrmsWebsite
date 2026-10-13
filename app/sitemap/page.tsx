import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'HTML Sitemap & Navigation Index — HRVICO HRMS',
  description: 'Explore the complete sitemap directory of HRVICO. Find links to features, pricing, roles, blog articles, software guides, and legal policies.',
  keywords: ['HRVICO sitemap', 'HRMS sitemap', 'site index', 'HRVICO navigation'],
  alternates: {
    canonical: 'https://hrvico.com/sitemap',
  },
  openGraph: {
    title: 'HTML Sitemap & Navigation Index — HRVICO HRMS',
    description: 'Explore the complete sitemap directory of HRVICO. Find links to features, pricing, roles, blog articles, software guides, and legal policies.',
    url: 'https://hrvico.com/sitemap',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML Sitemap & Navigation Index — HRVICO HRMS',
    description: 'Explore the complete sitemap directory of HRVICO. Find links to features, pricing, roles, blog articles, software guides, and legal policies.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

const sitemapCategories = [
  {
    category: 'Core Pages',
    links: [
      { name: 'Home — Overview & Workforce Platform', url: '/', desc: 'All-in-one HRMS, payroll, attendance, and team management.' },
      { name: 'Features & Modules', url: '/features', desc: 'Explore attendance tracking, automated payroll, leave management, and appraisal modules.' },
      { name: 'User Roles & Access Permissions', url: '/roles', desc: 'Dedicated portals for Super Admins, HR Managers, and Employees.' },
      { name: 'Pricing Plans', url: '/pricing', desc: 'Transparent, scalable pricing tailored for startups, SMEs, and enterprises.' },
      { name: 'About HRVICO & Scriza', url: '/about', desc: 'Learn about our mission to modernize human capital management.' },
      { name: 'Contact & Support', url: '/contact', desc: 'Get in touch with our sales and technical support team.' },
    ],
  },
  {
    category: 'Resources & Guides',
    links: [
      { name: 'Latest News & Updates', url: '/latest-news', desc: 'Workforce insights, HR technology updates, payroll automation strategies, and industry news.' },
      { name: 'HRMS Software 2026 Complete Guide', url: '/hrms-software-2026', desc: 'Comprehensive 2026 guide to HRMS software, payroll automation, attendance tracking, and Indian compliance.' },
      { name: 'XML Sitemap (Search Engine Index)', url: '/sitemap.xml', desc: 'Raw XML sitemap formatted for Google Search Console, Bing, and AI web crawlers.' },
    ],
  },
  {
    category: 'Legal & Compliance',
    links: [
      { name: 'Privacy Policy', url: '/privacy', desc: 'Our commitment to enterprise data protection and privacy compliance.' },
      { name: 'Terms of Service', url: '/terms', desc: 'Terms and conditions governing the use of HRVICO platform.' },
      { name: 'Refund & Cancellation Policy', url: '/refund', desc: 'Policies regarding subscription billing and refund eligibility.' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main style={{ minHeight: '80vh', padding: '86px 24px 80px', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Breadcrumb />
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              background: '#f3e8ff',
              color: '#7c3aed',
              fontSize: '0.8rem',
              fontWeight: 800,
              padding: '6px 16px',
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            Website Directory
          </span>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            HRVICO HTML Sitemap
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse through all pages, features, resources, and legal policies on HRVICO. Formatted for visitors, search engines (SEO), and AI answer engines (AEO).
          </p>
        </div>

        {/* Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {sitemapCategories.map((sec, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              }}
            >
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#7c3aed',
                  marginBottom: '20px',
                  borderBottom: '2px solid #f3e8ff',
                  paddingBottom: '10px',
                }}
              >
                {sec.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {sec.links.map((link, lIdx) => (
                  <div key={lIdx}>
                    <Link
                      href={link.url}
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#0f172a',
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginBottom: '4px',
                        transition: 'color 0.2s',
                      }}
                    >
                      {link.name} →
                    </Link>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                      {link.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
