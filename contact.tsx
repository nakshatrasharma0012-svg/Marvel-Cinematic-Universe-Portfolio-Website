import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MCU_0012" },
      { name: "description", content: "Get in touch with MCU_0012 for collaborations, brand work and creative projects." },
      { property: "og:title", content: "Contact — MCU_0012" },
      { property: "og:description", content: "Collaborations, brand work, creative projects." },
    ],
  }),
  component: Contact,
});

const EMAIL = "nakshatrasharma0012@gmail.com";
const INSTAGRAM = "https://www.instagram.com/mcu_0012/";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const mailtoHref = () => {
    const subject = encodeURIComponent(form.subject || "MCU_0012 — Enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs tracking-[0.4em] text-doom-glow">// COMMS.OPEN</p>
      <h1 className="font-display text-5xl md:text-7xl mt-4 doom-glow-text">Contact</h1>
      <p className="mt-6 max-w-2xl text-foreground/70">
        Open channel. Reach out for collaborations, brand work or creative projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {/* Collaboration block */}
        <div className="doom-panel p-8">
          <p className="font-mono text-xs text-doom-glow tracking-widest">[ 01 ]</p>
          <h2 className="font-display text-2xl mt-3">Collaboration Request</h2>
          <p className="text-foreground/70 mt-3 text-sm">
            DMs are open on Instagram. Brand deals, edit collabs, fan-edit features.
          </p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-doom mt-6">
            Open Instagram →
          </a>
        </div>

        {/* Direct email block */}
        <div className="doom-panel p-8">
          <p className="font-mono text-xs text-doom-glow tracking-widest">[ 02 ]</p>
          <h2 className="font-display text-2xl mt-3">Direct Channel</h2>
          <p className="text-foreground/70 mt-3 text-sm">
            For longer briefs, project files, deadlines and rates.
          </p>
          <a href={`mailto:${EMAIL}`} className="btn-ghost-doom mt-6 inline-block">
            {EMAIL}
          </a>
        </div>
      </div>

      {/* Email form */}
      <div className="doom-panel p-8 md:p-12 mt-4">
        <p className="font-mono text-xs text-doom-glow tracking-widest">[ 03 ]</p>
        <h2 className="font-display text-2xl mt-3">Send a Message</h2>
        <p className="text-foreground/70 mt-3 text-sm">
          Fill the form — it opens your email client pre-addressed to {EMAIL}.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref();
          }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          <div className="md:col-span-2">
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
          </div>
          <div className="md:col-span-2">
            <label className="font-mono text-xs uppercase tracking-widest text-doom-glow">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="cursor-target mt-2 w-full bg-input/50 border border-border focus:border-primary focus:outline-none px-4 py-3 font-sans text-foreground"
              style={{ resize: "vertical" }}
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-4">
            <p className="font-mono text-[10px] text-foreground/50">// TRANSMISSION SECURED</p>
            <button type="submit" className="btn-doom">Transmit →</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-doom-glow">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-target mt-2 w-full bg-input/50 border border-border focus:border-primary focus:outline-none px-4 py-3 font-sans text-foreground"
      />
    </div>
  );
}
