export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <span className="hero-greeting">
            Hello, my name is Seng Nu Pan Kumgyi <span className="wave"></span>
          </span>

          <h1>
            I enjoy <span className="highlight">solving problems</span>
            <span className="cursor" aria-hidden="true" />
          </h1>

          <p className="hero-tagline">
            Whether it&apos;s architecting <span className="highlight">complex AI solutions</span> or staying home and <span className="highlight">cooking</span> a perfect meal, I find joy in the process.
          </p>

          <p className="hero-tagline">
            I am an <span className="highlight">AI engineer and enthusiast</span> who thrives on building <strong>end-to-end</strong> solutions — from initial <strong>research</strong> through to <strong>shipping</strong> and <strong>delivery</strong>.
          </p>

          <p className="hero-role-line">
            Currently at{" "}
            <a
              href="https://www.arcfusion.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <strong>ArcFusion</strong>
            </a>{" "}
            in Bangkok · previously shipped LLM-enabled Explainable AI for cybersecurity investigation at{" "}
            <a
              href="https://www.cynclair.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <strong>Cynclair</strong>
            </a>
            .
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s get in touch — Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
