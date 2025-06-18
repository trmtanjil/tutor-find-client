import React, { useEffect, useState } from 'react'

function CountLogin() {
    const [loginCount, setLoginCount] = useState(0);

useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/loggedInUsers/count`)
    .then(res => res.json())
    .then(data => setLoginCount(data.count));
}, []);

return (
  <div className='text-center p-4 bg-blue-100 rounded-xl shadow-lg'>
    <h1 className='font-bold text-blue-500 text-3xl text-center'> {loginCount}</h1>
    <h2 className="text-blue-600 text-3xl font-bold">Total Logged In Users:</h2>
  </div>
);
 
}

export default CountLogin