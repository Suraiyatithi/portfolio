import React from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
   { name: "Node.js", level: 70 },
    { name: "MongoDb", level: 78 },
     { name: "mySql", level: 70 },
  { name: "PHP", level: 70 },
  { name: "Data Structure / Algorithm", level: 75 },
  { name: "Problem Solving", level: 80 },
];

const Skills = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8 text-teal-600 border-b-4 border-teal-400 inline-block pb-2">
        SKILLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-teal-600 font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-teal-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
