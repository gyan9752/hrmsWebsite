import React from 'react';
import type { Metadata } from 'next';
import RoleSwitcher from '@/components/RoleSwitcher';

export const metadata: Metadata = {
  title: 'Roles & Solutions — HRVICO HRMS',
  description: 'Tailored HR management workflows and role-based portals for Super Admins, HR Admins, Managers, and Employees.',
  keywords: ['HRMS roles', 'role based access control', 'HR portal', 'employee self service', 'super admin portal'],
  alternates: {
    canonical: 'https://hrvico.com/roles',
  },
  openGraph: {
    title: 'Roles & Solutions — HRVICO HRMS',
    description: 'Tailored HR management workflows for Super Admins, HR Admins, Managers, and Employees.',
    url: 'https://hrvico.com/roles',
    siteName: 'HRVico',
    type: 'website',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roles & Solutions — HRVICO HRMS',
    description: 'Tailored HR management workflows for Super Admins, HR Admins, Managers, and Employees.',
    images: ['https://hrvico.com/assets/images/hero-dashboard.webp'],
  },
};

export default function RolesPage() {
  return (
    <main style={{ paddingTop: '75px' }}>
      <RoleSwitcher style={{ paddingTop: '30px', paddingBottom: '60px' }} />
    </main>
  );
}
