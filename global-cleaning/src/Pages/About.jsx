import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import team from '../assets/team.jpg'
import lessBubbles from '../assets/lessbubbles.jpeg';

const About = () => {
  const values = [
    {
      icon: <Shield className="text-accent" size={32} />,
      title: "Quality & Reliability",
      description: "We deliver consistent, high-quality cleaning services that our clients can depend on, every single time."
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Customer-Centric",
      description: "We listen to our clients' needs and tailor our services to exceed their expectations."
    },
    {
      icon: <Award className="text-accent" size={32} />,
      title: "Professionalism",
      description: "Our trained staff maintains the highest standards of conduct, appearance, and skill."
    },
    {
      icon: <Clock className="text-accent" size={32} />,
      title: "Timeliness",
      description: "We respect your schedule and ensure our services are delivered promptly and efficiently."
    }
  ];

  return (
    <div style={{ 
      backgroundImage: `url(${lessBubbles})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black mb-4 font-libre">About Us</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Professional cleaning solutions with a focus on quality, reliability, and customer satisfaction.
          </p>
        </div>
      </div>
      
      {/* Obout Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm text-white">
              <h2 className="text-3xl font-bold mb-6 font-libre">About Us</h2>
              <p className="mb-4 text-lg">
                Global Cleaning Services was founded with a simple mission: to provide exceptional cleaning services 
                that create healthier, more comfortable environments for our clients.
              </p>
              <p className="mb-4">
                What began as a small local operation has grown into a trusted cleaning service provider, 
                serving homes and businesses throughout the region. Our growth is built on our commitment to quality and 
                our dedication to customer satisfaction.
              </p>
              <p>
                Today, we continue to expand our services while maintaining the personal touch and attention to detail 
                that set us apart from other cleaning companies. Our team of experienced professionals is committed to 
                delivering the highest standards of cleanliness and hygiene.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={team}
                alt="Our Cleaning Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 text-black">
            <h2 className="text-3xl font-bold mb-4 font-libre">Our Values</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
            <p className="mt-6 max-w-3xl mx-auto">
              At Global Cleaning Services, our values guide everything we do. They shape our approach to 
              cleaning, our relationship with clients, and our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm rounded-lg shadow-md p-6 text-center text-white">
                <div className="bg-primary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-libre">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 text-white bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-libre">Ready to Experience Our Services?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join our satisfied customers and discover the difference professional cleaning can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded font-semibold transition-colors backdrop-blur-sm">
              Explore Our Services
            </Link>
            <Link to="/book-now" className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded font-semibold transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;