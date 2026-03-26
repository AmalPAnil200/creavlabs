import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Understand Your Needs',
    description:
      'We listen first, then strategize. Give us the opportunity to deeply study what you need — your goals, your audience, your edge.',
    accent: false,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Analyse & Propose',
    description:
      'Our expert team studies your organization and submits a detailed proposal tailored precisely to your goals and constraints.',
    accent: true,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Deliver the Best Solution',
    description:
      'Our international team of experts delivers with quality that meets the highest global standards — on time, every time.',
    accent: false,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#fafaf8] py-24 md:py-10 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-black/[0.03] text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] font-[Poppins,sans-serif] mb-6">
            Our Process
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-light leading-[1.1] tracking-[-0.03em] text-[#0f0f0f] font-[Poppins,sans-serif] mb-5">
            How we work,
            <span className="text-blue-500">Step by step.</span>
          </h2>

          <p className="text-[17px] leading-relaxed text-[#666] max-w-[520px] mx-auto font-[Poppins,sans-serif] font-light">
            A proven three-step framework that turns your vision into a world-class digital product.
          </p>
        </motion.div>

        {/* ── Steps Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={[
                'group flex flex-col rounded-3xl p-8 lg:p-10 border transition-all duration-300 cursor-default',
                'hover:-translate-y-1.5',
                step.accent
                  ? 'bg-[#0f0f0f] border-[#0f0f0f] shadow-[0_8px_40px_rgba(0,0,0,0.22)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
                  : 'bg-white border-black/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]',
              ].join(' ')}
            >
              {/* Number + Icon row */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={[
                    'text-[13px] font-bold tracking-[0.1em] font-[Poppins,sans-serif]',
                    step.accent ? 'text-white/40' : 'text-[#aaa]',
                  ].join(' ')}
                >
                  {step.num}
                </span>

                <span
                  className={[
                    'w-13 h-13 rounded-[14px] flex items-center justify-center text-blue-500',
                    step.accent ? 'bg-white/[0.08]' : 'bg-[#f4f4f0]',
                  ].join(' ')}
                >
                  {step.icon}
                </span>
              </div>

              {/* Divider */}
              <div
                className={[
                  'h-px mb-6',
                  step.accent ? 'bg-white/10' : 'bg-black/[0.07]',
                ].join(' ')}
              />

              {/* Title */}
              <h3
                className={[
                  'text-xl lg:text-2xl font-bold leading-snug tracking-[-0.02em] font-[Poppins,sans-serif] mb-4',
                  step.accent ? 'text-white' : 'text-[#0f0f0f]',
                ].join(' ')}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className={[
                  'text-[15px] leading-[1.75] font-light font-[Poppins,sans-serif] flex-1',
                  step.accent ? 'text-white/55' : 'text-[#666]',
                ].join(' ')}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-12 text-[15px] text-[#888] font-[Poppins,sans-serif]"
        >
          Ready to start?&nbsp;
          <a
            href="#contact"
            className="text-blue-500 font-semibold border-b border-transparent hover:border-blue-500 transition-colors duration-200"
          >
            Let&apos;s talk →
          </a>
        </motion.p>
      </div>
    </section>
  );
}