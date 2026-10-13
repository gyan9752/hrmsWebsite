// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// interface NavbarProps {
//   onOpenDemo?: () => void;
// }

// export default function Navbar({ onOpenDemo }: NavbarProps) {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

//   const navRef = useRef<HTMLDivElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   if (pathname?.startsWith('/admin')) return null;

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdown on route change
//   useEffect(() => {
//     setActiveDropdown(null);
//     setMobileOpen(false);
//     setMobileExpanded(null);
//   }, [pathname]);

//   // Click outside listener
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(e.target as Node)) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   const handleMouseEnter = (menuKey: string) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveDropdown(menuKey);
//   };

//   const handleMouseLeave = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 140);
//   };

//   const toggleDropdown = (e: React.MouseEvent, menuKey: string) => {
//     e.preventDefault();
//     setActiveDropdown((prev) => (prev === menuKey ? null : menuKey));
//   };

//   const openDemoModal = (e?: React.MouseEvent | any) => {
//     if (e && e.preventDefault) e.preventDefault();
//     setMobileOpen(false);
//     setActiveDropdown(null);
//     if (onOpenDemo) {
//       onOpenDemo();
//     } else {
//       window.dispatchEvent(new CustomEvent('open-demo-modal'));
//     }
//   };

//   const isActive = (path: string) => {
//     if (!pathname) return false;
//     if (path === '/' && pathname === '/') return true;
//     if (path !== '/' && pathname.startsWith(path)) return true;
//     return false;
//   };

//   const toggleMobileAccordion = (key: string) => {
//     setMobileExpanded((prev) => (prev === key ? null : key));
//   };

//   return (
//     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" ref={navRef}>
//       <div className="container">
//         <div className="navbar__inner">
//           <Link href="/" className="navbar__logo" onClick={() => setActiveDropdown(null)}>
//             <img
//               src="/assets/images/hrvico-logo.svg?v=1.5"
//               alt="HRvico Logo"
//               className="navbar__logo-img"
//               style={{ height: '30px', width: 'auto' }}
//             />
//           </Link>

//           <div className="navbar__links desktop-only">
//             {/* 1. Home */}
//             <Link
//               href="/"
//               className={`navbar__link ${isActive('/') ? 'active' : ''}`}
//               onMouseEnter={() => handleMouseEnter('')}
//             >
//               Home
//             </Link>

