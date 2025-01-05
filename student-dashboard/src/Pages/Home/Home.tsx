import React from 'react';
import Header from '../../components/Header/Header';
import PaperSelection from '../../components/PaperSelection/PaperSelection';
import { papers } from '../../data/mockData';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <PaperSelection papers={papers} />
    </div>
  );
};

export default Home;