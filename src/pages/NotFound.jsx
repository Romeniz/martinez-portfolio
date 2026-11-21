import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Logo from "../components/Logo.jsx";
import { eyebrow, btnSolid, btnGhost, btnArrow, inner, sectionCls } from "../components/ui.js";

export default function NotFound() {
  return (
    <section className={sectionCls}>
      <div className={inner}>
        <Logo size={56} decorative className="reveal mb-4 -rotate-12 text-accent" />
        <p className={`${eyebrow} reveal`} style={{ "--i": 0 }}>Error 404</p>
        <h1 className="reveal mt-2.5 mb-3 font-display text-[clamp(2.4rem,min(9vw,14vh),6rem)] leading-none font-bold tracking-[-.04em]" style={{ "--i": 1 }}>Page not found</h1>
        <p className="reveal mb-6 max-w-[30rem] text-ink-2" style={{ "--i": 2 }}>
          The page you are looking for does not exist or has moved.
        </p>
        <div className="reveal flex flex-wrap gap-3" style={{ "--i": 3 }}>
          <Link to="/" className={btnSolid}>
            Back to Home <ArrowUpRight size={16} className={btnArrow} />
          </Link>
          <Link to="/projects" className={btnGhost}>View projects</Link>
        </div>
      </div>
    </section>
  );
}
