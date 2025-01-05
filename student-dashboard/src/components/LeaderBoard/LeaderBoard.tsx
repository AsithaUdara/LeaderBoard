// src/components/LeaderBoard/LeaderBoard.tsx
import React from 'react';
import './LeaderBoard.css';

const LeaderBoard: React.FC<{ students: Student[] }> = ({ students }) => {
  const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);

  const getTrophyIcon = (position: number) => {
    switch (position) {
      case 1:
        return (
          <svg className="trophy gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 6.5C5 5.67157 5.67157 5 6.5 5H17.5C18.3284 5 19 5.67157 19 6.5V8C19 10.7614 16.7614 13 14 13H10C7.23858 13 5 10.7614 5 8V6.5Z"/>
            <path d="M7 5V4.5C7 3.67157 7.67157 3 8.5 3H15.5C16.3284 3 17 3.67157 17 4.5V5"/>
            <path d="M7 13.5V13.5C7 14.8807 8.11929 16 9.5 16H14.5C15.8807 16 17 14.8807 17 13.5V13.5"/>
            <path d="M12 16V19M12 19H9M12 19H15"/>
            <path d="M9 21H15"/>
          </svg>
        );
      case 2:
        return (
          <svg className="trophy silver" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 6.5C5 5.67157 5.67157 5 6.5 5H17.5C18.3284 5 19 5.67157 19 6.5V8C19 10.7614 16.7614 13 14 13H10C7.23858 13 5 10.7614 5 8V6.5Z"/>
            <path d="M7 5V4.5C7 3.67157 7.67157 3 8.5 3H15.5C16.3284 3 17 3.67157 17 4.5V5"/>
            <path d="M7 13.5V13.5C7 14.8807 8.11929 16 9.5 16H14.5C15.8807 16 17 14.8807 17 13.5V13.5"/>
            <path d="M12 16V19M12 19H9M12 19H15"/>
            <path d="M9 21H15"/>
          </svg>
        );
      case 3:
        return (
          <svg className="trophy bronze" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 6.5C5 5.67157 5.67157 5 6.5 5H17.5C18.3284 5 19 5.67157 19 6.5V8C19 10.7614 16.7614 13 14 13H10C7.23858 13 5 10.7614 5 8V6.5Z"/>
            <path d="M7 5V4.5C7 3.67157 7.67157 3 8.5 3H15.5C16.3284 3 17 3.67157 17 4.5V5"/>
            <path d="M7 13.5V13.5C7 14.8807 8.11929 16 9.5 16H14.5C15.8807 16 17 14.8807 17 13.5V13.5"/>
            <path d="M12 16V19M12 19H9M12 19H15"/>
            <path d="M9 21H15"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="leaderboard-list">
        {sortedStudents.map((student, index) => (
          <div key={student.id} className={`leaderboard-item ${index < 3 ? 'top-three' : ''}`}>
            <div className="rank-container">
              {getTrophyIcon(index + 1)}
              <span className="rank">#{index + 1}</span>
            </div>
            <span className="name">{student.name}</span>
            <span className="marks">{student.marks}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;