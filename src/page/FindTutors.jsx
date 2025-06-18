import React, { useEffect, useState } from 'react';
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
    <div className="p-5">
    <input // 🔹 Step 2
  type="text"
  placeholder="🔍 Search tutor by name, price, or description"
  className="w-full max-w-md px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-300 mb-5"
  onChange={(e) => setSearch(e.target.value)}
/>
      <h2 className="text-2xl font-bold mb-4 capitalize">Tutors for "{language}"</h2>

      {
        alltutor.map((tutor) => (
          <div key={tutor._id} className="flex flex-col md:flex-row items-start gap-4 border rounded-xl p-4 bg-gray-300 my-5 shadow-md">
            <img
              src={tutor.image}
              alt="Tutor"
              className="w-32 h-32 rounded-lg object-cover"
            />
            <div className="flex-1 space-y-2">
              <h2 className="text-xl font-bold text-gray-800">{tutor.username}</h2>
              <h2 className="text-xl font-bold text-gray-800">reveiw  Count: {tutor.likedBy ? tutor.likedBy.length : 0}</h2>
              <h2 className="text-xl font-bold text-gray-800">Price   : {tutor.price}</h2>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Language:</span> {tutor.language}
              </p>
              <p className="text-sm text-gray-700">{tutor.description}</p>
               <button className="btn  mx-2 btn-xs  btn-primary"> <Link to={`/tutordetails/${tutor?._id}`}>   Details</Link></button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default FindTutors;
