import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { reels, posts } from "@/data/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MCU_0012 — Marvel Content Creator Portfolio" },
      { name: "description", content: "Cinematic Marvel content. Reels, VFX, edits and design by MCU_0012." },
      { property: "og:title", content: "MCU_0012 — Marvel Content Creator" },
      { property: "og:description", content: "Cinematic Marvel content. Reels, VFX, edits and design." },
    ],
  }),
  component: Home,
});

const tools = [
  "Premiere Pro", "After Effects", "Photoshop", "Illustrator",
  "Lightroom", "Audition", "Figma", "Canva Pro",
  "CapCut Pro", "Blender", "Notion", "Frame.io",
];

const skills = [
  { id: "video-editing", title: "Video Editing", icon: "▶", desc: "Narrative-driven cuts, color, sound design.", section: "reels" },
  { id: "vfx", title: "VFX & Effects", icon: "✦", desc: "Compositing, motion FX, energy & particle work.", section: "vfx" },
  { id: "reel-creation", title: "Reel Creation", icon: "◉", desc: "Short-form vertical edits engineered for the algorithm.", section: "reels" },
  { id: "graphic-design", title: "Graphic Design", icon: "◆", desc: "Posters, key art, type-driven compositions.", section: "posts" },
  { id: "social-strategy", title: "Social Strategy", icon: "✺", desc: "Audience growth, content systems, hook engineering.", section: "strategy" },
  { id: "story-telling", title: "Story Telling", icon: "❖", desc: "Three-act arcs in 30 seconds. Emotion over volume.", section: "story" },
];

const process = [
  { n: "01", title: "Brief & Brainstorm", desc: "Decoding the assignment — references, tone, audience and the single emotion the cut must trigger. Notes get translated into a shot-sense map." },
  { n: "02", title: "Source & Curate", desc: "Hunting for the right footage, music bed and reference frames. Every asset is graded by mood and rhythm before it touches the timeline." },
  { n: "03", title: "Edit & Sound", desc: "Hard cuts on the beat, breath between drops, dialogue carved against music. Sound design lives in the same pass as the picture." },
  { n: "04", title: "VFX & Color", desc: "Compositing, energy beams, screen elements, atmospheric haze. Color is pushed last so the grade serves the story, not the other way around." },
  { n: "05", title: "Final Master", desc: "Deliverables in vertical, square and horizontal masters. Captions burned, loudness checked, thumbnails forged." },
];

