import { MessageCircle, Phone } from "lucide-react";

export default function FloatingWidget() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919632293345"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-black/40 hover:scale-105 transition"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+919632293345"
        aria-label="Call now"
        className="h-12 w-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
