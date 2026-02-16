import React from "react";
import portfolioData from "../data/portfolio.json";

const PortfolioItem = ({ headline, href, imgSlug, date }) => {
  return (
    <div className="portfolio-item">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={`${process.env.PUBLIC_URL}/portfolio/${imgSlug}`}
          alt={headline}
          loading="lazy"
        />
      </a>

      <p>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {headline}
        </a>
        <span>{date}</span>
      </p>
    </div>
  );
};

function Portfolio() {
  return (
    <div className="wrapper portfolio">
      <div className="text">
        <h2>Portfolio</h2>
        <p className="body">
          Here are a few of my favorite projects. If you hit a paywall and are
          unable to view, please{" "}
          <a href="mailto:contact.shelly.tan@gmail.com">
            get in touch with me
          </a>{" "}
          and I can send you examples directly.
        </p>
      </div>

      <div className="grid">
        {portfolioData.map((item) => (
          <PortfolioItem key={item.imgSlug} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;