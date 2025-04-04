import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
    return (
        <div className="flex flex-col items-center text-center mt-16  scroll-smooth" id="contact">
            
            <h1 className="text-4xl font-bold text-black mb-2">Get In Touch</h1>
            <p className="text-lg text-gray-500 mb-6">Contact Me</p>

            
            <div className="flex flex-col md:flex-row items-center gap-6">
                
                <a 
                    href="mailto:siranjeevisabapathi@gmail.com" 
                    className="flex items-center gap-3 text-lg text-gray-700 hover:text-purple-700 transition"
                >
                    <MdOutlineEmail className="text-[#4A32B8] text-4xl" />
                    <span className="text-3xl">siranjeevisabapathi@gmail.com</span>
                </a>

               
                <a 
                    href="https://www.linkedin.com/in/sabapathi-sivabalan-bab738241" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg text-gray-700 hover:text-purple-700 transition"
                >
                    <FaLinkedin className=" text-[#4A32B8] text-4xl" />
                    <span className="text-3xl">LinkedIn</span>
                </a>
              
            </div>
            <p className="mt-5">Copyright © 2024 Sabapathi. All Rights Reserved.</p>
        </div>
    );
}

export default Contact;
