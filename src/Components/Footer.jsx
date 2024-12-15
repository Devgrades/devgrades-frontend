import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Devgrades. All Rights Reserved.</div>
      <div className="footer__links">
        <a href="https://twitter.com/devgrades" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com/devgrades" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;