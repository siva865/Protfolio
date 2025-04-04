import React, { useState } from "react";
import { Braces, Server, ChevronUp, ChevronDown } from "lucide-react";

function About() {
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [isBackendOpen, setIsBackendOpen] = useState(false);

  return (
    <div className="text-center mt-10 flex flex-col items-center  scroll-smooth" id="about">
      {/* About Me Section */}
      <h1 className="text-black font-bold text-4xl">About Me</h1>
      <p className="text-[#6D6A7C]text-[#6D6A7C]">My introduction</p>

      <div className="mt-6 text-[#6D6A7C] max-w-lg">
        <p>
          Passionate and self-driven Full Stack Developer with a growing skillset in building modern, 
          responsive, and user-friendly web applications. I specialize in working with the MERN stack—MongoDB, 
          Express.js, React, and Node.js—to create efficient and scalable solutions for real-world problems.
        </p>
      </div>

      <div className="mt-20 w-[90%] max-w-3xl flex justify-between">
    
        <div className="w-[48%]">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsFrontendOpen(!isFrontendOpen)}
          >
            <div className="flex items-center gap-2">
              <Braces size={28} color="#4A32B8" />
              <h2 className="text-black font-bold text-lg">Frontend Developer</h2>
            </div>
            {isFrontendOpen ? <ChevronUp size={20} color="#4A32B8" /> : <ChevronDown size={20} color="#4A32B8" />}
          </div>
   

          {isFrontendOpen && (
            <div className="mt-4">
              {[
                { name: "HTML", level: 90 },
                { name: "CSS", level: 80 },
                { name: "JavaScript", level: 70 },
                { name: "React", level: 80 },
              ].map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-[#4A32B8] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Backend Skills */}
        <div className="w-[48%]">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsBackendOpen(!isBackendOpen)}
          >
            <div className="flex items-center gap-2">
              <Server size={28} color="#4A32B8" />
              <h2 className="text-black font-bold text-lg">Backend Developer</h2>
            </div>
            {isBackendOpen ? <ChevronUp size={20} color="#4A32B8" /> : <ChevronDown size={20} color="#4A32B8" />}
          </div>
          

          {isBackendOpen && (
            <div className="mt-4">
              {[
                { name: "Node.js", level: 75 },
                { name: "Express.js", level: 70 },
                { name: "MongoDB", level: 80 },
                { name: "Firebase", level: 65 },
              ].map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-[#4A32B8] h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
