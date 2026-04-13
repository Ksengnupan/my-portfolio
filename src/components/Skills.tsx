import FadeIn from "./FadeIn";

const categories = [
  {
    icon: "💻",
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "Cypher"],
  },
  {
    icon: "🧠",
    title: "AI/ML & LLM",
    items: [
      "LLM Engineering",
      "RAG",
      "Prompt Engineering",
      "Deep Learning",
      "Transformers",
      "Vector Databases",
      "Fine-tuning",
    ],
  },
  {
    icon: "⚙",
    title: "LLM Frameworks",
    items: [
      "Langchain",
      "Chainlit",
      "Streamlit",
      "Claude",
      "OpenAI",
      "HuggingFace",
    ],
  },
  {
    icon: "📚",
    title: "ML Libraries",
    items: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    icon: "🗄",
    title: "Databases & Web",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Neo4j",
      "ChromaDB",
      "FastAPI",
      "Flask",
      "Spring Boot",
    ],
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    items: [
      "AWS S3",
      "AWS Bedrock",
      "Docker",
      "Git",
      "Grafana",
      "OpenSearch",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-alt">
      <div className="container">
        <FadeIn as="p" className="section-label">
          Skills & Expertise
        </FadeIn>
        <FadeIn as="h2" className="section-title">
          Technical Toolkit
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          Technologies and tools I work with to build production AI systems.
        </FadeIn>

        <div className="skills-grid">
          {categories.map((c) => (
            <FadeIn key={c.title} className="skill-category">
              <div className="skill-category-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <div className="skill-list">
                {c.items.map((item) => (
                  <span key={item} className="skill-item">
                    {item}
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
