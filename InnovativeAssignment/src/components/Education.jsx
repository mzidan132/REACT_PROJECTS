"use client"
import { useState } from 'react';

export default function Educaton() {
  const colors = ['#A9E6DA', '#96F0BC', '#D8AAE6', '#F3C4A1'];
  const colors2 = [ '#7DA78A', 'green', 'blue']
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="rounded-3xl flex flex-col items-center min-h-screen bg-white">
      <div className="flex mt-10">
        <div className="rounded-xl w-64 h-64" style={{ backgroundColor: selectedColor }}>
        <div className="mb-10 rounded-3xl grid grid-rows-5 gap-8" style={{marginLeft:266}}>
        {colors2.map((color, idx) => (
          <div
            key={idx}
            className="rounded-xl w-16 h-16 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>
        </div>
        <div className="ml-32">
        
          <h2 className="text-2xl font-bold">Collection Features</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
      </div>
     
      <div className="rounded-3xl mt-2 mr-96 grid grid-cols-5 gap-6">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className="rounded-xl w-16 h-16 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>
      
    </div>
  );
}
