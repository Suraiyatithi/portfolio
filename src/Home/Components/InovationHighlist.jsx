import { Lightbulb, Leaf, BookOpenCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const InnovationHighlights = () => {
  return (
    <section className="my-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-teal-600">
         <FaStar className="text-2xl text-yellow-400"></FaStar>
         Innovation Highlights
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {/* AgriNext Feature */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <Leaf className="text-green-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Farming Intelligence</h3>
          <p className="text-gray-600">
            Real-time weather insights, personalized notes, and chatbot support empower farmers with data-driven decisions.
          </p>
        </motion.div>

        {/* Makeup Schooling Feature */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <BookOpenCheck className="text-pink-600 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Interactive Learning Modules</h3>
          <p className="text-gray-600">
            Makeup Schooling offers video tutorials, skill assessments, and certifications to boost learners' confidence and skills.
          </p>
        </motion.div>

        {/* General Innovation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <Lightbulb className="text-yellow-500 w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Creative Tech Solutions</h3>
          <p className="text-gray-600">
            Both projects highlight  creativity in using tech for social impact bridging agriculture and beauty education.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationHighlights;
