import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" /> AI-First Digital Transformation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-center text-5xl md:text-7xl font-semibold tracking-tight glow-text"
        >
          Transform Your Organization
          <br />
          Into a <span>Digital Powerhouse</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-center text-base md:text-lg text-muted-foreground"
        >
          We build websites, AI systems, mobile apps, ERP platforms, and automation
          solutions that help organizations grow faster and operate smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Book Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Upward growth graph animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-20 mx-auto max-w-5xl"
        >
          <div className="relative glass rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Growth Trajectory</div>
                <div className="mt-2 text-3xl md:text-4xl font-semibold flex items-center gap-2">
                  +312%
                  <TrendingUp className="h-6 w-6 text-emerald-400" />
                </div>
              </div>
              <div className="hidden md:flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-white/70" /> Revenue</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400/80" /> Automation</span>
              </div>
            </div>

            <div className="relative h-64 md:h-80 w-full">
              <svg viewBox="0 0 800 320" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <linearGradient id="lineGrad2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(52,211,153,0.4)" />
                    <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                  </linearGradient>
                </defs>

                {/* grid */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="0" x2="800" y1={i * 70 + 10} y2={i * 70 + 10} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                ))}

                {/* area fill - revenue */}
                <motion.path
                  d="M0,280 L80,260 L160,240 L240,220 L320,180 L400,160 L480,120 L560,100 L640,70 L720,50 L800,20 L800,320 L0,320 Z"
                  fill="url(#lineGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />

                {/* line - revenue */}
                <motion.path
                  d="M0,280 L80,260 L160,240 L240,220 L320,180 L400,160 L480,120 L560,100 L640,70 L720,50 L800,20"
                  fill="none"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
                />

                {/* area fill - automation */}
                <motion.path
                  d="M0,300 L80,285 L160,270 L240,245 L320,225 L400,195 L480,170 L560,145 L640,115 L720,90 L800,60 L800,320 L0,320 Z"
                  fill="url(#lineGrad2)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1 }}
                />

                {/* line - automation */}
                <motion.path
                  d="M0,300 L80,285 L160,270 L240,245 L320,225 L400,195 L480,170 L560,145 L640,115 L720,90 L800,60"
                  fill="none"
                  stroke="rgba(52,211,153,0.9)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
                />

                {/* end point pulse */}
                <motion.circle
                  cx="800" cy="20" r="6"
                  fill="white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.6, 1] }}
                  transition={{ duration: 2, delay: 2.4, repeat: Infinity }}
                />
              </svg>
            </div>

            <div className="mt-4 flex justify-between text-xs text-muted-foreground">
              {["Q1", "Q2", "Q3", "Q4", "Q5"].map((q) => (
                <span key={q}>{q}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* logo strip */}
        <div className="mt-20 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by forward-thinking organizations
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-muted-foreground/70 text-sm">
          {["SVCN", "Vibha International", "VSCA Academy", "Eskillate"].map((n) => (
            <span key={n} className="font-display tracking-wide">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
