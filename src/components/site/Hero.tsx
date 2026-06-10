import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Cpu, Database, Bot } from "lucide-react";

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

        {/* Floating AI dashboard visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-20 mx-auto max-w-5xl"
        >
          <div className="relative glass rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Bot, label: "AI Agents", val: "24/7" },
                { icon: Activity, label: "Uptime", val: "99.99%" },
                { icon: Cpu, label: "Automations", val: "1.2k+" },
                { icon: Database, label: "Records", val: "8.4M" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="rounded-xl border border-border bg-card/60 p-4"
                >
                  <s.icon className="h-4 w-4 text-muted-foreground" />
                  <div className="mt-3 text-2xl font-semibold">{s.val}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-12 gap-2 h-32 items-end">
              {Array.from({ length: 36 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${20 + ((i * 17) % 80)}%` }}
                  transition={{ duration: 1, delay: 0.8 + i * 0.02 }}
                  className="bg-gradient-to-t from-white/40 to-white/5 rounded-sm"
                />
              ))}
            </div>
          </div>

          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="hidden md:flex absolute -left-10 top-10 glass rounded-xl px-4 py-3 items-center gap-2 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-pulse-ring" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            AI Agent deployed
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="hidden md:block absolute -right-10 bottom-10 glass rounded-xl px-4 py-3 text-xs"
          >
            +312% pipeline growth
          </motion.div>
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
