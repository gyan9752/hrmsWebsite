'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HRVICO_API_BASE } from '@/lib/api';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${HRVICO_API_BASE}/Demo/create-demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          companyName: 'Contact Form Inquiry',
          companySize: 'Contact Page',
          role: 'Inquiry',
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert(data.message || 'Failed to submit message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col" style={{ paddingTop: '75px' }}>
      {/* HEADER TITLE SECTION */}
      <div style={{ paddingTop: '40px', paddingBottom: '24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1.2 }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', margin: '0 auto', maxWidth: '600px' }}>
            Any questions or remarks? Just write us a message!
          </p>
        </div>
      </div>

      <main className="contact-page__container" style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 16px', width: '100%' }}>
        <div className="contact-card">
          {/* Left Panel: Contact Info */}
          <div className="contact-card__info">
            <div className="contact-card__info-top">
              <h2 className="contact-card__info-title">Contact Information</h2>
              <p className="contact-card__info-subtitle">
                Say something to start a live chat!
              </p>

              <div className="contact-card__info-list">
                <div className="contact-card__info-item">
                  <span className="contact-card__info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <a href="tel:+919116011899">+91 9116011899</a>
                </div>

                <div className="contact-card__info-item">
                  <span className="contact-card__info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <a href="mailto:info@scriza.in">info@scriza.in</a>
                </div>

                <div className="contact-card__info-item">
                  <span className="contact-card__info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <a
                    href="https://maps.google.com/?q=NX-ONE,+Tech+Zone+IV,+Plot+No+17,+Tech+Zone+IV,+Amrapali+Dream+Valley,+Greater+Noida,+Uttar+Pradesh+201318"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NX-ONE, Tech Zone IV, Plot No 17, Greater Noida, Uttar Pradesh 201318
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card__info-socials">
              <a href="https://www.facebook.com/HRvicoOfficial" className="contact-card__info-social" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/hrvico_official" className="contact-card__info-social" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/company/121494424/admin/dashboard/" className="contact-card__info-social" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>

            <div className="contact-card__info-decor-1"></div>
            <div className="contact-card__info-decor-2"></div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-card__form-wrapper">
            {!submitted ? (
              <form className="contact-card__form" onSubmit={handleSubmit}>
                <div className="contact-card__form-grid">
                  <div className="contact-card__form-group">
                    <label htmlFor="firstName" className="contact-card__label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="contact-card__input"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact-card__form-group">
                    <label htmlFor="lastName" className="contact-card__label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="contact-card__input"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact-card__form-group">
                    <label htmlFor="email" className="contact-card__label">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="contact-card__input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact-card__form-group">
                    <label htmlFor="phone" className="contact-card__label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="contact-card__input"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact-card__form-group full-width">
                    <label htmlFor="message" className="contact-card__label">Message</label>
                    <textarea
                      id="message"
                      className="contact-card__textarea"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="contact-card__actions">
                  <button type="submit" className="contact-card__submit-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', margin: 'auto', padding: '40px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(108, 63, 197, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6C3FC5' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                </div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>
                  Thank you for contacting HRVICO. Our support team will get back to you shortly.
                </p>
                <button
                  className="btn btn--secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                  }}
                  style={{ padding: '10px 24px' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
