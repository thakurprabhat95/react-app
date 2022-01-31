import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from 'axios';
import base_url from "../apicall/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Allcourses=()=>{

    useEffect(()=>{
        document.title="All Courses"
       
    },[]);


    //function to call from server
    const getAllCoursesFromServer=()=>{
       axios.get(`${base_url}/courses`)  
       .then(
           (response)=>{

            //success
           
            console.log(response.data);
            toast.success("This is a test success");
             
              //load data
            setCourses(response.data);
           
            

           },
           (error)=>{
               console.log(error);
              
           }
       );
    };

    //calling function after loading

    useEffect(()=>{
      getAllCoursesFromServer();
    },[]);



    const [courses,setCourses]=useState([
        // {title:"Java Course",description:"this is demo course"},
        // {title:"React Course",description:"this is react course"},
        // {title:"Javascript Course",description:"this is javascript course"},
        // {title:"Angular Course",description:"this is angular course"}
        
    ]

    );

    //remove courses after clicking delete button
    const updatecourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    };

    return(

   <div>
       <h1>All Courses</h1>
       <p>List of All courses as follow:</p>
       

       {
           courses.length>0? courses.map((item)=><Course key={item.id} course={item} update={updatecourse} />)
           :"No Courses"
       }

   </div>


    )
}
export default Allcourses;