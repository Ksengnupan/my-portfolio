import Image from "next/image";
import mePhoto from "./me.jpeg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting">
            Hello <span className="wave"></span> I&apos;m Seng Nu Pan Kumgyi.
          </span>

          <h1>
            I enjoy{" "}
            <span className="highlight typewriter">solving problems</span>
            <span className="cursor" aria-hidden="true" />
          </h1>

          <p className="hero-tagline">
            Whether it&apos;s engineering{" "}
            <span className="highlight">AI-enabled services and products</span>{" "}
            or <span className="highlight">cooking</span> a good meal at home,
            I find joy in the process.
          </p>

          <p className="hero-role-line">
            <strong>AI Engineer</strong> @{" "}
            <a
              href="https://www.arcfusion.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              <strong>ArcFusion</strong>
            </a>{" "}
            · Bangkok, Thailand
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s get in touch
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <Image
            src={mePhoto}
            alt="Seng Nu Pan Kumgyi"
            priority
            placeholder="blur"
            sizes="(max-width: 900px) 220px, (max-width: 1100px) 320px, 400px"
          />
        </div>
      </div>
    </section>
  );
}
