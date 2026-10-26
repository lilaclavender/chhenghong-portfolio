import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          chhenghong<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HOME */}
        <section className="hero" id="home">
          <p className="greeting">✳ HELLO, I'M CHHENGHONG</p>

          <h1>
            Creating thoughtful
            <span> digital experiences.</span>
          </h1>

          <p className="description">
            I'm an aspiring software developer interested in building useful,
            responsive, and user-friendly digital experiences.
          </p>

          <a href="#projects" className="primary-button">
            View My Work ↗
          </a>
        </section>

        {/* SELECTED WORK */}
        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-label">✳ THE THINGS I'VE BUILT</p>
              <h2>
                Selected Work <span>✦</span>
              </h2>
            </div>

            <span className="project-count">01 — 02</span>
          </div>

          <div className="projects-grid">
            {/* PETALIA */}
            <article className="project-card">
              <div className="project-image petalia-image">
                <div className="website-mockup">
                  <div className="browser-bar">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <span className="browser-url">petalia-eta.vercel.app</span>
                  </div>

                  <img
                    src="/images/petalia-home.png"
                    alt="Petalia gifting marketplace homepage"
                    className="petalia-preview"
                  />
                </div>
              </div>

              <div className="project-info">
                <h3>
                  Petalia <span>↗</span>
                </h3>

                <p>
                  A multi-vendor gifting marketplace connecting customers with
                  local flower and candle shops.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Supabase</span>
                  <span>KHQR</span>
                </div>

                <a
                  href="https://petalia-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Live Website ↗
                </a>
              </div>
            </article>

            {/* EVOLVE */}
            <article className="project-card">
              <div className="project-image evolve-image">
                <div className="evolve-mockup">
                  <img
                    src="/images/evolve-home.png"
                    alt="EVOLVE interest comparison screen"
                  />

                  <img
                    src="/images/evolve-insight.png"
                    alt="EVOLVE self-discovery insight screen"
                  />

                  <img
                    src="/images/evolve-community.png"
                    alt="EVOLVE student community screen"
                  />
                </div>
              </div>

              <div className="project-info">
                <h3>
                  EVOLVE <span>↗</span>
                </h3>

                <p>
                  A collaborative university mobile app project helping students
                  discover their interests, build confidence, and explore future
                  opportunities.
                </p>

                <div className="project-tags">
                  <span>System Design</span>
                  <span>UI/UX</span>
                  <span>Research</span>
                </div>

                <a href="#evolve-details" className="project-link">
                  View Project Details ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* EVOLVE DETAILS */}
        <section className="evolve-details" id="evolve-details">
          <div className="evolve-details-heading">
            <p className="section-label">✳ A CLOSER LOOK AT THE PROJECT</p>

            <h2>
              Inside EVOLVE <span>✦</span>
            </h2>

            <p>
              EVOLVE is a collaborative university mobile app project designed
              to support students in exploring their interests, building
              confidence, and discovering future opportunities.
            </p>
          </div>

          <div className="evolve-details-info">
            <div>
              <span>PROJECT TYPE</span>
              <strong>Academic Group Project</strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>Mobile App Design</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>System Design & UI/UX</strong>
            </div>
          </div>

          <div className="evolve-details-gallery">
            <figure>
              <img
                src="/images/evolve-home.png"
                alt="EVOLVE interest comparison interface"
                loading="lazy"
              />
              <figcaption>Interest Comparison</figcaption>
            </figure>

            <figure>
              <img
                src="/images/evolve-insight.png"
                alt="EVOLVE insight dashboard"
                loading="lazy"
              />
              <figcaption>Self-Discovery & Insights</figcaption>
            </figure>

            <figure>
              <img
                src="/images/evolve-community.png"
                alt="EVOLVE student discussion interface"
                loading="lazy"
              />
              <figcaption>Student Community</figcaption>
            </figure>
          </div>

          <div className="evolve-details-bottom">
            <h3>About the Project</h3>

            <p>
              Our team worked collaboratively on EVOLVE, combining research,
              system planning, and interface design to create a mobile app
              experience for students.
            </p>

            <p>
              The project explores features such as interest comparison,
              self-discovery activities, personal insights, student discussions,
              and educational opportunities.
            </p>

            <h4 className="evolve-contribution-heading">My Contribution</h4>

            <p>
              I contributed to the system design and documentation of EVOLVE,
              including requirements analysis, user research, and planning
              the proposed mobile app features. This project helped me
              understand how user needs can be translated into system
              requirements and interface designs.
            </p>

            <p className="evolve-team-credit">
              A collaborative university group project.
            </p>

            <a href="#projects" className="project-link">
              ← Back to Selected Work
            </a>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="about-section" id="about">
          <div className="about-heading">
            <p className="section-label">✳ GET TO KNOW ME</p>

            <h2>
              A little about me <span>✦</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Hi, I'm Chhenghong! I'm a Software Engineering student awaiting
                graduation, with an interest in software development, web
                technologies, and UI/UX design.
              </p>

              <p>
                Through academic projects, I've gained hands-on experience in
                building web applications, working with databases, designing
                user interfaces, and understanding how different parts of a
                system work together.
              </p>

              <p>
                I enjoy learning new technologies, solving problems, and turning
                ideas into practical digital solutions. I'm currently looking
                for opportunities to grow professionally, strengthen my
                technical skills, and contribute to meaningful projects.
              </p>
            </div>

            <div className="skills-card">
              <div className="skills-heading">
                <h3>My Toolkit ✳</h3>
                <p>Technologies and tools I've worked with</p>
              </div>

              <div className="skills-group">
                <h4>Frontend</h4>

                <div className="skills-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Vite</span>
                </div>
              </div>

              <div className="skills-group">
                <h4>Backend & Database</h4>

                <div className="skills-tags">
                  <span>Supabase</span>
                  <span>PostgreSQL (Basic)</span>
                </div>
              </div>

              <div className="skills-group">
                <h4>Tools & Design</h4>

                <div className="skills-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>Vercel</span>
                  <span>Figma (Basic)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-card">
            <p className="section-label">✳ LET'S CONNECT</p>

            <h2>
              Have something in mind?
              <span> Let's talk. ✦</span>
            </h2>
            <p className="contact-description">
              I'm open to opportunities, collaborations, and conversations about
              technology and design.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:hongchheng257@gmail.com"
                className="contact-button primary"
              >
                Send an Email ↗
              </a>

              <a
                href="https://github.com/lilaclavender"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button secondary"
              >
                View GitHub ↗
              </a>

              <a
                href="/Chhenghong-Mol-CV.pdf"
                download
                className="contact-button secondary"
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          chhenghong<span>.</span>
        </a>

        <p>Made with care ✳</p>
      </footer>
    </div>
  );
}

export default App;
