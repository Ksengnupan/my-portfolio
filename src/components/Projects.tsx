import FadeIn from "./FadeIn";

type Project = {
  icon: string;
  company: string;
  date: string;
  title: string;
  description: string;
  achievements: string[];
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    icon: "🛡️",
    company: "Cynclair (R V Connex)",
    date: "Sep 2024 - Feb 2025",
    title: "LLM-Powered Cybersecurity Assistant (Explainable AI)",
    description:
      "Production-grade investigation system for cybersecurity incidents using Neo4j knowledge graphs, Cypher queries, and LLMs over AWS infrastructure.",
    achievements: [
      "Production-level deployment",
      "Real-time alert investigation pipeline",
      "Integrated with AWS architecture",
    ],
    tags: ["LLM", "RAG", "Neo4j", "PostgreSQL", "AWS", "Python"],
  },
  {
    icon: "📄",
    company: "Personal Project",
    date: "June 2024",
    title: "Chat with Your Documents - RAG System",
    description:
      "Intelligent document Q&A system that processes PDFs, creates vector stores, and enables natural language queries over your own data.",
    achievements: [
      "End-to-end RAG pipeline",
      "User-friendly Streamlit interface",
      "HuggingFace embeddings integration",
    ],
    tags: ["Qwen2", "RAG", "Langchain", "ChromaDB", "Streamlit"],
  },
  {
    icon: "🌫️",
    company: "Master's Thesis — SIIT",
    date: "Aug 2022 — Jun 2024",
    title: "Enhancing PM2.5 Prediction in Northern Thailand",
    description:
      "Research project integrating NASA satellite data with ground weather stations for enhanced pollutant prediction using deep time-series models.",
    achievements: [
      "Published at IEEE iSAI-NLP 2023",
      "Advanced LSTM / Bi-LSTM models",
      "End-to-end data integration pipeline",
    ],
    tags: ["Python", "TensorFlow", "LSTM", "Bi-LSTM", "Time-series"],
  },
  {
    icon: "🚂",
    company: "Personal Project",
    date: "November 2024",
    title: "Railway Management System API",
    description:
      "RESTful API for complete railway operations management with secure authentication, authorization, and production-ready design.",
    achievements: [
      "Full CRUD operations",
      "Spring Security authentication",
      "Production-ready API design",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <FadeIn as="p" className="section-label">
          Featured Projects
        </FadeIn>
        <FadeIn as="h2" className="section-title">
          What I&apos;ve Built to learn and explore
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          A selection of projects showcasing my work across LLM engineering and development.
        </FadeIn>

        <div className="projects-grid">
          {projects.map((p) => (
            <FadeIn
              key={p.title}
              className={`project-card${p.featured ? " featured" : ""}`}
            >
              <div className={p.featured ? "featured-main" : ""}>
                <div className="project-meta">
                  <div>
                    <div className="project-company">{p.company}</div>
                    <div className="project-date">{p.date}</div>
                  </div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {!p.featured && (
                  <>
                    <ul className="project-achievements">
                      {p.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {p.featured && (
                <div className="featured-details">
                  <ul className="project-achievements">
                    {p.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
