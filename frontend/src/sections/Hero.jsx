import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const headlines = [
  { line1: 'Transforming Ideas', line2: 'Into Reality' },
  { line1: 'Scalable Software', line2: 'Engineering' },
  { line1: 'Award-Winning', line2: 'Product Design' },
];

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Global Clients' },
  { value: '10+', label: 'Years Experience' },
];

const services = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Digital Strategy',
  'Software Solutions',
  'SEO & Marketing',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#fafaf8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 96,
        paddingBottom: 64,
      }}
    >
      {/* ── Decorative Gradient Blobs ── */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(134,239,172,0.35) 0%, rgba(56,189,248,0.2) 45%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          y: blobY1,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(99,102,241,0.15) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          y: blobY2,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,207,232,0.4) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Subtle dot grid ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1160,
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          y: textY,
        }}
      >
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 18px',
            borderRadius: 999,
            border: '1.5px solid rgba(0,0,0,0.1)',
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(10px)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#1a1a1a',
            marginBottom: 36,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
        >
          <span style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#3a86ff',
            boxShadow: '0 0 8px rgba(58,134,255,0.8)',
            display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
          Available for new projects
        </motion.div>

        {/* Animated Headline */}
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: 28 }}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
              transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
              style={{
                fontSize: 'clamp(48px, 8vw, 88px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#0f0f0f',
                fontFamily: 'Poppins, sans-serif',
                margin: 0,
              }}
            >
              {headlines[current].line1}
              <br />
              <span style={{
                WebkitTextStroke: '2px #0f0f0f',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}>
                {headlines[current].line2}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 18,
            color: '#6b6b6b',
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 48,
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          We're a team of expert designers, developers, and strategists delivering
          digital success for a decade. From web apps to mobile — we build your vision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 72 }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '16px 36px',
              borderRadius: 999,
              border: 'none',
              background: '#3a86ff',
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              fontFamily: 'Poppins, sans-serif',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              boxShadow: '0 8px 24px rgba(58,134,255,0.35)',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(58,134,255,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(58,134,255,0.35)';
            }}
          >
            Let's Talk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '16px 36px',
              borderRadius: 999,
              border: '1.5px solid rgba(0,0,0,0.15)',
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(10px)',
              color: '#1a1a1a',
              fontSize: 15,
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Our Work
          </button>
        </motion.div>

        {/* Stats Row */}
        
      </motion.div>

      {/* ── Services Scrolling Ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(10px)',
          padding: '14px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 48,
            animation: 'marquee-hero 20s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {[...services, ...services, ...services].map((s, i) => (
            <span
              key={i}
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              {s}
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
        @keyframes marquee-hero {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
