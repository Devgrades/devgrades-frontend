import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Devgrades</h2>
      <p>At Devgrades, we believe in delivering digital solutions that delight users and drive growth. Our team of designers, engineers, and strategists combines technical excellence with creative thinking.</p>
      <img src="/images/team.jpg" alt="Devgrades Team" className="about__image"/>
    </section>
  );
};

export default About;