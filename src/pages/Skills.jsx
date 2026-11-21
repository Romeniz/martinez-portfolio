import { skills, groups } from "../data/content.js";
import { sectionCls } from "../components/ui.js";

// plain ruled columns: one on phones, two on tablets, four on desktop
export default function Skills() {
  const columns = [
    { title: "Technical", rows: skills.map((s) => ({ name: s.title, meta: [...s.items, s.note].filter(Boolean).join(" · ") })) },
    ...groups.map((g) => ({ title: g.title, rows: g.items.map((name) => ({ name })) })),
  ];
  return (
    <section className={sectionCls}>
      <div className="wrap my-auto py-[clamp(1.25rem,5vh,3.5rem)]">
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 sm:gap-x-[clamp(1.6rem,4.2vw,4.2rem)] lg:grid-cols-4">
          {columns.map((c, ci) => (
            <div className="reveal" key={c.title} style={{ "--i": 1 + ci }}>
              <h3 className="pb-[clamp(.8rem,2.4vh,1.5rem)] font-mono text-[.72rem] font-medium tracking-[.04em] text-accent uppercase">{c.title}</h3>
              <ul>
                {c.rows.map((r, ri) => (
                  <li
                    key={r.name}
                    className="reveal-row rule-t flex flex-col py-3 text-[.96rem] leading-[1.4] transition duration-300 ease-soft hover:translate-x-1.5 hover:text-accent sm:py-[clamp(.5rem,1.7vh,.95rem)]"
                    style={{ "--j": ri + ci * 2 }}
                  >
                    <span>{r.name}</span>
                    {r.meta && <small className="mt-1.5 font-mono text-[.75rem] leading-[1.55] text-muted">{r.meta}</small>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
