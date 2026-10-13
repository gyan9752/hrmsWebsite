'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HRVICO_API_BASE } from '@/lib/api';
import FAQAccordion from '@/components/interactive/FAQAccordion';
import Breadcrumb from '@/components/Breadcrumb';

interface ContactClientProps {
  contactFaqs: Array<{ question: string; answer: string }>;
}

export default function ContactClient({ contactFaqs }: ContactClientProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    companySize: '1–5',
    enquiryType: 'Book a Demo',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const scrollToForm = (type?: string) => {
    if (type) {
      setFormData((prev) => ({ ...prev, enquiryType: type }));
    }
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch(`${HRVICO_API_BASE}/Demo/create-demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          companyName: formData.companyName.trim(),
          companySize: formData.companySize,
          role: formData.enquiryType,
          message: formData.message.trim(),
        }),
      });

      const data = await res.json();
      if (data.success || res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "We couldn't submit your enquiry. Please check the form and try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("We couldn't submit your enquiry. Please check the form and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =========================================================================
          SECTION 1 — HERO SECTION
          ========================================================================= */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <div className="hero__bg-gradient"></div>
          <div className="hero__bg-grid"></div>
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
        </div>

        <div className="container">
          <Breadcrumb />
          <div className="hero__content">
            <div className="hero__eyebrow" data-animate="fade-up">
              <span className="hero__eyebrow-pulse" aria-hidden="true"></span>
              <span>CONTACT HRVICO</span>
            </div>

            <h1 className="hero__title" data-animate="fade-up">
              Let's Find the Right HRMS Solution <span className="gradient-text">for Your Business</span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--accent-purple, #6C3FC5)',
                margin: '-6px auto 18px',
                letterSpacing: '-0.01em',
                maxWidth: '780px',
              }}
              data-animate="fade-up"
            >
              Have HR Questions? Let's Talk.
            </p>

            <p className="hero__subtitle" data-animate="fade-up" style={{ maxWidth: '820px', margin: '0 auto 32px' }}>
              Choosing HR software should feel straightforward. Whether you're exploring features, comparing plans or looking for a better way to manage your team, we're here to help you take the next step. Tell us a little about your business, and our team can help you explore the available HRVico options.
            </p>

            <div className="hero__actions-group" data-animate="fade-up">
              <div className="hero__ctas" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => scrollToForm('Book a Demo')}
                  className="btn btn--primary btn--large hero__btn-primary"
                >
                  <span>Book a Demo →</span>
                </button>
                <Link href="/pricing" className="btn btn--secondary btn--large hero__btn-secondary">
                  <span>Explore Pricing</span>
                </Link>
              </div>
              <p style={{ marginTop: '14px', fontSize: '0.88rem', color: '#64748b', fontWeight: 500 }}>
                Have a question? Send us an enquiry using the form below.
              </p>
            </div>
          </div>

          <div
            className="hero__preview"
            data-animate="fade-up"
            style={{
              maxWidth: '840px',
              margin: '40px auto 0',
              position: 'relative',
            }}
          >
            <Image
              src="/assets/images/Powerful Analytics at Your Fingertips.webp"
              alt="HRVico HRMS platform for businesses exploring employee management software."
              width={1200}
              height={700}
              priority
              style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 40px rgba(108, 63, 197, 0.16))' }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — CLEAN & PROFESSIONAL CONTACT FORM SECTION
          ========================================================================= */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <span className="contact-form-badge">GET IN TOUCH</span>
              <h2 className="contact-form-title">
                Tell Us What <span className="gradient-text">Your Business Needs</span>
              </h2>
              <p className="contact-form-subtitle">
                Whether you want to explore HRMS features, compare plans or book a live demo, share your details below and our team will get in touch with you.
              </p>
            </div>

            <div className="contact-form-card">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-grid">
                    {/* Full Name */}
                    <div className="contact-form-group">
                      <label htmlFor="fullName" className="contact-form-label">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="contact-form-input"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="contact-form-group">
                      <label htmlFor="email" className="contact-form-label">
                        Work Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="contact-form-input"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="contact-form-group">
                      <label htmlFor="companyName" className="contact-form-label">
                        Company Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        required
                        placeholder="Your organization name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="contact-form-input"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="contact-form-group">
                      <label htmlFor="phone" className="contact-form-label">
                        Phone Number <span className="optional">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="contact-form-input"
                      />
                    </div>

                    {/* Number of Employees */}
                    <div className="contact-form-group">
                      <label htmlFor="companySize" className="contact-form-label">
                        Number of Employees <span className="required">*</span>
                      </label>
                      <select
                        id="companySize"
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="contact-form-select"
                      >
                        <option value="1–5">1–5 Employees</option>
                        <option value="6–25">6–25 Employees</option>
                        <option value="26–50">26–50 Employees</option>
                        <option value="51–100">51–100 Employees</option>
                        <option value="100+">100+ Employees</option>
                      </select>
                    </div>

                    {/* What Can We Help You With? */}
                    <div className="contact-form-group">
                      <label htmlFor="enquiryType" className="contact-form-label">
                        What Can We Help You With? <span className="required">*</span>
                      </label>
                      <select
                        id="enquiryType"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="contact-form-select"
                      >
                        <option value="Book a Demo">Book a Demo</option>
                        <option value="Pricing and Plans">Pricing and Plans</option>
                        <option value="Product Features">Product Features</option>
                        <option value="Enterprise Requirements">Enterprise Requirements</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="contact-form-group full-width">
                      <label htmlFor="message" className="contact-form-label">
                        Message <span className="optional">(Optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your HR management needs, shift rules, biometric setup or specific questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="contact-form-textarea"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="contact-form-error">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="contact-form-submit-btn"
                  >
                    <span>{loading ? 'Submitting Enquiry...' : 'Send My Enquiry →'}</span>
                  </button>

                  <div className="contact-form-trust-bar">
                    <div className="contact-form-trust-item">
                      <span>✓</span> 1-on-1 Guided Demo
                    </div>
                    <div className="contact-form-trust-item">
                      <span>✓</span> Quick 2-Hour Response
                    </div>
                    <div className="contact-form-trust-item">
                      <span>✓</span> 100% Confidential
                    </div>
                  </div>

                  <p className="contact-form-note">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy">Privacy Policy</Link> and consent to being contacted about your enquiry.
                  </p>
                </form>
              ) : (
                <div className="contact-form-success">
                  <div className="contact-form-success-icon">✓</div>
                  <h3 className="contact-form-success-title">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="contact-form-success-desc">
                    Thank you for contacting HRVico. Your enquiry has been submitted successfully. Our team will review your requirements and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        companyName: '',
                        phone: '',
                        companySize: '1–5',
                        enquiryType: 'Book a Demo',
                        message: '',
                      });
                    }}
                    className="btn btn--secondary"
                    style={{ padding: '12px 28px' }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ALTERNATIVE CONTACT OPTIONS & DIRECT DETAILS
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Prefer a <span className="gradient-text">Direct Conversation?</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              Choose the contact method that works best for you.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FAF5FF', color: '#6C3FC5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px' }}>
                  📅
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  Book a Demo
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  See how HRVico's available features could fit your business requirements.
                </p>
              </div>
              <button
                type="button"
                onClick={() => scrollToForm('Book a Demo')}
                className="btn btn--primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Book a Demo →</span>
              </button>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FAF5FF', color: '#6C3FC5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px' }}>
                  💳
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  Pricing Enquiries
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  Need help comparing employee limits and subscription features? Explore the available plans or send us your requirements.
                </p>
              </div>
              <Link href="/pricing" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>View Pricing</span>
              </Link>
            </div>

            <div style={{ background: '#FFFFFF', padding: '30px', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FAF5FF', color: '#6C3FC5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, marginBottom: '18px' }}>
                  💬
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                  General Enquiries
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  For questions about HRVico, product capabilities or your requirements, use the contact form above.
                </p>
              </div>
              <button
                type="button"
                onClick={() => scrollToForm('General Enquiry')}
                className="btn btn--secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Send an Enquiry</span>
              </button>
            </div>
          </div>

          {/* Business Contact Details Card */}
          <div style={{ background: '#FFFFFF', padding: '36px', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', textAlign: 'center' }}>
              Verified Business Contact Information
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.4rem' }}>📧</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>Email Us</h4>
                  <a href="mailto:info@scriza.in" style={{ color: '#6C3FC5', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                    info@scriza.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.4rem' }}>📞</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>Call Us</h4>
                  <a href="tel:+919116011899" style={{ color: '#6C3FC5', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                    +91 9116011899
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.4rem' }}>🏢</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>Corporate Office</h4>
                  <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                    NX-ONE, Tech Zone IV, Plot No 17, Greater Noida, UP 201318
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.4rem' }}>⏰</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', margin: '0 0 4px 0' }}>Working Hours</h4>
                  <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                    Monday – Saturday: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — WHY CONTACT HRVICO?
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Get Clarity Before <span className="gradient-text">Choosing Your HRMS</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              We're here to help you understand options and evaluate the right fit for your team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Understand the Features
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Explore the modules and workflows available for employee management, attendance, leave and other HR activities.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Find a Suitable Plan
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Compare plans according to your employee count and required features.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Discuss Your Requirements
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                Explain your team's needs so you can evaluate whether the available HRVico features are suitable.
              </p>
            </div>

            <div style={{ background: '#FAF9FF', padding: '28px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>
                Explore Enterprise Options
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.6' }}>
                If your organisation needs custom modules or integrations, contact the team to discuss the available options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHO CAN CONTACT US?
          ========================================================================= */}
      <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <h2 className="section-header__title" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
              HR Support for Businesses <span className="gradient-text">at Different Stages</span>
            </h2>
            <p className="section-header__subtitle" style={{ fontSize: '1.1rem', color: '#64748B', marginTop: '12px' }}>
              HRVico supports organisations across various team sizes and industry sectors.
            </p>
          </div>

          {/* Row 1: 3 Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🚀
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Startups & Small Teams</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.55', margin: 0, textAlign: 'center' }}>
                Startups and small businesses exploring their first HRMS platform.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                📈
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Growing Companies & SMEs</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.55', margin: 0, textAlign: 'center' }}>
                Growing companies and SMEs looking to organise employee administration.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                👥
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>HR & Admin Teams</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.55', margin: 0, textAlign: 'center' }}>
                HR and administration teams evaluating attendance, leave and employee management.
              </p>
            </div>
          </div>

          {/* Row 2: 2 Cards Centered */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1 1 280px', maxWidth: '380px', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                🏢
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Multi-Branch Organisations</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.55', margin: 0, textAlign: 'center' }}>
                Businesses with multiple branches exploring suitable workforce management options.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '28px 24px', borderRadius: '16px', border: '1px solid rgba(108, 63, 197, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: '1 1 280px', maxWidth: '380px', boxShadow: '0 4px 16px rgba(108, 63, 197, 0.04)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', margin: '0 auto 16px auto', boxShadow: '0 4px 14px rgba(108, 63, 197, 0.25)' }}>
                ⚡
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>Enterprise Organisations</h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.55', margin: 0, textAlign: 'center' }}>
                Enterprises enquiring about custom requirements and integrations.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.92rem', color: '#64748B', fontStyle: 'italic', margin: 0 }}>
            HRVico's suitability depends on your requirements and the features available in your chosen plan.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FAQS (ACCORDION)
          ========================================================================= */}
      <FAQAccordion
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about contacting HRVico, booking demos and pricing enquiries."
        faqs={contactFaqs}
      />

      {/* =========================================================================
          SECTION 7 — FINAL CTA SECTION (DESIGN SYSTEM LIGHT STANDARD)
          ========================================================================= */}
      <section className="final-cta" id="cta">
        <div className="final-cta__bg"></div>
        <div className="container">
          <div className="final-cta__content" data-animate="fade-up">
            <h2 className="final-cta__title">
              Let's Make Your HR <span className="gradient-text">Process More Organised</span>
            </h2>
            <p className="final-cta__subtitle">
              Every business has different HR requirements. Tell us what your team needs, and take the next step towards finding a suitable HRMS solution.
            </p>
            <div className="final-cta__actions">
              <button
                type="button"
                onClick={() => scrollToForm('Book a Demo')}
                className="btn btn--primary btn--large"
              >
                <span>Book a Demo →</span>
              </button>
              <Link href="/pricing" className="btn btn--secondary btn--large">
                <span>Explore Pricing</span>
              </Link>
            </div>
            <p className="final-cta__note">
              Have a specific question? Send us an enquiry, and our team can review your requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
