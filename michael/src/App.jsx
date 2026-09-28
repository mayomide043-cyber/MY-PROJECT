import { useState } from 'react'
import './App.css'
import profileImage from './images/profile.jpg'
import animeDesignImage from './images/anime design.jpg'
import landSurveyImage from './images/landsurvey website.png'

function App() {
  const [formStatus, setFormStatus] = useState('')

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span></span> MICHAEL
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="hire-btn">Hire Me</a>
      </header>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="hero-text">
            <span className="small-tag">AVAILABLE FOR NEW PROJECTS</span>

            <h1>
              Hi, I'm <span>Michael</span>
            </h1>

            <h2>Creative Developer & Problem Solver</h2>

            <p>
              I build beautiful, functional websites and applications
              that solve real-world problems. Passionate about clean code,
              modern design and user experiences.
            </p>

            <a href="#projects" className="primary-btn">
              View My Work ↗
            </a>
          </div>

          <div className="terminal">
            <div className="terminal-top">
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>michael@portfolio</span>
            </div>

            <div className="terminal-body">
              <p><span className="green">$</span> whoami</p>
              <p>Michael — Full Stack Developer</p>
              <p><span className="green">$</span> ls projects/</p>
              <p className="blue">Websites &nbsp; Mobile Applications</p>
              <p><span className="green">$</span> git status</p>
              <p className="green">Everything is up to date.</p>
              <p><span className="green">$</span> <span className="cursor">_</span></p>
            </div>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="section-heading">
          <span className="small-tag">WHO I AM</span>
          <h2>About Me</h2>
          <p>
            A passionate developer bridging the gap between elegant UI
            and high-performance backend systems.
          </p>
        </div>

        <div className="about-content">

          <div className="about-image">
            <img
              src={profileImage}
              alt="Michael"
            />
          </div>

          <div className="about-text">
            <h3>Creative developer, critical thinker, lifelong learner.</h3>

            <p>
              I'm a passionate software developer who loves turning ideas
              into reality through code. With a strong foundation in web
              development and a hunger for learning, I'm always building,
              improving and experimenting.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source communities, or learning the next
              big thing in tech.
            </p>

            <div className="stats">
              <div>
                <strong>2+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Passion</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SKILLS */}
      <section className="section skills" id="skills">
        <div className="section-heading">
          <span className="small-tag">MY STACK</span>
          <h2>Skills & Technologies</h2>
          <p>
            My toolkit is chosen for maximum productivity, flexibility
            and robust backend capability.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-column">
            <h4>Frontend</h4>
            <div className="skill-item">⚛ React</div>
            <div className="skill-item">JS JavaScript</div>
            <div className="skill-item">HTML & CSS</div>
          </div>

          <div className="skill-column">
            <h4>Backend</h4>
            <div className="skill-item">⬢ Node.js</div>
            <div className="skill-item">🐍 Python</div>
            <div className="skill-item">Database</div>
          </div>

          <div className="skill-column">
            <h4>Tools & Platforms</h4>
            <div className="skill-item">GitHub & Git</div>
            <div className="skill-item">Figma</div>
            <div className="skill-item">VS Code</div>
          </div>

          <div className="skill-column">
            <h4>Currently Learning</h4>
            <div className="skill-item">TypeScript</div>
            <div className="skill-item">Next.js</div>
            <div className="skill-item">MongoDB</div>
          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section className="section projects" id="projects">
        <div className="section-heading">
          <span className="small-tag">MY WORK</span>
          <h2>Featured Projects</h2>
          <p>
            A selection of high-quality client work, enterprise
            contributions and hobbyist software worth showcasing.
          </p>
        </div>

        <div className="project-grid">

          <div className="project-card">
            <img className="anime-project-image" src={animeDesignImage} alt="Anime Design Project" />

            <div className="project-info">
              <h3>AnimeDesign</h3>
              <p>
                A premium Figma design of an anime website.
              </p>

              <div className="tags">
                <span>Figma</span>
                <span>UI/UX</span>
              </div>

              <a href="#" className="project-link">
                View Project ↗
              </a>
            </div>
          </div>


          <a
            className="project-card land-survey-project"
            href="https://walexgeoteach.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the Land Surveying website"
          >
            <img src={landSurveyImage} alt="Land Survey Website" />

            <div className="project-info">
              <h3>LandSurveyWebsite</h3>
              <p>
                A modern functional land survey website built with
                an engaging landing page.
              </p>

              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <span className="project-link">
                Explore LandSurvey ↗
              </span>
            </div>
          </a>

        </div>
      </section>


      {/* JOURNEY */}
      {/* <section className="section journey">
        <div className="section-heading">
          <span className="small-tag">MY PATH</span>
          <h2>My Journey</h2>
          <p>
            My development journey from curious beginner to building
            real-world products.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item left">
            <span>2023</span>
            <h3>Started Learning Web Development</h3>
            <p>
              First steps into HTML, CSS and JavaScript,
              exploring how websites work.
            </p>
          </div>

          <div className="timeline-item right">
            <span>2024</span>
            <h3>Built First Portfolio Website</h3>
            <p>
              Started creating personal projects and experimenting
              with modern web technologies.
            </p>
          </div>

          <div className="timeline-item left">
            <span>2025</span>
            <h3>Freelance Development</h3>
            <p>
              Started building websites and solutions for
              real-world clients.
            </p>
          </div>

          <div className="timeline-item right">
            <span>2026</span>
            <h3>Open Source Contributor</h3>
            <p>
              Continuing to learn, build and contribute to
              interesting software projects.
            </p>
          </div>

        </div>
      </section> */}


      {/* SERVICES */}
      <section className="section services">
        <div className="section-heading">
          <span className="small-tag">SERVICES</span>
          <h2>What I Offer</h2>
          <p>
            I specialize in turning ideas into polished, scalable
            and user-focused software systems.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">&lt;/&gt;</div>
            <h3>Web Development</h3>
            <p>
              Custom websites and web applications built with modern
              frameworks and clean, maintainable code.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▣</div>
            <h3>UI/UX Design</h3>
            <p>
              Clean, highly interactive interfaces designed with
              the user in mind. Wireframing to rapid prototyping.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚙</div>
            <h3>Full Stack Development</h3>
            <p>
              End-to-end product development from frontend interfaces
              to backend logic, APIs, databases, and deployment.
            </p>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section className="section contact" id="contact">

        <div className="section-heading">
          <span className="small-tag">CONTACT</span>
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? Let's work together to bring
            your ideas to life.
          </p>
        </div>

        <div className="contact-content">

         <form
  className="contact-form"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  }}
