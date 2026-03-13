import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiPhone,
  HiCalendarDays,
  HiDocumentText,
  HiArrowPath
} from 'react-icons/hi2';
import GradientButton from '../components/GradientButton';

// Dummy video URLs for the slider
const slides = [
  {
    id: 1,
    video: 'https://www.pexels.com/download/video/33679186/', // Abstract tech network
    title: 'Transforming Ideas Into Reality',
    subtitle: 'We design and build high-performance digital platforms for ambitious brands.',
  },
  {
    id: 2,
    video: 'https://www.pexels.com/download/video/2795164/', // Coding/typing
    title: 'Scalable Software Engineering',
    subtitle: 'Robust, secure, and future-proof architectures built with modern tech stacks.',
  },
  {
    id: 3,
    video: 'https://www.pexels.com/download/video/7706758/', // Design/UI
    title: 'Award-Winning Product Design',
    subtitle: 'Intuitive user experiences that drive engagement, retention, and growth.',
  },
];

const quickActions = [
  {
    icon: HiPhone,
    label: 'Need assistance?',
    action: 'Request a call',
    href: '#contact',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: HiCalendarDays,
    label: 'Schedule time',
    action: 'Get an appointment',
    href: '#contact',
    color: 'from-violet-500/20 to-purple-500/20'
  },
  {
    icon: HiDocumentText,
    label: 'Ready to start?',
    action: 'Get a free proposal',
    href: '#contact',
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    icon: HiArrowPath,
    label: 'Existing client?',
    action: 'Request an update',
    href: '#contact',
    color: 'from-emerald-500/20 to-teal-500/20'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* ── Background Video Slider ── */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Dimming overlay so text is readable */}
          <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 noise-overlay opacity-30 z-10 pointer-events-none" />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={slides[current].video}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Foreground Text Content ── */}
      <div className="container-custom relative z-20 w-full pt-32 pb-20 flex flex-col items-left text-left">

        {/* Dynamic Title */}
        <div className="h-[140px] sm:h-[180px] md:h-[100px] flex items-center justify-center mb-2 w-full">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[60px] font-bold leading-[1.1] tracking-tight text-white max-w-5xl"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Dynamic Subtext */}
        <div className="h-[50px] md:h-[100px] lg:h-[40px] flex items-center justify-left lg:justify-center mb-16 w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-[18px] text-slate-300 font-light max-w-2xl leading-relaxed drop-shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        
      </div>

      {/* ── Slider Navigation / Progress ── */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group relative w-16 h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer"
          >
            {/* Progress bar fill for active slide */}
            {i === current && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="absolute inset-0 bg-blue-500 rounded-full"
              />
            )}
            {/* Hover preview line */}
            <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        ))}
      </div>

    </section>
  );
}
