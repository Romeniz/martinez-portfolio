import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Loader from "./Loader.jsx";
import { NAV, indexForPath } from "../data/nav.js";
import { profile } from "../data/content.js";

const SEEN_KEY = "romeniz-intro-seen";
const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

// Pages change only by clicking: the header menu, or the buttons on Home.
// Wheel, swipe and arrow keys do nothing. The n Bloom loading screen plays once
// per browser session. An unknown URL has no NAV entry (idx -1) and shows the 404 page.
export default function Layout() {
  const { pathname } = useLocation();
  const idx = indexForPath(pathname);
  const current = NAV[idx]; // undefined on the 404 page
  const [loading, setLoading] = useState(() => !alreadySeen());

  const pageRef = useRef(null);
  const firstRender = useRef(true);

  // one <title> per page (the 404 sets its own text here too)
  useEffect(() => {
    document.title = !current
      ? `Page not found | ${profile.name}`
      : current.id === "home"
        ? `${profile.name} | Portfolio`
        : `${current.label} | ${profile.name}`;
  }, [current]);

  // after a page change, move focus into the new page so keyboard and screen-reader users
  // land on it (and arrow/space keys scroll it). Skipped on first load.
  useEffect(() => {
    if (loading) return;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    pageRef.current?.focus({ preventScroll: true });
  }, [pathname, loading]);

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    setLoading(false);
  }, []);

  return (
    <div
      data-dark={current?.id === "contact" ? "" : undefined}
      className="grid h-svh grid-rows-[var(--header-h)_minmax(0,1fr)_var(--footer-h)] bg-bg text-ink transition-colors duration-500 ease-soft dk:bg-dark dk:text-on-dark"
    >
      <Header index={idx} />
      <main className="relative min-h-0 overflow-hidden" aria-hidden={loading || undefined}>
        {!loading && (
          <div
            key={pathname}
            ref={pageRef}
            id={current?.id ?? "not-found"}
            tabIndex={-1}
            role="region"
            aria-label={current?.label ?? "Page not found"}
            className="absolute inset-0 flex flex-col overflow-x-hidden overflow-y-auto overscroll-contain outline-none [scrollbar-width:thin]"
          >
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
      {loading && <Loader onDone={finish} />}
    </div>
  );
}
