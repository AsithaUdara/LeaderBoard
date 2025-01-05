// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PaperDetails from './Pages/PaperDetails/PaperDetails';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paper/:id" element={<PaperDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;