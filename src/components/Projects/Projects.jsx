import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projectsByTenure } from '../../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// our builds</span>
          <h2>Eleven projects. Two tenures. One very patient physics teacher.</h2>
          <p className="section-desc">
            Each build started with a problem worth solving — not a competition brief.
          </p>
        </div>

        {projectsByTenure.map((group, gi) => (
          <div key={group.tenure} className="tenure-group">
            <div className="tenure-header reveal" style={{ transitionDelay: `${gi * 0.05}s` }}>
              <span className="tenure-label">{group.tenure}</span>
              <span className="tenure-count">{group.projects.length} projects</span>
            </div>
            <div className="projects-grid">
              {group.projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
