import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Braces, Server, ChevronUp, ChevronDown, Code, Database, Cpu, Layout } from "lucide-react";

function About() {
  const [isFrontendOpen, setIsFrontendOpen] = useState(true);
  const [isBackendOpen, setIsBackendOpen] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        type: "spring",
        damping: 10
      }
    })
  };

  const skills = {
    frontend: [
      { name: "HTML", level: 90, icon: <Layout size={16} /> },
      { name: "CSS/Tailwind", level: 85, icon: <Layout size={16} /> },
      { name: "JavaScript", level: 80, icon: <Code size={16} /> },
      { name: "React", level: 85, icon: <Code size={16} /> }
    ],
    backend: [
      { name: "Node.js", level: 80, icon: <Cpu size={16} /> },
      { name: "Express.js", level: 75, icon: <Cpu size={16} /> },
      { name: "MongoDB", level: 80, icon: <Database size={16} /> },
      { name: "Firebase", level: 70, icon: <Database size={16} /> }
    ]
  };

  return (
    <motion.div 
      className="text-center py-20 px-4 md:px-8 flex flex-col items-center scroll-smooth bg-white"
      id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* About Me Section */}
      <motion.div variants={itemVariants} className="max-w-4xl w-full">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-[#242329] mb-4"
          variants={itemVariants}
        >
          About <span className="bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] bg-clip-text text-transparent">Me</span>
        </motion.h1>
        
        <motion.p 
          className="text-[#6D6A7C] text-lg md:text-xl mb-8"
          variants={itemVariants}
        >
          My introduction
        </motion.p>

        <motion.div 
          className="text-[#6D6A7C] text-lg max-w-3xl mx-auto mb-16 leading-relaxed"
          variants={itemVariants}
        >
          <p>
            Passionate and self-driven Full Stack Developer with expertise in building modern, 
            responsive, and user-friendly web applications. I specialize in the MERN stack 
            (MongoDB, Express.js, React, and Node.js) to create efficient and scalable solutions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="w-full flex flex-col md:flex-row gap-8 justify-between"
          variants={containerVariants}
        >
          {/* Frontend Skills */}
          <motion.div 
            className="w-full md:w-[48%] bg-[#f9f9ff] rounded-xl p-6 shadow-sm"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div 
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => setIsFrontendOpen(!isFrontendOpen)}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#5A43CB]/10 p-2 rounded-lg">
                  <Braces size={24} className="text-[#5A43CB]" />
                </div>
                <h2 className="text-black font-bold text-xl">Frontend</h2>
              </div>
              {isFrontendOpen ? 
                <ChevronUp size={20} className="text-[#5A43CB]" /> : 
                <ChevronDown size={20} className="text-[#5A43CB]" />
              }
            </div>

            <AnimatePresence>
              {isFrontendOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {skills.frontend.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="mb-4"
                      variants={itemVariants}
                    >
                      <div className="flex justify-between items-center text-sm font-medium mb-1">
                        <div className="flex items-center gap-2">
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] h-2 rounded-full"
                          variants={skillBarVariants}
                          custom={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="w-full md:w-[48%] bg-[#f9f9ff] rounded-xl p-6 shadow-sm"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div 
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => setIsBackendOpen(!isBackendOpen)}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#5A43CB]/10 p-2 rounded-lg">
                  <Server size={24} className="text-[#5A43CB]" />
                </div>
                <h2 className="text-black font-bold text-xl">Backend</h2>
              </div>
              {isBackendOpen ? 
                <ChevronUp size={20} className="text-[#5A43CB]" /> : 
                <ChevronDown size={20} className="text-[#5A43CB]" />
              }
            </div>

            <AnimatePresence>
              {isBackendOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {skills.backend.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="mb-4"
                      variants={itemVariants}
                    >
                      <div className="flex justify-between items-center text-sm font-medium mb-1">
                        <div className="flex items-center gap-2">
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] h-2 rounded-full"
                          variants={skillBarVariants}
                          custom={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;