// src/components/PaperSelection/PaperSelection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PaperSelection.css';

// Define props interface
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
      <h2>Choose Number of Paper</h2>
      <div className="paper-grid">
        {papers.map((paper) => (
          <Link 
            to={`/paper/${paper.id}`} 
            key={paper.id}
            className="paper-card"
          >
            {paper.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaperSelection;