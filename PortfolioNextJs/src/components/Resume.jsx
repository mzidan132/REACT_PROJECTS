import React from 'react';

function Resume() {
  return (
    <div>
      <button className='hover:bg-gradient-to-r delay-200 relative z-30 border-blue-500 border-2 mt-2 hover:border-none from-blue-500 to-purple-500 text-white font-bold px-3 py-4 rounded-md bg-transparent'>
        <a href="/resume.pdf" download="Your_Name_Resume.pdf">
          Download Resume
        </a>
      </button>
    </div>
  );
}

export default Resume;