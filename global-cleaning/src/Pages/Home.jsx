import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero';
import Overview from '../Components/Overview';
import WhyChooseUs from '../Components/WhyChooseUs';
import { HomeIcon, Briefcase, Bug, Car } from 'lucide-react';
import ServiceCard from '../Components/ServiceCard';
import { Link } from 'react-router-dom';
import bubblesImage from '../assets/bubblesimage.jpeg';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  /* ───────────────────────────
     Auto‑slide effect
  ─────────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 8000); // Change slide every 8 s
    return () => clearInterval(interval);
  }, []);

  const goToSlide   = (i) => setActiveSlide(i);
  const goToPrev    = () => setActiveSlide((p) => (p === 0 ? totalSlides - 1 : p - 1));
  const goToNext    = () => setActiveSlide((p) => (p === totalSlides - 1 ? 0 : p + 1));

  const services = [
    {
      title: 'Domestic Cleaning',
      description: 'Creating clean, safe, and comfortable living spaces with regular or deep cleaning services.',
      icon: <HomeIcon className="text-primary" size={24} />,
      link: '/services#domestic',
    },
    {
      title: 'Commercial Cleaning',
      description: 'Professional cleaning for offices, retail spaces, healthcare facilities, and industrial settings.',
      icon: <Briefcase className="text-primary" size={24} />,
      link: '/services#commercial',
    },
    {
      title: 'Fumigation & Pest Control',
      description: 'Targeted solutions to protect your property from pests using safe, eco‑friendly methods.',
      icon: <Bug className="text-primary" size={24} />,
      link: '/services#fumigation',
    },
    {
      title: 'Car Interior Cleaning',
      description: "Detailed cleaning that refreshes and protects your vehicle's cabin.",
      icon: <Car className="text-primary" size={24} />,
      link: '/services#car',
    },
  ];

  return (
    /* ───────────────────────────
       FULL‑PAGE BACKGROUND WRAPPER
    ─────────────────────────── */
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bubblesImage})` }}
    >
      {/* SLIDER + NAV ARROWS + DOTS */}
      <div className="relative">
        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-screen"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {/* ─── Slide 1: Hero ─── */}
          <div className="min-w-full h-full flex items-center">
            <div className="container mx-auto px-4">
              <Hero />
            </div>
          </div>

          {/* ─── Slide 2: Overview ─── */}
          <div className="min-w-full h-full flex items-center">
            <div className="container mx-auto px-4">
              <Overview />
            </div>
          </div>

          {/* ─── Slide 3: Services ─── */}
          <div className="min-w-full h-full flex items-center">
            <div className="container mx-auto px-4">
              <section className="py-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 font-libre text-black">
                    Our Services
                  </h2>
                  <div className="h-1 w-24 bg-accent mx-auto" />
                  <p className="mt-6 max-w-3xl mx-auto text-black">
                    We offer a comprehensive range of cleaning solutions tailored to meet your specific needs.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((s, i) => (
                    <ServiceCard key={i} {...s} />
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Link
                    to="/services"
                    className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded font-semibold transition-colors inline-block"
                  >
                    View All Services
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* ─── Slide 4: Achievements ─── */}
          <div className="min-w-full h-full flex items-center">
            <div className="container mx-auto px-4">
              <section className="py-16 text-black">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 font-libre">Our Achievements</h2>
                  <div className="h-1 w-24 bg-accent mx-auto" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { value: '500+', label: 'Happy Clients' },
                    { value: '1000+', label: 'Projects Completed' },
                    { value: '50+', label: 'Team Members' },
                    { value: '5+', label: 'Years Experience' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-lg"
                    >
                      <h3 className="text-4xl font-bold mb-2 text-accent">{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* ─── Slide 5: Why Choose Us ─── */}
          <div className="min-w-full h-full flex items-center">
            <div className="container mx-auto px-4">
              <WhyChooseUs />
            </div>
          </div>
        </div>

        {/* ← Arrow */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-opacity-90 z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* → Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-opacity-90 z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 inset-x-0 flex justify-center space-x-2 z-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${i === activeSlide ? 'bg-accent' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
