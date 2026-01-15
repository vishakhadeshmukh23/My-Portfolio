import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-black via-[#050b0f] to-black text-white overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-teal-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 flex items-center justify-between px-4 md:px-10 py-1">
        <div className="flex items-center gap-3">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/09/07/Monogram-VD-Logo-V2-Graphics-5315508-1.jpg"
            alt="logo"
            className="w-32 md:w-40"
          />
        </div>

        <nav className="hidden md:flex gap-20 text-base font-semibold">
          <a href="#home" className="hover:text-green-500">Home</a>
          <a href="#about" className="hover:text-green-500">About</a>
          <a href="#education" className="hover:text-green-500">Education</a>
          <a href="#skill" className="hover:text-green-500">Skills</a>
          <a href="#project" className="hover:text-green-500">Project</a>
          <a href="#contact" className="hover:text-green-500">Contact</a>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#050b0f] text-center py-4 space-y-4 relative z-50">
          <a href="#home" className="block text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>About</a>
          <a href="#education" className="block text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#skill" className="block text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#project" className="block text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>Project</a>
          <a href="#contact" className="block text-lg hover:text-green-500" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
