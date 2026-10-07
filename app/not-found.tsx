import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="subpage">
      <header className="subpage__header" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0e2a46', marginBottom: '16px' }}>
            404 — Page Not Found
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '32px' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn btn--primary btn--large">
            Return to Homepage
          </Link>
        </div>
      </header>
    </main>
  );
}
