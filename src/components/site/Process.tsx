import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discovery Call", d: "We listen, ask sharp questions, and surface the real problem." },
  { n: "02", t: "Strategy & Planning", d: "A clear roadmap, scoped milestones, and measurable outcomes." },
  { n: "03", t: "Design & Development", d: "Beautifully engineered systems shipped in tight sprints." },
  { n: "04", t: "Deployment", d: "Zero-downtime launches with enterprise-grade observability." },
  { n: "05", t: "Continuous Growth", d: "We optimize, iterate, and scale — long after go-live." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Our Process</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            A proven path from idea to impact.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 h-16 w-16 rounded-full glass flex items-center justify-center text-sm font-mono">
                  {s.n}
                </div>
                <div className="mt-5 font-semibold">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
