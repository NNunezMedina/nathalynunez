import { useEffect } from "react";
import "./SmartCoopFarm.css";
import smart1 from "../../assets/smart1.png";
import smart2 from "../../assets/smart2.png";
import smart3 from "../../assets/smart3.png";

export default function SmartCoopFarm() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="project-hero page-wrapper">
        <div className="black-drop"></div>
        <h1 className="hero-title">SMART COOP FARM</h1>
      </section>

      {/* SECCIÓN DESCRIPTIVA */}
      <section className="project-description page-wrapper ">
        <p className="project-intro">
          A custom Shopify theme built from Dawn, developed with pixel-perfect Figma execution, dynamic metafields, and a clean, scalable architecture across 15+ pages.
        </p>

        <div className="project-info-grid">
          <div className="reveal-on-scroll">
            <h4>ROLE</h4>
            <p>Frontend Developer<br></br>Shopify Theme Development</p>
          </div>

          <div className="reveal-on-scroll">
            <h4>RESPONSIBILITIES</h4>
            <p>
              Custom theme development,
              Pixel-perfect implementation,
              Metafield-based logic,
              Reusable CMS sections,
              UX & performance.
            </p>
          </div>

          <div className="reveal-on-scroll">
            <h4>URL</h4>
            <a href="https://smart.coop.farm" target="_blank">
              smart.coop.farm
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <section className="project-image-full reveal-on-scroll">
          <img src={smart1} alt="Smart Coop Farm" />
        </section>

        {/* TEXTO LARGO */}
        <section className="project-text-block reveal-on-scroll">
          <p>
            This project involved developing a fully custom Shopify theme that translated a detailed Figma design into a flexible, scalable storefront. I structured the theme architecture, built over a dozen unique pages, and created reusable sections that supported a clean CMS workflow. 
          </p>

          <p>
            Throughout the build, I implemented metafield-driven logic for product-specific UI elements, customized templates for different content needs, and optimized front-end performance to keep the experience fast and lightweight. It was a large, detail-oriented project that required precision, consistency, and a strong understanding of Shopify’s theme system.
          </p>
        </section>
        <section className="project-image-full reveal-on-scroll">
          <img src={smart2} alt="Smart Coop Farm - Second Screenshot" />
        </section>
        <section className="project-image-full reveal-on-scroll">
          <img src={smart3} alt="Smart Coop Farm - Second Screenshot" />
        </section>

        <section className="project-big-text reveal-on-scroll">
        <h2 className="big-quote">
          I really enjoy watching designs come to life — turning static layouts into fully functional, interactive pages is the part of development that inspires me most.
        </h2>

        <p className="small-description">
          The team also provided excellent support throughout the build. They shared all the images and assets we needed, and anytime we requested a higher-quality version or an additional visual, they delivered it quickly. Having consistent, well-prepared content made the development process much smoother and helped the final website feel cohesive and polished.
        </p>
      </section>
      <section className="project-video-full reveal-on-scroll">
        <video
          src="/smartvideo1.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </section>
      <section className="project-button-section reveal-on-scroll">
        <a href="https://smart.coop.farm" target="_blank" className="project-button">
          Check it out →
        </a>
      </section>
      </section>
    </>
  );
}

