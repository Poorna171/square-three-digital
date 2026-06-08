import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Talk to a human.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Prefer a quick chat? Pick up the phone or drop us a message — we respond fast.
          </p>
          <div className="mt-10 space-y-4">
            <a href="tel:+919632293345" className="flex items-center gap-4 group">
              <span className="h-12 w-12 rounded-xl glass flex items-center justify-center group-hover:bg-white/10 transition">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <div className="text-xs text-muted-foreground">Call</div>
                <div className="font-medium">+91 96322 93345</div>
              </span>
            </a>
            <a href="mailto:poornavisions@gmail.com" className="flex items-center gap-4 group">
              <span className="h-12 w-12 rounded-xl glass flex items-center justify-center group-hover:bg-white/10 transition">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">poornavisions@gmail.com</div>
              </span>
            </a>
            <a href="https://wa.me/919632293345" target="_blank" rel="noopener" className="flex items-center gap-4 group">
              <span className="h-12 w-12 rounded-xl glass flex items-center justify-center group-hover:bg-white/10 transition">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-medium">Chat with us</div>
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="glass rounded-2xl p-6 space-y-4 h-fit"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Your name" className="rounded-lg border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-foreground/60" />
            <input placeholder="Your email" className="rounded-lg border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-foreground/60" />
          </div>
          <input placeholder="Subject" className="w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-foreground/60" />
          <textarea rows={5} placeholder="How can we help?" className="w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-foreground/60" />
          <button className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
