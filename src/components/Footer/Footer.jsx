import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/final (1).png" alt="SPARC logo" className="footer-logo-img" />
              <span className="footer-logo-text">SPARC</span>
            </div>
            <p className="footer-full-name">St. Xavier&apos;s Prototyping, Automation &amp; Robotics Club</p>
            <p className="footer-school">St. Xavier&apos;s College · Maitighar, Kathmandu, Nepal · Est. 2024</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h5>Sections</h5>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#awards">Awards</a>
              <a href="#team">Team</a>
              <a href="#join">Join Us</a>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <a href="https://github.com/sparc-sxc" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://instagram.com/sparc.sxc" target="_blank" rel="noreferrer">Instagram</a>
              <a href="mailto:sparc@sxc.edu.np">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 SPARC — St. Xavier&apos;s College, Maitighar, Kathmandu.</p>
          <p className="footer-tagline">Est. 2024 · A Levels Department · We build real things.</p>
        </div>
      </div>
    </footer>
  );
}
