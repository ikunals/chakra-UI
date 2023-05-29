import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head';
import Home from './components/Home';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
