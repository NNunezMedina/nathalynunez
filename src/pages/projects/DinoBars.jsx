import "./DinoBars.css";
import { useEffect } from "react";

export default function DinoBars() {
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
        <h1 className="hero-title">DINO BARS</h1>
      </section>

      <section className="project-description page-wrapper ">
        <p className="project-intro reveal-on-scroll">
          A custom Shopify build featuring a fully bespoke bundle builder, modular pages, and highly flexible sections developed with pixel-perfect execution.
        </p>

        <div className="project-info-grid">
          <div className="reveal-on-scroll">
            <h4>ROLE</h4>
            <p>Shopify Theme Developer</p>
          </div>

          <div className="reveal-on-scroll">
            <h4>RESPONSIBILITIES</h4>
            <p>
              Custom bundle builder,
              Pixel-perfect development,
              Responsive dual layouts,
              AJAX cart logic,
              Modular content sections,
              Homepage & About,
            </p>
          </div>

          <div className="reveal-on-scroll">
            <h4>URL</h4>
            <a href="https://dinobars.com/pages/bundle-builder" target="_blank">
              dino.bars
            </a>
          </div>
        </div>
      </section>

      <section className="project-video-full ">
        <video
          src="https://res.cloudinary.com/dzlel4ncg/video/upload/v1765063055/dinobarsvideo_utcgal.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </section>
    </>
  );
}
