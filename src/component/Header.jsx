// import React from "react";

// const Header = () => {
//   return (
//     <header
//       className="fixed top-0 left-0 z-50 w-full 
//       bg-gradient-to-r from-black via-[#050b0f] to-black 
//       text-white overflow-hidden"
//     >
//       <div
//         className="absolute top-0 right-1/4 w-[250px] h-[250px] 
//         bg-teal-500/10 rounded-full blur-[120px]"
//       ></div>

//       <div className="relative z-10 flex items-center justify-between px-10 py-6">
//         <div className="flex items-center gap-3 ml-6">
//           <img
//             src="https://www.creativefabrica.com/wp-content/uploads/2020/09/07/Monogram-VD-Logo-V2-Graphics-5315508-1.jpg"
//             alt="logo"
//             className="w-40"
//           />
//         </div>

//         <nav className="mr-20">
//           <ul className="flex gap-16 text-sm font-semibold">
//             {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   className="
//                     px-4 py-2
//                     rounded-md
//                     transition-all duration-300
//                     hover:bg-green-400/20
//                     hover:text-green-400
//                   "
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;










import React from "react";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 z-50 w-full 
      bg-gradient-to-r from-black via-[#050b0f] to-black 
      text-white overflow-hidden"
    >
      <div
        className="absolute top-0 right-1/4 w-[250px] h-[250px] 
        bg-teal-500/10 rounded-full blur-[120px]"
      ></div>

      <div className="relative z-10 flex items-center justify-between px-10 py-6">
        {/* Logo */}
        <div className="flex items-center gap-3 ml-6">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2020/09/07/Monogram-VD-Logo-V2-Graphics-5315508-1.jpg"
            alt="logo"
            className="w-40"
          />
        </div>

        {/* Navbar */}
        <nav className="mr-20">
          <ul className="flex gap-16 text-sm font-semibold">
            <li>
              <a href="#Home" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#About" className="nav-link">About</a>
            </li>
            <li>
              <a href="#Skill" className="nav-link">Skills</a>
            </li>
            <li>
              <a href="#Project" className="nav-link">Project</a>
            </li>
            <li>
              <a href="#Contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
