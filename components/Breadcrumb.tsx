'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  // Do not render breadcrumbs on Homepage or Admin CMS routes
  if (!pathname || pathname === '/' || pathname.startsWith('/admin')) {
    return null;
  }

  // Construct breadcrumb items if not passed explicitly
  let breadcrumbItems: BreadcrumbItem[] = items || [];

  if (!items || items.length === 0) {
    const pathSegments = pathname.split('/').filter(Boolean);
    breadcrumbItems = [{ label: 'Home', href: '/' }];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      // Label formatting
      let label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

      if (segment === 'it-software') label = 'IT & Software';
      if (segment === 'agencies-professional-services') label = 'Agencies & Professional Services';
      if (segment === 'hrms-for-startups') label = 'HRMS for Startups';
      if (segment === 'hrms-for-small-businesses') label = 'HRMS for Small Businesses';
      if (segment === 'hrms-for-smes') label = 'HRMS for SMEs';
      if (segment === 'hrms-for-growing-businesses') label = 'HRMS for Growing Businesses';
      if (segment === 'hrms-software-2026') label = 'HRMS Guide 2026';
      if (segment === 'holidays-announcements') label = 'Holidays & Announcements';
      if (segment === 'employee-documents') label = 'Employee Documents';
      if (segment === 'employee-management') label = 'Employee Management';
      if (segment === 'attendance-management') label = 'Attendance Management';
      if (segment === 'leave-management') label = 'Leave Management';
      if (segment === 'payroll-management') label = 'Payroll Management';
      if (segment === 'latest-news') label = 'Blog & News';
      if (segment === 'pricing') label = 'Pricing';
      if (segment === 'about') label = 'About Us';
      if (segment === 'contact') label = 'Contact';
      if (segment === 'roles') label = 'Roles & Solutions';
      if (segment === 'features') label = 'Features';
      if (segment === 'industries') label = 'Industries';
      if (segment === 'solutions') label = 'Solutions';

      // Explicit link target
      let href: string | undefined = isLast ? undefined : currentPath;
      if (!isLast) {
        if (segment === 'features') href = '/features';
        if (segment === 'industries') href = '/industries';
        if (segment === 'solutions') href = '/solutions';
      }

      breadcrumbItems.push({
        label,
        href,
      });
    });
  }

  // Schema.org BreadcrumbList JSON-LD Data for Google & SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://www.hrvico.com${item.href}` : `https://www.hrvico.com${pathname}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="hero__breadcrumb" style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '0px', marginBottom: '48px', position: 'relative', zIndex: 10 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="hero__breadcrumb-list" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '12px', margin: 0, padding: 0, listStyle: 'none', fontSize: '14.5px', fontWeight: 600, lineHeight: 1.4 }}>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="hero__breadcrumb-chevron" aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 2px', color: '#8B5CF6' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className="hero__breadcrumb-current"
                  aria-current="page"
                  style={{
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    color: '#6C3FC5',
                    background: 'none',
                    padding: 0,
                    border: 'none',
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={index === 0 ? "hero__breadcrumb-link hero__breadcrumb-link--home" : "hero__breadcrumb-link"}
                  style={
                    index === 0
                      ? {
                          color: '#6C3FC5',
                          textDecoration: 'none',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap',
                          background: 'none',
                          padding: 0,
                          border: 'none',
                        }
                      : {
                          color: '#7C3AED',
                          textDecoration: 'none',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap',
                          background: 'none',
                          padding: 0,
                          border: 'none',
                        }
                  }
                >
                  {index === 0 ? (
                    <span
                      className="hero__breadcrumb-home"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        color: '#6C3FC5',
                        fontWeight: 700,
                        background: 'none',
                        padding: 0,
                        border: 'none',
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6C3FC5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <span>Home</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
