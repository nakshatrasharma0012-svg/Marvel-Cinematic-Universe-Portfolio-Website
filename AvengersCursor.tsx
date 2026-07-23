import { useEffect, useState } from "react";

export function AvengersCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [role='button'], .cursor-target"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] transition-transform duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.6 : 1})`,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          style={{
            filter:
              "drop-shadow(0 0 8px oklch(0.75 0.22 145)) drop-shadow(0 0 16px oklch(0.6 0.2 145))",
          }}
        >
          {/* Avengers "A" logo simplified */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="oklch(0.75 0.22 145)"
            strokeWidth="4"
          />
          <path
            d="M 30 75 L 50 25 L 70 75 M 38 60 L 75 60"
            fill="none"
            stroke="oklch(0.75 0.22 145)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="pointer-events-none fixed z-[9998] h-2 w-2 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          background: "oklch(0.85 0.22 145)",
          boxShadow: "0 0 10px oklch(0.75 0.22 145)",
        }}
      />
    </>
  );
}
