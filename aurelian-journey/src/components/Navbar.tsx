import { Menu, Search, UserCircle, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { label: 'Kisah Kami', href: '#story' },
  { label: 'Destinasi', href: '#destinations' },
  { label: 'Filosofi', href: '#philosophy' },
  { label: 'Paket', href: '#packages' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav className="nav-bar opacity-0 -translate-y-full fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-lg border-b border-white/10 flex justify-between items-center px-6 md:px-16 py-6 transition-all duration-300">
        <div className="text-xl md:text-2xl font-noto font-light tracking-[0.2em] text-gold">AURELIAN JOURNEYS</div>
        <div className="hidden lg:flex gap-10">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              className={cn(
                "font-noto tracking-widest text-sm uppercase transition-colors duration-300",
                activeSection === item.href.slice(1)
                  ? "text-gold border-b border-gold pb-1"
                  : "text-white/80 hover:text-gold"
              )}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <Search className="w-5 h-5 text-gold cursor-pointer hover:scale-110 transition-transform hidden sm:block" />
          <UserCircle className="w-6 h-6 text-gold cursor-pointer hover:scale-110 transition-transform hidden sm:block" />
          <button
            className="lg:hidden text-gold hover:scale-110 transition-transform"
            onClick={toggleMenu}
            aria-label="Buka menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          className="absolute top-6 right-6 text-gold hover:scale-110 transition-transform"
          onClick={closeMenu}
          aria-label="Tutup menu"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                "font-noto text-2xl tracking-widest uppercase transition-colors duration-300",
                activeSection === item.href.slice(1) ? "text-gold" : "text-white/80 hover:text-gold"
              )}
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease, color 0.3s ease',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex gap-8 mt-12">
          <Search className="w-6 h-6 text-gold cursor-pointer hover:scale-110 transition-transform" />
          <UserCircle className="w-7 h-7 text-gold cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </>
  );
}