//             {/* 2. Features Mega Dropdown */}
//             <div
//               className="navbar__item--has-dropdown"
//               onMouseEnter={() => handleMouseEnter('features')}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 className={`navbar__dropdown-trigger ${activeDropdown === 'features' || isActive('/features') ? 'active' : ''}`}
//                 onClick={(e) => toggleDropdown(e, 'features')}
//                 aria-expanded={activeDropdown === 'features'}
//               >
//                 <span>Features</span>
//                 <svg
//                   width="10"
//                   height="6"
//                   viewBox="0 0 10 6"
//                   fill="none"
//                   className={`navbar__chevron ${activeDropdown === 'features' ? 'open' : ''}`}
//                   aria-hidden="true"
//                 >
//                   <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className={`mega-menu mega-menu--features mega-menu--2col ${activeDropdown === 'features' ? 'open' : ''}`}>
//                 <div className="mega-menu__body">
//                   <div>
//                     <ul className="mega-menu__list">
//                       {/* <li>
//                         <Link href="/features#employee-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Employee Management</span>
//                           <span className="mega-menu__item-desc">Centralized staff profiles, directory &amp; lifecycle</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/employee-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Employee Management</span>
//                           <span className="mega-menu__item-desc">Centralized staff profiles, directory &amp; lifecycle</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#attendance-tracking" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Attendance Management</span>
//                           <span className="mega-menu__item-desc">Biometric sync &amp; mobile GPS geofencing</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/attendance-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Attendance Management</span>
//                           <span className="mega-menu__item-desc">Biometric sync &amp; mobile GPS geofencing</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#leave-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Leave Management</span>
//                           <span className="mega-menu__item-desc">Custom policies, auto accruals &amp; approvals</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/leave-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Leave Management</span>
//                           <span className="mega-menu__item-desc">Custom policies, auto accruals &amp; approvals</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#payroll-processing" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Payroll Management</span>
//                           <span className="mega-menu__item-desc">1-click salary calculations &amp; statutory compliance</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/payroll-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Payroll Management</span>
//                           <span className="mega-menu__item-desc">1-click salary calculations &amp; statutory compliance</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <ul className="mega-menu__list">
//                       {/* <li>
//                         <Link href="/features#documents" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Employee Documents</span>
//                           <span className="mega-menu__item-desc">Secure digital records locker &amp; verification</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/employee-documents" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Employee Documents</span>
//                           <span className="mega-menu__item-desc">Secure digital records locker &amp; verification</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#performance" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Appraisals</span>
//                           <span className="mega-menu__item-desc">360° reviews &amp; transparent appraisal cycles</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/appraisals" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Appraisals</span>
//                           <span className="mega-menu__item-desc">360° reviews &amp; transparent appraisal cycles</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#expenses" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Reimbursements</span>
//                           <span className="mega-menu__item-desc">Expense claims, bill upload &amp; manager approvals</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/reimbursements" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Reimbursements</span>
//                           <span className="mega-menu__item-desc">Expense claims, bill upload &amp; manager approvals</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#announcements" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Holidays &amp; Announcements</span>
//                           <span className="mega-menu__item-desc">Company calendar, policy alerts &amp; broadcasts</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/holidays-announcements" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Holidays &amp; Announcements</span>
//                           <span className="mega-menu__item-desc">Company calendar, policy alerts &amp; broadcasts</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mega-menu__footer">
//                   <Link href="/features" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
//                     <span>View All Features</span>
//                     <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* 3. Solutions Mega Dropdown */}
//             <div
//               className="navbar__item--has-dropdown"
//               onMouseEnter={() => handleMouseEnter('solutions')}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 className={`navbar__dropdown-trigger ${activeDropdown === 'solutions' || isActive('/roles') ? 'active' : ''}`}
//                 onClick={(e) => toggleDropdown(e, 'solutions')}
//                 aria-expanded={activeDropdown === 'solutions'}
//               >
//                 <span>Solutions</span>
//                 <svg
//                   width="10"
//                   height="6"
//                   viewBox="0 0 10 6"
//                   fill="none"
//                   className={`navbar__chevron ${activeDropdown === 'solutions' ? 'open' : ''}`}
//                   aria-hidden="true"
//                 >
//                   <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className={`mega-menu mega-menu--solutions mega-menu--2col ${activeDropdown === 'solutions' ? 'open' : ''}`}>
//                 <div className="mega-menu__body">
//                   <div>
//                     <div className="mega-menu__col-title">By Business Size</div>
//                     <ul className="mega-menu__list">
//                       <li>
//                         <Link href="/roles#small-business" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS for Small Businesses</span>
//                           <span className="mega-menu__item-desc">Affordable, zero-bloat setup for 5-25 staff</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/roles#startups" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS for Startups</span>
//                           <span className="mega-menu__item-desc">Fast onboarding &amp; agile workforce scaling</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/roles#sme" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS for SMEs</span>
//                           <span className="mega-menu__item-desc">Unified payroll, leave, attendance &amp; compliance</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/roles#growing-business" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS for Growing Businesses</span>
//                           <span className="mega-menu__item-desc">Multi-entity controls, branches &amp; custom roles</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <div className="mega-menu__col-title">By Need</div>
//                     <ul className="mega-menu__list">
//                       <li>
//                         <Link href="/features/employee-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Employee Management</span>
//                           <span className="mega-menu__item-desc">Centralize team data &amp; eliminate paper records</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#attendance-tracking" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Attendance Management</span>
//                           <span className="mega-menu__item-desc">Eliminate buddy punching with GPS &amp; biometric</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/attendance-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Attendance Management</span>
//                           <span className="mega-menu__item-desc">Biometric sync &amp; mobile GPS geofencing</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#leave-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Leave Management</span>
//                           <span className="mega-menu__item-desc">Transparent balance tracking &amp; instant manager sign-off</span>
//                         </Link>
//                       </li> */}

