

 import React from 'react'
 import {Slide} from "react-slideshow-image"
 import 'react-slideshow-image/dist/styles.css';
 import { useState } from 'react'
 
 function Addimage() {

 const [image,setimage]=useState([

    "./image 2.png",
    "./image 2.png"


 ])  // slides image store arrya  





   return (
     <div>

        <div className='w-full h-[400px] bg-slate-600' >

        <Slide>

            {
                image.map((obj)=>(

                    <img src={obj} alt="" className='w-full h-[400px]'  />

                     
                ))
                
            }


        </Slide>
            
            
          



        </div>


       
     </div>
   )
 }
 
 export default Addimage
 

