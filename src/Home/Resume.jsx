// Resume.jsx
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Skills from "./Components/Skills";
   import { GraduationCap, School } from 'lucide-react';
import img1 from '../assets/79e954d8-5fb4-4bab-9dfc-b255f7de6d62-1_all_2572.jpg'
import { SiStudyverse } from "react-icons/si";

const Resume = () => {
  return (
    <div className="min-h-screen px-6 py-8 md:px-20 bg-gradient-to-tr from-white to-teal-50 text-gray-800 relative">
      {/* Close Button */}
      <Link to="/" className="absolute top-6 right-6 text-3xl text-teal-700 hover:text-pink-500 transition">
        <FaTimes />
      </Link>

      <h1 className="text-4xl font-bold text-center mb-10">My Resume</h1>

      {/* Education Section */}
   

<section className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-teal-600 border-b-4 border-teal-400 inline-block pb-2">
    EDUCATION
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

    {/* Image - 2/5 */}
    <div className="col-span-2">
      <img src={img1} alt="Education" className="rounded-xl shadow-md w-full h-auto object-cover" />
    </div>

    {/* Education Info - 3/5 */}
    <div className="col-span-3 space-y-6">

      {/* B.Sc. */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-teal-500">
        <div className="flex items-center gap-4 mb-2">
          <GraduationCap className="text-teal-500" size={24} />
          <h3 className="text-xl font-semibold">B.Sc. in Computer Science & Engineering</h3>
        </div>
        <p className="text-gray-700 ml-8">
          <span className="font-medium">Department of CSE, Dhaka City College</span><br />
          CGPA: <span className="font-semibold">3.70</span><br />
          <span className="text-sm text-gray-500 mb-2">2019 - 2025</span>
        </p>
      </div>

      {/* HSC */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-teal-500">
        <div className="flex items-center gap-4 mb-2">
          <School className="text-teal-500" size={24} />
          <h3 className="text-xl font-semibold">HSC - Science</h3>
        </div>
        <p className="text-gray-700 ml-8">
          Motijheel Model School and College<br />
           GPA: <span className="font-semibold">4.42</span><br />
          <span className="text-sm text-gray-500 mb-2">Passing year-2019</span>
        </p>
      </div>

      {/* SSC */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-teal-500">
        <div className="flex items-center gap-4 mb-2">
          <School className="text-teal-500" size={24} />
          <h3 className="text-xl font-semibold">SSC - Science</h3>
        </div>
        <p className="text-gray-700 ml-8">
          AAA High School<br />
           GPA: <span className="font-semibold">4.95</span><br />
          <span className="text-sm text-gray-500 mb-2">passing year-2017</span>
        </p>
      </div>
       <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-teal-500">
        <div className="flex items-center gap-4 mb-2">
          <SiStudyverse className="text-teal-500" size={24} />
          <h3 className="text-xl font-semibold">WEb Development And Others Skills</h3>
        </div>
        <p className="text-gray-700 ml-8">
          Self Learning<br />
          <span className="text-sm text-gray-500 mb-2">2022-continue</span>
        </p>
      </div>

    </div>
  </div>
</section>



      {/* Skills Section */}
 <Skills></Skills>
    </div>
  );
};

export default Resume;
