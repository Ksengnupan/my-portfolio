import FadeIn from "./FadeIn";

const jobs = [
  {
    date: "June 2025 — Present",
    title: "AI Engineer",
    company: "ArcFusion • Bangkok, Thailand",
    bullets: ["Building AI solutions and production systems"],
  },
  {
    date: "March 2024 — May 2025",
    title: "Data Analyst & LLM Engineer",
    company: "Cynclair (R V Connex)",
    bullets: [
      "Developed production LLM systems for cybersecurity",
      "Built RAG pipelines with Neo4j knowledge graphs",
      "AWS cloud architecture and integration",
    ],
  },
  {
    date: "June 2023 — July 2024",
    title: "Research Assistant",
    company: "SIIT, Thammasat University",
    bullets: [
      "Time-series data integration and analysis",
      "Machine learning model development",
      "Published at IEEE iSAI-NLP 2023 conference",
    ],
  },
  {
    date: "December 2023 — May 2024",
    title: "Teaching Assistant",
    company: "SIIT, Thammasat University",
    bullets: [
      "OOP & Data Structures courses",
      "Reached 200+ students",
      "Academic mentoring and guidance",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <FadeIn as="p" className="section-label">
          Experience
        </FadeIn>
        <FadeIn as="h2" className="section-title">
          Career Journey
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          Building expertise from research through to production AI systems.
        </FadeIn>

        <div className="timeline">
          {jobs.map((j) => (
            <FadeIn key={j.title + j.date} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">{j.date}</div>
              <h3>{j.title}</h3>
              <p className="timeline-company">{j.company}</p>
              <ul>
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
