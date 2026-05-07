import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Authorized Agent", path: "/authorized-agent" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 py-2"
          : "bg-slate-900/60 backdrop-blur-md border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="px-5 py-2 flex items-center justify-between">
          {/* Logo with gradient text */}
          <Link to="/" className="group cursor-pointer">
            <div className="text-2xl font-black tracking-tight">
              <span className="text-white">
                GOOD
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent">
                DEAL
              </span>
            </div>
            <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:bg-white/10 group ${
                  location.pathname === item.path ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute inset-x-4 -bottom-0 h-[2px] bg-gradient-to-r from-primary to-blue-400 transition-transform duration-300 origin-left rounded-full ${
                  location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="relative overflow-hidden group bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] ${
            isOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-6 pt-2 border-t border-white/10 mt-1">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 group ${
                    location.pathname === item.path ? "text-white bg-white/5" : "text-gray-300 hover:text-white"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronRight
                    size={16}
                    className={`transition-all duration-300 ${
                      location.pathname === item.path ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </Link>
              ))}
              <div className="pt-4 mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                    Get in Touch
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;