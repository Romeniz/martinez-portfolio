import { useEffect, useState } from "react";
import { BLOOM_UNIT as UNIT, BLOOM_ANGLES as ANGLES } from "./Logo.jsx";

// Animated version of the n Bloom mark (geometry shared with Logo.jsx).

const MIN_SHOW = 2800; // ms the loader stays up at minimum: full animation (2.45s) plus a short hold
const EXIT = 650; // ms for the fade-out

export function BloomMark({ size = 120, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="-130 -130 260 260"
      fill="none"
      stroke="currentColor"
      strokeWidth="22"
      aria-hidden="true"
    >
      {ANGLES.map((a, i) => (
        <g key={a} transform={`rotate(${a})`}>
          <path className="animate-bloom-chase opacity-[.12] [transform-box:view-box]" style={{ animationDelay: `${i * 100}ms` }} d={UNIT} />
        </g>
      ))}
    </svg>
  );
}

// Full-screen intro. Plays once per browser session, then fades away and calls onDone.
export default function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = performance.now();
    let t1, t2, left = false, cancelled = false;

    const leave = () => {
      if (left || cancelled) return;
      left = true;
      clearTimeout(t1);
      setLeaving(true);
      t2 = setTimeout(onDone, reduce ? 0 : EXIT);
    };
    // click, tap or any key skips the intro once the page and fonts are ready
    const skip = () => leave();

    const pageReady = new Promise((res) => {
      if (document.readyState === "complete") res();
      else window.addEventListener("load", res, { once: true });
    });
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([pageReady, fontsReady]).then(() => {
      if (cancelled) return;
      window.addEventListener("keydown", skip);
      window.addEventListener("pointerdown", skip);
      const wait = Math.max(0, (reduce ? 700 : MIN_SHOW) - (performance.now() - started));
      t1 = setTimeout(leave, wait);
    });

    return () => {
      cancelled = true;
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [onDone]);

  return (
    <div className={`fixed inset-0 z-200 grid place-items-center bg-bg text-ink transition duration-[650ms] ease-soft ${leaving ? "pointer-events-none scale-[1.015] opacity-0" : ""}`} role="status" aria-live="polite" aria-label="Loading Romeniz">
      <div className="flex items-center justify-center">
        <BloomMark className="size-22 animate-bloom-settle sm:size-33" size={132} />
        <span className="ml-0 block max-w-0 animate-word-open overflow-hidden text-[clamp(2.6rem,8vw,4.4rem)] whitespace-nowrap" aria-hidden="true">
          <span className="block -translate-x-[30%] animate-word-in px-[.05em] pt-[.08em] pb-[.14em] font-display text-[1em] leading-none font-bold tracking-[-.03em] opacity-0">Romeniz</span>
        </span>
      </div>
      <p className="reveal absolute bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] font-mono text-[.72rem] tracking-[.06em] text-muted uppercase" style={{ "--i": 14 }} aria-hidden="true">
        Tap or press any key to skip
      </p>
    </div>
  );
}
