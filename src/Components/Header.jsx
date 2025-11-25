import { useState, useEffect } from "react";
import { FaWhatsapp, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import One from "../assets/Photos/Hero.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappNumber = "+91 8754615978";
  const message = encodeURIComponent("Hello, I saw your portfolio and want to connect!");
  const navLinks = ["Home", "About", "Projects", "Contact"];

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <div id="home" className="min-h-screen scroll-smooth relative overflow-hidden">
      {/* Desktop Navbar with scroll effect */}
      <motion.nav 
        className={`hidden md:flex justify-center space-x-8 p-6 text-lg font-medium fixed w-full z-50 ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {navLinks.map((item) => (
          <motion.a
            href={`#${item.toLowerCase()}`}
            key={item}
            className="text-[#242329] hover:text-[#6E57E0] transition duration-300 relative group"
            whileHover={{ scale: 1.05 }}
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#6E57E0] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.div 
        className="flex justify-end md:hidden px-6 pt-6 fixed right-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl text-[#242329] p-2 rounded-full bg-white/80 backdrop-blur-sm"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white/95 backdrop-blur-lg shadow-lg p-6 z-50"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl absolute top-4 right-4 text-[#242329] p-1 hover:bg-gray-100 rounded-full"
            >
              <FaTimes />
            </button>
            
            <motion.div 
              className="flex flex-col gap-6 mt-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((item) => (
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  key={item}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#242329] text-xl font-medium hover:text-[#6E57E0] transition duration-300 py-2"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-10 gap-10 md:gap-16 pt-20">
        <motion.div 
          className="text-center md:text-left max-w-lg"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="font-bold text-5xl sm:text-6xl text-[#242329]">
            Hi, I'm
          </motion.h1>
          <motion.h1 
            variants={itemVariants}
            className="font-bold text-5xl sm:text-6xl mt-2 text-[#242329] bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] bg-clip-text text-transparent"
          >
            Sabapathi
          </motion.h1>
          <motion.h2 variants={itemVariants} className="mt-4 text-2xl text-[#6D6A7C]">
            Fullstack Developer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[#6D6A7C] mt-4 leading-relaxed">
            Expertise in web development at a high level, creating quality work.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              className="inline-block mt-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] text-white font-medium px-6 py-3 text-lg rounded-md hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-[#5A43CB]/30">
                Contact Me <PiTelegramLogo className="text-lg" />
              </button>
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center md:justify-start gap-6 mt-8"
            variants={itemVariants}
          >
            {[
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sabapathi-sivabalan-bab738241/" },
              { icon: <FaGithub />, url: "https://github.com/siva865" },
              { icon: <FaWhatsapp />, url: `https://wa.me/${whatsappNumber}?text=${message}` }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#5A43CB] cursor-pointer hover:text-[#4a32b8] transition"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image with Animation */}
        <motion.div 
          className="relative w-64 h-64 md:w-96 md:h-96 mt-10 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] rounded-[70%_70%_70%_70%] w-full h-full"></div>
          <motion.img
            src={One}
            className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/10"
            alt="Profile"
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;