//                                             <li>
//                         <Link href="/features/leave-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Leave Management</span>
//                           <span className="mega-menu__item-desc">Custom policies, auto accruals &amp; approvals</span>
//                         </Link>
//                       </li>
//                       {/* <li>
//                         <Link href="/features#payroll-processing" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Payroll Management</span>
//                           <span className="mega-menu__item-desc">Zero-error payroll calculation with PF, ESIC &amp; TDS</span>
//                         </Link>
//                       </li> */}
//                                             <li>
//                         <Link href="/features/payroll-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Payroll Management</span>
//                           <span className="mega-menu__item-desc">1-click salary calculations &amp; statutory compliance</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mega-menu__footer">
//                   <Link href="/features" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
//                     <span>Find the Right Solution</span>
//                     <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* 4. Industries Mega Dropdown */}
//             <div
//               className="navbar__item--has-dropdown"
//               onMouseEnter={() => handleMouseEnter('industries')}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 className={`navbar__dropdown-trigger ${activeDropdown === 'industries' ? 'active' : ''}`}
//                 onClick={(e) => toggleDropdown(e, 'industries')}
//                 aria-expanded={activeDropdown === 'industries'}
//               >
//                 <span>Industries</span>
//                 <svg
//                   width="10"
//                   height="6"
//                   viewBox="0 0 10 6"
//                   fill="none"
//                   className={`navbar__chevron ${activeDropdown === 'industries' ? 'open' : ''}`}
//                   aria-hidden="true"
//                 >
//                   <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className={`mega-menu mega-menu--industries mega-menu--2col ${activeDropdown === 'industries' ? 'open' : ''}`}>
//                 <div className="mega-menu__body">
//                   <div>
//                     <ul className="mega-menu__list">
//                       <li>
//                         <Link href="/features#tech" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">IT &amp; Software</span>
//                           <span className="mega-menu__item-desc">Hybrid teams, sprint shifts &amp; remote check-ins</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/features#manufacturing" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Manufacturing</span>
//                           <span className="mega-menu__item-desc">Multi-shift rosters, overtime &amp; factory labor laws</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/features#education" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Education</span>
//                           <span className="mega-menu__item-desc">Faculty attendance &amp; academic term leave policies</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/features#healthcare" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Healthcare</span>
//                           <span className="mega-menu__item-desc">24/7 hospital staff coverage &amp; statutory audit safety</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <ul className="mega-menu__list">
//                       <li>
//                         <Link href="/features#retail" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Retail</span>
//                           <span className="mega-menu__item-desc">Store staff scheduling &amp; store-level reports</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/features#hospitality" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Hospitality</span>
//                           <span className="mega-menu__item-desc">Dynamic rotas &amp; flexible casual worker tracking</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/features#real-estate" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Real Estate</span>
//                           <span className="mega-menu__item-desc">Field agent tracking &amp; site-level geofencing</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/features#services" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">Agencies &amp; Professional Services</span>
//                           <span className="mega-menu__item-desc">Client billing timesheets &amp; contractor management</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mega-menu__footer">
//                   <Link href="/features#industries" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
//                     <span>Explore All Industries</span>
//                     <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* 5. Pricing (Direct Link) */}
//             <Link
//               href="/pricing"
//               className={`navbar__link ${isActive('/pricing') ? 'active' : ''}`}
//               onMouseEnter={() => handleMouseEnter('')}
//             >
//               Pricing
//             </Link>

//             {/* 6. Resources Mega Dropdown */}
//             <div
//               className="navbar__item--has-dropdown"
//               onMouseEnter={() => handleMouseEnter('resources')}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 className={`navbar__dropdown-trigger ${activeDropdown === 'resources' || isActive('/latest-news') || isActive('/hrms-software-2026') ? 'active' : ''}`}
//                 onClick={(e) => toggleDropdown(e, 'resources')}
//                 aria-expanded={activeDropdown === 'resources'}
//               >
//                 <span>Resources</span>
//                 <svg
//                   width="10"
//                   height="6"
//                   viewBox="0 0 10 6"
//                   fill="none"
//                   className={`navbar__chevron ${activeDropdown === 'resources' ? 'open' : ''}`}
//                   aria-hidden="true"
//                 >
//                   <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className={`mega-menu mega-menu--resources mega-menu--2col ${activeDropdown === 'resources' ? 'open' : ''}`}>
//                 <div className="mega-menu__body">
//                   <div>
//                     <ul className="mega-menu__list">
//                       <li>
//                         <Link href="/hrms-software-2026" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS Software Guide</span>
//                           <span className="mega-menu__item-desc">Complete 2026 HR tech buyer &amp; deployment guide</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/hrms-software-2026#compliance" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS Software in India</span>
//                           <span className="mega-menu__item-desc">EPF, ESIC, PT, TDS &amp; statutory labor laws</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/latest-news" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS Blog</span>
//                           <span className="mega-menu__item-desc">Articles, workforce insights &amp; expert advice</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/#faq" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS FAQs</span>
//                           <span className="mega-menu__item-desc">Answers to common setup, migration &amp; pricing queries</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>

//                   <div>
//                     <ul className="mega-menu__list">
//                       <li>
//                         <Link href="/features#hrms-vs-excel" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS vs Excel</span>
//                           <span className="mega-menu__item-desc">Why manual spreadsheets break as your team scales</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/pricing" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">HRMS Pricing Guide</span>
//                           <span className="mega-menu__item-desc">Transparent per-employee breakdown with zero hidden fees</span>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/hrms-software-2026#evaluation" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
//                           <span className="mega-menu__item-title">How to Choose HRMS Software</span>
//                           <span className="mega-menu__item-desc">10-point evaluation checklist for leadership teams</span>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mega-menu__footer">
//                   <Link href="/latest-news" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
//                     <span>Explore All Resources</span>
//                     <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* 7. About (Direct Link) */}
//             <Link
//               href="/about"
//               className={`navbar__link ${isActive('/about') ? 'active' : ''}`}
//               onMouseEnter={() => handleMouseEnter('')}
//             >
//               About
//             </Link>

