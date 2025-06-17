import React, { use, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useLoaderData } from 'react-router'
import axios from 'axios'
import Swal from 'sweetalert2'

function EditMyTutor() {
    const {user} =use(AuthContext)
    const data = useLoaderData()
    console.log(data?.data);
    const [price, setPrice] =useState(data?.data.price)
  const [language, setlenguage] =useState(data?.data.language)
    const [image, setImege] =useState(data?.data.image)
    const [description, setdescription] =useState(data?.data.image)


    console.log(price, language,image,description);
    const handleEdittutor =(e)=>{
        e.preventDefault()
        const updateData ={
           
            price,
            language,
            image,
            description,
          };

          axios.put(`${import.meta.env.VITE_API_URL}/tutor/${data?.data._id}`, updateData, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(response => {
            console.log(response.data);
            
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Post Is Updated",
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch(error => {
            console.error("Update failed:", error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong while updating!',
            });
          });

    }
  return (
    <div>
        {/* <Helmet>  <title>Add tutor </title></Helmet> */}
            <div className="text-white  mx-auto p-4 bg-gray-600 shadow rounded-xl m-4 px-[5%]">
      <h2 className="text-2xl font-bold mb-4">Add New Tutorial</h2>
      <form onSubmit={handleEdittutor}>
       <div className="space-y-4 grid md:grid-cols-2 gap-4" >


       {/* rusere email  */}
         <div>
          <label>User Email:</label>
          <input type="email" name="email"    readOnly
    placeholder="Rent Amount" defaultValue={user.email} className="w-full p-2 border rounded" required />
        </div>



 {/* user name */}
         <div>
          <label>User Name  :</label>
          <input type="text" name="username"  readOnly
           defaultValue={user.displayName}  
    placeholder="User Name " className="w-full p-2 border rounded" required />
        </div>


        {/*   */}
         <div>
          <label>Enter The language :</label>
          <input type="text" name="language"
           value={language}
           onChange={(e)=> setlenguage(e.target.value)}
          placeholder=" Enter The language " className="w-full p-2 border rounded" required />
        </div>
 
        {/*   price  */}
         <div>
          <label>Enter The Price :</label>
          
          <input type="number" name="price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)} 
          placeholder="Enter The Price" className="w-full p-2 border rounded" required />
        </div>

 <div>
          <label>Enter a Photo URL:</label>
          <input type="text" name="image"
           value={image}
           onChange={(e)=> setImege(e.target.value)}
          placeholder="Enter a Photo URL" className="w-full p-2 border rounded" required />
        </div>
        {/*   info  */}
         <div>
          <label>Type Description</label>
          <input type="text" name="description"
          value={description}
          onChange={(e)=>setdescription(e.target.value)} 
          placeholder="Contact Info" className="w-full p-2 border rounded" required />
        </div>

       </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 my-4">Submit</button>
      </form>
    </div>
     </div>
  )
}

export default EditMyTutor