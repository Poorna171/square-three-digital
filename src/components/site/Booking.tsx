import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";

const TIMES = ["10:00", "11:30", "14:00", "15:30", "17:00"];
const RECIPIENT = "poornavisions@gmail.com";

function getDays() {
  const out: Date[] = [];
  const today = new Date();
  let i = 0;
  while (out.length < 10) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) out.push(d);
    i++;
  }
  return out;
}

export default function Booking() {
  const days = useMemo(getDays, []);
  const [date, setDate] = useState<Date>(days[0]);
  const [time, setTime] = useState<string>("11:30");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", org: "", details: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = date.toLocaleDateString("en", { weekday: "long", month: "short", day: "numeric", year: "numeric" });
    const subject = `New Strategy Session Booking — ${form.name || "Client"} (${dateStr} · ${time})`;
    const body = [
      "New strategy session request from 3Square.io",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Organization: ${form.org}`,
      `Preferred Slot: ${dateStr} at ${time}`,
      "",
      "Project Requirements:",
      form.details,
    ].join("\n");
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative py-16 border-t border-border">
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Book a Meeting</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Let's Make Your Organization Successful
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick a slot and tell us about your project. We'll reach out within 24 hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid lg:grid-cols-5 gap-6"
        >
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> Select date
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {days.map((d) => {
                const active = d.toDateString() === date.toDateString();
                return (
                  <button
                    type="button"
                    key={d.toISOString()}
                    onClick={() => setDate(d)}
                    className={`rounded-lg p-2 text-center border transition ${
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <div className="text-[10px] uppercase opacity-70">
                      {d.toLocaleDateString("en", { weekday: "short" })}
                    </div>
                    <div className="text-base font-semibold">{d.getDate()}</div>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 text-sm text-muted-foreground">Available times</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {TIMES.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTime(t)}
                  className={`rounded-full px-4 py-1.5 text-sm border transition ${
                    time === t
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <form className="lg:col-span-3 glass rounded-2xl p-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" value={form.name} onChange={update("name")} required />
              <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
              <Field label="Phone Number" value={form.phone} onChange={update("phone")} required />
              <Field label="Organization Name" value={form.org} onChange={update("org")} required />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Project Requirements
              </label>
              <textarea
                rows={4}
                required
                value={form.details}
                onChange={update("details")}
                className="mt-2 w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-foreground/60"
                placeholder="Tell us what you're building..."
              />
            </div>
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="text-xs text-muted-foreground">
                {date.toLocaleDateString("en", { weekday: "long", month: "short", day: "numeric" })} · {time}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                {submitted ? <><Check className="h-4 w-4" /> Email opened</> : "Book Free Strategy Session"}
              </button>
            </div>
            {submitted && (
              <p className="text-xs text-muted-foreground">
                Your email app opened with the request prefilled to {RECIPIENT}. Hit send to confirm.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label, type = "text", value, onChange, required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:border-foreground/60"
      />
    </div>
  );
}
