import "./About.css";
import fotopersonal1 from "../assets/fotopersonal1.jpeg";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-reveal"></div>

      {/* Contenido de la página */}
      <div className="about-container page-wrapper">
        <div className="about-left">
          <h1 className="about-title">About</h1>

          <h2 className="about-subtitle">
            I'm Nathaly. A Shopify developer who loves building beautiful, functional, and human-centered web experiences.
          </h2>

          <p className="about-text">
            I transitioned into tech driven by my love for creating things that work beautifully — both visually and behind the scenes.
            From building custom Shopify themes to high-performance interfaces, I enjoy bringing ideas to life through clean structure,
            thoughtful interactions, and scalable systems.
          </p>

          <a
            href="/Nathaly-Nunez-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-button"
            >
            <span className="arrow">↓</span> Curriculum Vitae
            </a>
        </div>

        <div className="about-right">
          <img src={fotopersonal1} alt="Nathaly personal" />
        </div>
      </div>
    </section>
  );
}
