import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%' },
      }
    );
  }, []);

  const links = {
    Explore: ['Black Holes', 'Supernovae', 'Galaxies', 'Dark Matter', 'Neutron Stars'],
    Learn: ['Physics Basics', 'Simulations', 'Quizzes', 'Glossary', 'Research Papers'],
    Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  };

  return (
    <footer ref={footerRef} className="relative z-content border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Top glow line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(168,85,247,0.4), transparent)' }} />

      <div ref={contentRef} className="opacity-0 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(0,212,255,0.4)' }}
              >
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
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '280px' }}>
              The most immersive platform for exploring astrophysics, cosmology,
              and the fundamental laws that govern our universe.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {['𝕏', '⟨/⟩', '▶', '◉'].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:border-cyan-400/40"
                  style={{ color: 'rgba(255,255,255,0.5)', cursor: 'none', border: 'none' }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <button
                      className="text-sm transition-all duration-300 hover:translate-x-1"
                      style={{ color: 'rgba(255,255,255,0.5)', cursor: 'none', background: 'none', border: 'none', padding: 0 }}
                      onMouseEnter={e => e.target.style.color = 'rgba(0,212,255,0.9)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="glass-card p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderRadius: '20px' }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Stay in Orbit
            </h3>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Weekly dispatches from the edge of the observable universe.
            </p>
          </div>
          <div className="relative flex-shrink-0 w-full md:w-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="search-bar"
                style={{ borderRadius: '12px', padding: '12px 20px', minWidth: '260px' }}
                id="newsletter-email"
              />
              <button className="btn-glow" style={{ borderRadius: '12px', padding: '12px 24px', whiteSpace: 'nowrap' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2026 SpaceExpo. Crafted with{' '}
            <span className="neon-text-purple">♥</span>{' '}
            for explorers of the cosmos.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <button
                key={item}
                className="text-xs transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.3)', cursor: 'none', background: 'none', border: 'none' }}
                onMouseEnter={e => e.target.style.color = 'rgba(0,212,255,0.7)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
