import { motion } from 'framer-motion';

export default function GradientButton({ children, onClick, variant = 'filled', className = '', ...props }) {
  if (variant === 'outline') {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={`px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300 text-sm ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-7 py-3.5 gradient-bg text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 text-sm ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
