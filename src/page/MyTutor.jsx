import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router'; 
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

function MyTutor() {

  const datas = useLoaderData(); 
  const [data, setdata]= useState(datas?.data || [])

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't Delete Your Product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/tutor/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Product Deleted Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            // optionally update UI here, e.g. remove deleted item from state
            const remainingdata = data.filter((item) => item._id !== id);
            setdata(remainingdata);
          }
        })
        .catch(error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong while deleting!'
          });
        });
   
      }
    });
  };
  
  return (
    <div className="overflow-x-auto px-4 py-6 min-h-[80vh]">
        <Helmet>  <title>MyTutor</title></Helmet>
    <table className="table-auto w-full border border-gray-300 rounded-lg shadow-md">
      <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="px-4 py-2 border">Image</th>
          <th className="px-4 py-2 border">Language</th>
          <th className="px-4 py-2 border">Price</th>
          <th className="px-4 py-2 border">Description</th>
          <th className="px-4 py-2 border">Review</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tutor) => (
          <tr key={tutor._id} className="text-center hover:bg-gray-550 transition">
            <td className="px-4 py-2 border">
              <img src={tutor.image} alt="Tutor" className="h-16 w-16 object-cover rounded" />
            </td>
            <td className="px-4 py-2 border">{tutor.language}</td>
            <td className="px-4 py-2 border text-orange-500 font-semibold">${tutor.price}</td>
            <td className="px-4 py-2 border">{tutor.description}</td>
            <td className="px-4 py-2 border text-yellow-500 font-medium">
              {tutor.likedBy?.length || 0} ★
            </td>
            <td className="px-4 py-2 border flex gap-2 justify-center">
            <Link to={`/editmytutor/${tutor._id}`}>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>
            </Link>
              <button
                onClick={() => handledelete(tutor._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default MyTutor;
