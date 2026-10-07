import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog CMS Admin — HRVICO',
  description: 'Manage HRVICO blogs, categories, users, contacts, and promotions.',
};

const AdminCMSApp = dynamic(() => import('@/components/admin/AdminCMSApp'), {
  ssr: false,
});

export default function AdminPage() {
  return <AdminCMSApp />;
}
