import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f2b3d] mb-4">Contact Us</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Ready to transform your marina's electrical infrastructure? Our selective approach ensures we deliver exceptional quality to every client.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-[#0f2b3d] text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="mb-6">
                We carefully select our projects to ensure the highest level of service and attention to detail. Contact us to discuss your marina's needs and discover if we're the right partner for your transformation.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Email:</p>
                  <a href="mailto:info@truskillhn.com" className="text-blue-300 hover:text-blue-100 transition-colors">
                    info@truskillhn.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Location:</p>
                  <p>Florida, USA</p>
                </div>
                <div>
                  <p className="font-semibold">Service Areas:</p>
                  <p>Florida, Gulf Coast, East Coast, Caribbean</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0f2b3d] mb-6">Request a Consultation</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="marina" className="block text-gray-700 mb-2">Marina Name</label>
                  <input 
                    type="text" 
                    id="marina" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Marina Name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your marina's needs"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#0f2b3d] text-white hover:bg-[#1a4a6b] px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
