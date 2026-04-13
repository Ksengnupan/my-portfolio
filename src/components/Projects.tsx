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
    icon: "🛡",
    company: "Cynclair (R V Connex)",
    date: "Mar 2024 — May 2025",
    title: "LLM-Powered Cybersecurity Assistant",
    description:
      "Production-grade chatbot for cyber security incident investigation using Neo4j knowledge graphs and LLM models. Built a real-time alert investigation pipeline integrated with AWS architecture.",
    achievements: [
      "Production-level deployment on AWS",
      "Real-time alert investigation pipeline",
      "Neo4j knowledge graph integration",
      "End-to-end LLM orchestration",
    ],
    tags: ["LLM", "Neo4j", "PostgreSQL", "AWS", "RAG", "Python"],
    featured: true,
  },
  {
    icon: "📄",
    company: "Personal Project",
    date: "June 2024",
    title: "Chat with Your Documents — RAG System",
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
  {
    icon: "🌍",
    company: "SIIT, Thammasat University",
    date: "Aug 2022 — Jun 2024",
    title: "PM2.5 Prediction in Northern Thailand",
    description:
      "Master's thesis integrating NASA satellite data with ground weather stations for enhanced air quality prediction using deep learning.",
    achievements: [
      "Published at IEEE iSAI-NLP 2023",
      "LSTM & Bi-LSTM time-series models",
      "Multi-source data integration pipeline",
    ],
    tags: ["TensorFlow", "LSTM", "Python", "Research"],
  },
  {
    icon: "📱",
    company: "University Project",
    date: "November 2019",
    title: "INTERN Seeker — Internship Discovery",
    description:
      "Mobile application connecting graduating students with internship opportunities. Led the team to First Prize in university competition.",
    achievements: [
      "First Prize in university competition",
      "End-to-end mobile development",
      "Team leadership & project management",
    ],
    tags: ["Java", "Android", "MySQL", "Leadership"],
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
          What I&apos;ve Built
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          A selection of projects showcasing my work across LLM engineering,
          full-stack development, and ML research.
        </FadeIn>

        <div className="projects-grid">
          {projects.map((p) => (
            <FadeIn
              key={p.title}
              className={`project-card${p.featured ? " featured" : ""}`}
            >
              {p.featured ? (
                <>
                  <div>
                    <div className="project-meta">
                      <div className="project-icon">{p.icon}</div>
                      <div>
                        <div className="project-company">{p.company}</div>
                        <div className="project-date">{p.date}</div>
                      </div>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <div>
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
                </>
              ) : (
                <>
                  <div className="project-meta">
                    <div className="project-icon">{p.icon}</div>
                    <div>
                      <div className="project-company">{p.company}</div>
                      <div className="project-date">{p.date}</div>
                    </div>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
