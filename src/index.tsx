// src/App.tsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FormPage from './FormPage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        {/* Define routes for other pages if needed */}
        {/* <Route path="/second-page" element={<SecondPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
