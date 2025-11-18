import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 🟣 Local Images Import
import Actodo from "../assets/Photos/Actodo.jpeg";
import Greenden from "../assets/Photos/Greenden.jpeg";
import Udemy from "../assets/Photos/Udemy-Clone.jpeg";
import Weather from "../assets/Photos/Weather-app.jpeg";
import Vibha from "../assets/Photos/vibhayoga.jpeg";
import Swati from "../assets/Photos/swatiyoga.jpeg";
import PCOS from "../assets/Photos/pw.jpeg";
import JK from "../assets/Photos/jk.jpeg";
import Ceaser from "../assets/Photos/cd.jpeg";

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
    image: Udemy,
    link: "https://siva865.github.io/udemy----clone/",
    description: "Online learning platform clone with course browsing"
  },
  {
    title: "WeatherApp Project",
    image: Weather,
    link: "https://weather-app-theta-green-23.vercel.app/",
    description: "Real-time weather forecasting application with location detection"
  },
  {
    title: "Vibha Yoga Academy",
    image: Vibha,
    link: "https://vibha-yoga-academy.vercel.app/",
    description: "Modern yoga academy website with animations and responsive UI"
  },
  {
    title: "Swati Sharma Yoga Website",
    image: Swati,
    link: "https://www.swatisharmayoga.com/",
    description: "Professional yoga trainer website with classes, schedule and booking"
  },
  {
    title: "PCOS Webinar Website",
    image: PCOS,
    link: "https://pcos-webinar-psi.vercel.app/",
    description: "Women health awareness webinar landing page with registration flow"
  },
  {
    title: "JK Skin Clinic Website",
    image: JK,
    link: "https://www.jkskinclinic.com/",
    description: "Dermatology clinic site with treatments, booking & responsive UI"
  },
  {
    title: "Dr Ceaser Diabetes Clinic",
    image: Ceaser,
    link: "https://www.drceaserdiabetiesclinic.com/",
    description: "Diabetes clinic website with treatment plans and modern UI design"
  }
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
      transition: { staggerChildren: 0.2, when: "beforeChildren" }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const cardVariants = {
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div
      className="flex flex-col items-center text-center py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f8f8ff]"
      id="projects"
      ref={ref}
    >
      <motion.div
        className="max-w-7xl w-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f1e24]">
            My{" "}
            <span className="bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="text-[#6D6A7C] mt-3 text-lg md:text-xl max-w-3xl mx-auto">
            A curated collection of my best and latest work — modern, responsive
            and beautifully crafted web experiences.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
                variants={cardVariants}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1f1e24] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#6D6A7C] mb-4 flex-grow">
                    {project.description}
                  </p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] text-white rounded-lg px-6 py-2 font-medium shadow hover:opacity-90 transition"
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
      </motion.div>
    </div>
  );
}

export default Project;
