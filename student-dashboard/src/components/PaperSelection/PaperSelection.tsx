// src/components/PaperSelection/PaperSelection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PaperSelection.css';

interface PaperSelectionProps {
  papers: {
    id: number;
    title: string;
    driveLink: string;
  }[];
}

const PaperSelection: React.FC<PaperSelectionProps> = ({ papers }) => {
  return (
    <div className="paper-selection">
      <h2 className="section-title">Choose Number of Paper</h2>
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