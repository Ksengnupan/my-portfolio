import FadeIn from "./FadeIn";

const items = [
  {
    degree: "M.Eng. in AI & Internet of Things",
    school: "SIIT, Thammasat University",
    period: "Aug 2022 — Jun 2024",
    detail:
      "GPA: 3.91/4.00. Thesis on PM2.5 prediction enhancement using satellite and ground data integration.",
  },
  {
    degree: "Research Exchange Program",
    school: "Tokyo Institute of Technology",
    period: "Sep — Dec 2023",
    detail:
      "Research presentation and collaboration at one of Japan's top science and engineering universities.",
  },
  {
    degree: "B.Eng. in Information Science & Technology",
    school: "University of Technology, Myanmar",
    period: "Dec 2013 — Feb 2020",
    detail:
      "CGPA: 3.90/4.00. Strong foundation in computer science and software engineering.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-alt">
      <div className="container">
        <FadeIn as="p" className="section-label">
          Education
        </FadeIn>
        <FadeIn as="h2" className="section-title">
          Academic Background
        </FadeIn>
        <FadeIn as="p" className="section-subtitle">
          A strong foundation in engineering, AI research, and international
          collaboration.
        </FadeIn>

        <FadeIn className="education-grid">
          {items.map((e) => (
            <div key={e.degree} className="education-card">
              <div className="degree">{e.degree}</div>
              <div className="school">{e.school}</div>
              <div className="period">{e.period}</div>
              <div className="detail">{e.detail}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
