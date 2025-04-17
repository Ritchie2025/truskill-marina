import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: "Marina Power Pedestal Restoration",
      description: "Complete restoration of marina power pedestals to like-new condition, enhancing safety, functionality, and aesthetics while extending service life.",
      icon: "⚡"
    },
    {
      title: "Electrical System Upgrades",
      description: "Modernization of marina electrical infrastructure to meet current codes and accommodate the power requirements of today's luxury vessels.",
      icon: "🔌"
    },
    {
      title: "Preventative Maintenance Programs",
      description: "Customized maintenance plans to protect your investment and ensure continuous, trouble-free operation of all marina electrical systems.",
      icon: "🔧"
    },
    {
      title: "Safety & Compliance Audits",
      description: "Comprehensive inspections to identify potential hazards and ensure full compliance with current electrical codes and marina regulations.",
      icon: "✓"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f2b3d] mb-4">Our Premium Services</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            We specialize in transforming deteriorated marina electrical systems into premium installations that enhance safety, aesthetics, and property value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0f2b3d] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
