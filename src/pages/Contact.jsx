import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, GraduationCap, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons.jsx";
import { profile } from "../data/content.js";
import { inner, sectionCls } from "../components/ui.js";

const CTA =
  "sweep group flex items-center justify-between gap-6 border-y border-dark-line py-[clamp(1rem,3vh,2rem)] font-display text-[clamp(1.6rem,min(4vw,7vh),3rem)] leading-[1.05] font-semibold tracking-[-.035em] text-on-dark no-underline hover:text-accent-on-dark";
const CTA_ARROW = "h-auto w-[clamp(26px,3.6vw,48px)] flex-none transition-transform duration-[400ms] ease-soft group-hover:translate-x-1.5 group-hover:-translate-y-1.5";

function CopyBtn({ text, label }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {
      /* clipboard unavailable – ignore */
    }
  };
  return (
    <button className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-dark-line bg-transparent px-3.5 text-[.78rem] text-on-dark transition-colors duration-300 hover:border-accent-on-dark hover:text-accent-on-dark max-lg:col-start-2 max-lg:justify-self-start" onClick={copy} aria-label={`Copy ${label}`}>
      {done ? <Check size={16} /> : <Copy size={16} />}
      <span aria-live="polite">{done ? "Copied" : "Copy"}</span>
    </button>
  );
}

export default function Contact() {
  // Email, phone, GitHub and LinkedIn only show up once they are filled in (src/data/content.js)
  const rows = [
    profile.email && { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: profile.email, what: "email" },
    profile.phone && { icon: Phone, label: "Contact number", value: profile.phoneDisplay || profile.phone, href: `tel:${profile.phoneHref || profile.phone}`, copy: profile.phone, what: "number" },
    profile.github && { icon: GithubIcon, label: "GitHub", value: profile.githubHandle || profile.github, href: profile.github, external: true },
    profile.linkedin && { icon: LinkedinIcon, label: "LinkedIn", value: profile.linkedinHandle || profile.linkedin, href: profile.linkedin, external: true },
    { icon: GraduationCap, label: "School", value: `${profile.school}, ${profile.program}` },
    { icon: MapPin, label: "Based in", value: profile.location },
  ].filter(Boolean);

  return (
    <section className={sectionCls}>
      <div className={inner}>
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-[clamp(1.2rem,4vw,4rem)]">
          <h2 className="reveal max-w-[14ch] font-display text-[clamp(1.8rem,min(4vw,7vh),3.2rem)] leading-[1.06] font-semibold tracking-[-.035em]" style={{ "--i": 1 }}>
            Got an idea, a project or a shoot? Let’s talk.
          </h2>

          <ul className="grid">
            {rows.map((r, i) => (
              <li key={r.label} className="reveal rule-t group grid grid-cols-[32px_1fr] items-center gap-x-4 gap-y-2 py-[clamp(.7rem,2vh,1.1rem)] [--rule:var(--color-dark-line)] lg:grid-cols-[36px_1fr_auto]" style={{ "--i": 2 + i }}>
                <span className="grid place-items-center text-accent-on-dark transition-transform duration-[400ms] ease-soft group-hover:-rotate-[10deg] group-hover:scale-115"><r.icon size={20} /></span>
                <div>
                  <span className="block font-mono text-[.75rem] tracking-[.04em] text-on-dark-muted uppercase">{r.label}</span>
                  {r.href ? (
                    <a href={r.href} className="text-[clamp(.95rem,1.6vw,1.1rem)] break-words no-underline transition-colors duration-300 hover:text-accent-on-dark" {...(r.external && { target: "_blank", rel: "noopener noreferrer" })}>
                      {r.value}
                      {r.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </a>
                  ) : <span className="text-[clamp(.95rem,1.6vw,1.1rem)] break-words">{r.value}</span>}
                </div>
                {r.copy && <CopyBtn text={r.copy} label={r.what} />}
              </li>
            ))}
          </ul>

          <div className="reveal col-span-full mt-1" style={{ "--i": 6 }}>
            {profile.email ? (
              <a href={`mailto:${profile.email}`} className={CTA}>
                <span>Send an email</span>
                <ArrowUpRight size={28} strokeWidth={1.4} className={CTA_ARROW} />
              </a>
            ) : profile.github ? (
              <a href={profile.github} className={CTA} target="_blank" rel="noopener noreferrer">
                <span>See my GitHub<span className="sr-only"> (opens in a new tab)</span></span>
                <ArrowUpRight size={28} strokeWidth={1.4} className={CTA_ARROW} />
              </a>
            ) : (
              <Link to="/projects" className={CTA}>
                <span>See my projects</span>
                <ArrowUpRight size={28} strokeWidth={1.4} className={CTA_ARROW} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
