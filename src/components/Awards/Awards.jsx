import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { awardsByTenure } from '../../data/awards';
import './Awards.css';

const badgeColors = {
  gold:          '#F59E0B',
  silver:        '#94A3B8',
  bronze:        '#CD7F32',
  platinum:      '#06B6D4',
  participation: '#3B82F6',
};

const typeLabels = {
  award:     'Award',
  event:     'Event',
  milestone: 'Milestone',
};

export default function Awards() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="awards" className="awards-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// wins &amp; events</span>
          <h2>Two tenures. Twelve milestones. One hackathon we organized ourselves.</h2>
          <p className="section-desc">
            From our first IEEE competition to hosting Nepal&apos;s first high school robotics hackathon.
          </p>
        </div>

        {awardsByTenure.map((tenure, ti) => (
          <div key={tenure.tenure} className="tenure-block reveal" style={{ transitionDelay: `${ti * 0.1}s` }}>
            <div className="tenure-header">
              <span className="tenure-label">{tenure.tenure}</span>
            </div>

            <div className="awards-timeline">
              {tenure.items.map((award, i) => (
                <div
                  key={award.id}
                  className="timeline-item reveal"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="timeline-connector">
                    <div
                      className="timeline-dot"
                      style={{
                        borderColor: badgeColors[award.badge],
                        background: `${badgeColors[award.badge]}20`,
                      }}
                    />
                    {i < tenure.items.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-card">
                    <div className="award-meta">
                      <span className="award-event">{award.event}</span>
                      <div className="award-meta-right">
                        <span className={`type-badge type-${award.type}`}>{typeLabels[award.type]}</span>
                        <span className="award-date">{award.date}</span>
                      </div>
                    </div>
                    <h3 className="award-title">{award.title}</h3>
                    <p className="award-sub">{award.subtitle}</p>
                    <p className="award-desc">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
