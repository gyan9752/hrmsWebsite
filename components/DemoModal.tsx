'use client';

import React, { useState, useEffect } from 'react';
import { HRVICO_API_BASE } from '@/lib/api';

interface DemoModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function DemoModal({ isOpen: propsIsOpen, onClose: propsOnClose }: DemoModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [step, setStep] = useState<'form' | 'otp' | 'success'>('form');

  const isOpen = propsIsOpen !== undefined ? propsIsOpen : internalIsOpen;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    size: '',
    role: '',
    message: '',
  });

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setInternalIsOpen(true);
      setStep('form');
      setLoading(false);
      setOtp('');
    };

    window.addEventListener('open-demo-modal', handleOpen);

    if (typeof window !== 'undefined' && window.location.search.includes('demo=true')) {
      handleOpen();
    }

    return () => window.removeEventListener('open-demo-modal', handleOpen);
  }, []);

  const handleClose = () => {
    if (propsOnClose) {
      propsOnClose();
    }
    setInternalIsOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      alert('Please enter your email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${HRVICO_API_BASE}/Demo/send-demo-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim() }),
      });
      const result = await res.json();
      if (result.success) {
        setStep('otp');
      } else {
        alert(result.message || 'Failed to send OTP. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp.trim() || otp.trim().length < 4) {
      alert('Please enter a valid OTP.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${HRVICO_API_BASE}/Demo/verify-demo-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim(), otp: otp.trim() }),
      });
      const result = await res.json();
      if (result.success) {
        await submitDemoRequest();
      } else {
        alert(result.message || 'Invalid or expired OTP.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const submitDemoRequest = async () => {
    const payload = {
      fullName: formData.name,
      email: formData.email.trim(),
      phone: formData.phone,
      companyName: formData.company,
      companySize: formData.size || '1-50',
      role: formData.role || 'Other',
      message: formData.message || '',
    };

    try {
      const res = await fetch(`${HRVICO_API_BASE}/Demo/create-demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.success) {
        setStep('success');
      } else {
        alert(result.message || 'Submission failed. Please try again.');
        setStep('form');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
      setStep('form');
    }
  };

  const resendOtp = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${HRVICO_API_BASE}/Demo/send-demo-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email.trim() }),
      });
      const result = await res.json();
      if (result.success) {
        alert(`OTP resent to ${formData.email}`);
      } else {
        alert(result.message || 'Could not resend OTP. Please try again.');
      }
    } catch (err) {
      alert('Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="demo-modal active" id="demoModal">
      <div className="demo-modal__overlay" onClick={handleClose} />
      <div className="demo-modal__container">
        <button className="demo-modal__close" onClick={handleClose} aria-label="Close">
          &times;
        </button>

        {step === 'form' && (
          <div className="demo-modal__form-state" id="demoFormState">
            <div className="demo-modal__header">
              <div className="demo-modal__logo">
                <img
                  src="/assets/images/hrvico-logo.svg"
                  alt="HRvico Logo"
                  className="demo-modal__logo-img"
                  style={{ height: '36px', width: 'auto' }}
                />
              </div>
              <h3 className="demo-modal__title">Book a Demo</h3>
              <p className="demo-modal__subtitle">
                Fill in your details and our sales executive will reach out to you shortly.
              </p>
            </div>

            <form className="demo-modal__form" onSubmit={submitForm}>
              <div className="demo-modal__field">
                <label htmlFor="demoName">Full Name *</label>
                <input
                  type="text"
                  id="demoName"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="demo-modal__field">
                <label htmlFor="demoEmail">Work Email *</label>
                <input
                  type="email"
                  id="demoEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter work email"
                  required
                />
              </div>
              <div className="demo-modal__field">
                <label htmlFor="demoPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="demoPhone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="demo-modal__field">
                <label htmlFor="demoCompany">Company Name *</label>
                <input
                  type="text"
                  id="demoCompany"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter Company Name"
                  required
                />
              </div>
              <div className="demo-modal__row">
                <div className="demo-modal__field">
                  <label htmlFor="demoSize">Company Size</label>
                  <select
                    id="demoSize"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select range</option>
                    <option value="1-50">1 – 50 employees</option>
                    <option value="51-200">51 – 200 employees</option>
                    <option value="201-500">201 – 500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
                <div className="demo-modal__field">
                  <label htmlFor="demoRole">Your Role</label>
                  <select
                    id="demoRole"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select role</option>
                    <option value="HR Manager">HR Manager</option>
                    <option value="CEO / Founder">CEO / Founder</option>
                    <option value="CTO / IT Head">CTO / IT Head</option>
                    <option value="Operations">Operations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="demo-modal__field">
                <label htmlFor="demoMessage">Message (optional)</label>
                <textarea
                  id="demoMessage"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your HR needs..."
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="btn btn--primary btn--large demo-modal__submit"
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'Sending OTP...' : 'Request Demo'}
              </button>
            </form>
          </div>
        )}

        {step === 'otp' && (
          <div className="demo-modal__form-state" id="demoOtpState">
            <div className="demo-modal__header">
              <div className="demo-modal__logo">
                <img
                  src="/assets/images/hrvico-logo.svg"
                  alt="HRvico Logo"
                  className="demo-modal__logo-img"
                  style={{ height: '36px', width: 'auto' }}
                />
              </div>
              <h3 className="demo-modal__title">Verify Your Email</h3>
              <p className="demo-modal__subtitle">
                We've sent an OTP to <strong>{formData.email}</strong>
              </p>
            </div>
            <div style={{ padding: '0 1.5rem 1.5rem' }}>
              <div className="demo-modal__field">
                <label htmlFor="demoOtpInput">Enter OTP *</label>
                <input
                  type="text"
                  id="demoOtpInput"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  style={{ textAlign: 'center', fontSize: '1.2rem', letterSpacing: '0.3em' }}
                />
              </div>
              <button
                type="button"
                className="btn btn--primary btn--large demo-modal__submit"
                onClick={verifyOtp}
                disabled={loading}
                style={{ width: '100%', marginTop: '1rem' }}
              >
                {loading ? 'Verifying...' : 'Verify & Submit'}
              </button>
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
                Didn't receive it?{' '}
                <button
                  type="button"
                  onClick={resendOtp}
                  disabled={loading}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#6c5ce7',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}
                >
                  Resend OTP
                </button>
              </p>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="demo-modal__success-state" id="demoSuccessState">
            <div className="demo-modal__success-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="demo-modal__success-title">Request Sent Successfully!</h3>
            <p className="demo-modal__success-msg">
              Thank you for your interest in HRVICO.<br />
              Our sales executive will reach out to you shortly.
            </p>
            <p className="demo-modal__success-note">
              We typically respond within 2 business hours.
            </p>
            <button className="btn btn--secondary btn--large" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
