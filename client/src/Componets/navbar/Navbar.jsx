

import React  from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from "../../contextApi/Cartcount"
import { useEffect ,useState } from 'react';
import axios from "../../Axios/constant"
import {message} from "antd"


function Navbar() {

    const navigate=useNavigate();

    const {count,setcount}=useContext(CartContext)
    const [name,setname]=useState('')

    useEffect(()=>{

        console.log("nave")

         axios("/auth/userdata").then((respo)=>{

              const result=respo.data

               if(result.err){
              
                 message.error("server error")
                 setname(result.name)
                 console.log(result.name)
                   
               }else if(result.empty){

                  setcount(0)
                  setname(result.name)
                  
                  console.log( "empty", result.name)
              
                }else if (result.flag){

                    setname(result.name)
                    setcount(result.num)
                    console.log( "flag tru", result.name)

               }else{

                  setname(result.name)
                  setcount(0)
                  console.log( "else", result.name)

                  console.log(result)
               }
         }).catch(err=>{

              message.error("somthing is worng")
         })
          
    },[])
    
    
    return (
        <div>

            <div>

                <div className='w-full h-[100px]  flex  ' >

                    <div className=' w-full  sm:w-[50%] h-full flex items-center pl-[100px] ' >

                        <img src="/image 1.png" alt="" className='w-20 h-14 ' />


                    </div>

                    <div className=' hidden sm:block w-[50%] h-full   ' >

                        <div className='  w-[100%] h-[100%] flex items-center '  >

                            <input type="text" placeholder='What are you looking for?  ' className='w-[300px] h-10 border-2 border-indigo-200  ' />
                            <button className='w-20 h-10 bg-black flex justify-center items-center'  > <CiSearch className='text-white w-5 h-5 ' /> </button>
 
                            <div className='w-10 h-10 rounded-3xl bg-slate-400 ml-5 flex justify-center items-center ' onClick={()=>{navigate("/signup")}} >

                                <BsFillPersonFill />


                            </div>

                            <div className='w-10 h-10 rounded-3xl bg-slate-400 ml-5 flex justify-center items-center ' onClick={()=>{navigate("/whitelist")}}   >

                                <BsFillSuitHeartFill   />

                            </div>

                            <div className='w-10 h-10 rounded-3xl bg-slate-400 ml-5 flex gap-1 justify-center items-center ' onClick={()=>{navigate("/cart")}}  >

                                <FaCartShopping /> <span className='text-white ' > {count} </span>

                               

                            </div>

                            <span className='ml-5' > {name} </span>



                        </div>


                    </div>






                </div>


            </div>



        </div>
    )
}

export default Navbar
