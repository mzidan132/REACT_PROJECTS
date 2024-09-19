"use client";
import React from 'react';
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub,FaMountain } from 'react-icons/fa';
import { SiMongodb,SiElectron, SiNextdotjs, SiExpress, SiPandas, SiFirebase, SiRender, SiTailwindcss,SiVercel,SiTensorflow, SiBootstrap, SiPhp, SiMysql } from 'react-icons/si';
import { MdPeople, MdOutlineChat } from 'react-icons/md'; 

function Skills() {
  useEffect(()=>{
    AOS.init({duration:500})
  },[])
  
  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-400" /> },
    {name:'Bootstrap',icon:<SiBootstrap className="text-purple-400" />},
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
  ];

  const backendSkills = [
    { name: 'php', icon: <SiPhp className="text-indigo-800" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
  ];

  const mlSkills=[
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'Pandas', icon: <SiPandas className="text-blue-800" /> },
    { name: 'Tensorflow', icon: <SiTensorflow className="text-yellow-800" /> },
  ];

  const crossplatformSkills=[
    { name: 'React Native', icon: <FaReact className="text-purple-500" /> },
    { name: 'ElectronJs', icon: <SiElectron className="text-blue-600" /> },
    { name: 'NextJs', icon: <SiNextdotjs className="text-blue-600" /> },
  ];

  const dbSkills=[
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-800" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-600" /> },
  ]
  const devopsSkills=[
    { name: 'GitHub', icon: <FaGithub className="text-black" /> },
    { name: 'Vercel', icon: <SiVercel className="text-grey-500" /> },
    { name: 'Render', icon: <SiRender /> },
  ]

  const softSkills = [
    { name: 'Communication', icon: <MdOutlineChat className="text-teal-500" /> },  
    { name: 'Teamwork', icon: <MdPeople className="text-purple-500" /> },
    { name: 'Perseverance', icon: <FaMountain className="text-purple-500" /> }

  ];

  return (
    <section id="skills" className="p-8 md:p-16  mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Skills</h2>
     
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Frontend Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center" data-aos="zoom-in">
        {frontendSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Backend Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center" data-aos="zoom-in">
        {backendSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Database Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center" data-aos="zoom-in">
        {dbSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Cross Platform Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center" data-aos="zoom-in">
        {crossplatformSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Devops Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center" data-aos="zoom-in">
        {devopsSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Machine Learning Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center" data-aos="zoom-in">
        {mlSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Soft Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center" data-aos="zoom-in">
        {softSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;