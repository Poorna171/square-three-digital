import logoAsset from "@/assets/square-io-logo.jpg.asset.json";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt="3Square.io" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Building the Digital Backbone of Modern Organizations.
          </p>
        </div>
        <FooterCol title="Services" links={["Websites", "AI Automation", "Mobile Apps", "ERP & CRM", "Custom Software"]} />
        <FooterCol title="Company" links={["Portfolio", "About", "Process", "Contact"]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} 3Square.io — All rights reserved.</div>
          <div>Crafted with precision in India.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-foreground/80 hover:text-foreground transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
