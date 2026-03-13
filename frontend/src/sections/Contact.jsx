import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import GradientButton from '../components/GradientButton';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const services = [
  'Website Development',
  'Mobile App Development',
  'UI/UX Design',
  'SEO & Digital Marketing',
  'Custom Software',
  'Other',
];

const contactInfo = [
  { icon: <HiMail className="w-5 h-5" />, label: 'Email', value: 'hello@creavlabs.com' },
  { icon: <HiPhone className="w-5 h-5" />, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: <HiLocationMarker className="w-5 h-5" />, label: 'Office', value: 'Remote-First • Global' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const field = (name) => ({
    value: form[name],
    onChange: (e) => {
      setForm((f) => ({ ...f, [name]: e.target.value }));
      if (errors[name]) setErrors((err) => { const n = {...err}; delete n[name]; return n; });
    },
  });

  return (
    <SectionWrapper id="contact" className="bg-dark-2/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll get back to you within 24 hours with a tailored plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass rounded-2xl p-6 border border-white/5">
              <h3 className="font-bold text-white text-lg mb-6">Contact Info</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                      <div className="text-sm font-medium text-slate-200">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-5 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <div className="text-sm font-semibold text-white">Usually responds in &lt;2 hours</div>
                  <div className="text-xs text-slate-400">Mon–Sat, 9am–6pm UTC</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-5 border border-white/5">
              <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((s) => (
                  <button
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs text-slate-300 hover:text-white hover:border-purple-500/40 transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 text-center border border-green-500/30 h-full flex flex-col items-center justify-center gap-4"
              >
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 max-w-sm">
                  Thanks for reaching out! We'll review your project and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); }}
                  className="mt-2 text-sm text-purple-400 hover:text-white transition-colors"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass rounded-2xl p-7 border border-white/5 flex flex-col gap-5"
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      {...field('name')}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-slate-500 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200 ${
                        errors.name ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      {...field('email')}
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-slate-500 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200 ${
                        errors.email ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Service Needed *</label>
                  <select
                    {...field('service')}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200 ${
                      form.service ? 'text-white' : 'text-slate-500'
                    } ${errors.service ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'}`}
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Project Details *</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project — what are you building, your timeline, and what success looks like..."
                    {...field('message')}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-slate-500 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200 resize-none ${
                      errors.message ? 'border-red-500/60' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <GradientButton type="submit" className="w-full py-4 text-base">
                  🚀 Send My Request
                </GradientButton>
                <p className="text-xs text-slate-500 text-center">
                  Free consultation. No strings attached.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
