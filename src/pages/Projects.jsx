import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/content.js";
import { inner, sectionCls } from "../components/ui.js";

export default function Projects() {
  return (
    <section className={sectionCls}>
      <div className={inner}>
        <h1 className="sr-only">Projects</h1>
        <div>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
