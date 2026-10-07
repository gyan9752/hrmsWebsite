'use client';

import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "HRVICO completely revolutionized how we handle payroll and attendance for our 250+ employees. What used to take days now happens automatically in under an hour.",
    name: "Rajesh Sharma",
    role: "Head of People & Culture",
    company: "TechNova Solutions",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    quote: "The multi-role architecture is brilliant. As a Super Admin managing 4 entities, having unified oversight and automated leave approval workflows saved us hundreds of manual hours.",
    name: "Priya Mehta",
    role: "VP Operations",
    company: "Apex Global Group",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    quote: "Our employees love the self-service portal! Clocking attendance, applying for leaves, and downloading payslips on mobile takes seconds without contacting HR.",
    name: "Amitabh Verma",
    role: "HR Director",
    company: "InnoWave Digital",
    rating: 5,
    avatar: "👨‍💻",
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
                <div className="testimonial-card__stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
                  <div style={{ fontSize: '2rem' }}>{t.avatar}</div>
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
