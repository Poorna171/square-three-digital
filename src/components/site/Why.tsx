import { motion } from "framer-motion";
import { Layers, Brain, Scaling, Shield, LifeBuoy, Trophy } from "lucide-react";

const items = [
  { icon: Layers, title: "End-to-End Transformation", desc: "Strategy, design, build, ship — and grow." },
  { icon: Brain, title: "AI-First Approach", desc: "Intelligence baked into every workflow." },
  { icon: Scaling, title: "Scalable Architecture", desc: "Built for millions of users from day one." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC-grade practices and continuous monitoring." },
  { icon: LifeBuoy, title: "Dedicated Support", desc: "A team that picks up the phone." },
  { icon: Trophy, title: "Proven Results", desc: "Outcomes our clients can put on the board." },
];

export default function Why() {
  return (
    <section id="why" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Why 3Square.io</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            A partner engineered for outcomes.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            We combine deep engineering talent with an AI-first mindset to deliver
            transformation that moves the needle.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "120+", l: "Projects" },
              { n: "40+", l: "Enterprises" },
              { n: "99.99%", l: "Uptime" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-semibold">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl glass p-5"
            >
              <it.icon className="h-5 w-5" />
              <div className="mt-4 font-medium">{it.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
