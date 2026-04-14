import FadeIn from "./FadeIn";

type Job = {
  date: string;
  title: string;
  company: string;
  companyUrl?: string;
  bullets: string[];
  tags: string[];
};

const jobs: Job[] = [
  {
    date: "June 2025 — Present",
    title: "AI Engineer",
    company: "ArcFusion • Bangkok, Thailand",
    companyUrl: "https://www.arcfusion.ai/",
    bullets: ["Building GenAI solutions and production systems"],
    tags: ["Python", "Next.js", "LLM", "RAG", "LangChain", "Docker", "Google Cloud"],
  },
  {
    date: "March 2024 — May 2025",
    title: "Data Analyst & Developer",
    company: "Cynclair (R V Connex)",
    companyUrl: "https://www.cynclair.com/",
    bullets: [
      "Developed production LLM systems for cybersecurity",
      "Built RAG pipelines with Neo4j knowledge graphs",
      "AWS cloud architecture and integration",
    ],
    tags: [
      "Python",
      "LLM",
      "RAG",
      "Neo4j",
      "Cypher",
      "AWS Bedrock",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    date: "June 2023 — July 2024",
    title: "Research Assistant",
    company: "SIIT, Thammasat University",
    companyUrl: "https://www.siit.tu.ac.th/",
    bullets: [
      "Time-series data integration and analysis",
      "Machine learning model development",
      "Published at IEEE iSAI-NLP 2023 conference",
    ],
    tags: [
      "Python",
      "TensorFlow",
      "Keras",
      "LSTM",
      "Bi-LSTM",
      "Pandas",
      "NumPy",
    ],
  },
  {
    date: "December 2023 — May 2024",
    title: "Teaching Assistant",
    company: "SIIT, Thammasat University",
    companyUrl: "https://www.siit.tu.ac.th/",
    bullets: [
      "OOP & Data Structures courses",
      "Reached 100+ students",
      "Academic mentoring and guidance",
    ],
    tags: ["Java", "OOP", "Data Structures"],
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
          Building expertise from research through to production systems.
        </FadeIn>

        <div className="timeline">
          {jobs.map((j) => (
            <FadeIn key={j.title + j.date} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">{j.date}</div>
              <h3>{j.title}</h3>
              <p className="timeline-company">
                {j.companyUrl ? (
                  <a
                    href={j.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    {j.company}
                  </a>
                ) : (
                  j.company
                )}
              </p>
              <ul>
                {j.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="timeline-tags">
                {j.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
