// About.jsx
import { Link } from "react-router-dom";
import { FaDigitalTachograph, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from '../assets/79e954d8-5fb4-4bab-9dfc-b255f7de6d62-1_all_2569.jpg';
import Services from "./Components/Services";
import { FaCodeFork } from "react-icons/fa6";
import DownloadResumeButton from "./Components/Downloadresume";
import { SiCodeforces } from "react-icons/si";
import Testimonials from "./Components/Testmonial";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white px-4 md:px-20 py-8 relative">
      {/* Cross Button to go Home */}
      <Link to="/" className="absolute top-5 right-5 text-teal-700 text-3xl hover:text-pink-500">
        <FaTimes />
      </Link>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-teal-600 uppercase text-sm mb-2">Who I Am</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">I'm MST Suraiya</h1>
          <p className="text-gray-700 mb-4">
            I'm a passionate web developer and designer focused on building modern,
            accessible, and elegant web experiences. I love turning ideas into
            beautiful, user-friendly digital products.
          </p>

          <div className="flex items-center gap-4">
            {/* <a
              href="../assets/Resume_of_suraiya_as_problem_solver.pdf" // replace with your resume link
              download
              className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition"
            >
              Download Resume
            </a> */}
            <DownloadResumeButton></DownloadResumeButton>

            <video
              src="/intro.mp4" // replace with your video
              controls
              className="w-28 h-16 rounded-md border border-gray-300"
            ></video>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/share/1B5ThNfGKJ/" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-2xl text-teal-700 hover:text-teal-500" />
            </a>
            <a href="https://www.instagram.com/sur_ha_tithi?igsh=dDJrZTk4MDdtejY2" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl text-teal-700 hover:text-teal-500" />
            </a>
             <a href="https://github.com/Suraiyatithi" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-teal-700 hover:text-teal-500" />
            </a>
            
             <a href="https://www.linkedin.com/in/mst-suraiya-9b1559280/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-teal-700 hover:text-teal-500" />
            </a>
              <a href="https://codeforces.com/profile/Mst.Suraiya" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition text-xl">
                      <SiCodeforces className="text-2xl text-teal-700 hover:text-teal-500" /></a>
             <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaWhatsapp className="text-2xl text-teal-700 hover:text-teal-500" />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src={img1} // replace with your photo
            alt="MST Suraiya"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Services Section */}
   <Services></Services>

      {/* Testimonial Section */}
  <Testimonials></Testimonials>
    </div>
  );
};

export default About;
