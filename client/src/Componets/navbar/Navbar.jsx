

import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


function Navbar() {
    return (
        <div>

            <div>

                <div className='w-full h-[100px]  flex  ' >

                    <div className=' w-full  sm:w-[50%] h-full flex items-center pl-[100px] ' >

                        <img src="./image 1.png" alt="" className='w-20 h-14 ' />


                    </div>

                    <div className=' hidden sm:block w-[50%] h-full   ' >

                        <div className='  w-[100%] h-[100%] flex items-center '  >

                            <input type="text" placeholder='What are you looking for?  ' className='w-[300px] h-10 border-2 border-indigo-200  ' />
                            <button className='w-20 h-10 bg-black flex justify-center items-center'  > <CiSearch className='text-white w-5 h-5 ' /> </button>

                            <div className='w-10 h-10 rounded-3xl bg-slate-400 ml-5 flex justify-center items-center ' >

                                <BsFillPersonFill />


                            </div>

                            <div className='w-10 h-10 rounded-3xl bg-slate-400 ml-5 flex justify-center items-center ' >

                                <BsFillSuitHeartFill />

                            </div>

                            <div className='w-10 h-10 rounded-3xl bg-slate-400 ml-5 flex justify-center items-center ' >

                                <FaCartShopping />

                            </div>



                        </div>


                    </div>






                </div>


            </div>



        </div>
    )
}

export default Navbar
