
import {
  createBrowserRouter,
} from "react-router";
import Mainlayout from "./Mainlayout";

import Home from "../Componets/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import PrivetRouter from "../Privetrouter/PrivetRouter";
import AddTutor from "../page/AddTutor";
import FindTutors from "../page/FindTutors";
import MyTutor from "../page/MyTutor";
import TutorDetails from "../page/TutorDetails";
import axios from "axios";
import Myboked from "../page/Myboked";
import EditMyTutor from "../page/EditMyTutor";
import Error from "../page/Error";
import ContentNotAvailable from "../page/ContentNotAvailable";
   


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            Component:Home,
          
        },
          {
            path:'login',
            Component:Login,
          
        },
        {
            path:'register',
            Component:Register,
        }, 
        {
            path:'mylisting',
            element:<PrivetRouter><AddTutor></AddTutor></PrivetRouter>,
            
        },
         {
            path:'myboked',
            element:<PrivetRouter><Myboked></Myboked></PrivetRouter>,
            
        },
          {
            path:'containnotavailabl',
            element: <ContentNotAvailable></ContentNotAvailable> ,
            
        },
           {
            path:'findtutors/:language',
            element: <FindTutors></FindTutors>,
            
        },
        {
         path: 'findtutors', 
        element: <FindTutors />
        },
        {
          path:'mytutor/:email',
           loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/mytutor/${params.email}`),
          element:<PrivetRouter><MyTutor></MyTutor></PrivetRouter>,
        },
        {
          path:'tutordetails/:id',
         loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/tutor/${params.id}`),
          element:<PrivetRouter><TutorDetails></TutorDetails></PrivetRouter>
        },
        {
          path:'editmytutor/:id',
         loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/tutor/${params.id}`),
          element:<PrivetRouter><EditMyTutor></EditMyTutor></PrivetRouter>
        },
         

     
      
     
    ]
  },
  {
    path:'/*',
    element:<Error></Error>
  }

]);