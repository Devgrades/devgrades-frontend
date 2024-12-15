import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Building Digital Experiences That Inspire</h1>
        <p>Front-End & Back-End Solutions Tailored to Your Brand</p>
        <a className="hero__cta" href="#contact">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;