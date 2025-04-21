import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import BookNowPage from './pages/BookNowPage';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <Router>
      <div className="font-bai bg-background text-darktext min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-now" element={<BookNowPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
