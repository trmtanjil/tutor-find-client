import { Link, NavLink } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import { use, useState } from 'react'
import ThemeToggle from '../page/ThemeToggle'

import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
 
function Navbar() {
  const {user,logOutUser}=use(AuthContext)
  const [isScrolled, setIsScrolled] = useState(false);




  
  const auth = getAuth();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        fetch(`${import.meta.env.VITE_API_URL}/loggedInUsers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User sent to DB:", data);
          });
      }
    });
  }, [auth]);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
  <header className='sticky  top-0 z-5000 shadow-md  '>
      <section   className={`sticky top-0 z-50 shadow-md w-full transition-all duration-300 ${
        isScrolled ? 'bg-none' : ''
      }`}
      style={!isScrolled ? {
        background: 'linear-gradient(90deg, rgb(84, 6, 84), rgb(204, 13, 133) 50%, rgb(84, 6, 84) 100%)'
      } : {}}>
 
    <div  className="navbar z-10 shadow-sm px-4    mx-auto  "
        
      >     
  <div className="navbar-start">
        <div className='flex justify-center items-center'>


      <span className='md:text-4xl text-xl font-bold '>Tutor</span>
    <img className='md:h-[40px] md:w-[40px] h-[20px] w-[20px] rounded-full  ' src="https://i.ibb.co/pvbBFDjN/download.jpg" alt="" />
         <span className='md:text-4xl text-xl font-bold'>Hub</span>

        </div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
          
         <li><a><NavLink    to="/" className="hover:text-blue-500  font-bold text-xl">Home</NavLink></a></li>
        <li>  
          <NavLink   to="/findtutors" className="hover:text-blue-500 font-bold text-xl">Find tutors
</NavLink>
         </li>
       {user && (
  <>
    <li>
      <NavLink to="/mylisting"  className="hover:text-blue-500 font-bold text-xl ">
        Add Tutorials
      </NavLink>
    </li>
    <li>
      <NavLink to={`/mytutor/${user?.email}`} className="hover:text-blue-500 font-bold text-xl">
        My Tutorials
      </NavLink>
    </li>
    <li>
      <NavLink to="/myboked" className="hover:text-blue-500 font-bold text-xl">
        My booked tutors
      </NavLink>
    </li>
  </>
)} 
        
      </ul>
    </div>
    <div className="text-2xl font-bold">
         
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 <div className="hidden sm:flex space-x-5">
         <NavLink    to="/" className="hover:text-blue-500  font-bold text-xl">Home</NavLink>
          <NavLink   to="/findtutors" className="hover:text-blue-500 font-bold text-xl">Find tutors
</NavLink>
        {
          user && (<>
            <NavLink   to="/mylisting" className="hover:text-blue-500 font-bold text-xl">Add Tutorials</NavLink>
          <NavLink  to={`/mytutor/${user?.email}`} className="hover:text-blue-500 font-bold text-xl">My Tutorials</NavLink>
           <NavLink   to='/myboked' className="hover:text-blue-500 font-bold text-xl">My booked tutors</NavLink>
          </>)
        }
        </div>
      
    </ul>
  </div>
  <div className="navbar-end">
          {/* <ThemeToggle></ThemeToggle> */}
    <ThemeToggle ></ThemeToggle>

      {/* userNevbar photo  */}
         <div className='pr-3  flex items-center '>
      {user && <>
    
     <div  className="relative group">
     <div   className=' cursor-pointer w-9 mx-2  bg-gray-400 p-[3px] rounded-full flex items-center justify-center ' > 
      <img className='rounded-full'
      
       src={user.photoURL}  
       alt="User Profile" />
       <div className="absolute -bottom-1s2 left-1/2   bg-gray-800 text-white text-sm rounded-lg px-4  opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
       {user.displayName}
      </div>


       </div>
     </div>
      
      </>}
    </div>
 <div>
          {
        user ? <Link
        onClick={logOutUser}
     
        className="btn btn-primary ">LogOut</Link> : <>
            <div className='flex'>
                  <Link to='/register' className="btn btn-primary mx-3">Register</Link>
        <Link to='/login' className="btn btn-primary">login</Link>
            </div>
            </>
      }

        </div>
  </div>
</div>
    </section>
  </header>
  )
}

export default Navbar