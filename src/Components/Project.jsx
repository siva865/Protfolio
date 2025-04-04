import React from "react";
import { motion } from "framer-motion";  
import Actodo from "../assets/Photos/Actodo.jpeg";
import Greenden from "../assets/Photos/Greenden.jpeg";
import UdemyClone from "../assets/Photos/Udemy-Clone.jpeg";
import Weatherapp from "../assets/Photos/Weather-app.jpeg";

const projects = [
  {
    title: "Actodo Project",
    image: Actodo,
    link: "https://actodo-tau.vercel.app/",
  },
  {
    title: "Greenden Project",
    image: Greenden,
    link: "https://siva865.github.io/greenden-tailwind/index.html",
  },
  {
    title: "Udemy Project",
    image: UdemyClone,
    link: "https://siva865.github.io/udemy----clone/",
  },
  {
    title: "WeatherApp Project",
    image: Weatherapp,
    link: "https://weather-app-theta-green-23.vercel.app/",
  },
];

function Project() {
  return (
    <div className="flex flex-col items-center text-center mt-20  scroll-smooth" id="projects">
      
      <div>
        <h1 className="text-4xl font-bold text-black">Projects</h1>
        <p className="text-[#6D6A7C] mt-3">Most recent work</p>
      </div>

     
      <motion.div
        className="overflow-hidden w-full mt-10"
        whileHover={{ scale: 1.02 }} 
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} 
        >
          {projects.concat(projects).map((project, index) => (
            <div key={index} className="flex flex-col items-center min-w-[250px] mx-3">
              <motion.img
                src={project.image}
                className="w-48 h-48 rounded-lg shadow-md hover:scale-105 transition-transform"
                alt={project.title}
              />
              <h1 className="text-2xl font-bold mt-3">{project.title}</h1>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5A43CB] text-white rounded-md px-5 py-2 mt-2 hover:bg-purple-700"
              >
                Demo
              </a>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
