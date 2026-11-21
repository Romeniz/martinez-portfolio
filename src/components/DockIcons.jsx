// Bold, filled, round-cornered icons for the bottom dock. They use currentColor, and any
// "cut-out" detail is a mask, so they work on both the dark slab and the cream one.
const base = { width: 28, height: 28, viewBox: "0 0 28 28", "aria-hidden": true, fill: "currentColor" };

const Home = () => (
  <svg {...base}>
    <path
      d="M14 4.2 5 12v10.3h6.4v-6h5.2v6H23V12z"
      stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round"
    />
  </svg>
);

const About = () => (
  <svg {...base}>
    <circle cx="14" cy="9" r="5" />
    <path d="M4.6 23.2c0-4.6 4.2-7.2 9.4-7.2s9.4 2.6 9.4 7.2c0 .7-.6 1.2-1.2 1.2H5.8c-.6 0-1.2-.5-1.2-1.2z" />
  </svg>
);

// two stacked switches
const Skills = () => (
  <svg {...base}>
    <defs>
      <mask id="dk-skills" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
        <rect width="28" height="28" fill="#fff" />
        <circle cx="20.5" cy="8.4" r="2.6" fill="#000" />
        <circle cx="7.5" cy="19.6" r="2.6" fill="#000" />
      </mask>
    </defs>
    <g mask="url(#dk-skills)">
      <rect x="2" y="3" width="24" height="10.8" rx="5.4" />
      <rect x="2" y="14.2" width="24" height="10.8" rx="5.4" />
    </g>
  </svg>
);

// a board with two columns
const Projects = () => (
  <svg {...base}>
    <defs>
      <mask id="dk-projects" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
        <rect width="28" height="28" fill="#fff" />
        <rect x="7.6" y="7.6" width="4.6" height="10.8" rx="1.5" fill="#000" />
        <rect x="15.8" y="7.6" width="4.6" height="6.4" rx="1.5" fill="#000" />
      </mask>
    </defs>
    <rect x="2.5" y="2.5" width="23" height="23" rx="7" mask="url(#dk-projects)" />
  </svg>
);

// envelope
const Contact = () => (
  <svg {...base}>
    <defs>
      <mask id="dk-contact" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
        <rect width="28" height="28" fill="#fff" />
        <path d="M5.6 9.4 14 15.6l8.4-6.2" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </mask>
    </defs>
    <rect x="2" y="5" width="24" height="18" rx="6" mask="url(#dk-contact)" />
  </svg>
);

export const DOCK_ICONS = { home: Home, about: About, skills: Skills, projects: Projects, contact: Contact };
