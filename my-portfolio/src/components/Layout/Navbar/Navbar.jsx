import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css'; // Custom CSS import


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.substring(1));
    }
  };

  // Animation variants (same as before)
  const logoVariants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  const navItemVariants = {
    hover: { scale: 1.08, y: -2, transition: { type: "spring", stiffness: 500, damping: 15 } },
    tap: { scale: 0.95, transition: { type: "spring", stiffness: 500, damping: 15 } }
  };

  const buttonVariants = {
    hover: { scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.92, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  const darkModeVariants = {
    hover: { scale: 1.15, rotate: 180, transition: { type: "spring", stiffness: 300, damping: 10, rotate: { duration: 0.4 } } },
    tap: { scale: 0.85, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  const imageVariants = {
    hover: { scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300, damping: 10 } },
    tap: { scale: 0.9, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 navbar-smooth-scroll ${
        scrolled 
          ? 'navbar-glass shadow-2xl py-3 border-b border-gray-200/50 dark:navbar-glass-dark dark:border-gray-700/50' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Full Screen Grey Strip Background */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with Professional Image */}
          <motion.div 
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex items-center space-x-4 group cursor-pointer"
          >
            {/* Professional Image Logo */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              {/* Main Image with Custom CSS */}
              <motion.img 
                src="/images/PrinceImage.jpg" 
                alt="Prince"
                className="navbar-profile-image w-14 h-14"
                whileHover={{
                  borderColor: "#3B82F6",
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-full navbar-gradient-bg -z-10"
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { 
                    rotate: { duration: 1, ease: "linear" },
                    scale: { duration: 0.3 }
                  }
                }}
              />
              
              {/* Online Status Indicator with Custom CSS */}
              <div className="navbar-status-indicator"></div>
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col">
              <motion.a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="text-2xl lg:text-3xl font-bold navbar-gradient-text transition-all duration-1000 block"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                Prince
              </motion.a>
              <motion.p 
                className="text-sm text-gray-600 dark:text-gray-400 font-medium"
                initial={{ opacity: 0.8 }}
                whileHover={{ 
                  opacity: 1,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                Full Stack Developer
              </motion.p>
              <motion.div 
                className="h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full mt-1"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 navbar-glass rounded-2xl px-6 py-3 navbar-shadow-xl border border-white/30 dark:navbar-glass-dark  dark:border-gray-700/30 ">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`navbar-link px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeSection === item.href.substring(1) ? 'navbar-link-active' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
            
            {/* Dark Mode Toggle */}
            <motion.button
              variants={darkModeVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={toggleDarkMode}
              className="p-3 rounded-2xl bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 navbar-shadow-xl border border-white/30 dark:border-gray-600/30"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <motion.div
                  initial={{ scale: 0.8, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Sun size={22} className="text-yellow-500" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Moon size={22} className="text-gray-700 dark:text-gray-300" />
                </motion.div>
              )}
            </motion.button>

            {/* Hire Me Button with Custom CSS */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection('#contact')}
              className="navbar-hire-btn px-8 py-3 text-white font-semibold rounded-2xl navbar-shadow-xl border border-blue-500/30"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Hire Me
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <motion.button
              variants={darkModeVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={toggleDarkMode}
              className="p-3 rounded-xl navbar-glass shadow-lg border border-white/30 dark:navbar-glass-dark dark:border-gray-700/30"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl navbar-glass shadow-lg border border-white/30 dark:navbar-glass-dark dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-6 right-6 mt-4 navbar-mobile-menu rounded-2xl navbar-shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden navbar-fade-in"
            >
              <div className="px-4 pt-6 pb-8 space-y-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, ease: "easeOut" }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center justify-between px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border-2 navbar-slide-in ${
                      activeSection === item.href.substring(1)
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-700 dark:text-gray-300 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-800/50'
                    }`}
                    whileHover={{ 
                      scale: 1.03,
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span>{item.name}</span>
                    <motion.div 
                      className={`w-2 h-2 rounded-full ${
                        activeSection === item.href.substring(1) 
                          ? 'bg-blue-500' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
                
                {/* Mobile Hire Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, ease: "easeOut" }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full mt-4 px-6 py-4 navbar-hire-btn font-semibold rounded-xl shadow-lg transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Hire Me
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;