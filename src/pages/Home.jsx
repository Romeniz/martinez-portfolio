import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import heroPhoto from "../assets/hero-cutout-bw.webp";
import { profile, roles } from "../data/content.js";
import { eyebrow, btnSolid, btnGhost, btnArrow, sectionCls } from "../components/ui.js";

export default function Home() {
  const visual = useRef(null);

  // photo drifts a few pixels against the pointer (devices with a real hover only)
  useEffect(() => {
    const el = visual.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    let raf = 0;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--px", `${nx * -16}px`);
        el.style.setProperty("--py", `${ny * -8}px`);
        el.style.setProperty("--dx", `${nx * 22}px`);
      });
    };
    window.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); };
  }, []);

  return (
    <section className={`${sectionCls} relative overflow-hidden`}>
      <div className="relative z-2 flex min-h-0 flex-1 items-start lg:items-center">
        <div className="wrap relative pt-[clamp(1rem,5vh,2.4rem)] pb-4 md:pt-[clamp(1.5rem,8vh,4rem)] lg:py-4">
          <p className={`${eyebrow} reveal`} style={{ "--i": 0 }}>{profile.program}</p>

          <h1
            className="my-3 font-display text-[clamp(3rem,min(17vw,11vh),8rem)] leading-[.95] font-bold tracking-[-.045em] sm:mt-4 sm:mb-[1.4rem] md:text-[clamp(3.2rem,min(17vw,13vh),8rem)] lg:text-[clamp(3.2rem,min(8.6vw,15vh),8.5rem)]"
            aria-label={profile.name}
          >
            <span className="-mb-[.08em] block overflow-hidden pb-[.08em]">
              <i className="block animate-name-up not-italic" style={{ animationDelay: ".15s" }}>{profile.firstLine}</i>
            </span>
            <span className="-mb-[.08em] block overflow-hidden pb-[.08em] text-accent">
              <i className="block animate-name-up not-italic" style={{ animationDelay: ".3s" }}>{profile.secondLine}</i>
            </span>
          </h1>

          <ul className="reveal flex flex-wrap gap-x-[1.1rem] gap-y-1 font-mono text-[.78rem] tracking-[.03em] uppercase" style={{ "--i": 2 }}>
            {roles.map((r, i) => (
              <li
                key={r}
                className="animate-role-glow not-last:after:ml-[1.1rem] not-last:after:text-accent not-last:after:content-['/']"
                style={{ animationDelay: `${i * 1.5}s` }}
              >
                {r}
              </li>
            ))}
          </ul>

          <div className="reveal mt-5 flex flex-wrap gap-3 lg:mt-[1.6rem]" style={{ "--i": 4 }}>
            <Link to="/projects" className={btnSolid}>
              View projects <ArrowUpRight size={16} className={btnArrow} />
            </Link>
            <Link to="/contact" className={btnGhost}>Contact</Link>
          </div>
        </div>
      </div>

      <div
        ref={visual}
        className="pointer-events-none absolute right-0 bottom-0 z-1 aspect-[696/1110] h-[38%] max-w-[70%] md:right-[2%] md:h-[46%] md:max-w-[60%] lg:right-[max(var(--gutter),calc((100%_-_1240px)/2_+_var(--gutter)))] lg:h-[min(94%,760px)] lg:max-w-[48%] [@media(max-width:700px)_and_(max-height:700px)]:h-[30%]"
      >
        <span
          className="absolute inset-x-[4%] bottom-0 hidden aspect-square animate-disc-in rounded-full bg-bg-2 transition-transform duration-[900ms] ease-soft [transform:translateX(var(--dx,0px))] md:block"
          aria-hidden="true"
        />
        <img
          className="absolute inset-0 size-full animate-photo-in object-contain object-bottom transition-transform duration-[900ms] ease-soft [transform:translate(var(--px,0px),var(--py,0px))]"
          src={heroPhoto}
          fetchPriority="high"
          decoding="async"
          alt="Jerome R. Martinez in a black sweater and sunglasses, black and white photo"
          width="696"
          height="1110"
        />
      </div>
    </section>
  );
}
