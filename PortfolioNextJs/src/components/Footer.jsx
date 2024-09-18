import React from 'react';
import { FaFacebook, FaGithub, FaTelegram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-around bg-gray-800 text-white text-neutral-content p-10">
  <aside className='text-center'>
    <h2 className="text-4xl">Contact information</h2>
    <p className="md:text-xl text-[15px] mt-2 text-center">Address: Dhaka, Bangladesh</p>
    <p className="md:text-xl text-[15px] mt-2 text-center">Email: mdzidane26@gmail.com</p>
    <p className='flex gap-2 items-center mt-4 justify-center'><FaTelegram className="text-4xl"></FaTelegram>+880 01611496142</p>
    <p className='flex gap-2 items-center mt-2 justify-center'><FaWhatsapp className="text-4xl"></FaWhatsapp>+880 01848348056</p>
  </aside>
  <nav className='text-center '>
    <h6 className="footer-title m-5 md:m-0">Social</h6>
    <div className="grid grid-flow-col place-items-center gap-4">
    <a
                    href="https://www.facebook.com/muhammad.zidane.988371"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-4xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zindin-zidan-5167b9269/"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="https://github.com/mzidan132/"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-4xl" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-4xl" />
                  </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;