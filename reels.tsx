import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { reels, posts } from "@/data/media";

export const Route = createFileRoute("/reels")({
  head: () => ({
    meta: [
      { title: "Reels & Posts — MCU_0012" },
      { name: "description", content: "The full vault of cinematic reels and visual posts by MCU_0012." },
      { property: "og:title", content: "Reels & Posts — MCU_0012" },
      { property: "og:description", content: "Full vault of cinematic reels and posts." },
    ],
  }),
  component: ReelsPage,
});

function ReelsPage() {
  const [tab, setTab] = useState<"reels" | "posts">("reels");
  const [lightbox, setLightbox] = useState<{ type: "video" | "image"; src: string; title: string } | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <p className="font-mono text-xs tracking-[0.4em] text-doom-glow">// VAULT.ARCHIVE</p>
      <h1 className="font-display text-5xl md:text-7xl mt-4 doom-glow-text">Reels & Posts</h1>
      <p className="mt-6 max-w-3xl text-foreground/70">
        Every cut, every frame, every poster. The complete archive.
      </p>

      <div className="mt-12 inline-flex doom-panel p-1">
        {(["reels", "posts"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="cursor-target px-6 py-2 font-display text-sm tracking-widest uppercase transition-all"
            style={tab === t ? { background: "var(--gradient-emerald)", color: "oklch(0.1 0.02 150)" } : { color: "var(--doom-glow)" }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "reels" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {reels.map((r) => (
            <button
              key={r.id}
              onClick={() => setLightbox({ type: "video", src: r.src, title: r.title })}
              className="cursor-target group relative aspect-[9/16] doom-panel overflow-hidden text-left"
            >
              <video src={r.src} muted loop playsInline autoPlay className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-mono text-[10px] text-doom-glow tracking-widest">{r.tag}</p>
                <p className="font-display text-base">{r.title}</p>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {posts.map((p) => (
            <button
              key={p.id}
              onClick={() => setLightbox({ type: "image", src: p.src, title: p.title })}
              className="cursor-target group relative aspect-square doom-panel overflow-hidden text-left"
            >
              <img src={p.src} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-mono text-[10px] text-doom-glow tracking-widest">{p.tag}</p>
                <p className="font-display text-base">{p.title}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 cursor-target"
          style={{ background: "oklch(0.05 0.02 150 / 0.95)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {lightbox.type === "video" ? (
              <video src={lightbox.src} controls autoPlay className="w-full max-h-[85vh] object-contain doom-panel" />
            ) : (
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[85vh] object-contain doom-panel" />
            )}
            <button
              onClick={() => setLightbox(null)}
              className="cursor-target absolute -top-12 right-0 font-mono text-doom-glow text-sm tracking-widest"
            >
              [ CLOSE ✕ ]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
