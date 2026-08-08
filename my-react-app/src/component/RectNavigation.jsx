import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Simple Component Views
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Links to switch routes smoothly */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        {/* Define paths and their matching elements */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Catch-all route for any undefined path (404 page) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
