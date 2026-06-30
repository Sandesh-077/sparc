import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { chairs, executives, members, advisors } from '../../data/team';
import './Team.css';

function MemberCard({ member, index, size = 'normal' }) {
  return (
    <article
      className={`team-card team-card-${size} reveal`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div
        className="member-avatar"
        style={!member.photo ? { background: `linear-gradient(135deg, ${member.colorA}, ${member.colorB})` } : undefined}
      >
        {member.photo
          ? <img src={member.photo} alt={member.name} className="member-photo" />
          : <span className="member-initials">{member.initials}</span>
        }
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <span className="member-role">{member.role}</span>
        {member.bio && <p className="member-bio">{member.bio}</p>}
      </div>
    </article>
  );
}

export default function Team() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="team" className="team-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// the crew</span>
          <h2>21 members. One club. Varying amounts of sleep.</h2>
          <p className="section-desc">
            Structured into chairs, executives, and members; everyone builds something.
          </p>
        </div>

        {/* Tier 1 — Chairs */}
        <div className="tier-block reveal">
          <div className="tier-header">
            <span className="tier-pill tier-chairs">Chairs</span>
            <span className="tier-count">3 members</span>
            <div className="tier-line" />
          </div>
          <div className="tier-grid tier-grid-3">
            {chairs.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i} size="large" />
            ))}
          </div>
        </div>

        {/* Tier 2 — Executives */}
        <div className="tier-block reveal">
          <div className="tier-header">
            <span className="tier-pill tier-execs">Executives</span>
            <span className="tier-count">3 members</span>
            <div className="tier-line" />
          </div>
          <div className="tier-grid tier-grid-3">
            {executives.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i} size="medium" />
            ))}
          </div>
        </div>

        {/* Tier 3 — Members */}
        <div className="tier-block reveal">
          <div className="tier-header">
            <span className="tier-pill tier-members">Members</span>
            <span className="tier-count">15 members</span>
            <div className="tier-line" />
          </div>
          <div className="tier-grid tier-grid-members">
            {members.map((m, i) => (
              <MemberCard key={m.id} member={m} index={i} size="small" />
            ))}
          </div>
        </div>

        {/* Faculty */}
        {advisors.length > 0 && (
          <div className="advisors reveal">
            <h3 className="subsection-title">Club &amp; Mentor</h3>
            <div className="advisors-row">
              {advisors.map(a => (
                <div key={a.name} className="advisor-card">
                  <div className="advisor-avatar" style={!a.photo ? { background: `linear-gradient(135deg, ${a.colorA}, ${a.colorB})` } : undefined}>
                    {a.photo
                      ? <img src={a.photo} alt={a.name} className="member-photo" />
                      : a.name.split(' ').filter(Boolean).map(n => n[0]).join('').slice(0, 2)
                    }
                  </div>
                  <div className="advisor-info">
                    <h4 className="advisor-name">{a.name}</h4>
                    <span className="advisor-role">{a.role}</span>
                    <span className="advisor-dept">{a.department}</span>
                    <p className="advisor-note">{a.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
