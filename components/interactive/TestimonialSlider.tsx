'use client';

import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "HRVICO completely revolutionized how we handle payroll and attendance for our 250+ employees. What used to take days now happens automatically in under an hour.",
    name: "Rajesh Sharma",
    role: "Head of People & Culture",
    company: "TechNova Solutions",
    rating: 5,
    initials: "RS",
    color: "linear-gradient(135deg, #6C3FC5 0%, #8B5CF6 100%)",
  },
  {
    quote: "The multi-role architecture is brilliant. As a Super Admin managing 4 entities, having unified oversight and automated leave approval workflows saved us hundreds of manual hours.",
    name: "Priya Mehta",
    role: "VP Operations",
    company: "Apex Global Group",
    rating: 5,
    initials: "PM",
    color: "linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)",
  },
  {
    quote: "Our employees love the self-service portal! Clocking attendance, applying for leaves, and downloading payslips on mobile takes seconds without contacting HR.",
    name: "Amitabh Verma",
    role: "HR Director",
    company: "InnoWave Digital",
    rating: 5,
    initials: "AV",
    color: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Customer Stories</p>
          <h2 className="section-title">
            Loved by <span className="gradient-text">HR Leaders</span> Worldwide
          </h2>
          <p className="section-subtitle">
            See how teams use HRVICO to streamline workforce operations and elevate employee experience.
          </p>
        </div>

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          <div
            className="testimonials__track"
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                className="testimonial-card"
                key={index}
                style={{ minWidth: '100%', boxSizing: 'border-box', padding: '1rem' }}
              >
                <div className="testimonial-card__stars" style={{ display: 'flex', gap: '4px', marginBottom: '12px' }} aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '20px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: t.color,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '15px',
                      letterSpacing: '0.5px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="testimonial-card__name" style={{ margin: 0 }}>{t.name}</h4>
                    <p className="testimonial-card__role" style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      {t.role}, <strong>{t.company}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="testimonials__dots" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
