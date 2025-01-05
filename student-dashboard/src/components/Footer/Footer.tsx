// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="creator-info">
          <span className="created-by">Created By :</span>
          <span className="creator-name">Asitha Udara Deshapriya</span>
        </div>
        <div className="copyright">
          <span className="copyright-text">All Rights Reserved</span>
          <span className="year">© {new Date().getFullYear()}</span>
        </div>
      </div>
      <div className="footer-animation"></div>
    </footer>
  );
};

export default Footer;