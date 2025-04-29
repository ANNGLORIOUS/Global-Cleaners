import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Home, Briefcase, Bug, Car, Wind, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Service categories data
  const serviceCategories = [
    { id: 'domestic', name: 'Domestic Cleaning', icon: <Home size={16} /> },
    { id: 'commercial', name: 'Commercial Cleaning', icon: <Briefcase size={16} /> },
    { id: 'fumigation', name: 'Fumigation & Pest Control', icon: <Bug size={16} /> },
    { id: 'car', name: 'Car Interior Cleaning', icon: <Car size={16} /> },
    { id: 'dusting', name: 'Dusting Services', icon: <Wind size={16} /> },
    { id: 'specialized', name: 'Specialized Services', icon: <Droplets size={16} /> }
  ];

  // Mobile dropdown toggle
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  // Handle service link click with smooth scrolling
  const handleServiceLinkClick = (categoryId) => {
    setDropdownOpen(false);
    setIsOpen(false);
    
    // Navigate to services page if not already there
    if (!window.location.pathname.includes('/services')) {
      navigate(`/services#${categoryId}`);
    } else {
      // Update URL hash
      window.history.pushState(null, '', `#${categoryId}`);
      
      // Scroll to the correct section with offset
      setTimeout(() => {
        const element = document.getElementById(categoryId);
        if (element) {
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="bg-[blue] text-black shadow-md">
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
              <h1 className="text-2xl font-bold font-libre">GLOBAL CLEANING</h1>
              <p className="text-xs">Cleaning & Fumigation Services</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">HOME</Link>
            <Link to="/about" className="hover:text-accent transition-colors">ABOUT</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center hover:text-accent transition-colors focus:outline-none"
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                SERVICES <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div 
                  className="absolute z-50 mt-2 w-64 bg-white rounded-md shadow-lg py-1 text-black"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button 
                    onClick={() => handleServiceLinkClick('all')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-primary/10 font-semibold"
                  >
                    All Services
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  {serviceCategories.map((category) => (
                    <button 
                      key={category.id}
                      onClick={() => handleServiceLinkClick(category.id)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-primary/10"
                    >
                      <span className="mr-2 text-primary">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/blogs" className="hover:text-accent transition-colors">BLOGS</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">CONTACT</Link>
          </div>
          
          {/* Phone and Book Now */}
          <div className="hidden md:flex items-center space-x-4">
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
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full hover:text-accent"
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                >
                  <span>SERVICES</span>
                  <ChevronDown size={16} className={`transition-transform ${mobileServiceOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServiceOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    <button 
                      onClick={() => handleServiceLinkClick('all')} 
                      className="block w-full text-left hover:text-accent text-sm font-semibold"
                    >
                      All Services
                    </button>
                    {serviceCategories.map((category) => (
                      <button 
                        key={category.id}
                        onClick={() => handleServiceLinkClick(category.id)}
                        className="flex items-center w-full text-left hover:text-accent text-sm"
                      >
                        <span className="mr-2 text-primary">{category.icon}</span>
                        {category.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
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