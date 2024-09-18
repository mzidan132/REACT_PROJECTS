import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiBootstrap,SiStripe,SiMaterialformkdocs } from 'react-icons/si';

function Projects() {
  return (
    <section id="projects" className="p-8 md:p-16">
      <div className="max-w-[1440px] mx-auto" style={{marginBottom:'0rem'}}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Projects</h2>
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-2 border-blue-500 rounded-md p-3 my-6 hover:scale-103 transition duration-300">
          <div className="md:w-1/2">
            <img
              src="/furniflex.jpg"  // Replace with your image path
              alt="Project Image"
              className="cursor-pointer transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">FurniFlex</h3>
            <p className="text-lg md:text-xl mb-2 text-center md:text-left">A web application that serves as a marketplace for buying and selling furniture products. It provides a platform where users can browse and purchase furnitures from various categories</p>
            <p className="text-lg md:text-xl mb-2">Core Features:</p>
            <ul className="list-disc list-inside">
              <li>Here users can buy and sell their product from various category of furnitures</li>
              <li>Separated Dashboard for users and Admin for business management</li>
              <li>Payment gateway integrated using stripe and secured using JWT and dotenv</li>
            </ul>
            <p className="md:text-2xl mb-4 mt-2 flex items-center text-xl"><span className='md:text-2xl text-[14px]'>Used Technology:</span> 
              <FaHtml5 className="text-orange-600 ml-3" />
              <FaCss3Alt className="text-blue-600 ml-3" />
              <SiBootstrap className="ml-3 text-purple-400"/> 
              <FaJsSquare className="text-yellow-500 ml-3" />
              <FaReact className="text-blue-400 ml-3" />
              <SiMongodb className="text-green-600 ml-3" />
              <SiExpress className="text-gray-500 ml-3" />
              <SiFirebase className="text-yellow-600 ml-3" />  
              <SiStripe className="text-purple-600 ml-3" />  
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-start mt-4">
              <a
                href="https://furniflex-phi.vercel.app/"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-xl text-white px-4 py-2 font-bold text-center rounded-md transition-colors duration-300 block md:inline-block"
              >
                Live Link
              </a>
              <a
                href="https://drive.google.com/file/d/1Yumc3pgUn4D4Ign3t0mHgGY4v49TC6kb/view?usp=drive_link"
                className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                Demo Video
              </a>
              <a
                href="https://github.com/mzidan132/EcommerceFurniture"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Codes
              </a>
            </div>
          </div>
        </div>
        <div className="hover:scale-103 transition duration-300 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-2 border-blue-500 rounded-md p-3 my-6">
          <div className="md:w-1/2">
            <img
              src="/blog.png"  
              alt="Project Image"
              className="cursor-pointer transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">Social Blog App</h3>
            <p className="text-lg md:text-xl mb-2 text-center md:text-left">A social media platform to socialize users like facebook or news platforms.</p>
            <p className="text-lg md:text-xl mb-2">Core Features:</p>
            <ul className="list-disc list-inside">
              <li>Here users can read others posts</li>
              <li>User can comment on others blog post to communicate</li>
              <li>Registered users can create blogs where the image will be saved in imgbb and update it.</li>
            </ul>
            <p className="md:text-2xl mb-4 mt-2 flex items-center text-xl"><span className='md:text-2xl text-[14px]'>Used Technology:</span> 
              <FaHtml5 className="text-orange-600 ml-3" />
              <FaCss3Alt className="text-blue-600 ml-3" />
              <SiTailwindcss className="ml-3 text-blue-400"/> 
              <FaJsSquare className="text-yellow-500 ml-3" />
              <FaReact className="text-blue-400 ml-3" />
              <SiMongodb className="text-green-600 ml-3" />
              <SiExpress className="text-gray-500 ml-3" />
              <SiMaterialformkdocs className="text-blue-600 ml-3" />  
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-start mt-4">
            <a
                href="https://blogapp-bd.vercel.app/"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-xl text-white px-4 py-2 font-bold text-center rounded-md transition-colors duration-300 block md:inline-block"
              >
                Live Link
              </a>
              <a
                href="https://www.facebook.com/share/v/ep6wyTfup6hvvKwX/"
                className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                Demo Video
              </a>
              <a
                href="https://github.com/mzidan132/MERN_PROJECTS/tree/main/BlogApp"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Codes
              </a>
            </div>
          </div>
        </div>
        <div className="hover:scale-103 transition duration-300 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-2 border-blue-500 rounded-md p-3 my-6">
          <div className="md:w-1/2">
            <img
              src="/finance.png"  // Replace with your image path
              alt="Project Image"
              className="cursor-pointer transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">Finance Management</h3>
            <p className="text-lg md:text-xl mb-2 text-center md:text-left">Finance Management is a simple app for keeping track of your financial accountings.</p>
            <p className="text-lg md:text-xl mb-2">Core Features:</p>
            <ul className="list-disc list-inside">
              <li>NextJs is used at both frontend and backend functionalities</li>
              <li>CRUD functionalities have been implemented so that users can easily track their incomes and expenses</li>
              <li>Chart Js bar chart is implemented to visualize data in an easy way</li>
            </ul>
            <p className="md:text-2xl mb-4 mt-2 flex items-center text-xl"><span className='md:text-2xl text-[14px]'>Used Technology:</span> 
              <FaHtml5 className="text-orange-600 ml-3" />
              <FaCss3Alt className="text-blue-600 ml-3" />
              <SiTailwindcss className="ml-3 text-blue-400"/> 
              <FaJsSquare className="text-yellow-500 ml-3" />
              <FaReact className="text-blue-400 ml-3" />
              <SiMongodb className="text-green-600 ml-3" />
              <SiNextdotjs className="text-grey-600 ml-3" />  
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-start mt-4">
            <a
                href="https://financemnagement.vercel.app/"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-xl text-white px-4 py-2 font-bold text-center rounded-md transition-colors duration-300 block md:inline-block"
              >
                Live Link
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                Demo Video
              </a>
              <a
                href="https://github.com/mzidan132/REACT_PROJECTS/tree/main/FinanceManagementNextJs"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Codes
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Projects;
