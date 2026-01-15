import React, { useState } from "react";

const LanguageCards = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false); 

  const skills = [
    {
      name: "HTML",
      img: "https://static.vecteezy.com/system/resources/thumbnails/001/416/705/small/html5-emblem-orange-shield-and-white-text-vector.jpg",
      desc: "HTML creates the structure of modern web pages.",
      more: "HTML defines headings, paragraphs, forms, links, and layout structure."
    },
    {
      name: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/851px-CSS3_logo_and_wordmark.svg.png",
      desc: "CSS styles websites with layouts, colors, and animations.",
      more: "CSS helps in responsive design, flexbox, grid, and animations."
    },
    {
      name: "JavaScript",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png",
      desc: "JavaScript adds logic and interactivity to websites.",
      more: "JavaScript handles events, API calls, DOM manipulation, and logic."
    },
    {
      name: "React",
      img: "https://static.cdnlogo.com/logos/r/85/react.svg",
      desc: "React builds fast and reusable user interfaces.",
      more: "React uses components, hooks, and state for dynamic UI."
    },
    {
      name: "Python",
      img: "https://acsce.edu.in/blog/wp-content/uploads/2017/03/python-logo-300x203.jpg",
      desc: "Python is used for backend, AI, and automation.",
      more: "Python is popular for data science, ML, and backend development."
    },
    {
      name: "Tailwind CSS",
      img: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4",
      desc: "Tailwind helps build modern UI faster.",
      more: "Tailwind uses utility classes for fast and responsive UI design."
    },
    {
      name: "PHP",
      img: "https://www.php.net/images/logos/new-php-logo.svg",
      desc: "PHP builds dynamic server-side applications.",
      more: "PHP is used with MySQL for backend and server-side logic."
    }
  ];

  const visibleSkills = showAll ? skills : skills.slice(0, 3);

  return (
    <section id="skill"  className="bg-[#050b0f] py-24 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-green-400">
        Technical Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#04130d] rounded-2xl p-8 text-center 
            border border-green-500/20 hover:border-green-400 
            hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] 
            transition duration-300"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-24 h-24 mx-auto mb-6 object-contain"
            />

            <h3 className="text-2xl font-semibold mb-3">
              {skill.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {skill.desc}
            </p>

            {openIndex === index && (
              <p className="text-gray-300 text-sm mb-4">
                {skill.more}
              </p>
            )}

            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="bg-green-400 text-black px-6 py-2 rounded-full 
              text-sm font-semibold hover:bg-green-300 transition"
            >
              {openIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 rounded-full 
          bg-green-400 text-black font-semibold 
          hover:bg-green-300 transition"
        >
          {showAll ? "Show Less Skills" : "Show More Skills"}
        </button>
      </div>
    </section>
  );
};

export default LanguageCards;
