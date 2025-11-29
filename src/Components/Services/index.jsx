

import { BiMobileAlt } from "react-icons/bi";
import { FiPenTool } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { FaCloudUploadAlt, FaLaptopCode, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern, accessible UIs using React + Tailwind. Pixel-perfect, responsive layouts.",
    Icon: FaLaptopCode,
  },
  {
    title: "Backend Development",
    desc: "Scalable APIs and secure backend systems built with Node.js and Express, ensuring reliable performance and clean data handling.",
    Icon: FaServer,
  },
  {
    title: "Responsive Web Apps",
    desc: "Mobile-first, performant web apps that work well on all devices and screens.",
    Icon: BiMobileAlt,
  },
  {
    title: "UI/UX Design",
    desc: "I craft friendly, easy-to-use interfaces that help users complete tasks quickly and come back happily.",
    Icon: FiPenTool,
  },
  {
    title: "Performance & Deployment",
    desc: "Optimized pages, fast load times, and basic SEO best-practices for discoverability.",
    Icon: FaCloudUploadAlt,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className=" text-emerald-600 font-medium text-4xl">What I do</h3>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-gray-800">
            Services
          </h2>
          <p className="mt-3 text-gray-600 text-3xl mx-auto">
            I build professional, modern websites and web apps. Below are the
            core services I offer — tailored to your idea and goals.
          </p>
        </div>

        {/* GRID UPDATED */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-190 place-items-center -ml-30">
  {services.map((itme, index) => (
    <article
      key={index}
      className="w-[640px] h-[500px] bg-blue-200 rounded-2xl shadow-md hover:shadow-xl transition p-8"
    >
      <div className="inline-flex items-center justify-center w-[80px] h-[80px] rounded-full border border-emerald-200 bg-emerald-100 text-emerald-600 mb-6">
        <itme.Icon className="text-4xl" />
      </div>

      <h4 className="text-4xl font-semibold text-gray-800 mb-4">
        {itme.title}
      </h4>

      <p className="text-gray-600 leading-relaxed text-3xl">
        {itme.desc}
      </p>

      <div className="mt-6">
        <a
          href="#contact"
          className="inline-flex items-center text-emerald-600 font-semibold hover:underline text-lg"
        >
          Work with me <BsArrowRight className="pl-2 mt-1 text-2xl" />
        </a>
      </div>
    </article>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;

