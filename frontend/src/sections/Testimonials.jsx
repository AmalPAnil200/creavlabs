import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: 'Working with CreaveLabs was a game-changer. They turned our vision into a world-class product that our users absolutely love. Exceptional quality, on time, and far above our expectations.',
    name: 'Sarah M.',
    role: 'CEO, NovaTech',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    rating: 5,
    company: 'NovaTech',
  },
  {
    text: 'Exceptional team. Delivered ahead of schedule with quality that exceeded every expectation we had. Their attention to detail, communication and technical prowess is truly outstanding.',
    name: 'James K.',
    role: 'Founder, Buildify',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    rating: 5,
    company: 'Buildify',
  },
  {
    text: 'The CreaveLabs team completely transformed our online presence. Our conversion rate jumped 3x within 2 months of launch. They really understand how to build for results.',
    name: 'Priya R.',
    role: 'CMO, StyleCart',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80',
    rating: 5,
    company: 'StyleCart',
  },
  {
    text: 'From discovery to delivery, the process was incredibly smooth. They asked the right questions and built exactly what we needed. I highly recommend them for any digital project.',
    name: 'Alex T.',
    role: 'CTO, QuickLoan',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
    rating: 5,
    company: 'QuickLoan',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#3A86FF"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="bg-[#0f0f0f] py-16 md:py-[100px]">
      <div className="max-w-[1160px] mx-auto px-5 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-bold text-[#3a86ff] block mb-3 md:mb-4 font-['Poppins',sans-serif]">
            What Our Clients Say
          </span>
          <h2 className="text-[clamp(28px,5vw,60px)] font-thin text-white leading-[1.1] m-0 tracking-[-0.03em] font-['Poppins',sans-serif]">
            Results That We{' '}
            <span className="text-blue-500">
              Successfully Deliver
            </span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-10">
          {/* Main Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[300px] lg:min-h-[320px] border border-white/5"
            >
              <div>
                <StarRating count={testimonials[active].rating} />
                <p className="text-base md:text-lg lg:text-xl font-normal text-[#e5e5e5] leading-[1.7] my-6 lg:my-8 font-['Poppins',sans-serif] tracking-[-0.01em]">
                  "{testimonials[active].text}"
                </p>
              </div>
              <div className="flex items-center gap-3.5">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#3a86ff]/40"
                />
                <div>
                  <div className="font-bold text-white text-[14px] md:text-[15px] font-['Poppins',sans-serif]">
                    {testimonials[active].name}
                  </div>
                  <div className="text-[12px] md:text-[13px] text-white/40 font-['Poppins',sans-serif] mt-0.5">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial List */}
          <div className="flex flex-col gap-3 md:gap-4">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3.5 rounded-2xl p-4 md:p-5 lg:px-6 cursor-pointer text-left transition-all duration-300 border ${
                  active === i 
                    ? 'bg-[#3A86FF]/10 border-[#3A86FF]/30' 
                    : 'bg-[#1a1a1a] border-white/5 hover:bg-white/5'
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-[13px] md:text-[14px] font-['Poppins',sans-serif]">
                    {t.name}
                  </div>
                  <div className="text-[11px] md:text-[12px] text-white/40 font-['Poppins',sans-serif] mt-0.5">
                    {t.role}
                  </div>
                </div>
                {active === i && (
                  <div className="w-2 h-2 rounded-full bg-[#3A86FF] shrink-0" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA Strip at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#3A86FF] rounded-3xl p-8 md:p-10 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-[22px] md:text-[28px] font-extrabold text-white mb-2 md:mb-3 tracking-[-0.02em] font-['Poppins',sans-serif]">
              Your partners for digital success
            </h3>
            <p className="text-[14px] md:text-[15px] text-white/85 m-0 font-['Poppins',sans-serif]">
              Free advice. Book a callback with our team today.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 md:px-9 py-3 md:py-4 rounded-full bg-white text-[#3A86FF] text-[14px] md:text-[15px] font-bold border-none cursor-pointer font-['Poppins',sans-serif] flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.15)] shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] w-full justify-center md:w-auto md:justify-start"
          >
            Let's talk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}