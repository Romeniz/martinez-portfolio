// Shared class strings (Tailwind picks them up because it scans every file in src/).
export const eyebrow = "font-mono text-[.72rem] uppercase tracking-[.06em] text-muted";

const btn =
  "group inline-flex min-h-11 items-center gap-2 rounded-full border px-5 py-2.5 text-[.88rem] font-medium transition duration-300 hover:-translate-y-0.5";
export const btnSolid = `${btn} border-ink bg-ink text-bg hover:border-accent hover:bg-accent hover:text-white`;
export const btnGhost = `${btn} border-ink bg-transparent text-ink hover:border-accent hover:text-accent`;
export const btnArrow =
  "transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]";

// shared page wrapper: centres content vertically when it is short, lets it scroll when tall
export const inner = "wrap my-auto py-4 md:py-6";
export const sectionCls = "flex min-h-0 flex-1 flex-col";
