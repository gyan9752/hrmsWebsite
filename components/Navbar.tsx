'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname?.startsWith('/admin')) return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDemoModal = (e?: React.MouseEvent | any) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileOpen(false);
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.dispatchEvent(new CustomEvent('open-demo-modal'));
    }
  };

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo">
            <img
              src="/assets/images/hrvico-logo.svg?v=1.5"
              alt="HRvico Logo"
              className="navbar__logo-img"
              style={{ height: '30px', width: 'auto' }}
            />
          </Link>

          <div className="navbar__links desktop-only">
            <Link
              href="/"
              className={`navbar__link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`navbar__link ${isActive('/features') ? 'active' : ''}`}
            >
              Features
            </Link>
            <Link
              href="/roles"
              className={`navbar__link ${isActive('/roles') ? 'active' : ''}`}
            >
              Roles
            </Link>
            <Link
              href="/pricing"
              className={`navbar__link ${isActive('/pricing') ? 'active' : ''}`}
            >
              Pricing
            </Link>
            {/* <Link
              href="/latest-news"
              className={`navbar__link ${isActive('/latest-news') || isActive('/blogs') || isActive('/blog-details') ? 'active' : ''}`}
            >
              Latest News
            </Link> */}
            <Link
              href="/about"
              className={`navbar__link ${isActive('/about') ? 'active' : ''}`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`navbar__link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>

          <div className="navbar__actions navbar__cta desktop-only">
            <a
              href="https://app.hrvico.com/onboard-company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--small btn--start-free"
              style={{
                minWidth: '140px',
                height: '42px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                textAlign: 'center',
                padding: '0 20px',
                lineHeight: '1',
                textDecoration: 'none',
              }}
            >
              Start Free
            </a>
            <button
              onClick={openDemoModal}
              className="btn btn--primary btn--small btn--book-demo"
              style={{
                minWidth: '140px',
                height: '42px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                textAlign: 'center',
                padding: '0 20px',
                lineHeight: '1',
                background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)',
                color: '#ffffff',
              }}
            >
              Book a Demo
            </button>
          </div>

          <button
            className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <Link href="/" className={`navbar__link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href="/features" className={`navbar__link ${isActive('/features') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Features
        </Link>
        <Link href="/roles" className={`navbar__link ${isActive('/roles') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Roles
        </Link>
        <Link href="/pricing" className={`navbar__link ${isActive('/pricing') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Pricing
        </Link>
        <Link href="/latest-news" className={`navbar__link ${isActive('/latest-news') || isActive('/blogs') || isActive('/blog-details') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Latest News
        </Link>
        <Link href="/about" className={`navbar__link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          About Us
        </Link>
        <Link href="/contact" className={`navbar__link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
        <a
          href="https://app.hrvico.com/onboard-company"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--start-free"
          style={{ marginBottom: '8px', width: '100%', textAlign: 'center', height: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
        >
          Start Free
        </a>
        <button
          onClick={() => {
            setMobileOpen(false);
            openDemoModal();
          }}
          className="btn btn--primary"
          style={{ width: '100%', height: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #6C3FC5, #8B5CF6)' }}
        >
          Book a Demo
        </button>
      </div>
    </nav>
  );
}
