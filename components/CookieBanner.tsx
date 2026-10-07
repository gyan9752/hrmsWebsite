'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CookieBanner() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  if (pathname?.startsWith('/admin')) return null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('cookiesAccepted');
      if (!accepted) {
        const timer = setTimeout(() => setShow(true), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const saveConsent = (prefs: { necessary: boolean; analytics: boolean; marketing: boolean }) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
      localStorage.setItem('cookiesAccepted', 'true');
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookies-banner show" id="cookiesBanner">
      <div className="cookies-banner__body">
        <div className="cookies-banner__header">
          <h4 className="cookies-banner__title">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            >
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c.877 0 1.73-.113 2.545-.328a1.002 1.002 0 00.707-.723 1 1 0 00-.312-1.013 3.518 3.518 0 01-1.123-2.909c.148-1.579 1.4-2.884 2.977-3.085A3.498 3.498 0 0121 17.41a1.002 1.002 0 001.077-.293 1 1 0 00.171-1.082C21.431 14.28 21.05 12.185 21 12c0-5.523-4.477-10-10-10zm-3 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 1a1 1 0 110 2 1 1 0 010-2zm-8 5a1 1 0 110 2 1 1 0 010-2zm7 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
            </svg>
            Cookie Consent
          </h4>
        </div>

        <p className="cookies-banner__text">
          We use cookies to improve your experience on our website. By clicking "Accept All", you agree to our use of all cookies. You can customize your settings or read our{' '}
          <Link href="/privacy" className="cookies-banner__link">
            Privacy Policy
          </Link>.
        </p>

        {customizing && (
          <div className="cookies-banner__preferences" id="cookiesPreferences">
            <div className="cookies-preference-item">
              <div className="cookies-preference-item__info">
                <span className="cookies-preference-item__title">Necessary Cookies</span>
                <p className="cookies-preference-item__desc">
                  Required for basic website functions. Cannot be disabled.
                </p>
              </div>
              <label className="cookies-switch">
                <input type="checkbox" checked disabled />
                <span className="cookies-slider round" />
              </label>
            </div>

            <div className="cookies-preference-item">
              <div className="cookies-preference-item__info">
                <span className="cookies-preference-item__title">Analytics Cookies</span>
                <p className="cookies-preference-item__desc">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <label className="cookies-switch">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span className="cookies-slider round" />
              </label>
            </div>

            <div className="cookies-preference-item">
              <div className="cookies-preference-item__info">
                <span className="cookies-preference-item__title">Marketing Cookies</span>
                <p className="cookies-preference-item__desc">
                  Allow personalized advertising and campaign tracking.
                </p>
              </div>
              <label className="cookies-switch">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span className="cookies-slider round" />
              </label>
            </div>
          </div>
        )}

        <div className="cookies-banner__actions">
          {!customizing ? (
            <div className="cookies-banner__actions-row" id="cookiesActionsMain">
              <button
                className="btn btn--secondary btn--small cookies-banner__btn"
                onClick={() => saveConsent({ necessary: true, analytics: false, marketing: false })}
              >
                Reject All
              </button>
              <button
                className="cookies-banner__btn-link"
                onClick={() => setCustomizing(true)}
              >
                Customize
              </button>
              <button
                className="btn btn--primary btn--small cookies-banner__btn"
                onClick={() => saveConsent({ necessary: true, analytics: true, marketing: true })}
              >
                Accept All
              </button>
            </div>
          ) : (
            <div className="cookies-banner__actions-row" id="cookiesActionsSave">
              <button
                className="btn btn--secondary btn--small cookies-banner__btn"
                onClick={() => setCustomizing(false)}
              >
                Back
              </button>
              <button
                className="btn btn--primary btn--small cookies-banner__btn"
                onClick={() => saveConsent({ necessary: true, analytics, marketing })}
              >
                Save Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
