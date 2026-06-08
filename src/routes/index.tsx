import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Why from "@/components/site/Why";
import Portfolio from "@/components/site/Portfolio";
import Process from "@/components/site/Process";
import Testimonials from "@/components/site/Testimonials";
import Booking from "@/components/site/Booking";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWidget from "@/components/site/FloatingWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3Square.io — AI & Digital Transformation Agency" },
      { name: "description", content: "3Square.io builds websites, AI agents, mobile apps, ERP systems, and automation that help organizations grow faster and operate smarter." },
      { property: "og:title", content: "3Square.io — Digital Transformation Powerhouse" },
      { property: "og:description", content: "Websites, AI automation, mobile apps, ERP, and custom software for forward-thinking organizations." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Why />
        <Portfolio />
        <Process />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
}
