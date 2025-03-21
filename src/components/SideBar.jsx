import React, { useState, useEffect } from "react";

export const SideBar = ({ menuOpen, setMenuOpen }) => {
    const [sbOpen, setSbOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSbOpen(true);
            } else {
                setSbOpen(false);
            }
        };

        handleResize(); // Set the initial state based on the current window size
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Function to handle smooth scrolling
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className={`sidebar font-semibold pl-5 sticky top-0 flex flex-col h-screen ${sbOpen ? "w-[0%] max-sm:pl-0" : "w-45 max-sm:pl-5"} z-50`}>
                <div className="flex">
                    <a href="#home" className={`mt-4 font-mono text-xl font-bold ${sbOpen ? "hidden" : "visible"}`}>
                        {""}
                        muaz<span className="text-blue-500">.lev</span>{""}
                    </a>
                    <div onClick={() => setSbOpen((prev) => !prev)} className={`rounded-3xl text-white m-4 text-right cursor-pointer z-50 text-xl ${sbOpen ? "bg-[#091d1e]/60 px-3 py-2 ml-1" : "ml-4"}`}>
                        &#9776;
                    </div>
                </div>

                <div className={`sidebar-content text-sky-600 flex flex-col justify-start items-left space-y-6 mt-3 ${sbOpen ? "hidden" : "visible"}`}>
                    <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors text-left cursor-pointer">
                        {""}Home{""}
                    </button>
                    <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors text-left cursor-pointer">
                        {""}About{""}
                    </button>
                    <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors text-left cursor-pointer">
                        {""}Projects{""}
                    </button>
                    <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors text-left cursor-pointer">
                        {""}Contact{""}
                    </button>
                </div>
            </div>
        </>
    );
};