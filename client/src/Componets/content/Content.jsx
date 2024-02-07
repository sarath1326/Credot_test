

import React from 'react'
import { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";


function Content() {

    const [num, setnum] = useState([
        1, 2, 3, 4, 5, 6
    ])
    return (
        <div>

            <div className="container mx-auto mt-10 ">

                <div className='   flex flex-wrap gap-10  justify-center  ' >

                    <div className='w-[500px] h-[300px] bg-slate-600 '>

                        <img src="image 112.png" alt="" className='w-full h-full' />

                    </div>

                    <div className='w-[300px] h-[300px] bg-red-500 ' >

                        <img src="Mask group.png" alt="" className='w-full h-full' />


                    </div>



                </div>

                <div className='mt-10 flex justify-between items-center '  >

                    <span className='text-2xl font-semibold' > Products </span>
                    <span className='font-semibold' > View all products </span>
                </div>


                <div className=' flex flex-wrap justify-center  mt-10' >

                    {/* exlusive products view div */}

                    <div className='w-[350px] h-[420px] border-2 border-gray-600 '>

                        <div className='w-full h-[250px] bg-white flex justify-center items-center  ' >

                            <img src="./mobile.png" alt="" className='w-[170px] h-[200px]' />


                        </div>

                        <p className='text-blue-600 text-center text-sm' > AUDIO AMPLIFIER, HDMI PROJECTORS </p>

                        <p className='text-center font-semibold' > iPhone 14 Pro max 256GB - Deep Purple.. </p>

                        <p className='text-center' > <span className='text-sm text-gray-600' > OMR </span> <span className='font-bold' >  4,699.00  </span> <s> 4,699.00  </s>   </p>

                        <div className='w-full h-[100px] flex justify-center items-center' >

                            <button className='w-[150px] h-[30px] bg-blue-400 text-white text-sm ' > ADD TO CART </button>

                        </div>


                    </div>

                    <div className='w-[700px] h-[420px]  flex flex-wrap gap-3 justify-center ' >

                        {
                            num.map((obj) => (

                                <div className='w-[170px] h-[220px] border-2 border-gray-600' >
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

        </div>
    )
}

export default Content
