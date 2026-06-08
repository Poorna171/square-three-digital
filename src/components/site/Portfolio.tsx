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

const shot = (url: string) =>
  `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`;

function Card({ w }: { w: (typeof work)[number] }) {
  return (
    <a
      href={w.url}
      target="_blank"
      rel="noopener"
      className="group shrink-0 w-[320px] md:w-[420px] mx-3 rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/40 transition"
    >
      <div className="relative h-52 md:h-64 overflow-hidden bg-secondary">
        <img
          src={shot(w.url)}
          alt={w.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent" />
      </div>
      <div className="p-5 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
            {w.tag}
          </div>
          <div className="mt-1 text-base font-semibold">{w.name}</div>
          <div className="mt-1 text-xs text-muted-foreground">{w.desc}</div>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition shrink-0 mt-1" />
      </div>
    </a>
  );
}

export default function Portfolio() {
  const loop = [...work, ...work];
  return (
    <section id="work" className="relative py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Selected Work
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Built for organizations that mean business.
            </h2>
          </div>
          <a href="#book" className="text-sm text-muted-foreground hover:text-foreground">
            Start your project →
          </a>
        </div>
      </div>

      <div className="mt-14 marquee-pause overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div
          className="flex w-max marquee-track"
          style={{ ["--duration" as string]: "50s" }}
        >
          {loop.map((w, i) => (
            <Card key={`${w.url}-${i}`} w={w} />
          ))}
        </div>
      </div>
    </section>
  );
}
