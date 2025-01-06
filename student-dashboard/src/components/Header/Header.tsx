// src/components/Header/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Students Marks</h1>
        <a 
          href="https://drive.google.com/drive/folders/1kaJsqi0pD8O6RRp7ifCJXCna0z2UHRI_?usp=drive_link" 
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