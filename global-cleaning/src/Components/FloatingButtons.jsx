import React, { useState } from 'react';
import {
  MessageSquare,
  X,
  PhoneCall,
  Smartphone,
  Send,
  MessageCircle,
} from 'lucide-react';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Floating Form */}
      {showForm && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg p-4 shadow-xl w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Send Message</h3>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-black">
              <X size={18} />
            </button>
          </div>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full mb-2 p-2 border border-gray-300 rounded text-sm"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full mb-2 p-2 border border-gray-300 rounded text-sm"
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full mb-3 p-2 border border-gray-300 rounded text-sm h-24 resize-none"
          ></textarea>
          <button
            onClick={() => {
              alert('Message sent!');
              setShowForm(false);
              setIsOpen(false);
            }}
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} /> Submit
          </button>
        </div>
      )}

      {/* Floating Action Button and Options */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isOpen && (
          <>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="sms:+1234567890"
              className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-600"
            >
              <Smartphone size={18} /> SMS
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
            >
              <PhoneCall size={18} /> Call
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700"
            >
              <MessageSquare size={18} /> Message Us
            </button>
          </>
        )}

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowForm(false); // close form when toggling main button
          }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;
