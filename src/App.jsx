import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkoutPlans from './components/WorkoutPlans';
import Dashboard from './components/Dashboard';
import ExerciseLibrary from './components/ExerciseLibrary';
import ProgressTracker from './components/ProgressTracker';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <Router>
      <div className="min-h-screen bg-dark-900">
        <Navbar currentView={currentView} setCurrentView={setCurrentView} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <WorkoutPlans />
              <Footer />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercises" element={<ExerciseLibrary />} />
          <Route path="/progress" element={<ProgressTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
