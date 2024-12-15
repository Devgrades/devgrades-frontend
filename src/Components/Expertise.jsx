import React from 'react';
import '../styles/Expertise.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const Expertise = () => {
  return (
    <section className="expertise" id="services">
      <div className="expertise__block">
        <h2>Front-End Craftsmanship</h2>
        <p>We create seamless user interfaces with React, Redux, and modern JavaScript, ensuring exceptional user experiences and blazing-fast performance.</p>
        <div className="expertise__icons">
          <FaReact size={48} />
        </div>
      </div>
      <div className="expertise__block">
        <h2>Back-End Engineering</h2>
        <p>Our back-end solutions leverage Express.js, Node.js, and robust databases, delivering scalable and secure server-side applications and APIs.</p>
        <div className="expertise__icons">
          <FaNodeJs size={48} />
        </div>
      </div>
    </section>
  );
};

export default Expertise;