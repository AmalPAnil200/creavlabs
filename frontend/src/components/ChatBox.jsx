import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUICK_REPLIES = ["Pricing", "Get a demo", "Talk to sales"];

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello — welcome to CreaveLabs. What can we help you build today? 👋",
      sender: "bot",
      time: now(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user", time: now() }]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thanks for reaching out! A member of our team will be in touch very soon.",
          sender: "bot",
          time: now(),
        },
      ]);
    }, 1800);
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end">

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="mb-4 w-[340px] sm:w-[380px] h-[520px] sm:h-[560px] flex flex-col overflow-hidden rounded-3xl shadow-2xl"
            style={{ background: "#18181b", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.25),rgba(59,130,246,0.15))", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
                  >
                    CL
                  </div>
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
                    style={{ background: "#22c55e", borderColor: "#18181b" }}
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm tracking-wide" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    CreaveLabs
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs tracking-wide" style={{ color: "#a1a1aa" }}>
                      Online · replies in minutes
                    </span>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white/80 transition-colors p-1.5 rounded-lg hover:bg-white/5"
                aria-label="Close chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
              style={{ scrollbarWidth: "none" }}
            >
              {/* Date divider */}
              <div className="flex items-center gap-2 my-1">
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
                <span className="text-[10px] uppercase tracking-widest font-medium" style={{ color: "#71717a" }}>
                  Today
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              </div>

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white font-bold"
                        style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
                      >
                        C
                      </div>
                      <span className="text-[10px] font-medium tracking-wide" style={{ color: "#71717a" }}>CreaveLabs</span>
                    </div>
                  )}
                  <div
                    className="max-w-[85%] px-4 py-2.5 text-sm leading-relaxed"
                    style={msg.sender === "user"
                      ? { background: "linear-gradient(135deg,#7c3aed,#2563eb)", color: "#fff", borderRadius: "18px 18px 4px 18px" }
                      : { background: "rgba(255,255,255,0.06)", color: "#e4e4e7", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px 18px 18px 4px" }
                    }
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] mt-1 px-1 tracking-wide" style={{ color: "#52525b" }}>
                    {msg.time}
                  </span>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start"
                  >
                    <div className="flex items-center gap-1.5 mb-1 px-1">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white font-bold"
                        style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
                      >
                        C
                      </div>
                      <span className="text-[10px] font-medium tracking-wide" style={{ color: "#71717a" }}>CreaveLabs</span>
                    </div>
                    <div
                      className="flex gap-1.5 items-center px-4 py-3"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px 18px 18px 4px" }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full block"
                          style={{ background: "#8b5cf6" }}
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-3 pt-0 flex gap-2 flex-wrap">
                {QUICK_REPLIES.map((r) => (
                  <button
                    key={r}
                    onClick={() => sendMessage(r)}
                    className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150 tracking-wide"
                    style={{ color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.08)" }}
                    onMouseEnter={e => {
                      e.target.style.background = "rgba(139,92,246,0.2)";
                      e.target.style.borderColor = "rgba(139,92,246,0.5)";
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = "rgba(139,92,246,0.08)";
                      e.target.style.borderColor = "rgba(139,92,246,0.3)";
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-4 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <form onSubmit={handleSend} className="flex items-center gap-2">
                <div
                  className="flex-1 flex items-center rounded-xl px-4 py-2.5 gap-2 transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Write a message…"
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: "#e4e4e7" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all active:scale-95 disabled:opacity-40"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
              <p className="text-center text-[10px] mt-2 tracking-widest uppercase" style={{ color: "#52525b" }}>
                Powered by CreaveLabs
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle Button ── */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center bg-transparent border-2 border-blue-500 text-blue-500 shadow-2xl cursor-pointer transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              className="relative"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {/* Notification dot */}
              <span
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                style={{ background: "#ef4444", border: "2px solid #09090b" }}
              >
                1
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}