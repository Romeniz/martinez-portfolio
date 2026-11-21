// Everything on the site comes from this file. Edit here and the pages update.
// Contact links (email, phone, github, linkedin) only appear once they are filled in.

export const profile = {
  name: "Jerome R. Martinez",
  firstLine: "Jerome",
  secondLine: "R. Martinez",
  program: "BS Information Technology",
  year: "3rd Year Student",
  school: "Gordon College",
  location: "Olongapo City, Philippines",
  tagline: "Code, interface design, photo and video.",
  statement: "I like making things: code, interfaces, photos and video.",
  bio: [
    { k: "School", v: "Gordon College, Olongapo City, in my third year of BS Information Technology." },
    { k: "Into", v: "Programming and UI/UX design, working in Figma, C, Python and JavaScript." },
    { k: "Off the clock", v: "Photography, video editing, broadcasting and content creation." },
    { k: "Goal", v: "Turn rough ideas into projects people can actually use." },
  ],
  birthday: "January 17",
  // contact: each one shows up on the Contact page and footer as soon as it is filled in
  email: "",
  phone: "",
  phoneDisplay: "",
  phoneHref: "",
  github: "https://github.com/romenizz",
  githubHandle: "romenizz",
  linkedin: "", // full profile URL, e.g. https://www.linkedin.com/in/your-name
  linkedinHandle: "",
};

export const roles = ["Programming", "UI/UX", "Photography", "Video", "Broadcasting"];

// "What I do" rows (technical skills)
export const skills = [
  { id: "office", icon: "file", title: "Microsoft Office", items: ["Word", "Excel", "PowerPoint"], note: "" },
  { id: "programming", icon: "code", title: "Programming", items: ["C", "Python", "JavaScript", "HTML", "CSS"], note: "Basic" },
  { id: "uiux", icon: "pen", title: "UI-UX Design", items: [], note: "" },
  { id: "figma", icon: "layers", title: "Figma", items: [], note: "" },
  { id: "video", icon: "film", title: "Video Editing", items: [], note: "" },
  { id: "photo", icon: "camera", title: "Photo Editing", items: [], note: "" },
  { id: "smm", icon: "megaphone", title: "Social Media Management", items: [], note: "" },
];

export const groups = [
  {
    title: "Soft skills",
    items: [
      "Communication Skills",
      "Teamwork and Collaboration",
      "Time Management",
      "Problem Solving",
      "Critical Thinking",
      "Willingness to Learn",
      "Decision Making",
    ],
  },
  {
    title: "Creative & communication",
    items: [
      "Public Speaking",
      "Broadcasting",
      "News Writing",
      "Scriptwriting",
      "Content Creation",
      "Photography and Videography",
      "Hosting and Presentation",
      "Voice Over and Narration",
    ],
  },
  {
    title: "Creative hobbies",
    items: ["Singing", "Video Editing", "Graphic Design"],
  },
];

export const projects = [
  {
    id: "navigation",
    visual: "floors",
    title: "Office Navigation System",
    subtitle: "Gordon College (GC)",
    description:
      "A wayfinding system for Gordon College. Pick a floor, see where the rooms are, and get to the right office or classroom without asking around.",
    points: ["Six floors, one map", "Offices and classrooms, easy to find", "Built for students, visitors and staff"],
    tags: ["Navigation", "Six floors", "Offices & classrooms", "Gordon College"],
  },
  {
    id: "olongapo",
    visual: "city",
    title: "Olongapo City Information System",
    subtitle: "History, leaders and places to visit",
    description:
      "A city guide for Olongapo: who its former mayors were and what they did, where to go as a visitor, and the history behind it all.",
    points: ["Former mayors and their contributions", "Tourist spots worth visiting", "The city’s history in one place"],
    tags: ["Information system", "Olongapo City", "Former mayors", "Tourism"],
  },
];

export const techCount = skills.length;
export const creativeCount = groups[1].items.length;
export const projectCount = projects.length;
