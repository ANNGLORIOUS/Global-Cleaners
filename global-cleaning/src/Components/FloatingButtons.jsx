import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg p-4 shadow-xl mb-4 w-64">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Contact Us</h3>
            <button onClick={() => setIsOpen(false)} className="text-darktext/60 hover:text-darktext">
              <X size={18} />
            </button>
          </div>
          <p className="text-sm mb-3">Have questions about our services? Send us a message!</p>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full mb-2 p-2 border border-muted rounded text-sm"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full mb-2 p-2 border border-muted rounded text-sm"
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full mb-3 p-2 border border-muted rounded text-sm h-24 resize-none"
          ></textarea>
          <button className="bg-primary text-white w-full py-2 rounded font-semibold hover:bg-primary/90 transition-colors">
            Send Message
          </button>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default FloatingButton;