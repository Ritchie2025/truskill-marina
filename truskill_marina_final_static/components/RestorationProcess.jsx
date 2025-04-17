import React from 'react';
import Image from 'next/image';

const RestorationProcess = () => {
  const processSteps = [
    {
      title: "Initial Assessment",
      description: "Our certified technicians conduct a comprehensive evaluation of your marina's power pedestals, documenting current conditions and identifying restoration needs.",
      image: "/images/process_photos/20160301_121824.jpg",
      alt: "Technician examining marina power pedestal components"
    },
    {
      title: "Component Inspection",
      description: "We meticulously inspect all electrical components, connections, and housing to identify wear, corrosion, or safety concerns requiring attention.",
      image: "/images/process_photos/20160301_121829.jpg",
      alt: "Close inspection of power pedestal electrical systems"
    },
    {
      title: "Preparation & Protection",
      description: "The restoration area is carefully prepared with professional-grade containment systems to protect the surrounding marina environment.",
      image: "/images/process_photos/20160304_093813.jpg",
      alt: "Restoration area with protective containment setup"
    },
    {
      title: "Surface Preparation",
      description: "All surfaces are thoroughly cleaned and prepared for restoration, removing old finishes while preserving the structural integrity of each unit.",
      image: "/images/process_photos/20160325_132647.jpg",
      alt: "Power pedestal surface preparation process"
    },
    {
      title: "Electrical Restoration",
      description: "Our specialists restore or replace all electrical components to ensure safety, compliance with current codes, and optimal performance.",
      image: "/images/process_photos/20160325_132701.jpg",
      alt: "Electrical component restoration in progress"
    },
    {
      title: "Premium Finishing",
      description: "We apply marine-grade, UV-resistant finishes that provide lasting protection against harsh coastal environments while enhancing aesthetic appeal.",
      image: "/images/process_photos/20160325_132706.jpg",
      alt: "Application of premium marine-grade finishes"
    },
    {
      title: "Quality Assurance",
      description: "Each restored unit undergoes rigorous testing to verify electrical safety, water resistance, and operational excellence before final installation.",
      image: "/images/process_photos/20160325_132714.jpg",
      alt: "Quality testing of restored power pedestal"
    },
    {
      title: "Final Installation",
      description: "Restored units are carefully reinstalled with precision, ensuring proper alignment, secure mounting, and perfect functionality.",
      image: "/images/process_photos/20160325_132721.jpg",
      alt: "Final installation of restored power pedestal"
    }
  ];

  return (
    <section id="restoration-process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f2b3d] mb-4">Our Restoration Process</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Our proprietary 8-step restoration process transforms deteriorated marina power systems into premium, like-new installations that enhance safety, aesthetics, and property value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f2b3d] mb-2">
                  <span className="text-blue-500 mr-2">{index + 1}.</span>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Every restoration project is backed by our industry-leading 10-year warranty, ensuring your investment is protected for the long term. Our selective approach—limiting our work to just 3-4 marinas per quarter—guarantees the highest level of craftsmanship and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RestorationProcess;
