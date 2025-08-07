import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Notes from './pages/Notes';
import Videos from './pages/Videos';
import ContactUs from './pages/ContactUs';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
