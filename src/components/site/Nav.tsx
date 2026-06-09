import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo-v3.png.asset.json";


const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/40 backdrop-blur-xl border-b border-border/40" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="3Square.io"
            className="h-16 md:h-20 w-auto brightness-0 invert"
          />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#book"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Book a Call
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-6 bg-foreground" />
            <span className="block h-0.5 w-4 bg-foreground ml-auto" />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
