export const NAV = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/about" },
  { id: "skills", label: "Skills", to: "/skills" },
  { id: "projects", label: "Projects", to: "/projects" },
  { id: "contact", label: "Contact", to: "/contact" },
];

// Index of the NAV entry for a URL, or -1 when the URL is not a page (404).
export const indexForPath = (pathname) => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return NAV.findIndex((n) => n.to === clean);
};
