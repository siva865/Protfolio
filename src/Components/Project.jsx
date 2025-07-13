import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Actodo from "../assets/Photos/Actodo.jpeg";
import Greenden from "../assets/Photos/Greenden.jpeg";
import UdemyClone from "../assets/Photos/Udemy-Clone.jpeg";
import Weatherapp from "../assets/Photos/Weather-app.jpeg";

const projects = [
  {
    title: "Actodo Project",
    image: Actodo,
    link: "https://actodo-tau.vercel.app/",
    description: "A modern task management application with drag-and-drop functionality"
  },
  {
    title: "Greenden Project",
    image: Greenden,
    link: "https://siva865.github.io/greenden-tailwind/index.html",
    description: "E-commerce platform for eco-friendly home products"
  },
  {
    title: "Udemy Project",
    image: UdemyClone,
    link: "https://siva865.github.io/udemy----clone/",
    description: "Online learning platform clone with course browsing"
  },
  {
    title: "WeatherApp Project",
    image: Weatherapp,
    link: "https://weather-app-theta-green-23.vercel.app/",
    description: "Real-time weather forecasting application with location detection"
  },
];

function Project() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div 
      className="flex flex-col items-center text-center py-20 px-4 md:px-8 scroll-smooth bg-gradient-to-b from-white to-[#f9f9ff]" 
      id="projects"
      ref={ref}
    >
      <motion.div
        className="max-w-6xl w-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#242329] bg-clip-text">
            Featured <span className="bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-[#6D6A7C] mt-3 text-lg md:text-xl max-w-2xl mx-auto">
            Here's a selection of my recent work. Each project was built with a focus on user experience and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                variants={cardVariants}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt={project.title}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#242329] mb-2">{project.title}</h3>
                  <p className="text-[#6D6A7C] mb-4 flex-grow">{project.description}</p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] text-white rounded-lg px-6 py-2 font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Scrolling Carousel (Alternative) */}
        {false && (
          <motion.div 
            className="mt-20 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex gap-8 py-4"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ 
                ease: "linear", 
                duration: 20, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              {[...projects, ...projects].map((project, index) => (
                <motion.div
                  key={`carousel-${index}`}
                  className="flex flex-col items-center min-w-[300px]"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative overflow-hidden rounded-xl w-full h-48">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#5A43CB] px-6 py-2 rounded-lg font-medium"
                      >
                        View Demo
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Project;