// src/pages/PaperDetails/PaperDetails.tsx
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';
import BarChart from '../../components/BarChart/BarChart';
import { papers, getStudentMarksForPaper } from '../../data/mockData';
import './PaperDetails.css';

const PaperDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const paperId = parseInt(id || '1');
  const currentPaper = papers.find(p => p.id === paperId);
  const paperStudents = getStudentMarksForPaper(paperId);

  if (!currentPaper) {
    return <Navigate to="/" replace />;
  }

  if (!currentPaper.isAvailable) {
    return (
      <div className="paper-details">
        <Header />
        <div className="paper-header">
          <h2>Paper {id}</h2>
        </div>
        <div className="coming-soon">
          <h3>Coming Soon</h3>
          <p>This paper's results are not yet available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="paper-details">
      <Header />
      <div className="paper-header">
        <h2>Paper {id}</h2>
      </div>
      <div className="content">
        <div className="leaderboard-section">
          <LeaderBoard students={paperStudents} />
        </div>
        <div className="chart-section">
          <BarChart students={paperStudents} />
        </div>
      </div>
    </div>
  );
};

export default PaperDetails;