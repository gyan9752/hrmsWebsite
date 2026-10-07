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
  { target: 4.9, suffix: '★', decimals: 1, label: 'User Rating' },
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
                <div className="social-proof__stat-value">
                  {formatted}
                  {stat.suffix}
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
