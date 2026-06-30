import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Join.css';

const steps = [
  {
    num: '01',
    title: 'Fill the Application Form',
    desc: 'Applications open once a year. When the cycle opens, fill the form — tell us why you want in and what you\'re curious about. No prior experience needed.',
  },
  {
    num: '02',
    title: 'Entrance Assessment',
    desc: 'A short written test to gauge where you\'re at — basic logic, curiosity, problem-solving. Not a filter for experts; a filter for people who think.',
  },
  {
    num: '03',
    title: 'Interview',
    desc: "Shortlisted candidates sit with club members for a conversation. We want to know how you think, what drives you — not what your CV says.",
  },
  {
    num: '04',
    title: 'Selection by Chair Committee',
    desc: 'The SPARC Chair Committee reviews the pool and selects the team for their tenure. If you\'re in, you build. If not this year — the form opens again.',
  },
];

export default function Join() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="join" className="join-section" ref={ref}>
      <div className="join-bg grid-bg" />
      <div className="container">
        <div className="join-inner reveal">
          <span className="section-tag">// join sparc</span>
          <h2>Applications open once a year.<br />Make yours count.</h2>
          <p className="join-desc">
            SPARC selects members through a structured process — form, assessment, interview,
            and final selection by the Chair Committee. We look for curiosity and commitment,
            not a polished resume. Every year a new cohort joins for a full club tenure.
          </p>
        </div>

        <div className="join-steps">
          {steps.map((step, i) => (
            <div
              className="join-step reveal"
              key={step.num}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mentor quote */}
        <div className="mentor-quote reveal">
          <div className="quote-mark">&ldquo;</div>
          <blockquote className="quote-text">
            SPARC isn&apos;t about being the smartest person in the room. It&apos;s about being the
            most willing to try. The students who grow the most here are the ones who show up,
            ask the uncomfortable questions, and aren&apos;t afraid to break things in the process
            of building them.
          </blockquote>
          <div className="quote-author">
            <div className="quote-avatar">SS</div>
            <div>
              <span className="quote-name">Er. Sarjan Shrestha</span>
              <span className="quote-title">Club Mentor · CS Lecturer, A Levels</span>
            </div>
          </div>
        </div>

        <div className="contact-block reveal">
          <div className="contact-grid">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href="mailto:sparc@sxc.edu.np" className="contact-value link">sparc@sxc.edu.np</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Instagram</span>
              <a href="https://instagram.com/sxcsparc" target="_blank" rel="noreferrer" className="contact-value link">@sxcsparc</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value">Physics Lab, 6th floor — St. Xavier&apos;s College, Loyola Campis, Thapathali, KTM</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Sessions</span>
              <span className="contact-value">Every Sunday</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
