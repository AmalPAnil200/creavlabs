import { motion } from 'framer-motion';
import {
  HiPhone,
  HiCalendarDays,
  HiDocumentText,
  HiArrowPath
} from 'react-icons/hi2';

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

export default function QuickActions() {
  const scroll = (id) => {
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 lg:right-8 top-1/2 hidden lg:flex -translate-y-1/2 z-50 flex lg:flex-col gap-4">
      {quickActions.map((action, i) => (
        <motion.div
          key={action.action}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
          className="group relative flex items-center"
        >
          <button
            onClick={() => scroll(action.href)}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-blue-500/30 backdrop-blur-md flex items-center justify-center text-white text-xl md:text-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-90 relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] cursor-pointer"
            aria-label={action.action}
          >
            {/* Background gradient accent */}
            <div className={`absolute inset-0 bg-linear-to-br ${action.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <action.icon className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Tooltip Label (Slides out on hover) */}
          <div className="hidden md:block absolute left-[120%] px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl text-white text-xs font-semibold whitespace-nowrap opacity-0 -translate-x-5 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-2xl z-20">
            <div className="flex flex-col">
              <span className="text-[10px] text-blue-400 uppercase tracking-widest">
                {action.label}
              </span>
              <span>{action.action}</span>
            </div>

            {/* Arrow */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-black/80 border-l border-b border-white/10 rotate-45 -mr-1" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
