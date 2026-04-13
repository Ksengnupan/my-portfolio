import FadeIn from "./FadeIn";

const highlights = [
  { number: "2+", label: "Years of experience in Development" },
  { number: "100+", label: "Students mentored" },
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
              I got into software back in 2019 leading a student team in
              Myanmar — we built an Android app that matched graduating
              students to internships and won first prize at the university
              competition. That win taught me something I still believe:{" "}
              <strong>the magic isn&apos;t the model, it&apos;s the thing people actually use</strong>.
            </p>
            <p>
              Since then I&apos;ve followed that idea into AI. I did my
              Master&apos;s in AI &amp; IoT at SIIT, Thammasat University —
              fused NASA satellite data with Thai ground stations to predict
              PM2.5 ( published at IEEE iSAI-NLP 2023 ), spent a semester
              researching at Tokyo Tech, and taught Data Structures &amp; OOP
              to 200+ undergrads along the way.
            </p>
            <p>
              Today I&apos;m an AI Engineer at <strong>ArcFusion</strong>. Before that, at{" "}
              <strong>Cynclair</strong>, I spent a year building a production
              LLM assistant for cybersecurity analysts — Neo4j knowledge
              graphs, RAG pipelines, AWS Bedrock, the full end-to-end stack.
              When I&apos;m not at a keyboard, I&apos;m usually mentoring,
              writing up what I learned, or organizing something small for my
              community.
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
