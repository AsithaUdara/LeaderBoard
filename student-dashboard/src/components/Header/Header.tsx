// src/components/Header/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Students Marks</h1>
        <a 
          href="https://drive.google.com/your-drive-link-here" 
          className="download-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Past Papers
          <span className="btn-shine"></span>
        </a>
      </div>
      <div className="header-decoration"></div>
    </header>
  );
};

export default Header;