import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";
import { profile } from "../data/content.js";

const LINK =
  "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line px-3 text-inherit no-underline transition-colors duration-300 hover:border-accent hover:text-accent sm:min-h-[34px] sm:px-3.5 dk:border-dark-line dk:hover:border-accent-on-dark dk:hover:text-accent-on-dark";

// Info line on the left, contact links and copyright on the right. Navigation is the dock in the header.
export default function Footer() {
  return (
    <footer className="relative z-5 border-t border-line pb-[env(safe-area-inset-bottom,0px)] text-[.78rem] text-muted transition-colors duration-500 dk:border-dark-line dk:text-on-dark-muted">
      <div className="wrap flex h-14 items-center justify-center gap-4 lg:justify-between">
      <p className="hidden min-w-0 gap-0.5 font-mono text-[.75rem] tracking-[.03em] lg:grid">
        <span className="truncate">{profile.program} &middot; {profile.year}</span>
        <span className="truncate">{profile.school} &middot; Olongapo City</span>
      </p>

      <div className="flex items-center justify-center gap-1.5 lg:justify-end">
        {profile.email && (
          <a className={LINK} href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
            <Mail size={16} />
            <span className="hidden sm:inline">Email</span>
          </a>
        )}
        {profile.phone && (
          <a className={LINK} href={`tel:${profile.phoneHref}`} aria-label={`Call ${profile.phoneDisplay}`}>
            <Phone size={16} />
            <span className="hidden sm:inline">Call</span>
          </a>
        )}
        {profile.github && (
          <a className={LINK} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <GithubIcon size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        )}
        {profile.linkedin && (
          <a className={LINK} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <LinkedinIcon size={16} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        )}
        <span className="ml-1 sm:ml-2.5">&copy; {new Date().getFullYear()}</span>
      </div>
      </div>
    </footer>
  );
}
