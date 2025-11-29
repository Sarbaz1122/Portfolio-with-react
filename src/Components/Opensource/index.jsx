import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const opensource = [
  {
    id: 1,
    title: "Portfolio Website",
    Paragraph: " A personal portfolio website to showcase my skills, projects, and contact info using React and Tailwind CSS.",
    icon:"https://github.com/Sarbaz1122",
     tech: ["React", "Redux", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Weather App",
    Paragraph: " this is A real-time weather app project which  are use to fetches data from an API using React and Tailwind CSS.",
    icon:"https://github.com/Sarbaz1122",
     tech: ["React", "Redux", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Todo App",
    Paragraph: " This is one of  A simple,attrective and clean todo app which create by  using React, Redux, and Tailwind CSS.",
    icon:"https://github.com/Sarbaz1122",
     tech: ["React", "Redux", "Tailwind CSS"],
  }
];

function Opensource() {
  return (
    <section id="opensource">
      <div className="bg-blue-200 py-230 min-w-2xs">
        
        {/* Heading */}
        <div className="text-center -mt-200">
          <p className=" text-4xl text-emerald-600 font-medium ">What I build</p>
          <h1 className="text-3xl sm:text-6xl font-extrabold text-gray-800 mt-1">
            Open Source Projects
          </h1>
          <p className="text-gray-600 mt-10 text-4xl">
            I create open source projects that solve real problems, showcase modern technologies, <br /> and demonstrate best practices...
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-20">
          {opensource.map((item) => (
            <div 
              key={item.id} 
              className="p-16 bg-white  rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-4xl font-semibold">{item.title}</h2>
              <p className="text-gray-700 mt-12 text-3xl">{item.Paragraph}</p>

              <div className="mt-8 flex  flex-wrap gap-3">
                {item.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-3xl bg-emerald-50 border border-green-200 text-emerald-600 px-2 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                  
                ))}
              </div>
              <div className="flex gap-4 mt-12 text-3xl">
                <a
                  href={item.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-800 hover:text-emerald-500 duration-300 font-semibold"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Opensource;