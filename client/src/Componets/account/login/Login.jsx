


import React from 'react'
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import { validationSchema } from "./loginvalid"
import { useFormik } from 'formik'
import axios from "../../../Axios/constant"
import {message} from "antd"


function Login() {

    const value = {

        email: "",
        password:""
    }



    const { errors, values, handleBlur, handleChange, handleSubmit, touched } = useFormik({

        initialValues: value,
        validationSchema: validationSchema,
        
               onSubmit:(value)=>{

                console.log(value)

                axios.post("/auth/login",value).then((respo)=>{

                       if(respo.data.emailerr){

                             message.error("this email is invalid")
                       
                            }else if(respo.data.flag){

                                  message.success("login ok")
                            }else{

                                  message.error("password and email not match")
                            }
                }).catch(err=>{

                        message.error("somthing worng")
                })

               }

    })






    return (
        <div>

            <Navbar />

            <div className='container mx-auto h-[500px] flex justify-center  ' >

                <div  >

                    <h1 className='text-[40px] mt-10 ml-16' > Login  </h1>

                    <form action="" className='mt-10' onSubmit={handleSubmit} >


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


                    </form>



                </div>






            </div>

            <Footer />

        </div>
    )
}

export default Login
