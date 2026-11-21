import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { profile } from "../data/content.js";
import { NAV } from "../data/nav.js";
import { DOCK_ICONS } from "./DockIcons.jsx";

// Logo and name on the left; the icon dock (navigation) on the right.
// The current page's icon is full strength with a small dot under it.
export default function Header({ index }) {
  const active = NAV[index]?.id; // none highlighted on the 404 page

  return (
    <header className="wrap relative z-60 flex items-center justify-between">
      <NavLink
        to="/"
        end
        className="group inline-flex items-center gap-3 text-ink transition-colors dk:text-on-dark"
        aria-label={`${profile.name} – home`}
      >
        <Logo
          size={30}
          decorative
          className="text-accent transition-transform duration-500 ease-soft group-hover:-rotate-6 group-hover:scale-110 dk:text-accent-on-dark"
        />
        <span className="hidden text-[.92rem] font-medium tracking-[.01em] sm:inline">{profile.name}</span>
      </NavLink>

      <nav
        className="flex items-center gap-0.5 rounded-[20px] bg-ink p-1 text-on-dark shadow-[0_14px_24px_-16px_rgba(28,27,26,.55)] transition-colors duration-500 ease-soft dk:bg-on-dark dk:text-dark dk:shadow-[0_14px_24px_-16px_rgba(0,0,0,.8)]"
        aria-label="Primary"
      >
        {NAV.map((n) => {
          const Icon = DOCK_ICONS[n.id];
          return (
            <NavLink
              key={n.id}
              to={n.to}
              end
              className={`relative grid h-11 w-11 place-items-center rounded-[14px] text-inherit no-underline transition duration-300 ease-soft hover:bg-current/10 hover:opacity-100 active:scale-95 focus-visible:outline-accent-on-dark focus-visible:-outline-offset-2 dk:focus-visible:outline-accent sm:w-12 after:pointer-events-none after:absolute after:top-[calc(100%+12px)] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1 after:rounded-[9px] after:bg-ink after:px-2.5 after:py-1 after:text-[.72rem] after:font-semibold after:whitespace-nowrap after:text-on-dark after:opacity-0 after:transition after:duration-200 after:content-[attr(data-label)] hover:after:translate-y-0 hover:after:opacity-100 focus-visible:after:translate-y-0 focus-visible:after:opacity-100 dk:after:bg-on-dark dk:after:text-dark ${
                active === n.id
                  ? "opacity-100 before:absolute before:bottom-0.5 before:left-1/2 before:-ml-[2.5px] before:size-[5px] before:animate-dot before:rounded-full before:bg-accent-on-dark before:content-[''] dk:before:bg-accent"
                  : "opacity-60"
              }`}
              aria-label={n.label}
              data-label={n.label}
            >
              <Icon />
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
