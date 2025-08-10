import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rafiul Hasan",
    feedback:
      "Working with Suraiya was a great experience! Very professional and delivers on time.",
    img: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Jannatul Nahar",
    feedback:
      "Creative and dedicated — I loved the design and smooth experience provided.",
    img: "https://i.pravatar.cc/100?img=45",
    rating: 4,
  },
  {
    name: "Sakib Ahmed",
    feedback:
      "Her communication and creativity really stood out. Highly recommended!",
    img: "https://i.pravatar.cc/100?img=34",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">💬 Testimonials</h2>

      <div className="relative w-full max-w-3xl mx-auto">
        {/* Slider */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center"
        >
          <img
            src={testimonials[current].img}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-teal-500"
          />
          <p className="italic text-gray-600 mb-4">
            “{testimonials[current].feedback}”
          </p>
          <div className="flex justify-center mb-3">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <p className="font-semibold text-teal-700">
            — {testimonials[current].name}
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-teal-500 text-white px-3 py-2 rounded-full shadow hover:bg-teal-600 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-teal-500 text-white px-3 py-2 rounded-full shadow hover:bg-teal-600 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
