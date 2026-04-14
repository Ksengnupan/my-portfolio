import FadeIn from "./FadeIn";

const highlights = [
  { number: "2+", label: "Years of experience in Engineering and Development" },
  { number: "100+", label: "Students impacted" },
  { number: "3.91", label: "Master's GPA / 4.00" },
  { number: "IEEE", label: "Published researcher" },
];

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="about-grid">
          <FadeIn className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">A builder who likes the whole stack</h2>
            <p>
              I&apos;m an AI Engineer at{" "}
              <a
                href="https://www.arcfusion.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>ArcFusion</strong>
              </a>
              , contributing to the development of GenAI services. Before that, at{" "}
              <a
                href="https://www.cynclair.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>Cynclair</strong>
              </a>
              , I shipped a production LLM assistant for cybersecurity
              analysts - Neo4j, RAG, AWS Bedrock, end-to-end.
            </p>
            <p>
              Master&apos;s in AI &amp; IoT at{" "}
              <a
                href="https://www.siit.tu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>SIIT, Thammasat</strong>
              </a>{" "}
              - PM2.5 research published at{" "}
              <strong>IEEE iSAI-NLP 2023</strong>, an exchange at{" "}
              <a
                href="https://www.titech.ac.jp/english"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>Tokyo Tech</strong>
              </a>
              , and TA&apos;ing Data Structures &amp; OOP for 100+ undergrads
              along the way.
            </p>
            <p>Off the keyboard, I enjoy cooking, writing, and helping my community.</p>
          </FadeIn>
          <FadeIn className="about-highlights">
            {highlights.map((h) => (
              <div key={h.label} className="highlight-card">
                <div className="number">{h.number}</div>
                <div className="label">{h.label}</div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
