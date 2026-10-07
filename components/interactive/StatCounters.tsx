'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Stat {
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
}

const statsData: Stat[] = [
  { target: 500, suffix: '+', label: 'Companies' },
  { target: 50000, suffix: '+', label: 'Employees Managed' },
  { target: 99.9, suffix: '%', decimals: 1, label: 'Uptime' },
  { target: 4.9, suffix: '/5', decimals: 1, label: 'User Rating' },
];

export default function StatCounters() {
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          animateStats();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const startTime = performance.now();
    const duration = 2000;

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(statsData.map((s) => s.target * ease));

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  };

  return (
    <section className="social-proof" ref={sectionRef}>
      <div className="container">
        <p className="social-proof__label">Trusted by industry leaders worldwide</p>
      </div>

      <div className="container">
        <div className="social-proof__stats">
          {statsData.map((stat, idx) => {
            const formatted = stat.decimals
              ? counts[idx].toFixed(stat.decimals)
              : Math.floor(counts[idx]).toLocaleString();

            return (
              <div className="social-proof__stat" key={idx}>
                <div className="social-proof__stat-value" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <span>{formatted}{stat.suffix}</span>
                  {idx === 3 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1" aria-hidden="true" style={{ verticalAlign: 'middle' }}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )}
                </div>
                <div className="social-proof__stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
