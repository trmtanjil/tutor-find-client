import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";


function BokedCart({bok}) {
  const {user} = use(AuthContext)
  console.log(user);

    const {image,language,likedBy,price,username,email,_id} = bok;
    console.log(bok)

  const [liked, setLiked]  =useState(likedBy?.includes(user?.email))
  const [likcount, setlikcount] = useState(likedBy?.length)
      console.log(liked);


const handleliked = () => {
  if (user?.email === email) {
    alert(' own ');
    return;
  }

  axios.patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, {
    email: user.email,
  })
  .then(data => {
    console.log(data.data);
    const isLikedNow = data.data.liked;

    setLiked(isLikedNow); // like/unlike update
    setlikcount(prev => isLikedNow ? prev + 1 : prev - 1); // count update
  })
  .catch(err => {
    console.log(err);
  });
}

  return (
    <div>
       
         <div className="flex flex-col md:flex-row items-center gap-5 border rounded-md p-4 shadow-md max-w-3xl mx-auto my-6">
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img
          src={image}
          alt="Tutor"
          className="rounded-md w-full h-48 object-cover"
        />
      </div>

      {/* Details */}
      <div className="w-full md:w-2/3 space-y-2">
        <h2 className="text-xl font-semibold">
        {username} <span className="text-yellow-500">5★</span> <span className="text-sm text-gray-500">Review : ( {likcount} )</span>
        </h2>
        <p><span className="font-semibold">Language:</span> {language}</p>
        <p><span className="font-semibold">Price:</span> <span className="text-orange-500">${price}</span></p>
        <p className="text-gray-700 text-sm">
          
        </p>

        <button onClick={handleliked} className="bg-green-300 hover:bg-green-400 text-black font-semibold py-2 px-4 rounded transition duration-200">
          Review
        </button>
      </div>
    </div>
    </div>
  )
}

export default BokedCart