

import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Cart() {
    return (
        <div>

            <Navbar />

            <p className='text-center font-semibold mt-20 text-[20px] '> Cart </p>

            <div className='container mx-auto h-[500px]   ' >

                <div className='w-full h-[500px]  flex flex-wrap justify-center  gap-4 pt-20 ' >

                    <div className='w-[600px] h-[300px]  ' >

                        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ' >
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        PRODUCT
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        PRICE
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        QUANTITY
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        SUBTOTAL
                                    </th>
                                </tr>
                            </thead>

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-4">
                                    <img src="./mobile.png" alt="" className='w-[30px] h-[30px]' />   Apple MacBook Pro 17
                                </td>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    <button className='w-[30px] h-[25px]  border-2 border-gray-600 mt-5 '> +  </button>

                                    <button className='w-[30px] h-[25px]   mt-5 '> 1  </button>

                                    <button className='w-[30px] h-[25px]  border-2 border-gray-600 mt-5 '> -  </button>

                                </td>
                                <td className="px-6 py-4">


                                </td>
                            </tr>







                        </table>


                        <div className='w-full h-[100px]  pt-5 flex'>

                            <div className='w-[200px] h-[30px]'>  Coupon code </div>

                            <div className='w-[100px] h-[30px] bg-black text-white text-[13px] flex justify-center items-center' > apply coupon   </div>

                            <button className='w-[100px] h-[30px] border-2 border-gray-500 ml-20' > update cart </button>

                        </div>




                    </div>

                    <div className='w-[600px] h-[300px]' >

                        <div className='w-[400px] h-full border-2 border-gray-300 ' >

                            <p className='text-[15px] font-bold mt-5 ml-5  ' > Cart Totals </p>

                            <div className='w-full h-[30px] flex justify-around mt-14'>

                                <p className='text-[15px] font-bold'> Subtotal </p>
                                <p className='text-[13px] ' > OMR  107.00 </p>

                            </div>

                            <div className='w-full h-[30px] flex justify-around mt-14 '>

                                <p className='text-[15px] font-bold'> Total </p>
                                <p className='text-[20px] font-semibold ' > OMR  107.00 </p>

                            </div>

                            <button className='w-[250px] h-[30px] ml-16 mt-10 bg-blue-700 text-white' > PROCEED TO CHECKOUT </button>


                        </div>



                    </div>

                </div>


            </div>

            <Footer />


        </div>
    )
}

export default Cart
