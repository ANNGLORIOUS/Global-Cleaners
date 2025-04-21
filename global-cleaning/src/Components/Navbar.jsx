import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-2">
              <h1 className="text-2xl font-bold font-libre">GLOBAL</h1>
              <p className="text-xs">Cleaning & Fumigation Services</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">HOME</Link>
            <Link to="/about" className="hover:text-accent transition-colors">ABOUT</Link>
            <Link to="/services" className="hover:text-accent transition-colors">SERVICES</Link>
            <Link to="/blogs" className="hover:text-accent transition-colors">BLOGS</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">CONTACT</Link>
          </div>
          
          {/* Phone and Book Now */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+123 456 7890</span>
            </div>
            <Link to="/book-now" className="bg-accent hover:bg-opacity-80 text-primary font-semibold px-6 py-2 rounded transition-colors">
              Book Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-accent" onClick={() => setIsOpen(false)}>HOME</Link>
              <Link to="/about" className="hover:text-accent" onClick={() => setIsOpen(false)}>ABOUT</Link>
              <Link to="/services" className="hover:text-accent" onClick={() => setIsOpen(false)}>SERVICES</Link>
              <Link to="/blogs" className="hover:text-accent" onClick={() => setIsOpen(false)}>BLOGS</Link>
              <Link to="/contact" className="hover:text-accent" onClick={() => setIsOpen(false)}>CONTACT</Link>
              <div className="flex items-center mt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>+123 456 7890</span>
              </div>
              <Link 
                to="/book-now" 
                className="bg-accent text-primary font-semibold px-4 py-2 rounded text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;