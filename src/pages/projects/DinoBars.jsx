import "./DinoBars.css";
import { useEffect } from "react";
import celular4 from "../../assets/celular4.png"; 

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
              dino.bars.bundle.builder
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
       <section className="project-phone-section page-wrapper">
        <div className="phone-text reveal-on-scroll">
          <h2>Mobile bundle experience</h2>
          <p>
            The bundle builder was designed with a dedicated mobile layout, making it easy
            to browse flavors, adjust quantities, and see discounts update in real time.
            This video shows the fully functional flow inside the Shopify theme.
          </p>
        </div>

        <div className="phone-frame">
        <img src={celular4} alt="Dino Bars mobile bundle builder" />

        <iframe
          className="phone-video"
          src="https://player.cloudinary.com/embed/?cloud_name=dzlel4ncg&public_id=dinobarscell_mfwt1c&profile=cld-looping"
          width="640"
          height="360"
          style={{ height: "93%", width: "82%" }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>
      </section>

      <section className="project-button-section reveal-on-scroll">
        <a href="https://dinobars.com/?srsltid=AfmBOoos80NFCHlTRHjT2yZYmqWP9FI7PxgWjsrIUfkJF-3pssosP0il" target="_blank" className="project-button">
          Check it out →
        </a>
      </section>
    </>
  );
}
