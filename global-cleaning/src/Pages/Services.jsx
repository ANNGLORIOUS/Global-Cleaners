import React from 'react';
import { useState, useEffect } from 'react';
import { Home, Briefcase, Bug, Car, Wind, Droplets, Check } from 'lucide-react';
import services from '../assets/services.jpeg'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && categories.some(cat => cat.id === hash)) {
        setActiveCategory(hash);
        
        
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const yOffset = -80; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    };

   
    handleHashChange();
    
    
    window.addEventListener('hashchange', handleHashChange);
    
 
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'domestic', name: 'Domestic Cleaning', icon: <Home size={20} /> },
    { id: 'commercial', name: 'Commercial Cleaning', icon: <Briefcase size={20} /> },
    { id: 'fumigation', name: 'Fumigation & Pest Control', icon: <Bug size={20} /> },
    { id: 'car', name: 'Car Interior Cleaning', icon: <Car size={20} /> },
    { id: 'dusting', name: 'Dusting Services', icon: <Wind size={20} /> },
    { id: 'specialized', name: 'Specialized Services', icon: <Droplets size={20} /> }
  ];
  
  const servicesData = {
    domestic: [
      { 
        title: 'Regular House Cleaning', 
        description: 'Dusting, vacuuming, mopping, and thorough cleaning of bathrooms and kitchens.'
      },
      { 
        title: 'Dusting Services', 
        description: 'Removing dust from furniture, shelves, baseboards, light fixtures, and other surfaces to maintain a healthy living environment.'
      },
      { 
        title: 'Deep Cleaning', 
        description: 'Detailed cleaning of hard-to-reach areas, including behind furniture, under appliances, and inside cabinets.'
      },
      { 
        title: 'End-of-tenancy Cleaning', 
        description: 'Preparing properties for new tenants with a full-service deep clean.'
      },
      { 
        title: 'Carpet and Upholstery Cleaning', 
        description: 'Removing stains, refreshing fabrics, and extending the life of carpets and furniture.'
      },
      { 
        title: 'Window Cleaning', 
        description: 'Cleaning interior windows and glass surfaces for a spotless finish.'
      },
      { 
        title: 'Post-renovation Cleaning', 
        description: 'Clearing dust and debris after construction or remodeling projects.'
      }
    ],
    commercial: [
      { 
        title: 'Office Cleaning', 
        description: 'Dusting desks, sanitizing communal areas, cleaning restrooms, and maintaining kitchens.'
      },
      { 
        title: 'Retail Cleaning', 
        description: 'Keeping shop floors, displays, and fitting rooms pristine and customer-ready.'
      },
      { 
        title: 'Healthcare Facility Cleaning', 
        description: 'Specialized sanitization of clinics, hospitals, and medical equipment to meet hygiene standards.'
      },
      { 
        title: 'Industrial Cleaning', 
        description: 'Cleaning warehouses, factories, machinery, and production areas.'
      },
      { 
        title: 'Specialized Cleaning', 
        description: 'Including high-rise window cleaning, data center cleaning, and other sensitive environment solutions.'
      }
    ],
    fumigation: [
      { 
        title: 'Termite Control', 
        description: 'Effective solutions for preventing and treating termite infestations.'
      },
      { 
        title: 'Bedbug Extermination', 
        description: 'Comprehensive treatment to eliminate bedbugs from homes and businesses.'
      },
      { 
        title: 'Cockroach and Ant Elimination', 
        description: 'Targeted treatments to rid your property of common insect pests.'
      },
      { 
        title: 'Mosquito Control', 
        description: 'Reducing mosquito populations around your property for a more comfortable environment.'
      },
      { 
        title: 'Rodent Management', 
        description: 'Safe and humane methods to keep mice, rats, and other rodents away from your property.'
      }
    ],
    car: [
      { 
        title: 'Vacuuming', 
        description: 'Thorough cleaning of seats, carpets, mats, and trunk areas.'
      },
      { 
        title: 'Leather Treatment', 
        description: 'Cleaning and conditioning of leather surfaces to maintain appearance and extend lifespan.'
      },
      { 
        title: 'Dashboard and Console Cleaning', 
        description: 'Removing dust, stains, and fingerprints from interior surfaces.'
      },
      { 
        title: 'Odor Removal', 
        description: 'Neutralizing unpleasant smells for a fresher driving experience.'
      }
    ],
    dusting: [
      { 
        title: 'Furniture Dusting', 
        description: 'Detailed dusting of tables, shelves, cabinets, and décor items.'
      },
      { 
        title: 'Electronic Dusting', 
        description: 'Careful cleaning of TVs, monitors, keyboards, and office equipment.'
      },
      { 
        title: 'Baseboards and Frames', 
        description: 'Regular dust removal from often overlooked spaces like baseboards and picture frames.'
      },
      { 
        title: 'Ceiling Fans and Fixtures', 
        description: 'High and low dusting for hard-to-reach areas including ceiling fans, vents, and lighting fixtures.'
      }
    ],
    specialized: [
      { 
        title: 'Sanitization and Disinfection', 
        description: 'Deep cleaning and disinfecting spaces to eliminate germs, bacteria, and viruses.'
      },
      { 
        title: 'Event Cleaning', 
        description: 'Pre-event setup and post-event cleaning for weddings, parties, corporate events, and exhibitions.'
      },
      { 
        title: 'External Cleaning', 
        description: 'Cleaning of building exteriors, patios, driveways, and facades.'
      },
      { 
        title: 'Move-In/Move-Out Cleaning', 
        description: 'Preparing homes and offices for new occupants with complete cleaning services.'
      }
    ]
  };
  
  
  const getFilteredServices = () => {
    if (activeCategory === 'all') {
      
      return Object.keys(servicesData).flatMap(key => 
        servicesData[key].map(service => ({ ...service, category: key }))
      );
    }
    return servicesData[activeCategory]?.map(service => ({ ...service, category: activeCategory })) || [];
  };
  
  const filteredServices = getFilteredServices();
  
  
  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : null;
  };
  
  
  const getCategoryColorClass = (categoryId) => {
    const colorMap = {
      domestic: 'bg-blue-100 text-blue-800',
      commercial: 'bg-green-100 text-green-800',
      fumigation: 'bg-red-100 text-red-800',
      car: 'bg-purple-100 text-purple-800',
      dusting: 'bg-yellow-100 text-yellow-800',
      specialized: 'bg-orange-100 text-orange-800'
    };
    return colorMap[categoryId] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${services})` }}
    >
      {/* Hero Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold text-black mb-4 font-libre drop-shadow-lg">Our Services</h1>
          <p className="text-xl text-black max-w-3xl mx-auto drop-shadow-lg">
            Professional cleaning solutions tailored to meet the unique needs of homes, 
            businesses, and specialized environments.
          </p>
        </div>
      </div>
      
      {/* Service Category Navigation */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-black/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  // Update URL hash without page jump
                  if (category.id !== 'all') {
                    window.history.pushState(null, '', `#${category.id}`);
                  } else {
                    window.history.pushState(null, '', window.location.pathname);
                  }
                  // Scroll to section
                  if (category.id !== 'all') {
                    const element = document.getElementById(category.id);
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }
                }}
                className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white/20 text-black hover:bg-white/30'
                }`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* All Services View */}
          {activeCategory === 'all' && (
            <div className="grid gap-12">
              {Object.keys(servicesData).map((categoryId) => (
                <div key={categoryId} id={categoryId} className="scroll-mt-24 pt-4">
                  <div className="flex items-center mb-6">
                    <div className="bg-black/20 backdrop-blur-sm p-3 rounded-full mr-4">
                      {getCategoryIcon(categoryId)}
                    </div>
                    <h2 className="text-3xl font-bold font-libre text-black drop-shadow-lg">{categories.find(c => c.id === categoryId)?.name}</h2>
                  </div>
                  
                  <p className="text-lg text-black mb-6 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                    {categoryId === 'domestic' && 'We help create clean, safe, and comfortable living spaces with our comprehensive domestic cleaning services.'}
                    {categoryId === 'commercial' && 'We provide professional cleaning services that keep workplaces healthy, welcoming, and professional.'}
                    {categoryId === 'fumigation' && 'We offer targeted fumigation solutions to protect your property from pests using safe, effective, and eco-friendly methods.'}
                    {categoryId === 'car' && 'Our detailed car interior cleaning service refreshes and protects your vehicle\'s cabin for a more enjoyable driving experience.'}
                    {categoryId === 'dusting' && 'We provide thorough dusting services to eliminate dust, allergens, and pollutants from all surfaces in your home or business.'}
                    {categoryId === 'specialized' && 'Our specialized cleaning services are designed for unique requirements and specific situations that require expert attention.'}
                  </p>
                  
                  {/* Services for this category */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData[categoryId].map((service, index) => (
                      <div 
                        key={`${categoryId}-${index}`} 
                        id={`service-${categoryId}-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="bg-black/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className={`h-2 ${getCategoryColorClass(categoryId).split(' ')[0]}`}></div>
                        <div className="p-6">
                          <div className="flex items-start mb-4">
                            <div className={`p-2 rounded-full mr-3 ${getCategoryColorClass(categoryId)}`}>
                              {getCategoryIcon(categoryId)}
                            </div>
                            <h3 className="text-xl font-semibold font-libre text-black">{service.title}</h3>
                          </div>
                          <p className="text-black/90">{service.description}</p>
                          <div className="mt-4 pt-4 border-t border-white/20">
                            <button className="flex items-center text-black font-semibold hover:text-accent transition-colors">
                              Request Service <Check size={16} className="ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Single Category View */}
          {activeCategory !== 'all' && (
            <div id={activeCategory} className="scroll-mt-24 pt-4">
              <div className="flex items-center mb-4">
                <div className="bg-black/20 backdrop-blur-sm p-3 rounded-full mr-4">
                  {getCategoryIcon(activeCategory)}
                </div>
                <h2 className="text-3xl font-bold font-libre text-black drop-shadow-lg">{categories.find(c => c.id === activeCategory)?.name}</h2>
              </div>
              <p className="text-lg text-black mb-8 bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                {activeCategory === 'domestic' && 'We help create clean, safe, and comfortable living spaces with our comprehensive domestic cleaning services.'}
                {activeCategory === 'commercial' && 'We provide professional cleaning services that keep workplaces healthy, welcoming, and professional.'}
                {activeCategory === 'fumigation' && 'We offer targeted fumigation solutions to protect your property from pests using safe, effective, and eco-friendly methods.'}
                {activeCategory === 'car' && 'Our detailed car interior cleaning service refreshes and protects your vehicle\'s cabin for a more enjoyable driving experience.'}
                {activeCategory === 'dusting' && 'We provide thorough dusting services to eliminate dust, allergens, and pollutants from all surfaces in your home or business.'}
                {activeCategory === 'specialized' && 'Our specialized cleaning services are designed for unique requirements and specific situations that require expert attention.'}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <div 
                    key={index} 
                    id={`service-${activeCategory}-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-black/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className={`h-2 ${getCategoryColorClass(service.category).split(' ')[0]}`}></div>
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <div className={`p-2 rounded-full mr-3 ${getCategoryColorClass(service.category)}`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <h3 className="text-xl font-semibold font-libre text-black">{service.title}</h3>
                      </div>
                      <p className="text-black/90">{service.description}</p>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <button className="flex items-center text-black font-semibold hover:text-accent transition-colors">
                          Request Service <Check size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-black/40 backdrop-blur-md rounded-lg shadow-md p-8 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-libre text-black">Need a Custom Cleaning Solution?</h2>
            <p className="text-lg mb-6 text-black/90">
              We understand that every space is unique. Contact us to discuss your specific cleaning 
              requirements and get a personalized cleaning plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded font-semibold transition-colors">
                Get a Free Quote
              </button>
              <button className="border-2 border-white text-black hover:bg-white/10 px-8 py-3 rounded font-semibold transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-libre text-black drop-shadow-lg">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 font-libre text-black">What cleaning supplies do I need to provide?</h3>
                <p className="text-black/90">
                  None! We bring all necessary professional-grade cleaning supplies and equipment to every job. 
                  However, if you prefer specific products to be used in your home or business, just let us know.
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 font-libre text-black">How long does a typical cleaning service take?</h3>
                <p className="text-black/90">
                  The duration depends on the size of the space and the type of service. A standard house cleaning 
                  might take 2-4 hours, while deep cleaning services can take longer. We'll provide an estimate 
                  before beginning work.
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 font-libre text-black">Are your cleaning products eco-friendly?</h3>
                <p className="text-black/90">
                  Yes, we prioritize using environmentally responsible cleaning products that are effective yet safe 
                  for your family, pets, and the planet. If you have specific concerns about chemicals, please let us know.
                </p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 font-libre text-black">How do I schedule a cleaning service?</h3>
                <p className="text-black/90">
                  You can book online through our website, call our customer service team, or use the contact form. 
                  We offer flexible scheduling options including one-time, weekly, bi-weekly, and monthly services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;