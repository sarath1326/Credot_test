


import React from 'react'
import Navbar from '../navbar/Navbar'
import { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Footer from '../footer/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "../../Axios/constant"
import { message } from 'antd';
import { useContext } from 'react';
import {CartContext} from "../../contextApi/Cartcount"


function Prodetail() {

    const { id } = useParams()
    const [pro, setpro] = useState()
    const {count,setcount}=useContext(CartContext)

    const navigate=useNavigate()

    useEffect(() => {

        axios(`/products/all/${id}`).then((respo) => {

            if (respo.data.flag) {

                const result = respo.data.data
                setpro(result)
                console.log(respo.data)
            } else {

                message.error("server error")
            }

        }).catch(err => {

            message.error("somthing is worn")

        })


    }, [])



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


    const add_cart=(proid)=>{    // pro add cart func

           const obj={

               proid:proid,
               quantity:1
           }
       
            axios.post("/cart/addcart",obj).then((respo)=>{

                const result=respo.data

                if(result.err){

                      message.error("server error")
                      return
                
                    }else if(result.authfaild){

                         navigate("/login")

                    }else if(result.new){

                          message.success("Add to Cart")
                          setcount(count+1)
                          console.log("cart add new")
                          return
                    
                        }else if(result.exist){

                             message.success("this product has already in the cart ")
                             return
                        }else{

                             message.success("Add to cart")
                             setcount(count+1)
                        }

                  
            }).catch(err=>{

                   message.error("somthing is worng")
            })
    }








    return (
        <div>

            <Navbar />

            <div className='container mx-auto   flex flex-wrap  justify-center mt-24 ' >

                <div className='w-[300px] h-[400px] ' >

                    <div className='flex justify-center items-center mt-10' >
                        <img src={pro?.image} alt="" className='w-[150px] h-[150px]' />
                    </div>

                    <div className='w-full h-[100px]  mt-20 flex gap-10' >

                        {
                            box.map((obj) => (

                                <div className='w-[70px] h-[70px] bg-blue-500' >
                                    <img src={pro?.image} alt="" className='w-[100%] h-[100%]' />

                                </div>
                            ))
                        }

                    </div>



                </div>

                <div className='w-[400px] h-[400px] pl-8 ' >

                    <p className='font-bold text-[20px]  ' >  {pro?.name} </p>

                    <div className='flex gap-1 mt-3 ' >
                        

                        {
                            star.map((obj) => (

                                <FaStar className='text-[13px] text-orange-600' />


                            ))
                        }

                    </div>

                    <p className='mt-5' > <span className='text-sm text-gray-600' > OMR </span> <span className='font-bold' >  {pro?.price} </span> <s> {pro?.price} </s>   </p>

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


                        <div className='w-[100px] h-[40px] bg-black mt-5 text-white flex justify-center items-center  ' onClick={()=>{add_cart(pro._id)}}   > Add To cart     </div>








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
