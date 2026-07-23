import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/reels", label: "Reels & Posts" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 backdrop-blur-md"
      style={{ background: "linear-gradient(180deg, oklch(0.1 0.02 150 / 0.95), oklch(0.1 0.02 150 / 0.7))" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 cursor-target">
          <svg width="32" height="32" viewBox="0 0 100 100" className="animate-doom-pulse">
            <circle cx="50" cy="50" r="44" fill="none" stroke="oklch(0.75 0.22 145)" strokeWidth="4" />
            <path d="M 30 75 L 50 25 L 70 75 M 38 60 L 75 60" fill="none" stroke="oklch(0.75 0.22 145)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display text-lg font-bold tracking-[0.3em] doom-glow-text">MCU_0012</span>
        </Link>
        <button
          className="md:hidden cursor-target text-doom-glow"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-doom-glow" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-doom-glow" }}
              className="cursor-target font-display text-sm tracking-[0.2em] uppercase transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-primary/20 px-6 py-4 flex flex-col gap-4"
          style={{ background: "oklch(0.1 0.02 150 / 0.98)" }}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "text-doom-glow" }}
              inactiveProps={{ className: "text-foreground/70" }}
              className="cursor-target font-display text-sm tracking-[0.2em] uppercase"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