export default function Home() {
  const [active, setActive] = useState<string | null>(null);
  const [skillActive, setSkillActive] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.3 0.12 145 / 0.4), transparent 70%)" }} />
          <div className="absolute inset-0 scanlines" />
        </div>
        <div className="text-center px-6 max-w-5xl">
          <p className="font-mono text-xs tracking-[0.4em] text-doom-glow mb-6">// LATVERIAN BROADCAST 0012 //</p>
          <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight">
            <span className="block doom-glow-text">MCU_0012</span>
            <span className="block text-2xl md:text-3xl mt-4 font-light tracking-[0.4em] text-foreground/80">MARVEL CONTENT CREATOR</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-foreground/70 text-lg">
            Cinematic edits, VFX-driven reels and visual storytelling forged in the
            Marvel cinematic universe. One frame at a time.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/reels" className="btn-doom">Enter the Vault →</Link>
            <Link to="/contact" className="btn-ghost-doom">Initiate Contact</Link>
          </div>
        </div>
      </section>

      {/* FEATURED REELS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader kicker="// Vault.001" title="Featured Reels" link={{ to: "/reels", label: "All Reels" }} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {reels.map((r) => (
            <Link key={r.id} to="/reels" className="cursor-target group relative aspect-[9/16] doom-panel overflow-hidden">
              <video src={r.src} muted loop playsInline autoPlay className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 p-3">
                <p className="font-mono text-[10px] text-doom-glow tracking-widest">{r.tag}</p>
                <p className="font-display text-sm">{r.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader kicker="// Vault.002" title="Featured Posts" link={{ to: "/reels", label: "All Posts" }} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {posts.map((p) => (
            <Link key={p.id} to="/reels" className="cursor-target group relative aspect-square doom-panel overflow-hidden">
              <img src={p.src} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 p-3">
                <p className="font-mono text-[10px] text-doom-glow tracking-widest">{p.tag}</p>
                <p className="font-display text-sm">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT THE CREATOR — skill blocks */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader kicker="// Dossier" title="About the Creator" />
        <p className="mt-6 max-w-3xl text-foreground/70">
          A one-man editing bay. Built for short-form storytelling, comic-book energy and
          frame-perfect cuts. Click any sector to expand.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {skills.map((s) => {
            const isOpen = skillActive === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSkillActive(isOpen ? null : s.id)}
                className="cursor-target text-left doom-panel p-6 transition-all hover:-translate-y-1"
                style={isOpen ? { boxShadow: "var(--shadow-glow)" } : undefined}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl text-doom-glow">{s.icon}</span>
                  <span className="font-mono text-[10px] text-doom-glow">{isOpen ? "[ – ]" : "[ + ]"}</span>
                </div>
                <h3 className="font-display text-xl mt-4 tracking-wider">{s.title}</h3>
                <p className="text-sm text-foreground/60 mt-2">{s.desc}</p>
                {isOpen && <SkillExpand id={s.id} />}
              </button>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader kicker="// Workflow" title="The Process" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {process.map((p) => {
            const isOpen = active === p.n;
            return (
              <button
                key={p.n}
                onClick={() => setActive(isOpen ? null : p.n)}
                className="cursor-target text-left doom-panel p-5 transition-all hover:-translate-y-1"
                style={isOpen ? { boxShadow: "var(--shadow-glow)" } : undefined}
              >
                <p className="font-mono text-xs text-doom-glow">{p.n}</p>
                <h4 className="font-display text-base mt-3 tracking-wider">{p.title}</h4>
                <p className={`text-xs text-foreground/60 mt-3 transition-all ${isOpen ? "max-h-60 opacity-100" : "max-h-12 opacity-70 overflow-hidden"}`}>
                  {p.desc}
                </p>
                <p className="font-mono text-[10px] text-doom-glow mt-3">{isOpen ? "[ COLLAPSE ]" : "[ EXPAND ]"}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeader kicker="// Arsenal" title="Tools & Software" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
          {tools.map((t) => (
            <div key={t} className="doom-panel p-4 text-center font-mono text-sm tracking-widest text-foreground/80">
              {t}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ kicker, title, link }: { kicker: string; title: string; link?: { to: string; label: string } }) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-primary/20 pb-4">
      <div>
        <p className="font-mono text-xs tracking-[0.3em] text-doom-glow">{kicker}</p>
        <h2 className="font-display text-3xl md:text-5xl mt-2 doom-glow-text">{title}</h2>
      </div>
      {link && (
        <Link to={link.to as "/"} className="cursor-target font-mono text-xs uppercase tracking-widest text-doom-glow hover:text-foreground border-b border-doom-green pb-1">
          {link.label} →
        </Link>
      )}
    </div>
  );
}

function SkillExpand({ id }: { id: string }) {
  // Curate sample media for each skill
  const map: Record<string, { type: "video" | "image"; src: string; label: string }[]> = {
    "video-editing": [
      { type: "video", src: "/reels/reel1.mp4", label: "Cinematic Edit" },
      { type: "video", src: "/reels/reel2.mp4", label: "Hero Sequence" },
    ],
    "vfx": [
      { type: "video", src: "/reels/reel3.mp4", label: "Motion FX" },
      { type: "image", src: "/posts/post2.jpg", label: "Energy Composite" },
    ],
    "reel-creation": [
      { type: "video", src: "/reels/reel4.mp4", label: "Marvel Tribute" },
      { type: "video", src: "/reels/reel2.mp4", label: "Vertical Cut" },
    ],
    "graphic-design": [
      { type: "image", src: "/posts/post4.jpg", label: "Logo Study" },
      { type: "image", src: "/posts/post1.jpg", label: "Typographic Poster" },
    ],
    "social-strategy": [
      { type: "image", src: "/posts/post3.jpg", label: "Hook Frame" },
      { type: "video", src: "/reels/reel1.mp4", label: "Algorithm Cut" },
    ],
    "story-telling": [
      { type: "image", src: "/posts/post1.jpg", label: "Quote Visual" },
      { type: "video", src: "/reels/reel4.mp4", label: "Narrative Reel" },
    ],
  };
  const items = map[id] ?? [];
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {items.map((it, i) => (
        <div key={i} className="aspect-square doom-panel overflow-hidden relative">
          {it.type === "video" ? (
            <video src={it.src} muted loop playsInline autoPlay className="w-full h-full object-cover" />
          ) : (
            <img src={it.src} alt={it.label} loading="lazy" className="w-full h-full object-cover" />
          )}
          <p className="absolute bottom-1 left-2 font-mono text-[9px] text-doom-glow">{it.label}</p>
        </div>
      ))}
    </div>
  );
}
