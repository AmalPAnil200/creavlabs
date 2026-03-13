import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import SectionWrapper from '../components/SectionWrapper';

const metrics = [
  { value: 100, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
  { value: 10, suffix: '+', label: 'Years Experience', icon: '🏆' },
  { value: 50, suffix: '+', label: 'Global Clients', icon: '🌍' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
];

const reasons = [
  {
    icon: '⚡',
    title: 'Lightning Speed',
    description: 'Fast turnaround without compromising quality. Most projects ship within 4–8 weeks.',
    color: '#F59E0B',
  },
  {
    icon: '🤝',
    title: 'Transparent Process',
    description: 'Real-time updates, weekly calls, and shared dashboards. You always know where your project stands.',
    color: '#10B981',
  },
  {
    icon: '🔒',
    title: 'Future-Proof Tech',
    description: 'We use modern, scalable stacks so your product grows with your business.',
    color: '#3B82F6',
  },
  {
    icon: '🎯',
    title: 'Results-Focused',
    description: 'We design and build with conversion, retention, and growth in mind — not just aesthetics.',
    color: '#8B5CF6',
  },
  {
    icon: '🛠️',
    title: 'Full-Cycle Support',
    description: 'From strategy to post-launch maintenance. One partner for your entire digital journey.',
    color: '#EC4899',
  },
  {
    icon: '🌐',
    title: 'Global Standards',
    description: 'Serving clients across 25+ countries with international quality benchmarks and best practices.',
    color: '#06B6D4',
  },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={value} duration={2.5} suffix={suffix} />
      ) : (
        '0' + suffix
      )}
    </span>
  );
}

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-4 block">Why CreaveLabs</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            The Agency That <span className="gradient-text">Delivers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don't just build products — we build growth engines for ambitious companies.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-purple-500/20 transition-colors duration-300 group"
            >
              <div className="text-3xl mb-3">{m.icon}</div>
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="text-sm text-slate-400 font-medium">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-16 border border-purple-500/20 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Build Something <span className="gradient-text">Incredible?</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Join 100+ companies that have trusted CreaveLabs to bring their vision to life.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 gradient-bg text-white font-bold rounded-xl text-base hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 active:scale-95"
            >
              🚀 Start Your Project Today
            </button>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${r.color}20` }}
              >
                {r.icon}
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{r.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
