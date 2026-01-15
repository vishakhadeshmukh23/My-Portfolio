
import React, { useEffect, useState } from "react";
import HomeImg from "../assets/Image.jpeg";

const Home = () => {

  const texts = [
    "I'm",
    "Vishakha Deshmukh",
    "Front-end Developer",
  ];

  const [typedText, setTypedText] = useState(["", "", ""]);

  useEffect(() => {
  let line = 0;
  let char = 0;
  let timeoutId;

  const type = () => {
    if (line < texts.length) {
      if (char < texts[line].length) {
        setTypedText(prev => {
          const copy = [...prev];
          copy[line] = texts[line].slice(0, char + 1);
          return copy;
        });
        char++;
        timeoutId = setTimeout(type, 80);
      } else {
        line++;
        char = 0;
        timeoutId = setTimeout(type, 400);
      }
    } else {
      timeoutId = setTimeout(() => {
        setTypedText(["", "", ""]);
        line = 0;
        char = 0;
        type();
      }, 1500);
    }
  };

  type();

  return () => clearTimeout(timeoutId);
}, []);


  return (
    <>
      <section id="home"  className="relative min-h-screen overflow-hidden 
        bg-gradient-to-br from-black via-[#050b0f] to-black
        flex flex-col md:flex-row items-center justify-between 
        px-10 md:px-20 py-20 pt-32 gap-12 text-white">

        <div className="absolute top-1/3 right-24 w-[500px] h-[500px] 
          bg-green-500/20 rounded-full blur-[160px]"></div>

        <div className="absolute top-1/4 left-20 w-[400px] h-[400px] 
          bg-teal-500/10 rounded-full blur-[140px]"></div>

        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {typedText[0]}
            <br />
            <span className="text-green-400">{typedText[1]}</span>
            <br />
            {typedText[2]}
          </h2>

          <p className="mt-6 text-gray-400 text-sm leading-relaxed">
           I am a motivated Front-end Developer focused on building modern, responsive, and accessible web applications..
          </p>

          <button className="mt-8 px-6 py-3 rounded-full 
            bg-green-400 text-black font-semibold 
            hover:bg-green-300 transition">
            Let's Connect
          </button>
        </div>

        <div className="relative z-10">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full 
            bg-gradient-to-tr from-green-400 to-teal-500 p-1">
            <img
              src={HomeImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="absolute inset-0 rounded-full 
            blur-3xl bg-green-500 opacity-20"></div>
        </div>
      </section>

     
    </>
  );
};

export default Home;


