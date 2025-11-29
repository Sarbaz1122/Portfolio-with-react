import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";


function Skill() {

  return (
    <>
    <section id='skills'>
    <div className='w-670 h-350  py-10 bg-blue-200 mx-15 rounded-2xl shadow-red-400 mt-15 -ml-0'>
      <div className='text-center '>
        <p className='text-emerald-600 text-3xl'>Skill & Tools</p>
        <h1 className='text-5xl font-bold text-gray-900 mt-5 '>My Toolbox</h1>
        <p className='my-5 text-gray-600  text-4xl mt-10'>I combine the right tools and technologies to  create websites and web apps that  look great, <br /> perform flawlessly, and meet your goals.</p>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-520 mx-50 mt-28 ">
          <SkillCard
            icon={<SiJavascript className="text-yellow-400 text-7xl" />}
            title="JavaScript"
          />
          <SkillCard
            icon={<SiTailwindcss className="text-cyan-500 text-7xl" />}
            title="Tailwind CSS"
          />
          <SkillCard
            icon={<SiBootstrap className="text-violet-400 text-7xl" />}
            title="Bootstrap"
          />
          <SkillCard
            icon={<FaFigma className="text-pink-500 text-7xl" />}
            title="UI / UX Design"
          />
          <SkillCard
            icon={<SiMongodb className="text-green-700 text-7xl" />}
            title="MongoDB"
          />
          <SkillCard
            icon={<SiExpress className="text-gray-600 text-7xl" />}
            title="Express.js"
          />
          <SkillCard
            icon={<FaReact className="text-blue-500 text-7xl" />}
            title="React.js"
          />
          <SkillCard
            icon={<FaNodeJs className="text-green-600 text-7xl" />}
            title="Node.js"
          />
          <SkillCard
            icon={<FaDatabase className="text-indigo-600 text-7xl" />}
            title="Database Design"
          />
          <SkillCard
            icon={<SiGit className="text-red-600 text-7xl" />}
            title="Git - Version Control"
          />
          <SkillCard
            icon={<SiGithub className="text-black text-7xl" />}
            title="GitHub"
          />
          <SkillCard
            icon={<VscVscodeInsiders className="text-blue-800 text-7xl" />}
            title="Visual Studio Code"
          />
        </div>
        </div>
       </div>
    </section>
    </>
  )
}
const SkillCard = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center bg-white px-0 rounded-xl p-25 shadow hover:shadow-xl transition">
    <div className="text-4xl mb-3">{icon}</div>
    <p className="font-semibold">{title}</p>
  </div>
);

export default Skill