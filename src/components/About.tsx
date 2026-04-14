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
              One lesson from my father has stayed with me:{" "}
              <strong>Do the best work in whatever you do</strong>. I&apos;m
              not the smartest person in the room, but I show up with
              diligence and consistency, and that has carried me further
              than I ever expected I believe.
            </p>
            <p>
              That mindset shaped my academic path. I earned my Master&apos;s
              in AI &amp; IoT at{" "}
              <a
                href="https://www.siit.tu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>SIIT, Thammasat University</strong>
              </a>
              , researching PM2.5 prediction with NASA satellite and Thai
              ground-station data, spent a semester at{" "}
              <a
                href="https://www.titech.ac.jp/english"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>
                  Institute of Science and Technology (Formerly Tokyo Tech)
                </strong>
              </a>{" "}
              and assisted in teaching Data Structures &amp; OOP to 100+
              undergrads.
            </p>
            <p>
              Today I&apos;m an AI Engineer at{" "}
              <a
                href="https://www.arcfusion.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>ArcFusion</strong>
              </a>
              , an enterprise GenAI studio. Before that, at{" "}
              <a
                href="https://www.cynclair.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
              >
                <strong>Cynclair</strong>
              </a>
              , I shipped a production LLM assistant for cybersecurity
              analysts using Neo4j, RAG, AWS Bedrock, the full end-to-end
              stack. Off the clock, I enjoy cooking, writing, and organizing
              small things for my community.
            </p>
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
