export default function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card reveal"
      style={{
        '--accent': project.accent,
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className="card-visual"
        style={{ background: `linear-gradient(135deg, ${project.colorA}, ${project.colorB})` }}
      >
        <div className="card-visual-inner">
          <span className="card-category">{project.category}</span>
          <div className="card-year">{project.year}</div>
          <div className="card-schematic">
            <div className="schematic-circle" />
            <div className="schematic-line schematic-line-h" />
            <div className="schematic-line schematic-line-v" />
            <div className="schematic-corner schematic-tl" />
            <div className="schematic-corner schematic-br" />
          </div>
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-name">{project.name}</h3>
        <p className="card-subtitle">{project.subtitle}</p>
        <p className="card-desc">{project.description}</p>
        <div className="card-tech">
          {project.tech.map(t => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="card-status">
          <span className="status-dot" />
          {project.status}
        </div>
      </div>
    </article>
  );
}
