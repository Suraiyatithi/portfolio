// Services.jsx
import React from "react";
import {
  FaPaintBrush,
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaBullhorn,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush size={40} className="text-pink-500" />,
    title: "Design Trends",
    description: "Modern, trendy UI/UX designs that captivate users.",
  },
  {
    icon: <FaCode size={40} className="text-purple-500" />,
    title: "Web Development",
    description: "Building dynamic and responsive websites tailored to your goals.",
  },
  {
    icon: <FaCogs size={40} className="text-blue-500" />,
    title: "Software Development",
    description: "Custom software solutions to automate and scale your business.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-green-500" />,
    title: "Fully Responsive",
    description: "Mobile-friendly designs that look stunning on any device.",
  },
  {
    icon: <FaBullhorn size={40} className="text-yellow-500" />,
    title: "Branding",
    description: "Crafting strong brand identities to boost recognition.",
  },
  {
    icon: <FaHeadset size={40} className="text-red-500" />,
    title: "Customer Support",
    description: "Reliable and fast support whenever you need it.",
  },
];

const Services = () => {
  return (
    <section className="mt-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
        My Services
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
