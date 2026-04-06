import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: '🔭',
    title: 'Real-Time Simulations',
    desc: 'Physics-accurate models rendered with WebGL, letting you manipulate variables and witness the cosmos respond in real time.',
    color: '#00d4ff',
  },
  {
    icon: '🌊',
    title: 'Spacetime Visualization',
    desc: 'See gravity warp spacetime fabric with interactive 3D diagrams powered by general relativity equations.',
    color: '#a855f7',
  },
  {
    icon: '🚀',
    title: 'Guided Expeditions',
    desc: 'Follow curated narrative journeys through cosmic events — from stellar birth to black hole formation.',
    color: '#7c3aed',
  },
  {
    icon: '⚡',
    title: 'Quantum Mechanics Lab',
    desc: 'Interact with quantum probability waves, entanglement, and observer effects in a hands-on virtual lab.',
    color: '#06b6d4',
  },
];

const AboutExperience = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const featuresRef = useRef([]);
  const orbitRef = useRef(null);

  useEffect(() => {
    // Left text block
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      }
    );

    // Right features
    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.14,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
      }
    );

    // Orbit animation
    gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1,
      transformOrigin: 'center center',
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative z-content py-32 px-6 overflow-hidden">
      {/* Background subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text & visual */}
          <div ref={leftRef} className="opacity-0">
            <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />
            <p className="text-xs font-semibold tracking-widest uppercase mb-4 neon-text-purple">
              The Experience
            </p>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Physics,{' '}
              <span className="gradient-text">Reimagined</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '460px' }}>
              SpaceExpo transforms abstract physics concepts into breathtaking,
              sensory-rich experiences. We combine scientific rigor with cinematic
              presentation — because understanding the universe should feel as awe-inspiring
              as the universe itself.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button className="btn-glow">Start Exploring</button>
              <button
                className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                style={{ color: 'rgba(255,255,255,0.6)', cursor: 'none', background: 'none', border: 'none' }}
              >
                Watch Demo
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  ▶
                </span>
              </button>
            </div>

            {/* Visual: Orbit Ring Decoration */}
            <div className="mt-16 relative flex items-center justify-center" style={{ height: '180px' }}>
              <div
                ref={orbitRef}
                className="absolute"
                style={{
                  width: '160px', height: '160px',
                  border: '1px dashed rgba(0,212,255,0.25)',
                  borderRadius: '50%',
                }}
              >
                {/* Planet dot */}
                <div
                  className="absolute w-4 h-4 rounded-full bg-cyan-400"
                  style={{
                    top: '-8px', left: '50%', transform: 'translateX(-50%)',
                    boxShadow: '0 0 12px rgba(0,212,255,0.8)',
                  }}
                />
              </div>
              {/* Inner ring */}
              <div
                style={{
                  width: '90px', height: '90px',
                  border: '1px solid rgba(168,85,247,0.3)',
                  borderRadius: '50%',
                }}
              />
              {/* Core */}
              <div
                className="absolute w-10 h-10 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #a855f7, #00d4ff)',
                  boxShadow: '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(0,212,255,0.4)',
                }}
              />
              {/* Labels */}
              <span className="absolute left-0 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Event Horizon</span>
              <span className="absolute right-0 text-xs text-right" style={{ color: 'rgba(255,255,255,0.3)' }}>Orbital Path</span>
            </div>
          </div>

          {/* RIGHT — Feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                ref={el => featuresRef.current[i] = el}
                className="glass-card opacity-0 flex items-start gap-5 p-6"
                style={{ borderRadius: '16px' }}
              >
                <div
                  className="feature-icon"
                  style={{ background: `rgba(${f.color === '#00d4ff' ? '0,212,255' : f.color === '#a855f7' ? '168,85,247' : f.color === '#7c3aed' ? '124,58,237' : '6,182,212'},0.12)`, fontSize: '22px' }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 text-base">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
