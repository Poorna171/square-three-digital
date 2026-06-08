import { motion } from "framer-motion";
import {
  Globe, Bot, Smartphone, Database, Palette, TrendingUp, Headphones, Code2,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "High-performance dynamic websites engineered to convert." },
  { icon: Bot, title: "AI Automation & Agents", desc: "Custom AI agents that automate operations end-to-end." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-grade iOS & Android apps with delightful UX." },
  { icon: Database, title: "ERP & CRM Systems", desc: "Scalable platforms unifying every business function." },
  { icon: Palette, title: "Branding & Design", desc: "Identity systems that earn trust at first glance." },
  { icon: TrendingUp, title: "Digital Marketing & SEO", desc: "Data-driven growth across paid, organic & social." },
  { icon: Headphones, title: "IT Support & Consulting", desc: "Enterprise-grade support with proactive monitoring." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke software tailored to your unique workflows." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32">
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden hover:border-foreground/40 transition-colors"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/0 group-hover:bg-white/5 blur-2xl transition-all" />
              <s.icon className="h-6 w-6 text-foreground" />
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-border via-foreground/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
