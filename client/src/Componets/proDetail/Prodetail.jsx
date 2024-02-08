


import React from 'react'
import Navbar from '../navbar/Navbar'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Footer from '../footer/Footer';

function Prodetail() {

    const [box, setbox] = useState([
        1, 2, 3
    ])
    const star = [1, 2, 3, 4, 5]
    const color = [
        {
            color: "bg-red-500"
        },
        {
            color: "bg-blue-500"
        },
        {
            color: "bg-green-500"
        },
        {
            color: "bg-gray-500"
        },
        {
            color: "bg-black"
        }
    ]

    const storage = [
        "256GB", "512GB", "1TB", "128GB"
    ]

    const more = [
        "Bluetooth: V5.0",
        "Screen Resolution and Brightness: 360*360, 500 Nits Daylight-Bright Display, 2.5D Curved Glass",
        "Health Monitoring: SpO2, 24*7 Heart Rate Monitoring, Blood Pressure, High Heart Rate Alert",
        "Smart Features: Sedentary Alert, Weather, Alarm, Timer, Flashlight, Find Phone"

    ]

    return (
        <div>

            <Navbar />

            <div className='container mx-auto   flex flex-wrap  justify-center mt-24 ' >

                <div className='w-[300px] h-[400px] ' >

                    <div className='flex justify-center items-center mt-10' >
                        <img src="./mobile.png" alt="" className='w-[150px] h-[150px]' />
                    </div>

                    <div className='w-full h-[100px]  mt-20 flex gap-10' >

                        {
                            box.map((obj) => (

                                <div className='w-[70px] h-[70px] bg-blue-500' >
                                    <img src="./mobile.png" alt="" className='w-[100%] h-[100%]' />

                                </div>
                            ))
                        }

                    </div>



                </div>

                <div className='w-[400px] h-[400px] pl-8 ' >

                    <p className='font-bold text-[20px]  ' > AirPods Max  </p>

                    <div className='flex gap-1 mt-3 ' >

                        {
                            star.map((obj) => (

                                <FaStar className='text-[13px] text-orange-600' />


                            ))
                        }

                    </div>

                    <p className='mt-5' > <span className='text-sm text-gray-600' > OMR </span> <span className='font-bold' >  4,699.00  </span> <s> 4,699.00  </s>   </p>

                    <p className='text-[13px] mt-3' > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        and scrambled </p>

                    <p className='font-semibold' > Color : Silver </p>

                    <div className='flex gap-1 mt-5 ' >

                        {
                            color.map((obj) => (

                                <div className={`w-[20px] h-[20px] rounded-full bg ${obj.color}`} >

                                </div>
                            ))

                        }


                    </div>

                    <p className='font-semibold text-[13px] mt-5' > Internal Memory </p>

                    <div className='flex gap-2 mt-3  ' >

                        {
                            storage.map((obj) => (

                                <div className='w-[50px] h-[30px] border-2 border-gray-600 text-center justify-center text-[13px] hover:bg-black hover:text-white cursor-pointer '> {obj}  </div>

                            ))
                        }




                    </div>

                    <div className='flex gap-4 items-center '>

                        <button className='w-[30px] h-[25px]  border-2 border-gray-600 mt-5 '> +  </button>

                        <button className='w-[30px] h-[25px]   mt-5 '> 1  </button>

                        <button className='w-[30px] h-[25px]  border-2 border-gray-600 mt-5 '> -  </button>


                        <div className='w-[100px] h-[40px] bg-black mt-5 text-white flex justify-center items-center  ' > Add To cart     </div>








                    </div>



                </div>



                <div className='w-full h-[200px]'>


                    <span className='font-semibold' > Overview  </span >  <span className='font-semibold ml-20' > Specifications </span>

                    <div className='mt-10' >

                        {
                            more.map((obj) => (

                                <h3>&#x2022; {obj} </h3>

                            ))
                        }


                    </div>

                    <p className='font-semibold mt-16' > Related products </p>

                    <div className='w-full h-[250px] flex flex-wrap justify-center gap-4  ' >



                        {
                            color.map((obj) => (

                                <div className='w-[170px] h-[220px] border-2 border-gray-600 mt-10' >
                                    <button className='w-[50px] h-[13px] bg-green-600 text-[8px] ml-2 text-white ' > HOT </button>

                                    <div className='w-full h-[100px] flex justify-center pt-1 ' >

                                        <img src="./mobile.png" alt="" className='w-[100px] h-[100px] items-center ' />


                                    </div>

                                    <div className='w-full h-[30px] flex justify-between p-2 ' >

                                        <span className='text-xs text-blue-600'  > SMART PHONE </span>

                                        <CiCirclePlus className='w-[20px] h-[20px]' />

                                    </div>

                                    <span className='text-[8px] font-semibold ml-2' > iPhone 14 Pro max 256GB - Deep Purple </span>


                                    <p className='text-center' > <span className='text-[10px] text-gray-600' > OMR </span> <span className='font-bold text-[10px]' >  4,699.00  </span> <s className='text-[10px]' > 4,699.00  </s>   </p>



                                </div>

                            ))
                        }






                    </div>

                </div>

            </div>

            <div className='mt-[1100px] sm:mt-[500px]' >


                <Footer />


            </div>


        </div>
    )
}

export default Prodetail
