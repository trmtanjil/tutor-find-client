import React from 'react';
import { motion } from "framer-motion";

function Extra2() {
  return (
 
<>
<div >
  {/* text div  */}
  <div className='mx-auto font-bold text-center my-8'>
    <h1 className='text-4xl '>
    SEARCH TUTORING JOBS
    </h1>
    <h2 className='text-xl font-bold'>
    Find Your Tution Jobs, in your area
    </h2>
  </div>

  

<div className="flex flex-col md:flex-row">

  {/* image */}
  <div className="w-full md:w-1/2 flex justify-center  ">
    <motion.img
      animate={{ y: [0, 30, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      src="https://i.ibb.co.com/hxGnJYDx/image3.png"
      alt="Language Learning App"
      className="max-w-[80%] h-[80%] rounded-xl mb-5"
    />
  </div>

  {/* text */}
  <div className="w-full md:w-1/2 p-4 mt-6">
     <h1 className='text-2xl font-bold mx-auto text-center'>
    Looking for interesting tuition jobs to excel your teaching experience?
     </h1>
     <p className='text-center'>
    If teaching jobs interests you, then you are on the right place. tutorsheba.com, we often have 500+ open home tuition jobs that are genuine and 100% verified. Whether you are starting your career as a tuition teacher or an expert in your field, we can help you find your next big tuition job. You can search and apply to the tuition jobs that best fit your skills, favorable location, class and subjects.
     </p>
   <div className='pt-8 mx-auto text-center'>
      <button className="
     relative overflow-hidden group 
  bg-[linear-gradient(90deg,rgb(84,6,84),rgb(204,13,133)_50%,rgb(84,6,84))]
  hover:bg-[linear-gradient(90deg,rgb(100,8,100),rgb(224,33,153)_50%,rgb(100,8,100))]
  text-white font-bold px-8 py-4 rounded-lg shadow-2xl 
  transition-all duration-500 border-2 border-pink-400 hover:border-pink-300">
  
  {/* Animated tech pulse effect */}
  <div className="absolute top-0 left-0 w-full h-0.5 
    bg-[conic-gradient(at_right,_#00f7ff,_#89f)] 
    opacity-70 group-hover:h-1 transition-all duration-300"></div>
  
  {/* Glowing dot animation */}
  <div className="absolute -left-2 top-1/2 w-3 h-3 bg-cyan-400 rounded-full 
    group-hover:left-[calc(100%-10px)] transition-all duration-700 delay-100 
    opacity-0 group-hover:opacity-100 shadow-[0_0_8px_2px_rgba(0,247,255,0.8)]"></div>
  
  <span className="relative z-10 flex items-center gap-3 tracking-wider">
    <span className="text-cyan-300 font-mono">Q</span> 
    FIND A TUTOR 
    <span className="text-xl ml-2 animate-pulse group-hover:animate-none 
      group-hover:translate-x-1 transition-transform">→</span>
  </span>
</button>
   </div>
  </div>

</div>



</div>
</>

  );
}

export default Extra2;
