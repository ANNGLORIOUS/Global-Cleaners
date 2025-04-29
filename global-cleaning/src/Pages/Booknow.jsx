import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import lessBubbles from '../assets/lessbubbles.jpeg';

const Booknow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };
  
  return (
    <div 
      className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${lessBubbles})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-darktext font-libre">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 font-bai">
            Get in touch with our team for any inquiries or to schedule a cleaning service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary font-libre mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-accent mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-darktext font-bai">Our Location</h3>
                  <p className="text-gray-600 mt-1">123 Cleaning Street, Clean City, CC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-accent mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-darktext font-bai">Phone</h3>
                  <p className="text-gray-600 mt-1">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-accent mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-darktext font-bai">Email</h3>
                  <p className="text-gray-600 mt-1">info@globalcleaningservices.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-accent mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-darktext font-bai">Business Hours</h3>
                  <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg p-4">
              <h3 className="font-semibold text-primary font-bai">Service Areas</h3>
              <p className="text-gray-600 mt-2">
                We proudly serve residential and commercial clients within a 50-mile radius of Clean City.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary font-libre mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-success bg-opacity-10 border border-success text-success p-4 rounded-md text-center">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="mt-1">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-bai">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-bai">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-bai">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 font-bai">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-bai">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border"
                    required
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-opacity-90 text-black font-medium py-2 px-6 rounded-md transition duration-200 font-bai"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;