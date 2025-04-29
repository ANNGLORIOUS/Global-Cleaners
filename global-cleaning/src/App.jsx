import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Blogs from './Pages/Blogs';
import Contacts from './Pages/Contacts';
import Booknow from './Pages/Booknow';
import FloatingButtons from './Components/FloatingButtons';



function App() {
  return (
    <Router>
      <div className="font-bai bg-background text-darktext min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/book-now" element={<Booknow />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
