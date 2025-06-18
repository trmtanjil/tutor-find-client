import React from 'react';

function Extra2() {
  return (
<div className="bg-gradient-to-b max-w-5xl from-gray-800 to-black py-16 mx-auto rounded-xl">
  <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl shadow-2xl px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
    
    {/* Left Image Stack */}
    <div className="relative">
      <div className="absolute top-4 left-4 w-72 h-[430px] bg-gray-700 rounded-xl -z-10 shadow-md"></div>
      <img
        className="w-72 h-[430px] object-cover rounded-xl shadow-md"
        src="https://i.ibb.co/4Z4nPgWg/hand-drawn-people-working-from-home-23-2148820405.jpg"
        alt="Tutor"
      />
      <div className="flex justify-between mt-3 space-x-2">
        <span className="bg-white text-black text-xs px-3 py-1 rounded-full">Drama</span>
        <span className="bg-teal-400 text-white text-xs px-3 py-1 rounded-full">English tutor</span>
      </div>
    </div>

    {/* Right Text Section */}
    <div className="max-w-xl text-center md:text-left text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Find the right tutor for you.
      </h1>
      <p className="text-gray-300 text-base md:text-lg mb-6">
        With over 30,000 tutors and 1M+ learners, we know language learning.
      </p>

      <div className="bg-gray-800 border-l-4 border-teal-400 pl-4 py-3 shadow-sm">
        <p className="text-lg font-medium text-white">
          “The energy she brings to each lesson is amazing.”
        </p>
        <p className="text-sm text-gray-400 mt-1">Ismael, English learner on Preply</p>
      </div>
    </div>
  </div>
</div>


  );
}

export default Extra2;
