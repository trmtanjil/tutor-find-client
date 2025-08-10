import React from 'react'
import { motion } from "framer-motion";

function Banner() {
  return (
    <div>
         <section  className="py-16   md:px-10 bg-cover bg-no-repeat bg-bottom "
  style={{
    backgroundImage: "url('https://i.ibb.co/27JcnRbB/banner-bg-59ddabf7.png')",
  }}
         >
      <div className="max-w-7xl   mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left ml-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-500 leading-tight mb-6">
            <span className='text-purple-700'>THE MOST</span><span className='text-blue-500'> EFFICIENT WAY  TO LEARN</span><span className='text-purple-500'><br /> A LANGUAGE</span>
          </h1>
          <h1 className="text-2xl md:text-xl font-extrabold text-gray-500 leading-tight mb-6">
           Find the Right Tutor in Your Area
          </h1>
           
 <button className="relative overflow-hidden group 
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

        {/* Image Section */}
        <div className="flex justify-center  pr-4 md:justify-end  ">
          <motion.img
          animate={{y:[0,50,0]}}
          transition={{duration: 3, repeat: Infinity}}
            src='https://i.ibb.co.com/20ztH7f6/Teacher-rafiki-81362516.png'
            alt="Language Learning App"
            className="max-w-[80%] h-[80%] rounded-xl mb-5 lg:mr-6 md:mr0"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner