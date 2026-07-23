import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MCU_0012" },
      { name: "description", content: "Behind MCU_0012 — a Marvel-obsessed editor and content creator crafting cinematic reels and visual stories." },
      { property: "og:title", content: "About — MCU_0012" },
      { property: "og:description", content: "Behind MCU_0012 — a Marvel-obsessed editor and content creator." },
    ],
  }),
  component: About,
});

const stats = [
  { v: "120+", l: "Reels Forged" },
  { v: "4.2M", l: "Views Earned" },
  { v: "60K+", l: "Followers" },
  { v: "0012", l: "Codename" },
];

const journey = [
  { y: "2021", t: "First Frame", d: "Picked up a phone and a free editor. The MCU was the spark." },
  { y: "2022", t: "The Build", d: "Switched to desktop editing. Mastered timeline rhythm and color." },
  { y: "2023", t: "Going Vertical", d: "Doubled down on short-form. Reels began breaking 100K." },
  { y: "2024", t: "VFX Era", d: "Added compositing, particle systems and energy work to the toolkit." },
  { y: "2025", t: "MCU_0012", d: "The codename, the brand, the broadcast." },
];

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs tracking-[0.4em] text-doom-glow">// FILE.0012.DOSSIER</p>
      <h1 className="font-display text-5xl md:text-7xl mt-4 doom-glow-text">About</h1>
      <p className="mt-6 max-w-3xl text-lg text-foreground/80">
        I'm a Marvel-obsessed content creator and editor. I forge short-form cinematic
        edits, VFX-driven reels and graphic posters that live and breathe inside the
        Marvel universe. Every frame is engineered. Every cut, intentional.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {stats.map((s) => (
          <div key={s.l} className="doom-panel p-6 text-center">
            <p className="font-display text-4xl doom-glow-text">{s.v}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mt-2">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="font-display text-3xl md:text-4xl doom-glow-text border-b border-primary/20 pb-4">The Timeline</h2>
        <div className="mt-10 space-y-4">
          {journey.map((j) => (
            <div key={j.y} className="doom-panel p-6 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 items-start">
              <div>
                <p className="font-display text-3xl doom-glow-text">{j.y}</p>
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wider">{j.t}</h3>
                <p className="text-foreground/70 mt-2">{j.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 doom-panel p-10 text-center">
        <h2 className="font-display text-3xl doom-glow-text">Want to collaborate?</h2>
        <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
          Brands, artists, fellow editors — the bay is open. Let's build something cinematic.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-doom">Initiate Contact</Link>
          <Link to="/reels" className="btn-ghost-doom">See the Work</Link>
        </div>
      </div>
    </div>
  );
}
