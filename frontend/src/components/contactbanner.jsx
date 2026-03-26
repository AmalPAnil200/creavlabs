import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ContactBanner() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-slate-950"
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px]" />

          {/* Glow blobs */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-indigo-500 opacity-20 blur-[80px]" />
          <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-[80px]" />

          {/* Decorative number */}
          <div className="absolute top-4 right-10 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none font-serif">
            01
          </div>

          {/* Content */}
          <div className="relative z-10 px-10 md:px-20 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

            {/* Left */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-indigo-300 text-xs font-semibold uppercase tracking-[0.2em] font-mono">
                  Free Consultation
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4 font-serif"
              >
                Ready to digitize<br />
                <span className="font-light italic text-indigo-200">your operations?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-slate-400 text-base md:text-lg leading-relaxed max-w-sm"
              >
                Let's jump on a call. We'll listen to your challenges and map out a technical blueprint — no obligations.
              </motion.p>
            </div>

            {/* Right — CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex-shrink-0 flex flex-col items-center"
            >
              <div className="block md:hidden w-full h-px bg-white/10 mb-10" />

              <a
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest overflow-hidden bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_55px_rgba(99,102,241,0.55)] transition-all duration-300 font-mono"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                <span className="relative text-white">Start the Conversation</span>
                <FaArrowRight className="relative text-white group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <p className="mt-4 text-slate-500 text-xs tracking-wide font-mono">
                No credit card required
              </p>
            </motion.div>
          </div>

          {/* Bottom border glow */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}