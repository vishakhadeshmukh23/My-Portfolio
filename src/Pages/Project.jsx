import React, {useState} from "react";

import portfolioImg from "../assets/js-project.png";
import reactPortfolioImg from "../assets/react-project.png";
import calculatorImg from "../assets/calculator.png";
import shoppingImg from "../assets/shopping-page.png";
import rockPaperScissorsImg from "../assets/rock-paper-scissors.png";
import clockImg from "../assets/clock.png";
import todolistImg from "../assets/to-do-list.png";
import travelImg from "../assets/travel-website.png";


const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Personal Portfolio Website",
      image: portfolioImg,
      description:
        "A modern and responsive personal portfolio website built using React and Tailwind CSS.",
      tech: ["HTML","CSS", "JavaScript"],
      live: "https://vishakha-portrfolio.vercel.app/",
    },
    {
      title: "React Portfolio Project",
      image: reactPortfolioImg,
      description:
        "A modern and responsive personal portfolio website built using React and Tailwind CSS.",
      tech: ["React", "Taiwind CSS"],
      live: "https://my-portfolio-theta-seven-90.vercel.app/",
    },
     {
      title: "Travel Website",
      image: travelImg,
      description:
        "A responsive travel website built using HTML and CSS, showcasing destinations with a clean layout and user-friendly design.",
      tech: ["HTML", "CSS"],
      live: "https://travel-website-gevi.vercel.app/",
    },
    {
      title: "Calculator App",
      image: calculatorImg,
      description:
        "A simple and interactive calculator application built using JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://calculetor-one.vercel.app/",
    },
    {
      title: "Shopping Website",
      image: shoppingImg,
      description:
        "This shopping website is built using HTML and CSS with a clean and modern design. It includes a navigation bar, product categories, and a visually attractive banner section.",
      tech: ["HTML", "CSS"],
      live: "https://shopping-website-sable-beta.vercel.app/",
    },
     {
      title: "Rock-Paper-Scissors",
      image: rockPaperScissorsImg,
      description:
        "This Rock-Paper-Scissors game is built using HTML, CSS, and JavaScript. It allows users to play against the computer with interactive UI and real-time result updates.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://rock-paper-scissors-ek92.vercel.app/",
    },
     {
      title: "Clock Website",
      image: clockImg,
      description:
        "This clock website is built using HTML, CSS, and JavaScript. It displays the current time in real-time with a clean and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://clock-dun-omega.vercel.app/",
    },
    {
      title: "To-Do-List",
      image: todolistImg,
      description:
        "This To-Do List application is built using React and CSS. It allows users to add, delete, and manage tasks with a clean and responsive user interface.",
      tech: ["React", "CSS"],
      live: "https://to-do-list-assignment-pgp7.vercel.app/",
    },
   
    
    
  ];

  return (
    <section id="project" className="bg-[#050b0f] py-24 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-green-400">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {(showAll ? projects: projects.slice(0, 3)).map((project, index) => (
          <div
            key={index}
            className="bg-[#04130d] rounded-2xl overflow-hidden 
            border border-green-500/20 hover:border-green-400
            hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
            transition duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-green-400/10 text-green-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full 
                bg-green-400 text-black font-semibold
                hover:bg-green-300 transition"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
              {projects.length > 3 &&(
              <div className="text-center mt-12">
                <button onClick={()=> setShowAll(!showAll)}
                  className="px-8 py-3 rounded-full bg-green-400 text-balck font-semibold
                  hover:bg-green-300 transition">
                  {showAll ? "View Less Project" : "View More project"}</button>
              </div>
            )}
    </section>
  );
};

export default Project;
