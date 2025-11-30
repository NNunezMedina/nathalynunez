import "./Home.css";
import { Link } from "react-router-dom";

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
          <Link to="/work">WORK</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </section>
  );
}
