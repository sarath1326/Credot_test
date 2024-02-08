

import React from 'react'
import { useState } from 'react'

function Tobbrand() {

    const [brand, setbrand] = useState([
        {
            image: "./apple.png",
            color: "bg-black"
        },
        {
            image: "./dell.png",
            color: "bg-blue-600"
        },
        {
            image: "./lg.png",
            color: "bg-red-500"
        },
        {
            image: "./mi.png",
            color: "bg-orange-600"
        },
        {
            image: "./realme.png",
            color: "bg-yellow-600"
        },
        {
            image: "./smsg.png",
            color: "bg-blue-600"
        },
        {
            image: "./sony.png",
            color: "bg-slate-300"
        }

    ])


    return (
        <div>

            <div className='container mx-auto h-[200px]   mt-[300px] sm:mt-12 flex justify-evenly items-center ' >

               {
                   brand.map((obj)=>(

                        <div className={` w-[100px] h-[100px] rounded-full flex justify-center items-center `} >
                            <img src={obj.image} alt="" className='w-[100%] h-[100%] rounded-full' />

                        </div>
                   ))
               }

            </div>

        </div>
    )
}

export default Tobbrand
