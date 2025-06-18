import React, { useEffect, useState } from 'react';

function TutorCount() {
  const [tutorCount, setTutorCount] = useState(0);

  useEffect(() => {
    const fetchTutorCount = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/tutor/count`);
        const data = await res.json();
        setTutorCount(data.count);
      } catch (error) {
        console.error("Error fetching tutor count:", error);
      }
    };

    fetchTutorCount();
  }, []);

  return (
    <div className="text-center p-4 bg-blue-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700">{tutorCount}</h2>
      <p className="text-blue-600 text-3xl font-bold">Total Tutors</p>
    </div>
  );
}

export default TutorCount;
