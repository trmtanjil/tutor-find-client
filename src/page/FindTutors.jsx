 
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router';

function FindTutors() {
  const [search, setSearch] = useState("");
  const { language } = useParams(); // get language from URL
  const [alltutor, setAlltutor] = useState([]);

  useEffect(() => {
    let url = `${import.meta.env.VITE_API_URL}/tutor`;
    if (language) {
      url = `${import.meta.env.VITE_API_URL}/tutor/bylanguage?language=${language}&search=${search}`;
    }else if (search) {
      url = `${import.meta.env.VITE_API_URL}/tutor?search=${search}`;
    }
  
    fetch(url)
      .then(res => res.json())
      .then(data => setAlltutor(data));
  }, [language, search]);
  

return (
  <div className="p-5 min-h-[80vh]">
    <Helmet>
      <title>All Language</title>
    </Helmet>
    <input
      type="text"
      placeholder="🔍 Search tutor by name, price, or description"
      className="w-full max-w-md px-5 py-3 mx-auto  flex justify-center items-center rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-300 mb-5"
      onChange={(e) => setSearch(e.target.value)}
    />
    <h2 className="text-2xl font-bold mb-4 capitalize">Tutors for "{language}"</h2>

    {/* Grid container for all tutors */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
      {alltutor.map((tutor) => (
     <div
  key={tutor._id}
  className="flex flex-col border rounded-xl p-4   shadow-md"
>
  <img
    src={tutor.image}
    alt="Tutor"
    className="w-32 h-32 rounded-lg object-cover mx-auto"
  />

  {/* Content with space between */}
  <div className="flex flex-col flex-grow justify-between mt-4 mx-auto">
    <div className="space-y-2">
      <h2 className="text-xl font-bold  ">{tutor.username}</h2>
      <h2 className="text-lg font-semibold  ">
        Review Count: {tutor.likedBy ? tutor.likedBy.length : 0}
      </h2>
      <h2 className="text-lg font-semibold  ">
        Price: ${tutor.price}
      </h2>
      <p className="text-sm  ">
        <span className="font-medium">Language:</span> {tutor.language}
      </p>
      <p className="text-sm  "><span className='font-medium'>Description :</span> {tutor.description}</p>
    </div>

    {/* Bottom aligned button */}
    <Link to={`/tutordetails/${tutor._id}`} className="mt-4">
      <button
        className="
          relative overflow-hidden group 
          bg-[linear-gradient(90deg,rgb(84,6,84),rgb(204,13,133)_50%,rgb(84,6,84))]
          hover:bg-[linear-gradient(90deg,rgb(100,8,100),rgb(224,33,153)_50%,rgb(100,8,100))]
          text-white font-bold px-8 py-4 rounded-lg shadow-2xl 
          transition-all duration-500 border-2 border-pink-400 hover:border-pink-300
        "
      >
        <div className="absolute top-0 left-0 w-full h-0.5 
          bg-[conic-gradient(at_right,_#00f7ff,_#89f)] 
          opacity-70 group-hover:h-1 transition-all duration-300"></div>

        <div className="absolute -left-2 top-1/2 w-3 h-3 bg-cyan-400 rounded-full 
          group-hover:left-[calc(100%-10px)] transition-all duration-700 delay-100 
          opacity-0 group-hover:opacity-100 shadow-[0_0_8px_2px_rgba(0,247,255,0.8)]"></div>

        <span className="relative z-10 flex items-center gap-3 tracking-wider">
          details
          <span className="text-xl ml-2 animate-pulse group-hover:animate-none 
            group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </button>
    </Link>
  </div>
</div>

      ))}
    </div>
  </div>
);

}

export default FindTutors;
