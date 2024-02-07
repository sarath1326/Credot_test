


import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";


function Footer() {
    return (
        <div>

            <div className='container mx-auto mt-10 h-[300px] flex flex-wrap justify-evenly   ' >



                <div className='w-[200px] h-[300px]' >

                    <p className='font-semibold ' > important Links </p>

                    <p className='text-[15px] mt-5 ' > Help & FAQs  </p>

                    <p className='text-[15px] mt-5 ' > Rhoncus   </p>

                    <p className='text-[15px] mt-5 ' > Shipping & Delivery  </p>

                    <p className='text-[15px] mt-5 ' > Orders History  </p>

                    <p className='text-[15px] mt-5 ' > Rhoncus  </p>








                </div>

                <div className='w-[200px] h-[300px] ' >

                    <p className='font-semibold ' > about us </p>

                    <p className='text-[15px] mt-5 ' > about us  </p>


                    <p className='text-[15px] mt-5 ' > Careers  </p>



                    <p className='text-[15px] mt-5 ' > Our Stores   </p>

                    <p className='text-[15px] mt-5 ' > Sales  </p>

                    <p className='text-[15px] mt-5 ' > Rhoncus  </p>









                </div>

                <div className='w-[200px] h-[300px] ' >

                    <p className='font-semibold ' > More Information </p>

                    <p className='text-[15px] mt-5 ' > Affiliates </p>

                    <p className='text-[15px] mt-5 ' > My Accounts  </p>

                    <p className='text-[15px] mt-5 ' > Offerzone  </p>

                    <p className='text-[15px] mt-5 ' > Gift Vouchers  </p>

                    <p className='text-[15px] mt-5 ' > Privacy Policy </p>








                </div>

                <div className='w-[200px] h-[300px] ' >

                    <p className='font-semibold ' > Social Media </p>

                    <div className='w-full h-[40px] flex gap-3 mt-5 ' >

                        <div className='w-[30px] h-[30px] bg-slate-500 rounded-full flex justify-center items-center hover:bg-blue-700 hover:text-white' > <TiSocialFacebook />   </div>
                        <div className='w-[30px] h-[30px] bg-slate-500 rounded-full flex justify-center items-center  hover:bg-blue-700 hover:text-white' > <FaTwitter />  </div>
                        <div className='w-[30px] h-[30px] bg-slate-500 rounded-full flex justify-center items-center  hover:bg-blue-700 hover:text-white' > <TiSocialLinkedin />   </div>
                        <div className='w-[30px] h-[30px] bg-slate-500 rounded-full flex justify-center items-center  hover:bg-blue-700 hover:text-white' > <IoLogoYoutube />   </div>

                    </div>

                    <p className="font-semibold" > Payment Methods   </p>

                    <div className=' w-full h-[40px] flex gap-3 mt-4 ' >

                        <FaCcVisa />
                        <FaCcPaypal />
                        <FaStripe />



                    </div>
                </div>


            </div>

            <div className='w-full h-[300px] bg-slate-300  mt-[800px] sm:mt-10 ' >

                <div className='container h-[300px]  mx-auto flex justify-center flex-wrap  items-center  ' >

                    <div className='w-[450px]    ' >

                        <p> <span className='font-bold text-[15px]' > mobile : </span>  <span className='text-[13px] ' > Rhoncus   |    Rhoncus   |    Rhoncus   |        Rhoncus   |        Rhoncus   |     </span>  <span className='text-blue-600 text-[15px]' > View All  </span>  </p>
                        <p> <span className='font-bold text-[15px]' > mobile : </span>  <span className='text-[13px]' > Rhoncus   |    Rhoncus   |    Rhoncus   |        Rhoncus   |        Rhoncus   |     </span>  <span className='text-blue-600 text-[15px]' > View All  </span>  </p>
                        <p> <span className='font-bold text-[15px]' > mobile : </span>  <span className='text-[13px]' > Rhoncus   |    Rhoncus   |    Rhoncus   |        Rhoncus   |        Rhoncus   |     </span>  <span className='text-blue-600 text-[15px]' > View All  </span>  </p>
                        <p> <span className='font-bold text-[15px]' > mobile : </span>  <span className='text-[13px]' > Rhoncus   |    Rhoncus   |    Rhoncus   |        Rhoncus   |        Rhoncus   |     </span>  <span className='text-blue-600 text-[15px]' > View All  </span>  </p>
                        <p> <span className='font-bold text-[15px]' > mobile : </span>  <span className='text-[13px]' > Rhoncus   |    Rhoncus   |    Rhoncus   |        Rhoncus   |        Rhoncus   |     </span>  <span className='text-blue-600 text-[15px]' > View All  </span>  </p>
                        <p> <span className='font-bold text-[15px]' > mobile : </span>  <span className='text-[13px]' > Rhoncus   |    Rhoncus   |    Rhoncus   |        Rhoncus   |        Rhoncus   |     </span>  <span className='text-blue-600 text-[15px]' > View All  </span>  </p>

                    </div>

                    <div className='w-[450px] h-[200px]  pt-[100px] sm:ml-[100px] ' >

                        <div className='w-[40px] h-[40px] bg-blue-800 rounded-full flex justify-center items-center ' > < MdLocalPhone />    </div>
                       
                        <p className='' > Helpline </p>

                        <p className=' font-semibold text-3xl' >  1800 456 84788 </p>


                    </div>




                </div>



            </div>



        </div>
    )
}

export default Footer
