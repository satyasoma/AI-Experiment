export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Primary navigation">
          <a className="logo" href="#home" aria-label="Satya Trainings home">
            Satya Trainings
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">SATYA TRAININGS</p>
            <h1>Learn technologies.<br /><em>One step at a time.</em></h1>
            <p className="coming">One-on-One Classes<br />Coming Soon.</p>
            <p className="supporting">A focused space for students and learners to explore technology, build confidence, and learn with clarity.</p>
            <a className="button" href="#about">Explore the website <span aria-hidden="true">↗</span></a>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <div className="mark-ring" />
            <div className="mark-letter">S</div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-content">
          <h2>Learning should feel <em>clear.</em></h2>
          <p>Satya Trainings is built to help students and learners learn technologies in a practical, easy-to-understand way.</p>
          <p>One-on-One classes are coming soon. Until then, explore the website and stay connected with what’s next.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-label">02 / CONTACT</div>
        <div className="contact-panel">
          <div>
            <h2>Stay curious.</h2>
            <p>Explore the site while the One-on-One classes are getting ready.</p>
          </div>
          <a className="text-link" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </section>

      <footer>
        <span>Satya Trainings</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
