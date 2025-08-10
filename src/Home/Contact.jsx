
import { Link } from "react-router-dom";
import { FaDigitalTachograph, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTimes, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-white px-4 md:px-20 py-10 relative">
      {/* Close Button */}
      <Link to="/" className="absolute top-6 right-6 text-3xl text-teal-700 hover:text-pink-500 transition">
        <FaTimes />
      </Link>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-teal-500 text-transparent bg-clip-text">
          Contact Me
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          I'd love to hear from you! Whether it's a project, opportunity, or just to say hi.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        {/* <form className="bg-white p-8 shadow-lg rounded-xl space-y-6"> */}
        <form 
  action="https://formspree.io/f/mkgzpaeq" 
  method="POST" 
  className="bg-white p-8 shadow-lg rounded-xl space-y-6"
>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-pink-500 text-white font-semibold py-2 rounded-md hover:brightness-110 transition"
          >
            Send Message
          </button>
        </form>

        {/* Right Panel (Image / Map + Socials) //*/}
        <div className="flex flex-col justify-between">
          <img
            src="https://i.ibb.co.com/YB1zntVk/11522127.png"


            alt="Contact"
            className="rounded-xl shadow-lg  object-cover  w-full"
          />
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
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                         <FaWhatsapp className="text-2xl text-teal-700 hover:text-teal-500" />
                       </a>
                     </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