>
  <label>Name</label>
  <input
    type="text"
    name="name"
    placeholder="Your full name"
    required
  />

  <label>Email</label>
  <input
    type="email"
    name="email"
    placeholder="your@email.com"
    required
  />

  <label>Subject</label>
  <input
    type="text"
    name="subject"
    placeholder="How can I help you?"
    required
  />

  <label>Message</label>
  <textarea
    name="message"
    rows="5"
    placeholder="Detailed project or message..."
    required
  ></textarea>

  {formStatus === "success" && (
    <p className="form-success">
      ✅ Message sent successfully! I'll get back to you soon.
    </p>
  )}

  {formStatus === "error" && (
    <p className="form-error">
      ❌ Something went wrong. Please try again.
    </p>
  )}

  <button type="submit">Send Message</button>
</form>


          <div className="contact-info">
            <h3>Let's discuss your project</h3>

            <p>
              Always open to discuss custom software development,
              new ideas, collaborations and interesting projects.
            </p>

            <div className="contact-detail">
              <span>✉</span>
              <div>
                <small>Email</small>
                <p>
                  <a
                    className="contact-email-link"
                    href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=maymode043%40gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email maymode043@gmail.com using Gmail"
                  >
                    maymode043@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <span>◉</span>
              <div>
                <small>Location</small>
                <p>
                  <a
                    className="contact-location-link"
                    href="https://www.google.com/maps/search/?api=1&amp;query=Ogun+State%2C+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Ogun State, Nigeria on Google Maps"
                  >
                    Ogun State, Nigeria
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                className="social-button snapchat-button"
                href="https://www.snapchat.com/add/michaelo2025945?share_id=0t5LVRQfz6c&amp;locale=en-GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon snapchat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 2.5c-3.3 0-5.4 2.4-5.4 6.3 0 1-.1 1.9-.4 2.6-.4.9-1.2 1.6-2 2.1-.4.2-.7.6-.5 1 .1.4.7.6 1.2.7.8.2 1.3.6 1.4 1.2 0 .5-.4.9-.9 1.1-.5.2-.6.6-.2.9.4.3 1.1.4 1.6.4 1 .1 1.7.6 2.4 1.1.8.5 1.5 1 2.8 1s2-.5 2.8-1c.7-.5 1.4-1 2.4-1.1.5 0 1.2-.1 1.6-.4.4-.3.3-.7-.2-.9-.5-.2-.9-.6-.9-1.1.1-.6.6-1 1.4-1.2.5-.1 1.1-.3 1.2-.7.1-.4-.1-.8-.5-1-.8-.5-1.6-1.2-2-2.1-.3-.7-.4-1.6-.4-2.6 0-3.9-2.1-6.3-5.4-6.3Z" />
                  </svg>
                </span>
                <span className="social-button-copy">
                  <strong>Snapchat</strong>
                  <small>Add me on Snapchat</small>
                </span>
                <span className="social-button-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                className="social-button whatsapp-button"
                href="https://wa.me/2348053857275"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-icon whatsapp-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 2.5a9.3 9.3 0 0 0-8 14l-1.2 4.3 4.4-1.2a9.5 9.5 0 1 0 4.8-17.1Zm0 16.8a7.5 7.5 0 0 1-3.8-1l-.3-.2-2.6.7.7-2.5-.2-.3A7.4 7.4 0 1 1 12 19.3Zm4.1-5.6c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1a6 6 0 0 1-1.8-1.1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.3c.1.1 1.6 2.5 3.9 3.4.5.2.9.3 1.2.4.5.1 1 .1 1.3.1.4-.1 1.3-.5 1.5-1 .2-.5.2-.9.2-1s-.1-.3-.3-.4Z" />
                  </svg>
                </span>
                <span className="social-button-copy">
                  <strong>WhatsApp</strong>
                  <small>+234 805 385 7275</small>
                </span>
                <span className="social-button-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer>
        <div className="logo">
          <span></span> MICHAEL
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <p>© 2026 Michael. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App