import { Quote } from "lucide-react";

const rowA = [
  { name: "Dr. R. Kumar", org: "SVCN Educational Institutions", quote: "3Square delivered a digital backbone that scales across all our campuses. Truly transformational." },
  { name: "Principal", org: "Vibha International School", quote: "Our admissions doubled within a quarter. The team is professional, fast, and deeply skilled." },
  { name: "Coach M.", org: "VSCA Rifle Shooting Academy", quote: "A premium brand experience that elevated our entire identity. They understood the vision." },
  { name: "Founder", org: "Eskillate", quote: "From platform architecture to growth — they were our complete tech partner." },
  { name: "Operations Lead", org: "Enterprise Client", quote: "Their AI agents now handle 70% of our routine workflows. ROI in weeks, not quarters." },
];

const rowB = [
  { name: "CTO", org: "Logistics Co.", quote: "ERP modernization done right. We finally have one source of truth across the business." },
  { name: "CMO", org: "DTC Brand", quote: "Site rebuild + SEO = our best quarter ever. Conversions up 3.2x." },
  { name: "VP Engineering", org: "Fintech", quote: "Enterprise security and engineering rigor we usually only see from top-tier firms." },
  { name: "Head of Growth", org: "SaaS Startup", quote: "From zero to a polished AI product in 8 weeks. Genuinely impressive execution." },
  { name: "Director", org: "Healthcare", quote: "Reliable, proactive support and rock-solid infrastructure. We sleep better at night." },
];

function Card({ q, name, org }: { q: string; name: string; org: string }) {
  return (
    <div className="shrink-0 w-[340px] md:w-[420px] rounded-2xl glass p-6 mx-3">
      <Quote className="h-5 w-5 text-muted-foreground" />
      <p className="mt-4 text-sm md:text-base leading-relaxed text-foreground/90">"{q}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/30 to-white/5 border border-border" />
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">{org}</div>
        </div>
      </div>
    </div>
  );
}

function Marquee({ items, reverse = false, duration = "50s" }: { items: typeof rowA; reverse?: boolean; duration?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-pause overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div
        className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
        style={{ ["--duration" as string]: duration }}
      >
        {doubled.map((t, i) => <Card key={i} {...t} q={t.quote} />)}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Testimonials</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Loved by teams shipping the future.
          </h2>
        </div>
      </div>
      <div className="mt-14 space-y-6">
        <Marquee items={rowA} duration="60s" />
        <Marquee items={rowB} reverse duration="55s" />
      </div>
    </section>
  );
}
