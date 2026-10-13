'use client';

import React, { useState } from 'react';

export default function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: 0,
        right: 0,
        zIndex: 10000,
        pointerEvents: 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          pointerEvents: 'none',
        }}
      >
        {/* Left Side: Floating WhatsApp Support Widget OR Circular Button */}
        <div style={{ pointerEvents: 'auto', position: 'relative' }}>
          {isOpen ? (
            <div
              style={{
                width: '310px',
                maxWidth: 'calc(100vw - 32px)',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.18)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                overflow: 'hidden',
                fontFamily: 'inherit',
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', fontWeight: 600 }}>
                  <span
                    style={{
                      width: '9px',
                      height: '9px',
                      backgroundColor: '#34d399',
                      borderRadius: '50%',
                      display: 'inline-block',
                      boxShadow: '0 0 0 2px rgba(52, 211, 153, 0.4)',
                    }}
                  />
                  <span>Online</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close WhatsApp chat popup"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1.35rem',
                    cursor: 'pointer',
                    lineHeight: 1,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.9,
                  }}
                >
                  ×
                </button>
              </div>

              {/* Body */}
              <div style={{ padding: '18px 16px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#ECFDF5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      flexShrink: 0,
                      border: '1px solid rgba(5, 150, 105, 0.2)',
                    }}
                  >
                    <span>H</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a', marginBottom: '4px' }}>
                      HRVico Support 👋
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.45' }}>
                      Have questions about HRVico HRMS? Chat with our team for guidance or a live demo.
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919116011899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    backgroundColor: '#059669',
                    borderColor: '#059669',
                    color: '#ffffff',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span>Chat Now</span>
                </a>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="float-contact-icon float-contact-icon--whatsapp"
              aria-label="Open WhatsApp chat"
              type="button"
              style={{ border: 'none', position: 'relative', bottom: 0, left: 0 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </button>
          )}
        </div>

        {/* Right Side: Floating Phone Call Button */}
        <div style={{ pointerEvents: 'auto', position: 'relative' }}>
          <a
            href="tel:+919116011899"
            className="float-contact-icon float-contact-icon--phone"
            aria-label="Call us"
            style={{ position: 'relative', bottom: 0, right: 0 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
