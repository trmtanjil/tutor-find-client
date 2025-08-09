import React from 'react'
import { motion } from "framer-motion";

function Banner() {
  return (
    <div  >
         <section  className="py-16 px-4 md:px-10 bg-cover bg-no-repeat bg-bottom"
  style={{
    backgroundImage: "url('https://i.ibb.co/27JcnRbB/banner-bg-59ddabf7.png')",
  }}
         >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-500 leading-tight mb-6">
            <span className='text-purple-700'>THE MOST</span><span className='text-blue-500'> EFFICIENT WAY  TO LEARN</span><span className='text-purple-700'><br /> A LANGUAGE</span>
          </h1>
           
          <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-8 py-3 rounded-xl shadow-md">
            Get started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end ">
          <motion.img
          animate={{y:[0,50,0]}}
          transition={{duration: 3, repeat: Infinity}}
            src='https://i.ibb.co/7tJ2T58L/flags-spain-france-great-britain-other-countries-blackboard-with-text-you-speak-books-656538-2678.jpg'
            alt="Language Learning App"
            className="max-w-[350px] h-[300px] rounded-xl mb-5"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Banner