import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * A horizontal marquee strip showing real-time space factoids.
 */
const facts = [
  '🌌 The Milky Way spans 100,000 light-years',
  '⚫ Sagittarius A* — our galactic center black hole — weighs 4 million solar masses',
  '💥 A supernova releases more energy in seconds than our Sun will in its lifetime',
  '🌀 Observable universe contains ~2 trillion galaxies',
  '⚡ Neutron stars spin at up to 700 rotations/second',
  '🔭 Light from the cosmic microwave background is 13.8 billion years old',
];

const MarqueeStrip = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;
    gsap.to(track, {
      x: -totalWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const doubled = [...facts, ...facts];

  return (
    <div
      className="relative z-content overflow-hidden py-4 border-y"
      style={{
        borderColor: 'rgba(0,212,255,0.12)',
        background: 'rgba(0,212,255,0.03)',
      }}
    >
      <div ref={trackRef} className="flex gap-16 whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((fact, i) => (
          <span key={i} className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {fact}
            <span className="ml-16 neon-text-blue opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
