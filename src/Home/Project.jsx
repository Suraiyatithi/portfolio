import React from "react";
import agrinextImg from "../assets/AgriNext.jpg"; // replace with your actual images
import makeupImg from "../assets/make-up-schooling.jpg"; 
import { FaExternalLinkAlt, FaTimes,FaStar} from "react-icons/fa";
import { Link } from "react-router-dom";
import InnovationHighlights from "./Components/InovationHighlist";

const featuredProjects = [
  {
    title: "AgriNext - Smart Farming Platform",
    image: agrinextImg,
    description:
      "A smart agriculture web application that empowers farmers with modern tools, personalized crop advice, weather insights, product marketplace, blogs, and chatbot support. Multi-language (Bangla & English) support included.",
    tech: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    liveLink: "https://smart-farming-89046.web.app", // Replace with actual
    codeLink: "https://github.com/Suraiyatithi/Agri-Next", // Optional
  },
  {
    title: "Makeup Schooling Platform",
    image: makeupImg,
    description:
      "An educational platform designed for makeup artistry students. Offers course registration, video lessons, blogs, instructor dashboard, and certificate generation with admin control.",
    tech: ["React.js", "Tailwind CSS", "Firebase Auth", "Express.js"],
    liveLink: "https://summer-camp-a701e.web.app", // Replace
    codeLink: "https://github.com/Suraiyatithi/summer-cccamp",
  },
];

const FeaturedProjects = () => {
  return (
<div className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-white px-4 md:px-20 py-10 relative">
     
     <Link to="/" className="absolute top-6 right-6 text-3xl text-teal-700 hover:text-pink-500 transition">
        <FaTimes/>
      </Link>
    <section className="py-12 px-4 lg:px-24 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
        <FaStar className="text-2xl text-yellow-400"></FaStar>
         Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-xl h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-100 text-teal-700 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
                >
                  Live Demo <FaExternalLinkAlt className="ml-2" />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Source Code <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <InnovationHighlights></InnovationHighlights>
    </div>
  );
};

export default FeaturedProjects;
