import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center z-40 transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >

      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-3xl text-white focus:outline-none cursor-pointer" aria-label="Close menu">
        &times;
      </button>
      <div className="text-2xl text-left flex flex-col items-start ">
        <a  onClick={() => setMenuOpen(false)} href="#home" className={`text-gray-300 hover:text-white my-4 transform transition-transform duration-300
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }
          `} >
            {""}Home{""}  
        </a>
        <a  onClick={() => setMenuOpen(false)} href="#about" className={`text-gray-300 hover:text-white my-4 transform transition-transform duration-300
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }
          `} >
            {""}About{""}  
        </a>
        <a  onClick={() => setMenuOpen(false)} href="#projects" className={`text-gray-300 hover:text-white my-4 transform transition-transform duration-300
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }
          `} >
            {""}Projects{""}  
        </a>
        <a  onClick={() => setMenuOpen(false)} href="#contact" className={`text-gray-300 hover:text-white my-4 transform transition-transform duration-300
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }
          `} >
            {""}Contact{""}  
        </a>
      </div>
    </div>
  );
};
