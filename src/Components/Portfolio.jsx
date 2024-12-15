import React from 'react';
import '../styles/Portfolio.css';

const projects = [
  {
    title: "E-Commerce SPA",
    type: "Front-End",
    description: "A sleek online store built with React, Redux, and a REST API backend. Features instant product filtering and a responsive design.",
    tech: ["React", "Redux", "CSS Modules"],
    image: "/images/ecommerce.png"
  },
  {
    title: "Real-Time Dashboard",
    type: "Front-End",
    description: "An analytics dashboard using Redux Toolkit and Chart.js for real-time data visualization.",
    tech: ["React", "Redux Toolkit", "Chart.js"],
    image: "/images/dashboard.png"
  },
  {
    title: "RESTful API for Social Media",
    type: "Back-End",
    description: "A Node.js and Express.js API with JWT auth and MongoDB persistence.",
    tech: ["Express.js", "Node.js", "MongoDB"],
    image: "/images/api.png"
  },
  {
    title: "Authentication Microservice",
    type: "Back-End",
    description: "A microservice handling OAuth2/JWT auth, built on Express and Node.js.",
    tech: ["Express.js", "Node.js", "OAuth2"],
    image: "/images/auth-service.png"
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="work">
      <h2>Our Work</h2>
      <div className="portfolio__grid">
        {projects.map((proj, index) => (
          <div className="portfolio__card" key={index}>
            <img src={proj.image} alt={proj.title} className="portfolio__image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="portfolio__tech">
              {proj.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;