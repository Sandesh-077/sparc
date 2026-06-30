import './Hero.css';

const stats = [
  { num: '11',   label: 'Projects Built' },
  { num: '10+',  label: 'Awards & Podiums' },
  { num: '2024', label: 'Founded' },
  { num: '1st',  label: 'HS Hardware Hackathon in Nepal' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="grid-bg" />
        <div className="glow glow-1" />
        <div className="glow glow-2" />
      </div>

      {/* Left — text */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          ST. XAVIER&apos;S COLLEGE &nbsp;·&nbsp; MAITIGHAR &nbsp;·&nbsp; KATHMANDU
        </div>
        <h1 className="hero-title">
          <span className="title-sparc">SPARC</span>
          <span className="title-sub">Prototyping. Automation.<br />Robotics.</span>
        </h1>
        <p className="hero-tagline">
          St. Xavier&apos;s Prototyping, Automation &amp; Robotics Club — building
          real hardware in a real physics lab, representing Nepal on international stages.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">See Our Builds</a>
          <a href="#join" className="btn-secondary">Join the Club</a>
        </div>
        <div className="hero-stats">
          {stats.map(s => (
            <div key={s.label} className="stat">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Vision Drive: person SITTING IN wheelchair, camera arm points at their face */}
      <div className="hero-visual" aria-hidden="true">
        <div className="vd-scene">
          <div className="vd-grid-bg" />

          {/* SVG — scan rays from camera (left side) to person's eyes (right, in wheelchair) */}
          <svg className="vd-svg" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line className="scan-ray"
              x1="176" y1="112" x2="237" y2="90"
              stroke="rgba(6,182,212,0.7)" strokeWidth="1.3" strokeDasharray="5 4" />
            <line className="scan-ray scan-ray-2"
              x1="176" y1="116" x2="257" y2="90"
              stroke="rgba(6,182,212,0.45)" strokeWidth="1" strokeDasharray="5 4" />
            <line className="scan-ray-wide"
              x1="176" y1="114" x2="247" y2="90"
              stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" strokeDasharray="3 6" />
            {/* Navigation arc showing wheelchair travel path */}
            <path className="nav-path"
              d="M 210 338 Q 270 348 316 298 Q 348 258 338 218"
              stroke="rgba(59,130,246,0.28)" strokeWidth="1.5" strokeDasharray="6 5" fill="none" />
          </svg>

          {/* Person sitting in wheelchair — head is above the backrest */}
          <div className="person-head">
            <div className="person-eye p-eye-l"><div className="p-pupil" /></div>
            <div className="person-eye p-eye-r"><div className="p-pupil" /></div>
            <div className="gaze-reticle" />
          </div>
          <div className="person-neck" />

          {/* Camera arm — attached to wheelchair, extends left toward person's face */}
          <div className="cam-arm" />

          {/* Camera unit at end of arm — LENS FACES RIGHT (toward person) */}
          <div className="cam-unit">
            <div className="cam-body-rect" />
            <div className="cam-lens"><div className="cam-iris" /></div>
            <div className="cam-led" />
          </div>

          {/* Wheelchair frame */}
          <div className="wc-armrest" />
          <div className="wc-seat" />
          <div className="wc-backrest" />
          <div className="wc-handle" />
          <div className="wc-front-frame" />
          <div className="wc-footrest" />

          {/* Wheels */}
          <div className="wc-main-wheel"><div className="wheel-hub" /></div>
          <div className="wc-caster"><div className="caster-hub" /></div>

          {/* HUD telemetry */}
          <div className="vd-hud vd-hud-tl">
            <span className="hud-key">STATUS</span>
            <span className="hud-val hud-active">● TRACKING</span>
          </div>
          <div className="vd-hud vd-hud-tr">
            <span className="hud-key">GAZE</span>
            <span className="hud-val">LOCKED</span>
          </div>
          <div className="vd-hud vd-hud-br">
            <span className="hud-key">NAV</span>
            <span className="hud-val hud-fwd">→ FWD</span>
          </div>
          <div className="vd-hud vd-hud-bl">
            <span className="hud-key">CONF</span>
            <span className="hud-val">96.8%</span>
          </div>

          {/* Project label */}
          <div className="vd-project-tag">Vision Drive · 2025/26</div>

          {/* Frame corners */}
          <div className="fc fc-tl" />
          <div className="fc fc-tr" />
          <div className="fc fc-bl" />
          <div className="fc fc-br" />
        </div>
      </div>
    </section>
  );
}
