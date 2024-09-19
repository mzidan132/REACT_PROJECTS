"use client";
import React from 'react';
import image from '../../public/pic-1.jpg'; // Include the correct file extension
import Resume from './Resume';
import {useEffect} from 'react'

function Introduction() {
  useEffect(() => {
    // Triggering the animation after 1 second
    setTimeout(() => {
      document.querySelector('.slide-in-text').classList.add('slide-in-text-loaded');
    }, 1000); // 1-second delay
  }, []);
  return (
    <section id="introduction" className="relative bg-cover bg-center p-16 md:p-[200px] flex flex-col md:flex-row items-center justify-around mx-auto" style={{ backgroundImage: `url(bg.jpg)` }}>
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-slate-950 opacity-50 z-20'>
      </div>
      <div className="faded mb-6 md:mb-0 z-30 relative">
        <img
          src="pic-1.jpg"
          alt="Profile"
          className="w-32 h-32 md:w-[400px] cursor-pointer transform hover:scale-105 transition duration-300 md:h-[500px] border-2 border-solid border-blue-500 shadow-lg mx-auto"
        />
      </div>
      <div className="text-center md:text-left md:ml-4 relative z-30 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-blue-600" >
      <div class="card example-2">
        <div class="inner">
          <h3>ZinDin Zidan</h3>
        </div></div>
      </h2>
        <p className="text-xl mb-2 text-violate">Software Developer</p>
        <p className="text-lg max-w-prose slide-in-text">
          My goal is to become a leading full-stack developer who delivers quality, scalable, accessible, responsive and secure websites. I seek opportunities to contribute to an organization and learn from professionals, aiming to push the limits and boundaries of my current understanding of web development.I also developed desktop and mobile apps with basic crud operation in backend.
        </p>
        <Resume />
      </div>
    </section>
  );
}

export default Introduction;
