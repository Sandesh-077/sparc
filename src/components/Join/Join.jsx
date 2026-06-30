import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Join.css';

const steps = [
  {
    num: '01',
    title: 'Show Up on Saturday',
    desc: 'Physics Lab, Ground Floor. 10:00 AM. First visit is just to see what we do — no pressure, no signup form.',
  },
  {
    num: '02',
    title: 'Talk to a Member',
    desc: "We'll find out what you're interested in and where you'd fit — hardware, software, or just generally curious about how things work.",
  },
  {
    num: '03',
    title: 'Start Building',
    desc: "We'll give you a starter project. Usually an LED blinker. By month three, you'll be calling yourself an embedded systems developer.",
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
          <h2>We meet every Saturday morning.<br />Coffee not provided.</h2>
          <p className="join-desc">
            SPARC is open to all St. Xavier&apos;s College A Levels students.
            No coding experience required — we&apos;ve taught members from absolute scratch.
            The only requirement is curiosity and the ability to show up consistently.
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

        <div className="contact-block reveal">
          <div className="contact-grid">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href="mailto:sparc@sxc.edu.np" className="contact-value link">sparc@sxc.edu.np</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Instagram</span>
              <a href="https://instagram.com/sparc.sxc" target="_blank" rel="noreferrer" className="contact-value link">@sparc.sxc</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/sparc-sxc" target="_blank" rel="noreferrer" className="contact-value link">github.com/sparc-sxc</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Location</span>
              <span className="contact-value">Physics Lab, Ground Floor — St. Xavier&apos;s College, Maitighar, KTM</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">Sessions</span>
              <span className="contact-value">Every Saturday, 10 AM – 1 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
