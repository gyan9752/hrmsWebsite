'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import CookieBanner from '@/components/CookieBanner';
import AnimationScript from '@/components/AnimationScript';
import FloatingContactButtons from '@/components/FloatingContactButtons';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <Navbar onOpenDemo={() => setDemoOpen(true)} />
      {children}
      <Footer />
      <CookieBanner />
      <FloatingContactButtons />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <AnimationScript />
    </>
  );
}
