import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const values = [
  {
    icon: '⚙',
    title: 'Build First, Theorize Second',
    desc: 'We prototype before we fully understand why something should work. Sometimes it doesn\'t. That\'s fine, it usually teaches more than when it does.',
  },
{
    icon: '◈',
    title: 'No Prerequisites to Join',
    desc: 'You don\'t need to know how to code or solder to be part of SPARC. You just need to show up and be willing to try things.',
  },
];

const skills = [
  'Embedded C / Arduino firmware',
  'Computer Vision (YOLOv8, OpenCV)',
  '3D modeling in Fusion 360',
  'Robotics competitions',
  'IoT & sensor networks',
  'Machine learning (TensorFlow Lite)',
  'React web apps',
  'RC systems & FPV',
  'Biomedical prototyping',
];

export default function About() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// about us</span>
          <h2>Nepal&apos;s first high school hardware hackathon. We organized it.</h2>
        </div>

        <div className="about-grid">
          <div className="about-story reveal-left">
            <h3>What is SPARC?</h3>
            <p>
              Established in 2024 at St. Xavier&apos;s College, Maitighar, SPARC,
              St. Xavier&apos;s Prototyping, Automation and Robotics Club, is the
              pioneering robotics club of the A Levels department. The club was formed
              with a clear aim: to give students a platform for hands-on learning and
              practical problem solving in robotics and automation.
            </p>
            <p>
              Within a short time, SPARC has actively participated in national and
              international engineering events. Our members have represented the college
              in competitions organized by respected institutions such as IEEE and in
              international robotics expos including Technoxian Robotics World Cup.
              Notable achievements include placing at the IEEE SSCS Arduino Contest and
              winning the KU AI Conclave Project Demo against university-level teams.
            </p>
            <p>
              The experience gained from these events led directly to the successful
              organization of <strong>SXC SPARC Fest 2025</strong> - Nepal&apos;s first
              high school robotics hackathon, hosted by the club.
            </p>
            <p>
              SPARC is a student-led club guided by curiosity, teamwork, and discipline.
              With a focus on steady growth and meaningful learning, the club continues
              to build trust and create opportunities for students interested in technology
              and innovation.
            </p>
          </div>

          <div className="about-values reveal-right">
            {/* Club logo — large, white background so the dark navy logo pops */}
            <div className="about-logo-showcase">
              <div className="about-logo-badge">
                <img src="/logo.png" alt="SPARC club logo" />
              </div>
              <span className="about-logo-motto">Est. 2024 · St. Xavier&apos;s College</span>
            </div>

            {values.map(v => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-skills reveal">
          <h3>What We Actually Do</h3>
          <div className="skills-grid">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
