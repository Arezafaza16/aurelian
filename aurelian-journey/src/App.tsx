/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCallback, useRef } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import DestinationsGrid from './components/DestinationsGrid';
import PhilosophySection from './components/PhilosophySection';
import PackagesSection from './components/PackagesSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRevealedRef = useRef(false);

  const revealHero = useCallback(() => {
    if (hasRevealedRef.current) return;
    hasRevealedRef.current = true;

    const tl = gsap.timeline();
    tl.to('.nav-bar', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out'
    })
    .to('.hero-title', {
      opacity: 1,
      y: 0,
      duration: 2.5,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.hero-btn', {
      opacity: 1,
      y: 0,
      duration: 1.8,
      ease: 'power2.out'
    }, '-=1.8')
    .to('.hero-scroll', {
      opacity: 1,
      duration: 1.5,
      ease: 'power1.inOut'
    }, '-=1');
  }, []);

  useGSAP(() => {
    // Pre-set initial states so elements start hidden (no flash)
    gsap.set('.reveal:not(.destination-card)', { y: 60, opacity: 0 });
    gsap.set('.destination-card', { opacity: 0 });
    gsap.set('.reveal-fade', { opacity: 0 });

    // Batch all .reveal elements
    ScrollTrigger.batch('.reveal:not(.destination-card)', {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
        });
      },
      once: true,
    });

    // Staggered animation for destination cards
    ScrollTrigger.create({
      trigger: '.destinations-grid',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to('.destination-card', {
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
        });
      },
    });

    // Fade-in only for Philosophy section
    ScrollTrigger.batch('.reveal-fade', {
      start: 'top 65%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          duration: 2.5,
          ease: 'power1.inOut',
        });
      },
      once: true,
    });

    // Shimmer text animation
    gsap.to('.shimmer-text', {
      backgroundPosition: '200% center',
      duration: 3,
      repeat: -1,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div className="fixed inset-0 grain-overlay z-[60] pointer-events-none" />

      <Navbar />
      <HeroSection onVideoReady={revealHero} />
      <StorySection />
      <DestinationsGrid />
      <PhilosophySection />
      <PackagesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
