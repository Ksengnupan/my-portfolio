export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-brand">
              Seng Nu <span>Pan</span>
            </div>
            <p className="footer-tagline">AI Engineer • LLM Specialist</p>
          </div>
          <ul className="footer-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="footer-social">
            <a
              href="https://linkedin.com/in/sengnupankumgyi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/Ksengnupan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="mailto:sengnupan.kumgyi@gmail.com"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Seng Nu Pan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
