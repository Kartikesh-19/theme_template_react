import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const image = (name) => `/images/${name}`;
const menu = [
  ["home", "/", "las la-home", "Home"],
  ["about", "/about", "lar la-user", "About"],
  ["resume", "/resume", "las la-briefcase", "Resume"],
  ["services", "/services", "las la-stream", "Services"],
  ["skills", "/skills", "las la-shapes", "Skills"],
  ["portfolio", "/portfolio", "las la-grip-vertical", "Portfolio"],
  ["testimonial", "/testimonials", "lar la-comment", "Testimonials"],
  ["pricing", "/pricing", "las la-dollar-sign", "Pricing"],
  ["contact", "/contact", "las la-envelope", "Contact"],
];
const social = [
  "lab la-twitter",
  "lab la-dribbble",
  "lab la-instagram",
  "lab la-github",
];
const themeColors = [
  "#28e98c",
  "#e4af12",
  "#fe6f1d",
  "#14c5fd",
  "#c0c0c0",
  "#1338f3",
  "#f31313",
  "#ff99cc",
];
const skills = [
  ["figma.png", "92%", "Figma"],
  ["framer.png", "85%", "Framer"],
  ["webflow.png", "80%", "Webflow"],
  ["react.png", "90%", "React"],
];
const portfolios = [
  ["portfolio1.jpg", "Bureau - Architecture Studio", "framer"],
  ["portfolio2.jpg", "Moonex WordPress Theme", "wordpress"],
  ["portfolio3.jpg", "Taskly Dashboard", "webflow"],
  ["portfolio4.jpg", "Hinterland - Wildness", "framer"],
  ["portfolio5.jpg", "Lewis Portfolio Framer Template", "framer"],
];
const testimonials = [
  [
    "testimonial-1.jpg",
    "John Smith",
    "CEO, Squarespace",
    "Drake was a real pleasure to work with and we look forward to working with him again. He is definitely the kind of designer that you can trust with a project from start to finish.",
  ],
  [
    "testimonial-2.jpg",
    "Jonathan Doe",
    "Director, Envato",
    "Extremely professional and talented. The final result exceeded our expectations and made a meaningful impact on our product.",
  ],
  [
    "testimonial-3.jpg",
    "David Cooper",
    "Founder, Webflow",
    "A thoughtful creative partner with excellent communication and a sharp eye for details. Highly recommended.",
  ],
];

