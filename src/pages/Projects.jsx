
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React.',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A data visualization project for school.',
  },
  {
    title: 'Research Management System',
    description: 'A concept for organizing research documents.',
  },
]

function Projects() {
  return (
    <section className="page-section">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
