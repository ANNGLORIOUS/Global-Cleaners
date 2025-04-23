import { Check } from 'lucide-react';
import React from 'react'; 

const WhyChooseUs = () => {
  const reasons = [
    "Professionally trained and vetted staff",
    "Customized cleaning plans to meet individual needs",
    "Eco-friendly and safe cleaning products",
    "Flexible scheduling options (daily, weekly, monthly)",
    "Competitive pricing with transparent quotes",
    "100% customer satisfaction guarantee"
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-libre">Why Choose Us</h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/images/why-choose-us.jpg" 
              alt="Professional Cleaning Team" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-libre">The Best Choice for Your Cleaning Needs</h3>
            <p className="mb-6">
              When you choose our cleaning services, you're choosing reliability, professionalism, and attention to detail.
              Here's why our customers trust us with their cleaning needs:
            </p>
            <ul className="space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;