import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';
import BarChart from '../../components/BarChart/BarChart';
import { students } from '../../data/mockData';
import './PaperDetails.css';

const PaperDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="paper-details">
      <Header />
      <div className="paper-header">
        <h2>Paper {id}</h2>
      </div>
      <div className="content">
        <div className="leaderboard-section">
          <LeaderBoard students={students} />
        </div>
        <div className="chart-section">
          <BarChart students={students} />
        </div>
      </div>
    </div>
  );
};

export default PaperDetails;