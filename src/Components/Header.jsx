import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import One from "../assets/Photos/Hero.jpeg";

function Header() {
  const whatsappNumber = "8754615978";
  const message = encodeURIComponent("Hello, I saw your portfolio and want to connect!");

  return (
    <div id="home" className="min-h-screen scroll-smooth ">
        
      <nav className="flex justify-center space-x-8 p-6 text-lg font-medium text-[#242329] ">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            href={`#${item.toLowerCase()}`} 
            key={item}
            className="hover:text-[#6E57E0] transition duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-10 gap-16">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="font-bold text-6xl text-[#242329]">Hi, I'm</h1>
          <h1 className="font-bold text-6xl mt-2 text-[#242329]">Sabapathi</h1>
          <h2 className="mt-4 text-2xl text-[#6D6A7C]">Fullstack Developer</h2>
          <p className="text-[#6D6A7C] mt-4 leading-relaxed">
            Expertise in web development at a high level, creating quality work.
          </p>

          {/* Contact Me Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            className="inline-block mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-[#5A43CB] cursor-pointer text-white font-medium px-6 py-3 text-lg rounded-md hover:bg-[#4a32b8] transition">
              Contact Me <PiTelegramLogo className="text-lg" />
            </button>
          </a>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-[#5A43CB]">
            <a
              href="https://www.linkedin.com/in/sabapathi-sivabalan-bab738241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl cursor-pointer hover:text-[#4a32b8] transition" />
            </a>
            <a
              href="https://github.com/siva865"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl cursor-pointer hover:text-[#4a32b8] transition" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl cursor-pointer hover:text-[#4a32b8] transition" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-[#5A43CB] rounded-[70%_70%_70%_70%] w-full h-full"></div>
          <img
            src={One}
            className="relative w-full h-full object-cover rounded-full shadow-lg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
