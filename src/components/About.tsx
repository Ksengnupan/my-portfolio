import FadeIn from "./FadeIn";

const highlights = [
  { number: "2+", label: "Years AI/ML Experience" },
  { number: "200+", label: "Students Taught" },
  { number: "3.91", label: "Master's GPA / 4.00" },
  { number: "IEEE", label: "Published Research" },
];

export default function About() {
  return (
    <section id="about" className="section-alt">
      <div className="container">
        <div className="about-grid">
          <FadeIn className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">From Research to Production AI</h2>
            <p>
              I&apos;m an AI Engineer at ArcFusion with a Master&apos;s degree
              in AI &amp; IoT from SIIT, Thammasat University. I build
              end-to-end AI pipelines — from data engineering and model
              development to production deployment on cloud platforms.
            </p>
            <p>
              My journey spans academic research (published at IEEE iSAI-NLP),
              production LLM systems with knowledge graphs, and teaching 200+
              students. I&apos;m driven by the challenge of making AI systems
              that are robust, scalable, and genuinely useful.
            </p>
            <p
              style={{
                color: "var(--gray-500)",
                fontStyle: "italic",
                marginTop: 8,
              }}
            >
              &ldquo;Dedicated to developing end-to-end production AI systems
              while continuously learning and sharing knowledge with the next
              generation of engineers.&rdquo;
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
