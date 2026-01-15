import React from "react";

const About = () => {
  return (
    <section id="about" 
      className="min-h-screen flex items-center justify-center
  bg-gradient-to-br from-black via-[#050b0f] to-black
  text-white px-10 md:px-20 py-24 scroll-margin-top: 80px;"
    >
      <div
        className="
    max-w-3xl text-center
    bg-[#0b1f17]/80
    hover:bg-[#0f2d22]/90
    transition-all duration-300
    shadow-xl hover:shadow-green-500/20
    backdrop-blur-md
    rounded-2xl p-10
  "
      >
        <h3 className="text-green-400 font-semibold mb-4 text-3xl">About Me</h3>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          Hi! I'm{" "}
          <span className="text-white font-semibold">Vishakha Deshmukh</span>, a
          motivated individual who wants to become a Web Developer and build
          modern, responsive, and user-friendly web applications. I enjoy
          working with HTML, CSS, Tailwind CSS, JavaScript, and React to create
          clean and interactive interfaces that provide a smooth user
          experience. Currently, I am focusing on strengthening my frontend
          skills by developing real-world projects, improving my problem-solving
          abilities, and learning best practices in modern UI design. I am
          passionate about continuous learning and exploring new technologies to
          stay updated with industry trends. My goal is to grow as a
          professional Web Developer, contribute to meaningful and impactful
          projects, and work in a collaborative environment where I can learn,
          share knowledge, and enhance my technical skills.
        </p>
      </div>
    </section>
  );
};

export default About;