function Icon({ name }) {
  return <i className={name} aria-hidden="true" />;
}
function SectionTitle({ icon, eyebrow, children }) {
  return (
    <div className="section-header">
      <h4 className="subtitle">
        <Icon name={icon} /> {eyebrow}
      </h4>
      <h1>{children}</h1>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src={image("logo.png")} alt="Drake" />
        <span className="designation">Front End Developer</span>
      </div>
      <img className="me" src={image("me.jpg")} alt="Drake" />
      <h2 className="email">kartikeshsharma59@gmail.com</h2>
      <h2 className="address">Based in Mohali/Chandigarh, India</h2>
      <p className="copyright">© 2026 . All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {social.map((item) => (
          <li key={item}>
            <a href="#home" aria-label={item}>
              <Icon name={item} />
            </a>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="theme-btn">
        <Icon name="las la-envelope" /> Hire Me!
      </Link>
    </div>
  );
}

function PageView({ routeId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [color, setColor] = useState(0);
  const [slide, setSlide] = useState(0);
  const [sent, setSent] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document
      .querySelectorAll(".page-section")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary_color",
      themeColors[color],
    );
  }, [color]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [routeId]);
  const go = () => setMenuOpen(false);
  return (
    <>
      <span
        className="icon-menu"
        role="button"
        tabIndex="0"
        onClick={() => setMenuOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setMenuOpen(true)}
      >
        <span className="bar" />
        <span className="bar" />
      </span>
      <div className={`global-color ${settingsOpen ? "active" : ""}`}>
        <span
          className="setting-toggle"
          role="button"
          tabIndex="0"
          onClick={() => setSettingsOpen(true)}
        >
          <Icon name="las la-cog" />
        </span>
        <div className="inner">
          <div className="overlay" onClick={() => setSettingsOpen(false)} />
          <div className="global-color-option">
            <span
              className="close-settings"
              onClick={() => setSettingsOpen(false)}
            >
              <Icon name="las la-times" />
            </span>
            <h2>Configuration</h2>
            <div className="global-color-option-inner">
              <p>Colors</p>
              <div className="color-boxed">
                {Array.from({ length: 8 }, (_, i) => (
                  <button
                    key={i}
                    className={color === i ? "clr-active" : ""}
                    aria-label={`Color ${i + 1}`}
                    onClick={() => setColor(i)}
                  />
                ))}
              </div>
              <p>THREE DIMENSIONAL SHAPES</p>
              <ul className="themes">
                <li>
                  <a href="#home">Earth Lines Sphere</a>
                </li>
                <li>
                  <a href="#home">3D Abstract Ball</a>
                </li>
                <li>
                  <a href="#home">Solid Color</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`responsive-sidebar-menu ${menuOpen ? "active" : ""}`}>
        <div className="overlay" onClick={() => setMenuOpen(false)} />
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <Nav responsive active={active} onClick={go} />
          </div>
          <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              {social.slice(0, 3).map((item) => (
                <li key={item}>
                  <a href="#home">
                    <Icon name={item} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Nav active={active} onClick={go} />
      <Sidebar />
      <main className={`drake-main route-${routeId}`}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Sidebar />
            <section
              className="hero-section page-section scroll-to-page"
              id="home"
            >
              <div className="custom-container">
                <div className="hero-content content-width">
                  <SectionTitle icon="las la-home" eyebrow="Introduce">
                    Say Hi from <span>Kartikesh</span>, Framer Designer and
                    Developer
                  </SectionTitle>
                  <p>
                    I design and developed the code beautifully simple things
                    and I love what I do. Just simple like that!
                  </p>
                  <Link to="/portfolio" className="go-to-project-btn scroll-to">
                    <img src={image("round-text.png")} alt="Projects" />
                    <Icon name="las la-arrow-down" />
                  </Link>
                  <div className="facts d-flex">
                    <div className="left">
                      <h1>5+</h1>
                      <p>
                        Years of
                        <br />
                        Experience
                      </p>
                    </div>
                    <div className="right">
                      <h1>12+</h1>
                      <p>
                        projects completed on
                        <br />3 countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="about-area page-section scroll-to-page"
              id="about"
            >
              <div className="custom-container">
                <div className="about-content content-width">
                  <SectionTitle icon="lar la-user" eyebrow="About">
                    Crafting modern web experiences
                    <br />
                    with <span>React.js</span>
                  </SectionTitle>

                  <p>
                    I'm a Frontend Developer specializing in React.js, focused
                    on building responsive, scalable, and user-friendly web
                    applications. I enjoy turning complex problems into clean,
                    intuitive interfaces using modern technologies like React,
                    JavaScript, TypeScript, Redux Toolkit, HTML5, and CSS3.
                    Passionate about writing maintainable code, optimizing
                    performance, and continuously learning new technologies, I
                    strive to create seamless digital experiences that deliver
                    real value to users and businesses.
                  </p>
                </div>
              </div>
            </section>
            <section
              className="resume-area page-section scroll-to-page"
              id="resume"
            >
              <div className="custom-container">
                <div className="resume-content content-width">
                  <SectionTitle icon="las la-briefcase" eyebrow="Resume">
                    Education & <span>Experience</span>
                  </SectionTitle>
                  <div className="resume-timeline">
                    {[
                      [
                        "2024 - Present",
                        [
                          "React Js Developer",
                          "Outline Systems India",
                          "Front-End Developer",
                          "Full Time",
                        ],
                      ],
                      [
                        "2021 - 2023",
                        [
                          "React Executive",
                          "Capanicus",
                          "Web Developer(ReactJs)",
                          "Full Time",
                        ],
                      ],
                    ].map(([date, roles]) => (
                      <div className="item" key={date}>
                        <span className="date">{date}</span>
                        {roles.map((role, i) =>
                          i % 2 === 0 ? (
                            <h2 key={role}>{role}</h2>
                          ) : (
                            <p key={role}>{role}</p>
                          ),
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section
              className="services-area page-section scroll-to-page"
              id="services"
            >
              <div className="custom-container">
                <div className="services-content content-width">
                  <SectionTitle icon="las la-stream" eyebrow="Services">
                    My <span>Specializations</span>
                  </SectionTitle>
                  <div className="services-items">
                    {[
                      [
                        "React Js Developer",
                        "Website  Development",
                        "I design and develop scalable digital products powered by modern Single Page Application (SPA) architecture.",
                        "11 Projects",
                      ],
                      [
                        "React Native ",
                        "Mobile Development",
                        "I build mobile app with React Native which is plateform independent",
                        "3 Projects",
                      ],
                    ].map(([icon, title, copy, projects]) => (
                      <div className="service-item" key={title}>
                        <Icon name={icon} />
                        <h2>{title}</h2>
                        <p>{copy}</p>
                        <span className="projects">{projects}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section
              className="skills-area page-section scroll-to-page"
              id="skills"
            >
              <div className="custom-container">
                <div className="skills-content content-width">
                  <SectionTitle icon="las la-shapes" eyebrow="my skills">
                    My <span>Advantages</span>
                  </SectionTitle>
                  <div className="row skills text-center">
                    {skills.map(([file, percent, name]) => (
                      <div className="col-md-3" key={name}>
                        <div className="skill">
                          <div className="skill-inner">
                            {/* <img src={image(file)} alt={name} /> */}
                            <h1 className="percent">{percent}</h1>
                          </div>
                          <p className="name">{name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section
              className="portfolio-area page-section scroll-to-page"
              id="portfolio"
            >
              <div className="custom-container">
                <div className="portfolio-content content-width">
                  <SectionTitle icon="las la-grip-vertical" eyebrow="portfolio">
                    Featured <span>Projects</span>
                  </SectionTitle>
                  <div className="row portfolio-items">
                    {portfolios.map(([file, title, type]) => (
                      <div className="col-md-6" key={title}>
                        <div className="portfolio-item">
                          <div className="portfolio-item-inner">
                            <img src={image(file)} alt={title} />
                            <Link to="/contact" className="portfolio-link">
                              <Icon name="las la-arrow-up" />
                            </Link>
                          </div>
                          <h2>{title}</h2>
                          <p>{type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section
              className="testimonial-area page-section scroll-to-page"
              id="testimonial"
            >
              <div className="custom-container">
                <div className="testimonial-content content-width">
                  <SectionTitle icon="lar la-comment" eyebrow="testimonial">
                    Trusted by <span>Hundered Clients</span>
                  </SectionTitle>
                  <div className="testimonial-slider">
                    {testimonials.map(([photo, name, role, quote], i) => (
                      <div
                        className={`testimonial-item react-testimonial ${slide === i ? "is-active" : ""}`}
                        key={name}
                      >
                        <div className="testimonial-item-inner">
                          <div className="author d-flex align-items-center">
                            <img src={image(photo)} alt={name} />
                            <div>
                              <h3>{name}</h3>
                              <p>{role}</p>
                            </div>
                          </div>
                          <p>{quote}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="testimonial-footer d-flex align-items-center justify-content-between">
                    <div id="testimonial-slide-count">
                      <span className="left">{slide + 1}</span> /{" "}
                      {testimonials.length}
                    </div>
                    <div className="testimonial-nav">
                      <button
                        className="prev"
                        onClick={() =>
                          setSlide(
                            (slide + testimonials.length - 1) %
                              testimonials.length,
                          )
                        }
                      >
                        <Icon name="las la-arrow-left" />
                      </button>
                      <button
                        className="next"
                        onClick={() =>
                          setSlide((slide + 1) % testimonials.length)
                        }
                      >
                        <Icon name="las la-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="pricing-area page-section scroll-to-page"
              id="pricing"
            >
              <div className="custom-container">
                <div className="pricing-content content-width">
                  <SectionTitle icon="las la-dollar-sign" eyebrow="pricing">
                    My <span>Pricing</span>
                  </SectionTitle>
                  <div className="pricing-table">
                    <div className="pricing-item">
                      <h2>basic</h2>
                      <p>Have design ready to build? Or small budget?</p>
                      <h1>
                        $10 <span>/ hours</span>
                      </h1>
                      <Link to="/contact" className="theme-btn">
                        pick this package
                      </Link>
                    </div>
                    <div className="pricing-item">
                      <h2>premium</h2>
                      <p>Not only a design but also want more options?</p>
                      <h1>
                        $15 <span>/ hours</span>
                      </h1>
                      <Link to="/contact" className="theme-btn">
                        pick this package
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="contact-area page-section scroll-content"
              id="contact"
            >
              <div className="custom-container">
                <div className="contact-content content-width">
                  <SectionTitle icon="las la-envelope" eyebrow="contact">
                    Let’s Work <span>Together!</span>
                  </SectionTitle>
                  <h3>kartikeshsharma59@gamil.com</h3>
                  {sent && (
                    <p className="contact-form-status">
                      Thanks — your message has been recorded.
                    </p>
                  )}
                  <form
                    className="contact-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                      e.currentTarget.reset();
                    }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="full-name">
                            full Name <sup>*</sup>
                          </label>
                          <input
                            required
                            type="text"
                            id="full-name"
                            placeholder="Your Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="email">
                            Email <sup>*</sup>
                          </label>
                          <input
                            required
                            type="email"
                            id="email"
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="phone">
                            phone <span>(optional)</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-group">
                          <label htmlFor="subject">
                            subject <sup>*</sup>
                          </label>
                          <select required id="subject">
                            <option value="">Select a subject</option>
                            <option>Website design</option>
                            <option>Development</option>
                            <option>SEO/Marketing</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group">
                          <label htmlFor="message">message</label>
                          <textarea
                            id="message"
                            placeholder="Write your message here ..."
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group submit-btn-wrap">
                          <button className="theme-btn" type="submit">
                            send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
function Nav({ responsive = false, active, onClick }) {
  return (
    <ul
      className={`menu ${responsive ? "scroll-nav-responsive" : "scroll-nav"} d-flex`}
    >
      {menu.map(([id, path, icon, label]) => (
        <li key={id}>
          <NavLink
            end={path === "/"}
            className={({ isActive }) =>
              `scroll-to ${isActive ? "active" : ""}`
            }
            to={path}
            onClick={onClick}
          >
            <span>{label}</span>
            <Icon name={icon} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

const routeIds = {
  "/": "home",
  "/about": "about",
  "/resume": "resume",
  "/services": "services",
  "/skills": "skills",
  "/portfolio": "portfolio",
  "/testimonials": "testimonial",
  "/pricing": "pricing",
  "/contact": "contact",
};

export default function App() {
  return (
    <Routes>
      {Object.entries(routeIds).map(([path, routeId]) => (
        <Route
          key={path}
          path={path}
          element={<PageView routeId={routeId} />}
        />
      ))}
      <Route path="*" element={<PageView routeId="home" />} />
    </Routes>
  );
}
