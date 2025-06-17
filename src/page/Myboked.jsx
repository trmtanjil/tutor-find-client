import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios';
import BokedCart from './BokedCart';

function Myboked() {
    const {user}=use(AuthContext)
    const [boked, setboked]= useState([]);

    useEffect(()=>{
        axios(`${import.meta.env.VITE_API_URL}/my-boked/${user?.email}`)
        .then(data=>{
            console.log(data?.data)
            setboked(data?.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[user])
  return (
    <div>
        {
            boked.map(bok => <BokedCart bok={bok} key={bok._id}></BokedCart>)
        }
    </div>
  )
}

export default Myboked