//             {/* 8. Contact (Direct Link) */}
//             <Link
//               href="/contact"
//               className={`navbar__link ${isActive('/contact') ? 'active' : ''}`}
//               onMouseEnter={() => handleMouseEnter('')}
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Right Action CTAs */}
//           <div className="navbar__actions navbar__cta desktop-only">
//             {/* Book a Demo -> Outline / Secondary */}
//             <button
//               onClick={openDemoModal}
//               className="navbar__btn-demo"
//             >
//               Book a Demo
//             </button>

//             {/* Start Free -> Primary Filled */}
//             <a
//               href="https://app.hrvico.com/onboard-company"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="navbar__btn-start"
//             >
//               Start Free
//             </a>
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <button
//             className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
//             aria-label="Toggle menu"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer Menu */}
//       <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
//         <Link href="/" className={`navbar__mobile-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
//           HOME
//         </Link>

//         {/* Mobile Features Accordion */}
//         <div className="navbar__mobile-accordion">
//           <button
//             className="navbar__mobile-accordion-header"
//             onClick={() => toggleMobileAccordion('features')}
//           >
//             <span>FEATURES</span>
//             <svg
//               width="8"
//               height="12"
//               viewBox="0 0 8 12"
//               fill="none"
//               style={{
//                 transition: 'transform 0.2s ease',
//                 transform: mobileExpanded === 'features' ? 'rotate(90deg)' : 'rotate(0deg)',
//                 color: '#6C3FC5',
//               }}
//               aria-hidden="true"
//             >
//               <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//           {mobileExpanded === 'features' && (
//             <div className="navbar__mobile-accordion-body">
//               <Link href="/features#employee-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Employee Management</Link>
//               <Link href="/features#attendance-tracking" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Attendance Management</Link>
//               <Link href="/features#leave-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Leave Management</Link>
//               <Link href="/features#payroll-processing" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Payroll Management</Link>
//               <Link href="/features#documents" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Employee Documents</Link>
//               <Link href="/features#performance" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Appraisals</Link>
//               <Link href="/features#expenses" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Reimbursements</Link>
//               <Link href="/features#announcements" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Holidays &amp; Announcements</Link>
//               <Link href="/features" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>View All Features →</Link>
//             </div>
//           )}
//         </div>

//         {/* Mobile Solutions Accordion */}
//         <div className="navbar__mobile-accordion">
//           <button
//             className="navbar__mobile-accordion-header"
//             onClick={() => toggleMobileAccordion('solutions')}
//           >
//             <span>SOLUTIONS</span>
//             <svg
//               width="8"
//               height="12"
//               viewBox="0 0 8 12"
//               fill="none"
//               style={{
//                 transition: 'transform 0.2s ease',
//                 transform: mobileExpanded === 'solutions' ? 'rotate(90deg)' : 'rotate(0deg)',
//                 color: '#6C3FC5',
//               }}
//               aria-hidden="true"
//             >
//               <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//           {mobileExpanded === 'solutions' && (
//             <div className="navbar__mobile-accordion-body">
//               {/* <Link href="/roles#small-business" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for Small Businesses</Link> */}
//                             <Link href="/solutions/hrms-for-small-businesses" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for Small Businesses</Link>
//               <Link href="/roles#startups" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for Startups</Link>
//               <Link href="/roles#sme" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for SMEs</Link>
//               <Link href="/roles#growing-business" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for Growing Businesses</Link>
//               <div className="navbar__mobile-divider" />
//               <div className="navbar__mobile-subhead">By Need</div>
//               <Link href="/features#employee-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Employee Management</Link>
//               <Link href="/features#attendance-tracking" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Attendance Management</Link>
//               <Link href="/features#leave-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Leave Management</Link>
//               <Link href="/features#payroll-processing" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Payroll Management</Link>
//               <Link href="/features" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>Find the Right Solution →</Link>
//             </div>
//           )}
//         </div>

