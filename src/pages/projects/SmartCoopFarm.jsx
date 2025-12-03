import "./SmartCoopFarm.css";

export default function SmartCoopFarm() {
  return (
    <>
      {/* HERO */}
      <section className="project-hero page-wrapper">
        <div className="black-drop"></div>
        <h1 className="hero-title">SMART COOP FARM</h1>
      </section>

      {/* SECCIÓN DESCRIPTIVA */}
      <section className="project-description page-wrapper">
        <p className="project-intro">
          A Shopify e-commerce built for Smart Coop Farm, focused on 
          clean architecture, custom theme development and scalable performance.
        </p>

        <div className="project-info-grid">
          <div>
            <h4>ROLE</h4>
            <p>Frontend Development</p>
          </div>

          <div>
            <h4>RESPONSIBILITIES</h4>
            <p>
              Theme Development, Shopify Setup, Performance Improvements,
              Custom Sections, UX Enhancements, Launch.
            </p>
          </div>

          <div>
            <h4>URL</h4>
            <a href="https://smart.coop.farm" target="_blank">
              smart.coop.farm
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

