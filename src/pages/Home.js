import React, { useRef, useState } from "react";
import myImage from "../icons/Image2.jpeg";
import downloadIcon from "../icons/DownloadIcon.svg";
import About from "../pages/About";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [section, setSection] = useState("Home");

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen spectrum-background">
      <div className="w-full h-16 flex justify-between lg:px-36 md:md:px-12 px-8 py-6 items-center bg-[#ffffff] inset-0 fixed z-[1000]">
        <div className="flex md:gap-4 gap-2 items-center">
          <div className="md:w-12 md:h-12 h-8 w-8 bg-purple-600 flex items-center justify-center rounded-full md:text-xl text-lg font-semibold text-white">
            S
          </div>

          <div className="font-semibold md:text-2xl text-lg">SaiRoopa</div>
        </div>

        <div className="md:flex lg:gap-10 md:gap-6 items-center hidden">
          <div
            className={`cursor-pointer ${
              section === "Home"
                ? "text-purple-600 border-b-2 border-purple-600 pb-1 font-semibold"
                : "text-[#333333] font-medium"
            }  `}
            onClick={() => {
              setSection("Home");
              scrollToSection(homeRef);
            }}
          >
            Home
          </div>
          <div
            className={`cursor-pointer ${
              section === "About"
                ? "text-purple-600 border-b-2 border-purple-600  pb-1 font-semibold"
                : "text-[#333333] font-medium "
            } `}
            onClick={() => {
              scrollToSection(aboutRef);
              setSection("About");
            }}
          >
            About
          </div>
          <div
            className={` cursor-pointer ${
              section === "Project"
                ? "text-purple-600 border-b-2 border-purple-600 pb-1 font-semibold"
                : "text-[#333333] font-medium "
            } `}
            onClick={() => {
              scrollToSection(projectRef);
              setSection("Project");
            }}
          >
            Projects
          </div>
          <div
            className={`cursor-pointer ${
              section === "Contact"
                ? "text-purple-600 border-b-2 border-purple-600 font-semibold pb-1"
                : "text-[#333333] font-medium "
            } `}
            onClick={() => {
              scrollToSection(contactRef);
              setSection("Contact");
            }}
          >
            Contact
          </div>
        </div>
        <button
          className="bg-purple-600 flex items-center justify-center py-2 rounded-lg font-semibold md:px-4 px-2 text-white hover:bg-purple-400 hover:outline-purple-600 md:text-base text-sm"
          onClick={() => {
            scrollToSection(contactRef);
            setSection("Contact");
          }}
        >
          Let's Connect
        </button>
      </div>

      <div
        className="lg:px-36 md:px-12 px-4 flex justify-between md:py-0 pt-24"
        ref={homeRef}
      >
        <div className="flex flex-col gap-2 justify-center">
          <p className="font-semibold md:text-4xl text-2xl font-gillsans text-[#132238]">
            Hello, I'm <br />
            Galiveeti SaiRoopa
          </p>
          <p className="text-lg font-medium text-[#48bcba] font-nunito">
            Software Developer
          </p>
          <p className="text-gray-900 font-times md:text-base text-sm">
            Building seamless digital experiences from front to back <br />{" "}
            crafting scalable, modern web solutions with precision and passion..
          </p>
          <div className="flex gap-3">
            <a
              href="/Resume_SaiRoopa_09.pdf"
              download="SaiRoopa_Resume.pdf"
              className="flex gap-6 hover:bg-purple-600 border border-purple-600 rounded-full group"
            >
              <button className="text-black group-hover:text-white py-2 px-5 font-semibold text-base">
                Resume
              </button>
              <div className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full z-[9] cursor-pointer">
                <img
                  src={downloadIcon}
                  alt="download-icon"
                  className="download"
                />
              </div>
            </a>

            <button className="bg-purple-600 text-white py-2 px-5 rounded-full font-semibold text-base hover:bg-gradient-to-r from-cyan-300 to-purple-400">
              Contact Me
            </button>
          </div>
        </div>
        <div className="md:py-28">
          <img
            src={myImage}
            alt="image"
            className="lg:w-80 lg:h-96 md:w-60 md:h-80 rounded-lg md:flex hidden"
          />
        </div>
      </div>
      <div ref={aboutRef} className="scroll-mt-24">
        <About />
      </div>
      <div ref={projectRef} className="scroll-mt-24">
        <Projects />
      </div>
      <div ref={contactRef} className="scroll-mt-20">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
