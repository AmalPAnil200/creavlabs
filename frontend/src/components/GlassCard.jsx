import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', glowColor = 'rgba(124,58,237,0.2)' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`glass gradient-border p-6 rounded-2xl cursor-default relative overflow-hidden group/card ${className}`}
      style={{ '--glow': glowColor }}
    >
      {/* Hover glow layer */}
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${glowColor} 0%, transparent 70%)` }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