//         {/* Mobile Industries Accordion */}
//         <div className="navbar__mobile-accordion">
//           <button
//             className="navbar__mobile-accordion-header"
//             onClick={() => toggleMobileAccordion('industries')}
//           >
//             <span>INDUSTRIES</span>
//             <svg
//               width="8"
//               height="12"
//               viewBox="0 0 8 12"
//               fill="none"
//               style={{
//                 transition: 'transform 0.2s ease',
//                 transform: mobileExpanded === 'industries' ? 'rotate(90deg)' : 'rotate(0deg)',
//                 color: '#6C3FC5',
//               }}
//               aria-hidden="true"
//             >
//               <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//           {mobileExpanded === 'industries' && (
//             <div className="navbar__mobile-accordion-body">
//               <Link href="/features#tech" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>IT &amp; Software</Link>
//               <Link href="/features#manufacturing" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Manufacturing</Link>
//               <Link href="/features#education" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Education</Link>
//               <Link href="/features#healthcare" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Healthcare</Link>
//               <Link href="/features#retail" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Retail</Link>
//               <Link href="/features#hospitality" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Hospitality</Link>
//               <Link href="/features#real-estate" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Real Estate</Link>
//               <Link href="/features#services" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Agencies &amp; Professional Services</Link>
//               <Link href="/features#industries" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>Explore All Industries →</Link>
//             </div>
//           )}
//         </div>

//         <Link href="/pricing" className={`navbar__mobile-link ${isActive('/pricing') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
//           PRICING
//         </Link>

//         {/* Mobile Resources Accordion */}
//         <div className="navbar__mobile-accordion">
//           <button
//             className="navbar__mobile-accordion-header"
//             onClick={() => toggleMobileAccordion('resources')}
//           >
//             <span>RESOURCES</span>
//             <svg
//               width="8"
//               height="12"
//               viewBox="0 0 8 12"
//               fill="none"
//               style={{
//                 transition: 'transform 0.2s ease',
//                 transform: mobileExpanded === 'resources' ? 'rotate(90deg)' : 'rotate(0deg)',
//                 color: '#6C3FC5',
//               }}
//               aria-hidden="true"
//             >
//               <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//           {mobileExpanded === 'resources' && (
//             <div className="navbar__mobile-accordion-body">
//               <Link href="/hrms-software-2026" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Software Guide</Link>
//               <Link href="/hrms-software-2026#compliance" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Software in India</Link>
//               <Link href="/latest-news" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Blog</Link>
//               <Link href="/#faq" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS FAQs</Link>
//               <Link href="/features#hrms-vs-excel" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS vs Excel</Link>
//               <Link href="/pricing" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Pricing Guide</Link>
//               <Link href="/hrms-software-2026#evaluation" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>How to Choose HRMS Software</Link>
//               <Link href="/latest-news" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>Explore All Resources →</Link>
//             </div>
//           )}
//         </div>

//         <Link href="/about" className={`navbar__mobile-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
//           ABOUT
//         </Link>

//         <Link href="/contact" className={`navbar__mobile-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
//           CONTACT
//         </Link>

//         <div className="navbar__mobile-actions">
//           <a
//             href="https://app.hrvico.com/onboard-company"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="navbar__btn-start"
//             style={{ width: '100%', height: '46px', fontSize: '15px' }}
//           >
//             Start Free
//           </a>

//           <button
//             onClick={() => {
//               setMobileOpen(false);
//               openDemoModal();
//             }}
//             className="navbar__btn-demo"
//             style={{ width: '100%', height: '46px', fontSize: '15px' }}
//           >
//             Book a Demo
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }






