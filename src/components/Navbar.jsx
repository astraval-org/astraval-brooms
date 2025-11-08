import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection?.(item.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (sectionId) => {
    setActiveSection?.(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-md
        ${
          isScrolled
            ? "top-6 left-1/2 -translate-x-1/2 bg-white/20 shadow-2xl rounded-full w-[85%] md:w-[65%] scale-[0.96] hover:scale-100"
            : "top-5 left-1/2 -translate-x-1/2 w-[87%] bg-white/20 shadow-md rounded-full scale-100"
        }`}
    >
      <div
        className={`flex items-center justify-between px-6 py-4 md:py-3 transition-all duration-700 ${
          isScrolled ? "justify-center gap-4" : "justify-between"
        }`}
      >

        <div
          className={`flex items-center space-x-3 transform transition-all duration-700 ${
            isScrolled
              ? "scale-90 translate-y-[-2px] opacity-95"
              : "scale-100 opacity-100"
          }`}
        >
          <img
            src={logo}
            alt="Astraval Brooms"
            className={`h-10 w-10 md:h-12 md:w-12 rounded-full border border-green-100 shadow-md transition-all duration-700 ${
              isScrolled
                ? "shadow-[0_4px_15px_rgba(34,197,94,0.25)]"
                : "shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
            }`}
          />
          <div className="transition-all duration-700">
            <h1
              className={`font-bold text-green-700 tracking-tight transition-all duration-700 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              Astraval Brooms
            </h1>
            <p
              className={`text-gray-500 transition-all duration-700 ${
                isScrolled ? "text-[11px]" : "text-xs"
              }`}
            >
              Since 1999
            </p>
          </div>
        </div>

        <div
          className={`hidden lg:flex gap-6 transition-all duration-700 ${
            isScrolled
              ? "absolute right-8 top-1/2 -translate-y-1/2 opacity-100"
              : "opacity-100"
          }`}
        >
                                              {navItems.map((item) => (
                                                <button
                                                  key={item.id}
                                                  onClick={() => handleNavClick(item.id)}
                                                  className={`font-semibold text-[15px] px-4 py-2 rounded-full transition-all duration-300 ${
                                                    activeSection === item.id
                                                      ? "text-green-500 bg-gray/40  scale-105"
                                                      : "text-gray-600 hover:text-black hover:bg-green-50"
                                                  }`}
                                                >
                                                  {item.label}
                                                </button>
                                              ))}
                                            </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 hover:text-blue-50-700 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <span className="text-3xl font-bold">×</span>
            ) : (
              <span className="text-3xl font-bold">≡</span>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-inner animate-fadeIn">
          <div className="px-4 py-3 space-y-2 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-center rounded-full text-lg font-medium transition-all duration-300 px-4 py-2 ${
                  activeSection === item.id
                    ? "text-white bg-green-600 shadow"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
