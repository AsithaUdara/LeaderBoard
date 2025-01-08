// src/components/BarChart/BarChart.tsx
import React from 'react';
import { Student } from '../../types';
import './BarChart.css';

interface BarChartProps {
  students: Student[];
}

const BarChart: React.FC<BarChartProps> = ({ students }) => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B5DE5', '#F15BB5', '#00BBF9', '#00F5D4'
  ];

  return (
    <div className="bar-chart">
      <h2>Student Performance</h2>
      <div className="chart-container">
        <div className="y-axis">
          {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map((mark) => (
            <div key={mark} className="y-mark">
              <span>{mark}%</span>
              <div className="grid-line"></div>
            </div>
          ))}
        </div>
        <div className="chart">
    {students.map((student, index) => (
      <div key={student.id} className="bar-column">
        <div className="bar-wrapper">
          <div 
            className="bar" 
            style={{ 
              height: `calc(${student.marks}% - 2px)`, // Subtract border width if any
              backgroundColor: colors[index % colors.length]
            }}
          >
            <span className="marks-label">{student.marks}%</span>
          </div>
        </div>
        <span className="name-label">{student.name}</span>
      </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;