'use client';

import React from 'react';

export default function HomeBookDemoBtn() {
  return (
    <button
      onClick={() => {
        window.dispatchEvent(new CustomEvent('open-demo-modal'));
      }}
      className="btn btn--primary btn--large"
      style={{ minWidth: '200px', justifyContent: 'center', textAlign: 'center' }}
    >
      Book a Demo
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
        <path
          d="M3 8h10m0 0L9 4m4 4L9 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
