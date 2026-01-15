import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#050b0f] py-24 px-6 md:px-20 text-white scroll-mt-16"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-green-400">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-[#04130d] p-6 rounded-2xl border border-green-500/20 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-green-400">
          Certificate Course in Web Development
          </h3>
          <p className="text-gray-400"> NavGurukul Foundation for Social Welfare, India | 2024 - Present</p>
          <p className="text-gray-300 mt-2">
           Relevant Courses: Web Development, JavaScript, React, Node.js, Express.js, MongoDB, Data Structures & Algorithms
          </p>
          <p>At NavGurukul, I am learning Full Stack Web Development using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.
I have participated in hackathons and built real-world projects, which helped me improve my problem-solving skills, Data Structures & Algorithms, communication, and teamwork.</p>
        </div>

       
        <div className="bg-[#04130d] p-6 rounded-2xl border border-green-500/20 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-green-400">
           Higher Secondary School (12th)
          </h3>
          <p>Higher Secondary School Katangjhari(Balaghat), India | 2020 - 2022</p>
          <p className="mt-2">
           Subject : Mathematics
          </p>
          <p className="mt-1">Percentage : 81%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
