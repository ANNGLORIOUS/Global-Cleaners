import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import React from 'react'; 

const Footer = () => {
  return (
    <footer className="bg-[blue] text-black pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-libre">GLOBAL</h3>
            <p className="mb-4">
              Professional cleaning services for homes, businesses, and specialized environments using eco-friendly products.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-libre">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-libre">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-accent transition-colors">Domestic Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Commercial Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Fumigation & Pest Control</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Car Interior Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Dusting Services</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-libre">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>info@globalcleaning.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>123 Cleaning Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Global Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;