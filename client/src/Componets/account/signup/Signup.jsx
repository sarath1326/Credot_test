

import React from 'react'
import Navbar from "../../navbar/Navbar"
import Footer from '../../footer/Footer'
import { useFormik } from "formik"
import { useState } from 'react'
import { validationSchema } from "./signupValid"
import axios from "../../../Axios/constant"
import {message} from "antd"
import {useNavigate} from "react-router-dom"





function Signup() {

    axios.defaults.withCredentials = true;

    const navigate=useNavigate();



    const value = {

        username: "",
        email: "",
        password: ""
    }


    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({

        initialValues: value,
        validationSchema: validationSchema,

        onSubmit:(value)=>{
   
             
             
            axios.post("/auth/signup",value).then((respo)=>{

                if(respo.data.exist){

                      message.error("This email is exist try anouther one")
               
                    }else if(respo.data.flag){

                        message.success("Register ok")

                }else{

                     message.error("Server Error")
                }

                  
            }).catch(err=>{

                 message.error("Something worng ! ")
                 console.log(err)
                  
            })
             
        }


    })


   


    return (
        <div>

            <Navbar />


            <div className='container mx-auto h-[500px] flex justify-center  ' >

                <div  >

                    <h1 className='text-[40px] mt-10 ml-16' > Register  </h1>

                    <form action="" className='mt-10' onSubmit={handleSubmit} >

                        <label htmlFor=" "> User Name </label> <br />
                        <input type="text" className='w-[300px] h-[40px] border-2 border-gray-600 '

                            name='username'
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        /> <br />

                        {
                            errors.username && touched.username ?

                                <> <span className='text-red-600' > {errors.username} </span> <br />  </>
                                : <br />

                        }



                        <label htmlFor=" "> Email Id </label> <br />
                        <input type="text" className='w-[300px] h-[40px] border-2 border-gray-600'

                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        /> <br />

                        {
                            errors.email && touched.email ?

                                <> <span className='text-red-600'> {errors.email} </span> <br />  </>
                                : <br />

                        }

                        <label htmlFor=" "> Password </label> <br />
                        <input type="password" className='w-[300px] h-[40px] border-2 border-gray-600'

                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}


                        /> <br />

                        {
                            errors.password && touched.password ?

                                <> <span className='text-red-600'> {errors.password} </span> <br />  </>
                                : <br />

                        }


                        <button type='submit' className='w-[150px] h-[40px] bg-blue-500 text-white mt-10 ml-16' > Submit  </button>
                        <p className='text-blue-900 text-center cursor-pointer' onClick={()=>{navigate("/login")}} > Login   </p>


                    </form>



                </div>

                {/* <button onClick={submit}  className='w-[150px] h-[40px] bg-blue-500 text-white mt-10 ml-16' > Submit  </button> */}







            </div>

            <Footer />






        </div>
    )
}

export default Signup
