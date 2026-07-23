import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 mt-20 py-10 px-6 relative">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} MCU_0012 // FORGED IN LATVERIA
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <a href="https://www.instagram.com/mcu_0012/" target="_blank" rel="noopener noreferrer" className="cursor-target text-doom-glow hover:text-foreground">Instagram</a>
          <a href="mailto:nakshatrasharma0012@gmail.com" className="cursor-target text-doom-glow hover:text-foreground">Email</a>
          <Link to="/contact" className="cursor-target text-doom-glow hover:text-foreground">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
