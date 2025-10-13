import React, { useEffect, useState } from "react";
import CIcon from "../icons/CIcon.svg";
import TSIcon from "../icons/TSIcon.svg";
import HTMLIcon from "../icons/HTMLIcon.svg";
import CSSIcon from "../icons/CSSICon.svg";
import JSIcon from "../icons/JSIcon.svg";
import MongoDB from "../icons/MongoDB.svg";
import ReactIcon from "../icons/ReactIcon.svg";
import gitIcon from "../icons/Git.svg";
import reduxIcon from "../icons/Redux.svg";
import CPIcon from "../icons/CPIcon.svg";
import TailwindCSSIcon from "../icons/TWIcon.svg";
import postmanIcon from "../icons/Postman.svg";
import mySQLIcon from "../icons/mySQLIcon.svg";
import location from "../icons/LocationIcon.svg";
import learning from "../icons/LearingIcon.svg";
import nextJs from "../icons/nextJs.svg";
import java from "../icons/Java.svg";
import nodejS from "../icons/NodeJs.svg";
import expressJs from "../icons/Express.svg";
import docker from "../icons/Docker.svg";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY); // Update scroll position
  };

  const techStack = [
    { id: 1, name: "C++", source: CPIcon },
    { id: 2, name: "Java", source: java },
    { id: 3, name: "HTML", source: HTMLIcon },
    { id: 4, name: "CSS", source: CSSIcon },
    { id: 5, name: "TailwindCSS", source: TailwindCSSIcon },
    { id: 6, name: "JavaScript", source: JSIcon },
    { id: 7, name: "TypeScript", source: TSIcon },
    { id: 8, name: "React", source: ReactIcon },
    { id: 9, name: "Redux", source: reduxIcon },
    { id: 10, name: "Next Js", source: nextJs },
    { id: 11, name: "Node Js", source: nodejS },
    { id: 12, name: "Express", source: expressJs },
    { id: 13, name: "MongoDB", source: MongoDB },
    { id: 14, name: "MySQL", source: mySQLIcon },
    { id: 15, name: "Docker", source: docker },
    { id: 16, name: "Git", source: gitIcon },
    { id: 17, name: "Postman", source: postmanIcon },
  ];

  useEffect(() => {
    const containers = document.querySelectorAll("[data-scroll]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
          } else {
            entry.target.classList.remove("translate-y-0", "opacity-100");
            entry.target.classList.add("translate-y-10", "opacity-0");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    containers.forEach((container) => observer.observe(container));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full lg:px-36 md:px-12 px-6 flex flex-col md:gap-6 gap-4 mg:pt-0 py-8">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-500 flex justify-center">
          About &nbsp;<span className="text-orange-400">Me</span>
        </h1>
        <p className="font-times md:text-base text-sm">
          I am a software developer with 1+ year of experience in building
          scalable, interactive web applications. My focus is on
          performance optimisation, writing clean, maintainable code and
          continuously learning new technologies. I’m passionate about
          leveraging technology to solve real-world problems and excited to
          collaborate with teams that value innovation and creativity. 
        </p>
        <div className="flex flex-col gap-6 mt-6">
          <p className="md:text-2xl text-lg font-semibold text-violet-500 flex justify-center">
            Tools and Technologies
          </p>
          <div className="flex flex-wrap lg:gap-6 md:gap-4 justify-between gap-4">
            {techStack.map((item) => (
              <div
                data-scroll
                className="h-16 md:w-52 w-full bg-gray-200 p-4 flex gap-6 items-center rounded-md transition translate-y-10 duration-500 ease-in-out opacity-0"
              >
                <img src={item.source} alt= "tech-icon" className="w-10 h-10" />
                <p className="text-lg font-nunito">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-6 border-b pb-3  border-gray-300">
          <h1 className="md:text-2xl text-lg font-semibold text-violet-500 flex justify-center">
            Work Experience
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold md:text-xl text-base text-gray-600">
              Software Developer
            </h1>
            <div className=" flex justify-between">
              <div className="">
                <div className="flex gap-2 items-center py-1">
                  <img src={learning} alt={learning} className="w-4 h-4" />
                  <h1 className="text-gray-600 font-times font-medium">
                    Scubeelate Technologies
                  </h1>
                </div>
                <div className="flex gap-2 items-center py-1">
                  <img src={location} alt={location} className="w-4 h-4" />
                  <p className="text-gray-600 font-times">Bengaluru</p>
                </div>
              </div>
              <div className="">
                <p className="text-gray-600 font-times bg-slate-300 py-1 px-4 rounded-full text-center">
                  Full Time
                </p>
                <p className="text-gray-600 font-times py-1">
                  July 2024 - present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
