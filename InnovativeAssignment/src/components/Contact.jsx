"use client";
import React from 'react';

const Contact = () => {
  return (
    <div>
    <h1 className='font-black text-3xl ml-4'>DISCOVER MORE</h1>
    <div className="flex space-x-4 mb-6 ml-4 items-center justify-between">
      <div className="flex space-x-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full">All Categories</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Art</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Celebrities</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Gaming</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Sport</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Music</button>
      </div>
      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full flex items-center space-x-2 border">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm-1 3h14v5H2v-5z" clipRule="evenodd" />
        </svg>
        <span className='text-indigo-600'>All Filters</span>
      </button>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  
        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-purple-300 to-purple-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Art stuff</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>598 TK</span>
            <span>1 of 09</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-green-300 to-green-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Green Theme</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>777 TK</span>
            <span>1 of 10</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-blue-300 to-blue-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Blue Theme</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>102 TK</span>
            <span>1 of 05</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-yellow-300 to-yellow-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Yellow Theme</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>102 TK</span>
            <span>1 of 05</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-orange-300 to-orange-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Orange Theme</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>102 TK</span>
            <span>1 of 05</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-pink-300 to-pink-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Pink Theme</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>102 TK</span>
            <span>1 of 05</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-gray-300 to-gray-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Gray Theme</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>102 TK</span>
            <span>1 of 05</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 relative border border-gray-200">
          <div className="h-40 rounded-t-lg bg-gradient-to-tr from-pink-300 to-pink-500 flex items-center justify-center"></div>
          <div className="flex -mt-6 ml-6">
            <div className="flex items-left relative z-10">
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white -ml-3" src="https://via.placeholder.com/150" alt="user" />
            </div>
          </div>
          <h2 className="text-lg font-bold ml-4 mt-4 text-gray-800">Pink Theme</h2>
          <div className="flex justify-between px-4 mt-2 text-sm text-gray-500">
            <span>102 TK</span>
            <span>1 of 05</span>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
            <button className="bg-teal-400 text-white px-4 py-1 rounded-full text-sm">DSVBD</button>
          </div>
        </div>
      </div>
     
      <br/><br/>
    </div>
  );
};

export default Contact;
