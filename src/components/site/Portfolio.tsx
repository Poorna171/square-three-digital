import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const work = [
  {
    name: "SVCN Educational Institutions",
    url: "https://svcnedu.in",
    tag: "Education",
    desc: "Modern web presence unifying multiple campuses.",
  },
  {
    name: "VSCA Rifle Shooting Academy",
    url: "https://www.vscarifleshootingtmk.com/",
    tag: "Sports",
    desc: "Premium brand site with online enrolment.",
  },
  {
    name: "Eskillate",
    url: "https://eskillate.in/",
    tag: "Edtech",
    desc: "Learning platform for next-gen professionals.",
  },
  {
    name: "Vibha International School",
    url: "https://vibhainternationalschool.in/",
    tag: "Education",
    desc: "Admissions-driven site with rich storytelling.",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Selected Work</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Built for organizations that mean business.
            </h2>
          </div>
          <a href="#book" className="text-sm text-muted-foreground hover:text-foreground">Start your project →</a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {work.map((w, i) => (
            <motion.a
              key={w.url}
              href={w.url}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/40 transition"
            >
              <div className="relative h-64 overflow-hidden bg-secondary">
                <iframe
                  src={w.url}
                  title={w.name}
                  loading="lazy"
                  className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{w.tag}</div>
                  <div className="mt-1 text-lg font-semibold">{w.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{w.desc}</div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
