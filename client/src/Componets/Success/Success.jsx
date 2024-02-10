



import React from 'react'
import Navbar from '../navbar/Navbar'
import { IoMdCheckmark } from "react-icons/io";
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {

  const navigate = useNavigate()

  const pageChange = () => {

    setTimeout(() => {

      navigate("/")

    }, 2000);
  }


  useEffect(() => {

    pageChange()

  }, [])




  return (
    <div>

      <Navbar />

      <div className='container mx-auto h-[300px] mt-20  flex justify-center items-center' >

        <div className='w-[130px] h-[130px] bg-slate-300 rounded-full flex justify-center items-center' >

          <div className='w-[100px] h-[100px] bg-green-600 rounded-full flex justify-center items-center text-white' >

            <IoMdCheckmark className='text-[30px]' />

          </div>

        </div>

      </div>

      <p className='text-center font-bold text-[20px] ' > Purchased Successfully</p>

      <p className='text-center mb-36' > Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placera</p>

      <Footer />



    </div>
  )
}

export default Success
