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
            observer.unobserve(entry.target); // solo anima una vez
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
          A Shopify e-commerce built for Smart Coop Farm, focused on 
          clean architecture, custom theme development and scalable performance.
        </p>

        <div className="project-info-grid">
          <div className="reveal-on-scroll">
            <h4>ROLE</h4>
            <p>Frontend Development</p>
          </div>

          <div className="reveal-on-scroll">
            <h4>RESPONSIBILITIES</h4>
            <p>
              Theme Development, Shopify Setup, Performance Improvements,
              Custom Sections, UX Enhancements, Launch.
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
            This was a really fun, collaborative project between myself and the Smart 
            Coop Farm team. They were looking for someone to help create a custom 
            Shopify theme that had more personality and flexibility than the usual 
            templates you see out there.
          </p>

          <p>
            After reviewing their ideas and brand direction, I started building the 
            theme architecture first. The intention was to keep the CMS easy to manage, 
            allowing their team to edit and update the website without relying on heavy 
            apps or complicated configurations.
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
          I really enjoy being able to define the content management system
          structure of a website, systems are just my thing.
        </h2>

        <p className="small-description">
          Paul was also so willing to do what was needed for the content, which was
          a dream to work with. He created 10-second clips of his best videos in no
          time and uploaded them to Vimeo for the home page carousel with
          auto-playing video backgrounds. His amazing content really made this
          website what it is.
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