'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (pathname?.startsWith('/admin')) return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 140);
  };

  const openDemoModal = (e?: React.MouseEvent | any) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileOpen(false);
    setActiveDropdown(null);
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

  const toggleMobileAccordion = (key: string) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar" ref={navRef}>
      <div className="container">
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" onClick={() => setActiveDropdown(null)}>
            <img
              src="/assets/images/hrvico-logo.svg?v=1.5"
              alt="HRvico Logo"
              className="navbar__logo-img"
              style={{ height: '30px', width: 'auto' }}
            />
          </Link>

          <div className="navbar__links desktop-only">
            {/* 1. Home */}
            <Link
              href="/"
              className={`navbar__link ${isActive('/') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('')}
            >
              Home
            </Link>

            {/* 2. Features Mega Dropdown */}
            <div
              className="navbar__item--has-dropdown"
              onMouseEnter={() => handleMouseEnter('features')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/features"
                className={`navbar__dropdown-trigger ${activeDropdown === 'features' || isActive('/features') ? 'active' : ''}`}
                onClick={() => setActiveDropdown(null)}
              >
                <span>Features</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`navbar__chevron ${activeDropdown === 'features' ? 'open' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <div className={`mega-menu mega-menu--features mega-menu--2col ${activeDropdown === 'features' ? 'open' : ''}`}>
                <div className="mega-menu__body">
                  <div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/features/employee-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Employee Management</span>
                          <span className="mega-menu__item-desc">Centralized staff profiles, directory &amp; lifecycle</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/attendance-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Attendance Management</span>
                          <span className="mega-menu__item-desc">Biometric sync &amp; mobile GPS geofencing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/leave-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Leave Management</span>
                          <span className="mega-menu__item-desc">Custom policies, auto accruals &amp; approvals</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/payroll-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Payroll Management</span>
                          <span className="mega-menu__item-desc">1-click salary calculations &amp; statutory compliance</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/features/employee-documents" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Employee Documents</span>
                          <span className="mega-menu__item-desc">Secure digital records locker &amp; verification</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/appraisals" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Appraisals</span>
                          <span className="mega-menu__item-desc">360° reviews &amp; transparent appraisal cycles</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/reimbursements" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Reimbursements</span>
                          <span className="mega-menu__item-desc">Expense claims, bill upload &amp; manager approvals</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/holidays-announcements" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Holidays &amp; Announcements</span>
                          <span className="mega-menu__item-desc">Company calendar, policy alerts &amp; broadcasts</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mega-menu__footer">
                  <Link href="/features" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
                    <span>View All Features</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Solutions Mega Dropdown */}
            <div
              className="navbar__item--has-dropdown"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/solutions"
                className={`navbar__dropdown-trigger ${activeDropdown === 'solutions' || isActive('/solutions') ? 'active' : ''}`}
                onClick={() => setActiveDropdown(null)}
              >
                <span>Solutions</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`navbar__chevron ${activeDropdown === 'solutions' ? 'open' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <div className={`mega-menu mega-menu--solutions mega-menu--2col ${activeDropdown === 'solutions' ? 'open' : ''}`}>
                <div className="mega-menu__body">
                  <div>
                    <div className="mega-menu__col-title">By Business Size</div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/solutions/hrms-for-small-businesses" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS for Small Businesses</span>
                          <span className="mega-menu__item-desc">Affordable, zero-bloat setup for 5-25 staff</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/hrms-for-startups" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS for Startups</span>
                          <span className="mega-menu__item-desc">Fast onboarding &amp; agile workforce scaling</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/hrms-for-smes" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS for SMEs</span>
                          <span className="mega-menu__item-desc">Unified payroll, leave, attendance &amp; compliance</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/hrms-for-growing-businesses" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS for Growing Businesses</span>
                          <span className="mega-menu__item-desc">Multi-entity controls, branches &amp; custom roles</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="mega-menu__col-title">By Need</div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/features/employee-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Employee Management</span>
                          <span className="mega-menu__item-desc">Centralize team data &amp; eliminate paper records</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/attendance-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Attendance Management</span>
                          <span className="mega-menu__item-desc">Biometric sync &amp; mobile GPS geofencing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/leave-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Leave Management</span>
                          <span className="mega-menu__item-desc">Custom policies, auto accruals &amp; approvals</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/payroll-management" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Payroll Management</span>
                          <span className="mega-menu__item-desc">1-click salary calculations &amp; statutory compliance</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mega-menu__footer">
                  <Link href="/features" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
                    <span>Find the Right Solution</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Industries Mega Dropdown */}
            <div
              className="navbar__item--has-dropdown"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/industries"
                className={`navbar__dropdown-trigger ${activeDropdown === 'industries' || isActive('/industries') ? 'active' : ''}`}
                onClick={() => setActiveDropdown(null)}
              >
                <span>Industries</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`navbar__chevron ${activeDropdown === 'industries' ? 'open' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <div className={`mega-menu mega-menu--industries mega-menu--2col ${activeDropdown === 'industries' ? 'open' : ''}`}>
                <div className="mega-menu__body">
                  <div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/industries/it-software" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">IT &amp; Software</span>
                          <span className="mega-menu__item-desc">Hybrid teams, sprint shifts &amp; remote check-ins</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/manufacturing" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Manufacturing</span>
                          <span className="mega-menu__item-desc">Multi-shift rosters, overtime &amp; factory labor laws</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/education" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Education</span>
                          <span className="mega-menu__item-desc">Faculty attendance &amp; academic term leave policies</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/healthcare" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Healthcare</span>
                          <span className="mega-menu__item-desc">24/7 hospital staff coverage &amp; statutory audit safety</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/industries/retail" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Retail</span>
                          <span className="mega-menu__item-desc">Store staff scheduling &amp; store-level reports</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/hospitality" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Hospitality</span>
                          <span className="mega-menu__item-desc">Dynamic rotas &amp; flexible casual worker tracking</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/real-estate" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Real Estate</span>
                          <span className="mega-menu__item-desc">Field agent tracking &amp; site-level geofencing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/agencies-professional-services" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">Agencies &amp; Professional Services</span>
                          <span className="mega-menu__item-desc">Client billing timesheets &amp; contractor management</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mega-menu__footer">
                  <Link href="/industries" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
                    <span>Explore All Industries</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Pricing (Direct Link) */}
            <Link
              href="/pricing"
              className={`navbar__link ${isActive('/pricing') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('')}
            >
              Pricing
            </Link>

            {/* 6. Resources Mega Dropdown */}
            <div
              className="navbar__item--has-dropdown"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`navbar__dropdown-trigger ${activeDropdown === 'resources' || isActive('/latest-news') || isActive('/hrms-software-2026') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveDropdown((prev) => (prev === 'resources' ? null : 'resources'));
                }}
                aria-expanded={activeDropdown === 'resources'}
              >
                <span>Resources</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`navbar__chevron ${activeDropdown === 'resources' ? 'open' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className={`mega-menu mega-menu--resources mega-menu--2col ${activeDropdown === 'resources' ? 'open' : ''}`}>
                <div className="mega-menu__body">
                  <div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/hrms-software-2026" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS Software Guide</span>
                          <span className="mega-menu__item-desc">Complete 2026 HR tech buyer &amp; deployment guide</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/hrms-software-2026#compliance" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS Software in India</span>
                          <span className="mega-menu__item-desc">EPF, ESIC, PT, TDS &amp; statutory labor laws</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/latest-news" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS Blog</span>
                          <span className="mega-menu__item-desc">Articles, workforce insights &amp; expert advice</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#faq" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS FAQs</span>
                          <span className="mega-menu__item-desc">Answers to common setup, migration &amp; pricing queries</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="mega-menu__list">
                      <li>
                        <Link href="/features#hrms-vs-excel" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS vs Excel</span>
                          <span className="mega-menu__item-desc">Why manual spreadsheets break as your team scales</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">HRMS Pricing Guide</span>
                          <span className="mega-menu__item-desc">Transparent per-employee breakdown with zero hidden fees</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/hrms-software-2026#evaluation" className="mega-menu__item" onClick={() => setActiveDropdown(null)}>
                          <span className="mega-menu__item-title">How to Choose HRMS Software</span>
                          <span className="mega-menu__item-desc">10-point evaluation checklist for leadership teams</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mega-menu__footer">
                  <Link href="/latest-news" className="mega-menu__footer-link" onClick={() => setActiveDropdown(null)}>
                    <span>Explore All Resources</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 7. About (Direct Link) */}
            <Link
              href="/about"
              className={`navbar__link ${isActive('/about') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('')}
            >
              About
            </Link>

            {/* 8. Contact (Direct Link) */}
            <Link
              href="/contact"
              className={`navbar__link ${isActive('/contact') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('')}
            >
              Contact
            </Link>
          </div>

          {/* Right Action CTAs */}
          <div className="navbar__actions navbar__cta desktop-only">
            <button
              onClick={openDemoModal}
              className="navbar__btn-demo"
            >
              Book a Demo
            </button>

            <a
              href="https://app.hrvico.com/onboard-company"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__btn-start"
            >
              Start Free
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
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

      {/* Mobile Drawer Menu */}
      <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <Link href="/" className={`navbar__mobile-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          HOME
        </Link>

        {/* Mobile Features Accordion */}
        <div className="navbar__mobile-accordion">
          <button
            className="navbar__mobile-accordion-header"
            onClick={() => toggleMobileAccordion('features')}
          >
            <span>FEATURES</span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              style={{
                transition: 'transform 0.2s ease',
                transform: mobileExpanded === 'features' ? 'rotate(90deg)' : 'rotate(0deg)',
                color: '#6C3FC5',
              }}
              aria-hidden="true"
            >
              <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileExpanded === 'features' && (
            <div className="navbar__mobile-accordion-body">
              <Link href="/features/employee-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Employee Management</Link>
              <Link href="/features/attendance-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Attendance Management</Link>
              <Link href="/features/leave-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Leave Management</Link>
              <Link href="/features/payroll-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Payroll Management</Link>
              <Link href="/features/employee-documents" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Employee Documents</Link>
              <Link href="/features/appraisals" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Appraisals</Link>
              <Link href="/features/reimbursements" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Reimbursements</Link>
              <Link href="/features/holidays-announcements" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Holidays &amp; Announcements</Link>
              <Link href="/features" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>View All Features →</Link>
            </div>
          )}
        </div>

        {/* Mobile Solutions Accordion */}
        <div className="navbar__mobile-accordion">
          <button
            className="navbar__mobile-accordion-header"
            onClick={() => toggleMobileAccordion('solutions')}
          >
            <span>SOLUTIONS</span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              style={{
                transition: 'transform 0.2s ease',
                transform: mobileExpanded === 'solutions' ? 'rotate(90deg)' : 'rotate(0deg)',
                color: '#6C3FC5',
              }}
              aria-hidden="true"
            >
              <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileExpanded === 'solutions' && (
            <div className="navbar__mobile-accordion-body">
              <Link href="/solutions/hrms-for-small-businesses" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for Small Businesses</Link>
              <Link href="/solutions/hrms-for-startups" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for Startups</Link>
              <Link href="/solutions/hrms-for-smes" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for SMEs</Link>
              <Link href="/solutions/hrms-for-growing-businesses" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS for Growing Businesses</Link>
              <div className="navbar__mobile-divider" />
              <div className="navbar__mobile-subhead">By Need</div>
              <Link href="/features/employee-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Employee Management</Link>
              <Link href="/features/attendance-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Attendance Management</Link>
              <Link href="/features/leave-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Leave Management</Link>
              <Link href="/features/payroll-management" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Payroll Management</Link>
              <Link href="/solutions" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>Find the Right Solution →</Link>
            </div>
          )}
        </div>

        {/* Mobile Industries Accordion */}
        <div className="navbar__mobile-accordion">
          <button
            className="navbar__mobile-accordion-header"
            onClick={() => toggleMobileAccordion('industries')}
          >
            <span>INDUSTRIES</span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              style={{
                transition: 'transform 0.2s ease',
                transform: mobileExpanded === 'industries' ? 'rotate(90deg)' : 'rotate(0deg)',
                color: '#6C3FC5',
              }}
              aria-hidden="true"
            >
              <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileExpanded === 'industries' && (
            <div className="navbar__mobile-accordion-body">
              <Link href="/industries/it-software" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>IT &amp; Software</Link>
              <Link href="/industries/manufacturing" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Manufacturing</Link>
              <Link href="/industries/education" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Education</Link>
              <Link href="/industries/healthcare" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Healthcare</Link>
              <Link href="/industries/retail" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Retail</Link>
              <Link href="/industries/hospitality" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Hospitality</Link>
              <Link href="/industries/real-estate" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Real Estate</Link>
              <Link href="/industries/agencies-professional-services" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>Agencies &amp; Professional Services</Link>
              <Link href="/industries" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>Explore All Industries →</Link>
            </div>
          )}
        </div>

        <Link href="/pricing" className={`navbar__mobile-link ${isActive('/pricing') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          PRICING
        </Link>

        {/* Mobile Resources Accordion */}
        <div className="navbar__mobile-accordion">
          <button
            className="navbar__mobile-accordion-header"
            onClick={() => toggleMobileAccordion('resources')}
          >
            <span>RESOURCES</span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              style={{
                transition: 'transform 0.2s ease',
                transform: mobileExpanded === 'resources' ? 'rotate(90deg)' : 'rotate(0deg)',
                color: '#6C3FC5',
              }}
              aria-hidden="true"
            >
              <path d="M1.5 1.5L6 6L1.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileExpanded === 'resources' && (
            <div className="navbar__mobile-accordion-body">
              <Link href="/hrms-software-2026" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Software Guide</Link>
              <Link href="/hrms-software-2026#compliance" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Software in India</Link>
              <Link href="/latest-news" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Blog</Link>
              <Link href="/#faq" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS FAQs</Link>
              <Link href="/features#hrms-vs-excel" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS vs Excel</Link>
              <Link href="/pricing" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>HRMS Pricing Guide</Link>
              <Link href="/hrms-software-2026#evaluation" className="navbar__mobile-sublink" onClick={() => setMobileOpen(false)}>How to Choose HRMS Software</Link>
              <Link href="/latest-news" className="navbar__mobile-sublink" style={{ fontWeight: 700, color: '#6C3FC5' }} onClick={() => setMobileOpen(false)}>Explore All Resources →</Link>
            </div>
          )}
        </div>

        <Link href="/about" className={`navbar__mobile-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          ABOUT
        </Link>

        <Link href="/contact" className={`navbar__mobile-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
          CONTACT
        </Link>

        <div className="navbar__mobile-actions">
          <button
            onClick={() => {
              setMobileOpen(false);
              openDemoModal();
            }}
            className="navbar__btn-demo"
            style={{ width: '100%', height: '46px', fontSize: '15px' }}
          >
            Book a Demo
          </button>

          <a
            href="https://app.hrvico.com/onboard-company"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__btn-start"
            style={{ width: '100%', height: '46px', fontSize: '15px' }}
          >
            Start Free
          </a>
        </div>
      </div>
    </nav>
  );
}