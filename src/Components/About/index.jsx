import React from 'react';
import pic from './profilePic.jpg'
// import MySVG from "./Welcome to My Portfolio (1).png";
import image from './myImage.Jpg'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaReddit } from "react-icons/fa";


function About() {
  return (
    <>
    {/* <--Main dev--> */}
    <div className="App w-600 h-145 py-160 ml-40 -mt-20 bg-blue-200 max-20 rounded-2xl shadow-amber-200" >
      <div className="Header ">

                 {/* Heading */}

      <p className="text-4xl text-emerald-500  ml-100 -mt-100">Hello, I'am</p>
      <h1 className='text-5xl font-bold mt-7 ml-100'>Muhammad_Ullah</h1>
    </div>

                 {/* Image */}

       <img src={pic} alt="Profile" className="w-40 h-40 rounded-full ml-46 -mt-33" />
        {/* { <div className="w-20 h-20 rounded-full ml-46 -mt-33 animate-pulse-slow">
      <img src={MySVG} alt="Animated SVG" />
    </div> } */}
       

                  {/* Description */}

      <span className='m-100'>
      <h2 className='text-6xl font-semibold ml-25 mt-25 text-emerald-600 text-shadow-sm '>Full Stack Developer</h2> 
      <p className='text-4xl font-semibold mt-10 ml-25 text-gray-700 tracking-wider leading-relaxed'>
        Your idea, my code <br /> 
        togather we,ll create a website that <span className='font-bold'> wows your audience!</span> <br />
        let,s turn your vision into a modren web exprince <br />
        that gets naticed and drives results.
      </p>
      </span>

                  {/* Button */}


<div className="text-4xl font-bold mt-4 ml-25">
  <a
    href="#Contact"
    className="
      bg-emerald-600 
      text-amber-50 
      px-9 
      py-5 
      rounded-full 
      cursor-pointer 
      hover:bg-emerald-500 
      inline-flex 
      items-center 
      gap-3
      transition-all
    "
  >
    Let's Talk
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </a>

{/* <!--- Alternative Button Code ---> */}

{ <div className='text-4xl font-bold -mt-15 ml-75 '>
  <a href="#Contact" className= "   bg-emerald-600 text-amber-50 px-9 py-4 rounded-full cursor-pointer hover:bg-emerald-500">My work</a>
</div>}



</div>

{/* <!--- Find me Section ---> */}

    <div className="mt-8 ml-6">
  <h1 className="text-emerald-500 text-4xl mb-3 ml-25 mt-18 font-semibold">Find me On</h1>
  <div className="flex gap-6 ml-80 -mt-14">
    <a href="https://github.com/Sarbaz1122" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-5xl hover:text-gray-500 transition-colors" />
    </a> 
    <a href="https://www.linkedin.com/in/muhammadullah07/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-5xl hover:text-blue-700 transition-colors" />
    </a>
    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-5xl hover:text-pink-500 transition-colors" />
    </a>
    <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-5xl hover:text-blue-600 transition-colors" />
    </a>
    <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
      <FaReddit className="text-5xl hover:text-orange-500 transition-colors" />
    </a>
  </div>
</div>




<img src={image} alt="pic3" className="w-190 h-230 -mt-235 ml-355 rounded-2xl" />




    </div>
    
    </> 
  );
}

export default About;





