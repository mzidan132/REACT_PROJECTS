"use client"
import { useRef, useState, useEffect } from 'react';

export default function Projects() {
  const scrollRef = useRef(null);
  const colors = ['bg-purple-400', 'bg-teal-300', 'bg-purple-700', 'bg-blue-900', 'bg-orange-400', 'bg-red-400', 'bg-blue-400', 'bg-yellow-400'];
  const [activeIndex, setActiveIndex] = useState(2); // Initial index of the centered card

  const scrollRight = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const scrollLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const cardWidth = scrollContainer.children[0].offsetWidth;
    scrollContainer.scrollTo({ left: cardWidth * activeIndex, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <div className="explore-menu-list min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-green-400 to-green-500"><br /><br /><br /><br />

      <div className="explore-menu-list relative w-full max-w-5xl flex items-center justify-center">

        <div
          ref={scrollRef}
          className="explore-menu-list w-full flex overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`snap-center flex-none w-64 ${activeIndex === index ? 'h-80' : 'h-64'} ${color} rounded-lg mx-4 transition-all duration-300 ease-in-out`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 text-left text-black"><div className="mx-72 space-x-4 flex">

        <div className="max-w-md">
          <h2 className="text-2xl font-bold">Overview</h2><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="flex space-x-4" style={{ marginLeft: 550, marginBottom: 500 }}>
          <button
            onClick={scrollLeft}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            →
          </button>
        </div>
      </div>

      </div>

    </div>
  );
}
