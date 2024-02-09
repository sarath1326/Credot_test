

import React from 'react'
import { useState, useEffect } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import {Slide} from "react-slideshow-image"
import axios from "../../Axios/constant"
import {message} from "antd"
import { useNavigate } from 'react-router-dom';



function Content() {

    const [pro, setpro] = useState([])

    const navigate=useNavigate()

    useEffect(()=>{

          axios("/products/all").then((respo)=>{

                  if(respo.data.flag){

                      setpro(respo.data.data)
                      console.log(respo.data.data)
                  }else{

                      message.error("server error")
                  }

                
          
                }).catch(err=>{

                message.error("somthing is worng")
          })
    },[])

    


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

                    <div className='w-[350px] h-[450px] border-2 border-gray-600 '>

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

                    <div className='w-[700px] h-[420px]   flex flex-wrap gap-3 justify-center ' >

                        {
                            pro.map((obj) => (

                                <div className='w-[170px] h-[220px] border-2 border-gray-600' onClick={()=>{navigate(`/productsDetail/${obj._id}`)}} >
                                    <button className='w-[50px] h-[13px] bg-green-600 text-[8px] ml-2 text-white ' > HOT </button>

                                    <div className='w-full h-[100px] flex justify-center pt-1 ' >

                                        <img src={obj.image} alt="" className='w-[100px] h-[100px] items-center ' />


                                    </div>

                                    <div className='w-full h-[30px] flex justify-between p-2 ' >

                                        <span className='text-xs text-blue-600'  > {obj.type} </span>

                                        <CiCirclePlus className='w-[20px] h-[20px]' />

                                    </div>

                                    <span className='text-[10px] font-semibold ml-2' > {obj.name} </span>


                                    <p className='text-center' > <span className='text-[10px] text-gray-600' > OMR </span> <span className='font-bold text-[10px]' >  {obj.price} </span> <s className='text-[10px]' > {obj.price} </s>   </p>



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
