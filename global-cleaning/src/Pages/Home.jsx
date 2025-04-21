// src/pages/HomePage.jsx
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import WhyChooseUs from '../components/WhyChooseUs';
import { Home, Briefcase, Bug, Car, Wind } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const services = [
    {
      title: "Domestic Cleaning",
      description: "Creating clean, safe, and comfortable living spaces with regular or deep cleaning services.",
      icon: <Home className="text-primary" size={24} />,
      link: "/services#domestic"
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning for offices, retail spaces, healthcare facilities, and industrial settings.",
      icon: <Briefcase className="text-primary" size={24} />,
      link: "/services#commercial"
    },
    {
      title: "Fumigation & Pest Control",
      description: "Targeted solutions to protect your property from pests using safe, eco-friendly methods.",
      icon: <Bug className="text-primary" size={24} />,
      link: "/services#fumigation"
    },
    {
      title: "Car Interior Cleaning",
      description: "Detailed cleaning that refreshes and protects your vehicle's cabin.",
      icon: <Car className="text-primary" size={24} />,
      link: "/services#car"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Their house cleaning service is excellent. The team is always punctual, thorough, and professional. My home has never looked better!"
    },
    {
      name: "Michael Williams",
      role: "Office Manager",
      text: "We've been using their commercial cleaning services for our office for two years now. The consistency and quality are outstanding."
    },
    {
      name: "Emily Davis",
      role: "Property Manager",
      text: "Their end-of-tenancy cleaning service is a lifesaver. Properties are always spotless and ready for new tenants quickly."
    }
  ];

  return (
    <div>
      <Hero />
      <Overview />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-libre">Our Services</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
            <p className="mt-6 max-w-3xl mx-auto">
              We offer a comprehensive range of cleaning solutions tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded font-semibold transition-colors inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2 text-accent">500+</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-accent">1000+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-accent">50+</h3>
              <p>Team Members</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-accent">5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-libre">What Our Clients Say</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-xl">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-darktext/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-darktext/80">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-libre">Ready for a Cleaner Environment?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Book our professional cleaning services today and experience the difference quality cleaning can make.
          </p>
          <Link to="/book-now" className="bg-accent hover:bg-opacity-90 text-primary px-8 py-3 rounded font-semibold transition-colors inline-block">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;