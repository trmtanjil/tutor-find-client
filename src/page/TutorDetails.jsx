import React, { use, useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
 
function TutorDetails() {
    const {user}= use(AuthContext)
const datas = useLoaderData(); 
  const [data, setdata]= useState (datas?.data || [])
  console.log(setdata);
  console.log(data)
  const {_id, image, description, language, price,likedBy } = data;
  


const handleboked = () => {
  const bokedInfo = {
    tutorId: _id,
    customarEmail: user?.email,
  };
  
  axios.post(`${import.meta.env.VITE_API_URL}/place-boked/${_id}`, bokedInfo)
    .then(response => {
      console.log(response);

      Swal.fire({
        icon: 'success',
        title: 'Booking Successful',
        text: 'Your tutor booking has been placed successfully!',
        confirmButtonText: 'OK'
      });
    })
    .catch(error => {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Something went wrong. Please try again later.',
        confirmButtonText: 'OK'
      });
    });
};



  return (
 <div className='w-2xl mx-auto'>
      <div className="flex   flex-col md:flex-row items-start gap-4 border rounded-xl p-4  my-5 shadow-md">
      
      <img
        src={image}
        alt="Tutor"
        className="w-32 h-32 rounded-lg object-cover"
      />
      

      <div className="flex-1 space-y-2 mx-auto">
        
        <p className="text-sm ">
          <span className="font-semibold">Language:</span> {language}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Review : </span> {likedBy?.length}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p className="text-sm  ">{description}</p>

         
                              <button
                               onClick={handleboked}
                              className="
              mt-2
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
    <span className="text-cyan-300 font-mono"></span> 
   Book now
    <span className="text-xl ml-2 animate-pulse group-hover:animate-none 
      group-hover:translate-x-1 transition-transform">→</span>
  </span>
</button>
   
      </div>
    </div>
 </div>
  )
}

export default TutorDetails