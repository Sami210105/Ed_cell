import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#02020E]/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/icons/logo.png"
            alt="E-Cell Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-white text-2xl font-bold font-enriqueta">
            E-Cell AISSMS COE
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-purple-300 transition-colors font-enriqueta">Home</a>
          <a href="#about" className="text-white hover:text-purple-300 transition-colors font-enriqueta">About</a>
          <a href="#timeline" className="text-white hover:text-purple-300 transition-colors font-enriqueta">Events</a>
          <a href="#team" className="text-white hover:text-purple-300 transition-colors font-enriqueta">Team</a>
          <a href="#contact" className="text-white hover:text-purple-300 transition-colors font-enriqueta">Contact Us</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-[#02020E] backdrop-blur-md z-40 flex flex-col space-y-4 py-6 px-6 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="#home" className="text-white hover:text-purple-300 font-enriqueta" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#about" className="text-white hover:text-purple-300 font-enriqueta" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#timeline" className="text-white hover:text-purple-300 font-enriqueta" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
        <a href="#team" className="text-white hover:text-purple-300 font-enriqueta" onClick={() => setIsMobileMenuOpen(false)}>Team</a>
        <a href="#contact" className="text-white hover:text-purple-300 font-enriqueta" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
