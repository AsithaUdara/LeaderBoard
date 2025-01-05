// src/components/PaperSelection/PaperSelection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PaperSelection.css';

const PaperSelection: React.FC = () => {
  const papers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Paper ${i + 1}`
  }));

  return (
    <div className="paper-selection">
      <h2 className="section-title">Choose Your Paper</h2>
      <div className="paper-grid">
        {papers.map((paper) => (
          <Link 
            to={`/paper/${paper.id}`} 
            key={paper.id}
            className="paper-card"
          >
            <div className="card-content">
              <span className="paper-number">{paper.id}</span>
              <h3 className="paper-title">{paper.title}</h3>
              <div className="card-decoration"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaperSelection;