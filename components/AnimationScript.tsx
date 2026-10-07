'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationScript() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Scroll Animations ([data-animate], [data-stagger])
    const animElements = document.querySelectorAll('[data-animate], [data-stagger]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animElements.forEach((el) => observer.observe(el));

    // 2. Counter Animations ([data-counter])
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    counters.forEach((el) => counterObserver.observe(el));

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

function animateCounter(el: HTMLElement) {
  const target = parseFloat(el.dataset.counter || '0');
  const suffix = el.dataset.counterSuffix || '';
  const prefix = el.dataset.counterPrefix || '';
  const decimals = parseInt(el.dataset.counterDecimals || '0', 10);
  const duration = 2000;
  const startTime = performance.now();

  function easeOutExpo(t: number) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function update(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = easeOutExpo(progress) * target;

    let formatted = value.toFixed(decimals);
    if (decimals === 0) {
      formatted = Math.round(value).toLocaleString();
    }

    el.textContent = prefix + formatted + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
