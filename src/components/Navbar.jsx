import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.5 }
    );

    // Scroll listener
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Explore', 'Topics', 'Physics', 'About'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" fill="white" />
              <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-wider gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            SPACE<span className="text-white">EXPO</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link}
              ref={el => linksRef.current[i] = el}
              onClick={() => scrollTo(link)}
              className="nav-link bg-transparent border-none p-0"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div ref={el => linksRef.current[navLinks.length] = el}>
          <button className="btn-glow text-sm">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
