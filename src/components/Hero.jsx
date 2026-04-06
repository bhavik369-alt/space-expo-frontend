import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const searchRef = useRef(null);
  const pillsRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Staggered entrance
    tl.fromTo(badgeRef.current, { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.4 })
      .fromTo(headlineRef.current.children, { opacity: 0, y: 60, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.15 }, '-=0.3')
      .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
      .fromTo(searchRef.current, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.5')
      .fromTo(pillsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4');

    // Floating nebula blobs
    gsap.to(orb1Ref.current, { y: -30, x: 20, duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    gsap.to(orb2Ref.current, { y: 25, x: -15, duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    gsap.to(orb3Ref.current, { y: -20, x: 30, duration: 11, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  }, []);

  const quickSearches = ['Black Hole', 'Dark Matter', 'Neutron Star', 'Wormhole'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert(`🌌 Exploring: "${query}" — Feature coming soon!`);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: '120px' }}
    >
      {/* Nebula Orbs */}
      <div
        ref={orb1Ref}
        className="nebula-blob"
        style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          top: '10%', left: '-10%',
        }}
      />
      <div
        ref={orb2Ref}
        className="nebula-blob"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          top: '20%', right: '-15%',
        }}
      />
      <div
        ref={orb3Ref}
        className="nebula-blob"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          bottom: '15%', left: '30%',
        }}
      />

      {/* Content */}
      <div className="z-content flex flex-col items-center text-center px-6 gap-8 w-full max-w-4xl">

        {/* Badge */}
        <div ref={badgeRef} className="opacity-0">
          <span
            className="glass inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--neon-blue)', borderColor: 'rgba(0,212,255,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Live Universe Simulation
          </span>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="overflow-hidden">
          <h1
            className="opacity-0 text-6xl md:text-8xl font-black leading-none tracking-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="gradient-text">Explore</span>{' '}
          </h1>
          <h1
            className="opacity-0 text-6xl md:text-8xl font-black leading-none tracking-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-white">the </span>
            <span className="neon-text-blue">Universe</span>
          </h1>
        </div>

        {/* Subtext */}
        <p
          ref={subRef}
          className="opacity-0 text-lg md:text-xl text-center max-w-xl leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Experience physics like never before. Journey through the cosmos with
          cinematic simulations and interactive discoveries.
        </p>

        {/* Search bar */}
        <form ref={searchRef} className="opacity-0 search-wrapper" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-bar"
            placeholder="Search the cosmos... (black holes, galaxies...)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            id="hero-search"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>

        {/* Quick search pills */}
        <div ref={pillsRef} className="opacity-0 flex flex-wrap gap-3 justify-center">
          {quickSearches.map(topic => (
            <button
              key={topic}
              onClick={() => setQuery(topic)}
              className="glass px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:border-cyan-400/50"
              style={{ color: 'rgba(255,255,255,0.6)', cursor: 'none' }}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-8 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Scroll to explore
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent float-anim" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
