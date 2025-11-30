import React from 'react';
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className='w-full bg-emerald-600/95 text-white mr-12 mb-30 py-20'>

      <h1 className="text-4xl font-semibold bg-emerald-500 rounded-full w-14 h-14 p-14 ml-25 -mt-10 flex items-center justify-center ">MU</h1>

        <ul className='flex justify-center items-center text-5xl gap-20 -mt-20 font-semibold ml-335 italic cursor-pointer'>
          <li><a href="#about" className="hover:text-red-500">About</a></li>
          <li><a href="#skill" className="hover:text-red-500">Skill</a></li>
          <li><a href="#services" className="hover:text-red-500">Services</a></li>
          <li><a href="#opensource" className="hover:text-red-500">Opensource</a></li>
          <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;



