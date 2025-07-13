import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdOutlineEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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

  const contactMethods = [
    {
      icon: <MdOutlineEmail className="text-4xl" />,
      text: "siranjeevisabapathi@gmail.com",
      link: "mailto:siranjeevisabapathi@gmail.com",
      color: "bg-[#5A43CB]/10 text-[#5A43CB]"
    },
    {
      icon: <MdPhone className="text-4xl" />,
      text: "+91 8754615978",
      link: "tel:+918754615978",
      color: "bg-[#8B7AE7]/10 text-[#8B7AE7]"
    },
    {
      icon: <MdLocationOn className="text-4xl" />,
      text: "Tamil Nadu, India",
      color: "bg-[#6E57E0]/10 text-[#6E57E0]"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sabapathi-sivabalan-bab738241",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/siva865",
      label: "GitHub"
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/918754615978",
      label: "WhatsApp"
    },
    {
      icon: <PiTelegramLogo />,
      link: "https://t.me/sabapathi_s",
      label: "Telegram"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 px-4 md:px-8 flex flex-col items-center bg-gradient-to-b from-white to-[#f9f9ff]"
      id="contact"
    >
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#242329] mb-4"
            variants={itemVariants}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-[#5A43CB] to-[#8B7AE7] bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p className="text-lg text-[#6D6A7C]" variants={itemVariants}>
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16"
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-xl ${method.color} flex flex-col justify-between items-center text-center min-h-[240px] w-full max-w-full break-words`}
            >
              <div className="p-3 rounded-full bg-white mb-2">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-1 w-full break-words">
                {method.text}
              </h3>
              {method.link ? (
                <a
                  href={method.link}
                  className="text-sm font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              ) : (
                <p className="text-sm font-medium">Based here</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-[#242329] mb-6">
            Connect with me
          </h3>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-full shadow-md text-[#5A43CB] hover:bg-[#5A43CB] hover:text-white transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center text-[#6D6A7C] text-sm"
          variants={itemVariants}
        >
          <p>
            Copyright © {new Date().getFullYear()} Sabapathi. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
