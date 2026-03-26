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
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#3A86FF"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" style={{ background: '#0f0f0f', padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{
            fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
            fontWeight: 700, color: '#3a86ff', display: 'block', marginBottom: 16,
            fontFamily: 'Poppins, sans-serif',
          }}>
            What Our Clients Say
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 100,
            color: '#fff', lineHeight: 1.1, margin: 0,
            letterSpacing: '-0.03em', fontFamily: 'Poppins, sans-serif',
          }}>
            Results That We{' '}
            <span className="text-blue-500">
              Successfully Deliver
            </span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          marginBottom: 24,
        }}>
          {/* Main Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              style={{
                background: '#1a1a1a',
                borderRadius: 32,
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 320,
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div>
                <StarRating count={testimonials[active].rating} />
                <p style={{
                  fontSize: 20, fontWeight: 400, color: '#e5e5e5',
                  lineHeight: 1.7, margin: '24px 0 32px',
                  fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em',
                }}>
                  "{testimonials[active].text}"
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(58, 134, 255,0.4)' }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, fontFamily: 'Poppins, sans-serif' }}>
                    {testimonials[active].name}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Poppins, sans-serif', marginTop: 2 }}>
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(i)}
                style={{
                  background: active === i ? 'rgba(58, 134, 255,0.08)' : '#1a1a1a',
                  border: `1px solid ${active === i ? 'rgba(58, 134, 255,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 20,
                  padding: '20px 24px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, fontFamily: 'Poppins, sans-serif' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'Poppins, sans-serif', marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
                {active === i && (
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3A86FF', flexShrink: 0 }} />
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
          style={{
            background: '#3A86FF',
            borderRadius: 32,
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <h3 style={{
              fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 8,
              letterSpacing: '-0.02em', fontFamily: 'Poppins, sans-serif',
            }}>
              Your partners for digital success
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', margin: 0, fontFamily: 'Poppins, sans-serif' }}>
              Free advice. Book a callback with our team today.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '16px 36px', borderRadius: 999, background: '#fff',
              color: '#3A86FF', fontSize: 15, fontWeight: 700, border: 'none',
              cursor: 'pointer', fontFamily: 'Poppins, sans-serif',
              display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.25s ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
            }}
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