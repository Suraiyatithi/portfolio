import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    // If your resume is in public folder
    const link = document.createElement("a");
    link.href = "../../../public/Resume_of_MstSuraiya.pdf"; // <-- Change this to your file path
    link.download = "Suraiya_Tithi_Resume.pdf"; // Name of the downloaded file
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="group relative px-6 py-3 font-bold text-white rounded-full 
                 bg-gradient-to-r from-teal-500 to-green-500
                 shadow-lg transition-transform transform hover:scale-105 
                 hover:shadow-2xl focus:outline-none"
    >
      <span className="flex items-center gap-2">
        <FaDownload className="transition-transform group-hover:rotate-12" />
        Download Resume
      </span>

      {/* Glowing effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-green-400 opacity-0 group-hover:opacity-30 blur-lg transition-opacity"></span>
    </button>
  );
};

export default DownloadResumeButton;
