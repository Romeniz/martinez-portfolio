import { ArrowUpRight } from "lucide-react";
import { FloorsVisual, CityVisual } from "./Visuals.jsx";

const VISUALS = { floors: FloorsVisual, city: CityVisual };

// One project row. Used for every entry in `projects` (src/data/content.js).
// Optional fields: `links` = [{ label, href }] shows link buttons once you have them.
// Layout: stacked on phones, two columns on tablets, three on desktop.
export default function ProjectCard({ project, index }) {
  const Visual = VISUALS[project.visual];
  const { title, subtitle, description, points, tags, links = [] } = project;

  return (
    <article
      className="reveal rule-b group grid items-start gap-4 py-4 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,16rem)] lg:gap-[clamp(1rem,3vw,3rem)] lg:py-[clamp(1rem,3vh,1.8rem)]"
      style={{ "--i": 1 + index }}
    >
      <div>
        <span className="font-mono text-[.72rem] text-accent">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-1.5 mb-2 font-display text-[clamp(1.6rem,min(3vw,5.4vh),2.5rem)] leading-[1.02] font-bold tracking-[-.035em] transition duration-300 ease-soft group-hover:translate-x-1.5 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-[.88rem] text-muted">{subtitle}</p>
      </div>

      <div>
        <p className="text-[.95rem] text-ink-2">{description}</p>
        <ul className="mt-3 grid gap-0.5">
          {points.map((pt) => (
            <li key={pt} className="text-[.85rem] transition-transform duration-300 ease-soft before:text-accent before:content-['→_'] hover:translate-x-1">{pt}</li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-[.75rem] tracking-[.03em] text-muted uppercase">{tags.join(" / ")}</p>
        {links.length > 0 && (
          <p className="mt-3 flex flex-wrap gap-x-[1.1rem] gap-y-1.5 text-[.85rem] font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1 text-accent underline-offset-[3px] hover:text-ink">
                {l.label} <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </p>
        )}
      </div>

      {Visual && (
        <div className="grid min-h-36 place-items-center overflow-hidden rounded bg-bg-2 p-3 transition duration-500 ease-soft group-hover:-translate-y-1 group-hover:shadow-[0_18px_30px_-22px_rgba(28,27,26,.5)] md:col-span-2 lg:col-span-1">
          <Visual />
        </div>
      )}
    </article>
  );
}
