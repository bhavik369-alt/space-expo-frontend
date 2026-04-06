import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const topicsData = [
  {
    id: 'black-hole',
    title: 'Black Hole',
    subtitle: 'Event Horizon',
    description: 'Step beyond the point of no return. Explore the singularity where space and time collapse into infinite density.',
    image: '/black_hole.png',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.3)',
    tag: 'Extreme Gravity',
    icon: '⚫',
  },
  {
    id: 'supernova',
    title: 'Supernova',
    subtitle: 'Stellar Explosion',
    description: 'Witness the most violent explosions in the cosmos as dying stars forge new elements in a final blaze of glory.',
    image: '/supernova.png',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.3)',
    tag: 'Nucleosynthesis',
    icon: '💥',
  },
  {
    id: 'galaxy',
    title: 'Galaxy',
    subtitle: 'Island Universe',
    description: 'Navigate cosmic structures containing hundreds of billions of stars, vast nebulae, and dark matter scaffolding.',
    image: '/galaxy.png',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.3)',
    tag: 'Large Scale Structure',
    icon: '🌌',
  },
];

const TopicCard = ({ topic, index }) => {
  const cardRef = useRef(null);

  const handleClick = () => {
    gsap.to(cardRef.current, {
      scale: 0.97,
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(cardRef.current, {
          scale: 1,
          duration: 0.4,
          ease: 'elastic.out(1, 0.5)',
        });
        alert(`🚀 Loading ${topic.title} simulation — Full experience launching soon!`);
      },
    });
  };

  return (
    <div
      ref={cardRef}
      className="glass-card overflow-hidden group"
      onClick={handleClick}
      style={{ cursor: 'none' }}
    >
      {/* Image */}
      <div className="card-img-wrapper">
        <img src={topic.image} alt={topic.title} />
        {/* Corner tag */}
        <div
          className="absolute top-3 right-3 z-10 glass px-3 py-1 rounded-full text-xs font-semibold tracking-wider"
          style={{ color: topic.color }}
        >
          {topic.tag}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: topic.color }}>
              {topic.subtitle}
            </p>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              {topic.title}
            </h3>
          </div>
          <span className="text-3xl mt-1">{topic.icon}</span>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {topic.description}
        </p>

        {/* CTA Row */}
        <div className="flex items-center justify-between">
          <button
            className="flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 group-hover:gap-3"
            style={{ color: topic.color, cursor: 'none', background: 'none', border: 'none', padding: 0 }}
          >
            Explore Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: `rgba(${topic.color === '#00d4ff' ? '0,212,255' : topic.color === '#a855f7' ? '168,85,247' : '124,58,237'},0.15)` }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: topic.color }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${topic.color}, transparent)` }}
      />
    </div>
  );
};

const FeaturedTopics = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );

    // Cards stagger animation
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section id="topics" ref={sectionRef} className="relative z-content py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <div className="section-divider mb-8" />
          <p className="text-xs font-semibold tracking-widest uppercase mb-4 neon-text-blue">
            Featured Phenomena
          </p>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Choose Your{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Select a cosmic phenomenon to begin your immersive physics exploration
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topicsData.map((topic, i) => (
            <div
              key={topic.id}
              ref={el => cardsRef.current[i] = el}
              className="opacity-0"
            >
              <TopicCard topic={topic} index={i} />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {[
            { label: 'Phenomena Covered', value: '200+' },
            { label: 'Interactive Sims', value: '48' },
            { label: 'Physics Equations', value: '1,200+' },
            { label: 'Learners', value: '50K+' },
          ].map(stat => (
            <div key={stat.label} className="glass p-6 text-center">
              <div
                className="text-3xl font-black mb-1 gradient-text"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTopics;
