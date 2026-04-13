import FadeIn from "./FadeIn";

const awards = [
  {
    icon: "🏆",
    title: "First Prize — INTERN Seeker App",
    sub: "University mobile development competition, 2019",
  },
  {
    icon: "⭐",
    title: "Best Volunteer Special Award",
    sub: "Hungry To Learn English Center (HLEC), 2020",
  },
  {
    icon: "🤝",
    title: "Chairperson & Lead Facilitator",
    sub: "HLEC — Leadership & community organizing, 2020",
  },
  {
    icon: "🌏",
    title: "Program Developer & Organizer",
    sub: "Global Mind Youth Group, 2020",
  },
];

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <FadeIn as="p" className="section-label">
          Publications & Achievements
        </FadeIn>
        <FadeIn as="h2" className="section-title">
          Recognition
        </FadeIn>

        <FadeIn className="publication-card">
          <h3>
            Time-series Data Imputation for Improved Prediction of PM10
            Pollutant in Northern Thailand
          </h3>
          <p>
            S. N. P. Kumgyi, et al. (2023). In 2023 18th International Joint
            Symposium on Artificial Intelligence and Natural Language
            Processing (iSAI-NLP), pp. 1-6. IEEE. Bangkok, Thailand.
          </p>
          <a
            href="https://doi.org/10.1109/iSAI-NLP60301.2023.10354751"
            className="pub-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Publication →
          </a>
        </FadeIn>

        <FadeIn className="awards-grid">
          {awards.map((a) => (
            <div key={a.title} className="award-item">
              <div className="award-icon">{a.icon}</div>
              <div>
                <h4>{a.title}</h4>
                <p>{a.sub}</p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
