import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-container page-wrapper">
      <div className="home-left">
        <p className="home-name">NATHALY NÚÑEZ</p>
        <p className="home-role">
          Shopify Developer | Front-End Web Developer
        </p>
        <p className="home-description">
          Shopify Front-End Developer specialized in Liquid, React, and
          Tailwind CSS. I build scalable, high-performance eCommerce
          experiences focused on clean architecture, accessibility, and modern
          SEO.
        </p>
      </div>

      <div className="home-right">
        <nav className="home-menu">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </section>
  );
}
