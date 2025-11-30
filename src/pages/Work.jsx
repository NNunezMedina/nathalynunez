import "./Work.css";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <section id="work" className="work-container page-wrapper">
      {/* Left Side - Description */}
      <div className="work-left">
        <h2>WORK</h2>
        <p>
          This is a selection of projects I've worked on in Shopify Development
          and Front-End Web Development. Each one focuses on performance,
          clean architecture and modern eCommerce experiences.
        </p>

        <p>
          From custom themes to optimized product pages, I help brands launch
          and scale their online stores with thoughtful, conversion-focused design.
        </p>
      </div>

      {/* Right Side - Project Links */}
      <div className="work-right">
        <Link to="/smart-coop-farm" className="work-item">
          SMART COOP FARM
        </Link>
      </div>
    </section>
  );
}

