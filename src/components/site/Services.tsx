import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe, Bot, Smartphone, Database, Palette, TrendingUp, Headphones, Code2,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "High-performance dynamic websites engineered to convert. Built on modern stacks, optimized for speed, SEO and scalability.", tag: "01 — Web" },
  { icon: Bot, title: "AI Automation & Agents", desc: "Custom AI agents that automate operations end-to-end — from lead handling to internal workflows and customer support.", tag: "02 — AI" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-grade iOS & Android apps with delightful UX, offline-first architecture and production-ready CI/CD.", tag: "03 — Mobile" },
  { icon: Database, title: "ERP & CRM Systems", desc: "Scalable platforms unifying sales, ops, inventory and finance into a single source of truth for your organization.", tag: "04 — Systems" },
  { icon: Palette, title: "Branding & Design", desc: "Identity systems, design tokens and product UI that earn trust at first glance and scale across every surface.", tag: "05 — Brand" },
  { icon: TrendingUp, title: "Digital Marketing & SEO", desc: "Data-driven growth across paid, organic and social — built on analytics, experimentation and measurable ROI.", tag: "06 — Growth" },
  { icon: Headphones, title: "IT Support & Cloud", desc: "Enterprise-grade support, proactive monitoring and cloud infrastructure on AWS, GCP and Azure.", tag: "07 — Cloud" },
  { icon: Code2, title: "Custom Software", desc: "Bespoke software tailored to your unique workflows — engineered for durability, security and scale.", tag: "08 — Custom" },
];

function StackCard({ service, index, total }: { service: typeof services[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const Icon = service.icon;
  const topOffset = 96 + index * 24;
  return (
    <div ref={ref} className="sticky" style={{ top: `${topOffset}px` }}>
      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto max-w-5xl rounded-3xl border border-border bg-card overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 opacity-[0.04] grid-bg" />
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10 p-10 md:p-14 min-h-[420px]">
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{service.tag}</div>
              <h3 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                {service.title}
              </h3>
              <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                {service.desc}
              </p>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-px w-10 bg-foreground/40" />
              <span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-2xl glass flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
              <Icon className="h-20 w-20 md:h-24 md:w-24 text-foreground relative" strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Capabilities</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Everything your organization needs, under one roof.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From idea to deployment — we deliver the full stack of digital transformation.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {services.map((s, i) => (
            <StackCard key={s.title} service={s} index={i} total={services.length} />
          ))}
        </div>
        <div className="h-[40vh]" />
      </div>
    </section>
  );
}
