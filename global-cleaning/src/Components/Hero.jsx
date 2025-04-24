import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[70vh]">
      <div className="absolute inset-0 bg-[url('/images/cleaning-hero.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="bg-primary inline-block px-4 py-2 rounded">
            <p className="text-black">100% Genuine Services</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mt-6 font-libre">
            Welcome To Global <br />
            Cleaning Services
          </h1>
          <p className="text-xl text-black mt-4">
            Professional cleaning services for homes, businesses, and specialized environments
          </p>
          <div className="mt-8 flex space-x-4">
            <Link to="/services" className="bg-accent hover:bg-opacity-90 text-black px-8 py-3 rounded font-semibold transition-colors">
              Explore Our Services
            </Link>
            <Link to="/contact" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;