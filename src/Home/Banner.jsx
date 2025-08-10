



// import React from 'react';
// import { FaFacebookF, FaInstagram, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
// import img1 from '../assets/1000008941.jpg';
// import { Link } from 'react-router-dom';

// const HeroBanner = () => {
//     return (
//         <div className="relative h-screen text-white overflow-hidden">
//             {/* Blurred background image */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                     backgroundImage: `url(${img1})`,
//                     filter: "blur(3px)", // Adjust blur strength here
//                 }}
//             ></div>

//             {/* Black overlay */}
//             <div className="absolute inset-0 bg-black/40"></div>

//             {/* Navigation */}
//             <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50">
//                 <div className="text-3xl font-bold tracking-wide">TITHI</div>
//                 <div className="flex space-x-8 font-medium text-lg">
//                     <Link to="/about" className="hover:text-pink-400 transition cursor-pointer">About</Link>
//                     <Link to="/projects" className="hover:text-pink-400 transition">Projects</Link>
//                     <Link to="/resume" className="hover:text-pink-400 transition">Resume</Link>
//                     <Link to="/contact" className="hover:text-pink-400 transition">Contact</Link>
//                 </div>
//             </div>

//             {/* Hero Content */}
//             <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
//                 <div className="max-w-3xl rounded-3xl p-8 shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm">
//                     <h1 className="text-4xl md:text-6xl pt-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//                         Hi, I'm Suraiya Tithi
//                     </h1>
//                     <p className="mt-4 text-lg md:text-xl text-white/90">
//                         A creative web developer passionate about beautiful, functional designs. Let’s build something magical!
//                     </p>
//                     <Link
//                         to='/projects'
//                         className="mt-6 mb-10 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition"
//                     >
//                         View My Work
//                     </Link>
//                 </div>
//             </div>

//             {/* Social Icons */}
//             <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-6 z-10">
//                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
//                     <FaFacebookF />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
//                     <FaInstagram />
//                 </a>
//                 <a href="mailto:you@example.com" className="hover:text-pink-400 transition text-xl">
//                     <FaEnvelope />
//                 </a>
//                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
//                     <FaLinkedinIn />
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default HeroBanner;


import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaLinkedinIn, FaBars, FaTimes, FaGithub } from "react-icons/fa";
import img1 from "../assets/1000008941.jpg";
import { Link } from "react-router-dom";
import { SiCodeforces } from "react-icons/si";
const HeroBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`,
          filter: "blur(3px)",
        }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navigation */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-wide">TITHI</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-lg">
          <Link to="/about" className="hover:text-pink-400 transition">About</Link>
          <Link to="/projects" className="hover:text-pink-400 transition">Projects</Link>
          <Link to="/resume" className="hover:text-pink-400 transition">Resume</Link>
          <Link to="/contact" className="hover:text-pink-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-black/80 backdrop-blur-md p-5 rounded-lg flex flex-col items-start gap-4 text-lg z-50">
          <Link to="/about" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/resume" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link to="/contact" className="hover:text-pink-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

  


<div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
  <div className="max-w-3xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm">
    <h1 className="text-3xl md:text-6xl pt-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-fadeUp">
      Hi, I'm Suraiya Tithi
    </h1>
    <p className="mt-4 text-base md:text-xl text-white/90 animate-fadeUp delay-200">
      A creative web developer passionate about beautiful, functional designs. Let’s build something magical!
    </p>
    <Link
      to="/projects"
      className="mt-6 mb-6 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition animate-fadeUp delay-400"
    >
      View My Work
    </Link>
  </div>
</div>


      {/* Social Icons */}
      <div className="absolute md:right-6 md:top-1/2 md:-translate-y-1/2 flex md:flex-col flex-row md:gap-6 gap-4 bottom-4 left-1/2 md:left-auto transform md:translate-x-0 -translate-x-1/2 z-10">
        <a href="https://www.facebook.com/share/1B5ThNfGKJ/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/sur_ha_tithi?igsh=dDJrZTk4MDdtejY2" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
          <FaInstagram />
        </a>
        <a href="mailto:surtithy@gmail.com" className="hover:text-pink-400 transition text-xl">
          <FaEnvelope />
        </a>
        <a href="https://codeforces.com/profile/Mst.Suraiya" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
          <SiCodeforces /></a>
          <a href="https://github.com/Suraiyatithi" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
          <FaGithub /></a>
        <a href="https://www.linkedin.com/in/mst-suraiya-9b1559280/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
    {/* Hero Content */}
    //   <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
    //     <div className="max-w-3xl rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm">
    //       <h1 className="text-3xl md:text-6xl pt-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
    //         Hi, I'm Suraiya Tithi
    //       </h1>
    //       <p className="mt-4 text-base md:text-xl text-white/90">
    //         A creative web developer passionate about beautiful, functional designs. Let’s build something magical!
    //       </p>
    //       <Link
    //         to="/projects"
    //         className="mt-6 mb-6 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:brightness-110 transition"
    //       >
    //         View My Work
    //       </Link>
    //     </div>
    //   </div>