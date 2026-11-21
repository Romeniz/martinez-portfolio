import { profile } from "../data/content.js";
import portrait from "../assets/portrait-bw.webp";
import portraitSmall from "../assets/portrait-bw-480.webp";
import { inner, sectionCls } from "../components/ui.js";

export default function About() {
  return (
    <section className={sectionCls}>
      <div className={inner}>
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-[clamp(1.4rem,5vw,5rem)]">
          {/* portrait: hidden on phones, a wide strip on tablets, a tall column on desktop */}
          <figure className="reveal relative hidden overflow-hidden sm:block" style={{ "--i": 1 }}>
            <img
              className="h-[clamp(140px,24vh,220px)] w-full animate-wipe rounded-[2px] object-cover object-[50%_25%] transition-transform duration-700 ease-soft hover:scale-[1.03] lg:h-[min(50vh,420px)] lg:object-[50%_28%]"
              src={portrait}
              srcSet={`${portraitSmall} 480w, ${portrait} 900w`}
              sizes="(min-width: 1024px) 240px, (min-width: 640px) 90vw, 0px"
              loading="lazy"
              decoding="async"
              alt="Black and white portrait of Jerome R. Martinez"
              width="900"
              height="934"
            />
            <figcaption className="relative mt-2.5 hidden bg-bg font-mono text-[.75rem] tracking-[.03em] text-muted lg:block">
              {profile.name} · b. {profile.birthday}
            </figcaption>
          </figure>

          <div>
            <h2
              className="reveal max-w-[22ch] font-display text-[1.7rem] leading-[1.06] font-semibold tracking-[-.035em] sm:text-[clamp(1.8rem,min(4.2vw,7vh),3.4rem)]"
              style={{ "--i": 2 }}
            >
              {profile.statement}
            </h2>
            <dl className="mt-[clamp(1rem,3.4vh,2.2rem)] max-w-[40rem]">
              {profile.bio.map((b, i) => (
                <div
                  key={b.k}
                  className="reveal rule-t group grid gap-0.5 py-2 sm:grid-cols-[8.5rem_1fr] sm:gap-4 sm:py-3"
                  style={{ "--i": 3 + i }}
                >
                  <dt className="pt-[.2em] font-mono text-[.72rem] tracking-[.04em] text-accent uppercase">{b.k}</dt>
                  <dd className="text-[.92rem] text-ink-2 transition-transform duration-300 ease-soft group-hover:translate-x-1.5 sm:text-[.98rem]">{b.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
