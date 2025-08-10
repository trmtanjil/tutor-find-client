 

 import { AuthContext } from '../context/AuthContext'
import axios from 'axios';
import BokedCart from './BokedCart';
import { use, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function Myboked() {
    const {user}=use(AuthContext)
    const [boked, setboked]= useState([]);
    console.log(user.accessToken);

    useEffect(() => {
        if (user?.email && user?.accessToken) {
          axios(`${import.meta.env.VITE_API_URL}/my-boked/${user.email}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          })
            .then((res) => {
              console.log(res.data);
              setboked(res.data);
            })
            .catch((err) => {
              console.log('Unauthorized or Token Error:', err);
            });
        }
      }, [user]);
  return (
    <div className='min-h-[80vh]'>
         <Helmet>  <title>MyBoking</title></Helmet>
        {
            boked.map(bok => <BokedCart bok={bok} key={bok._id}></BokedCart>)
        }
    </div>
  )
}

export default Myboked