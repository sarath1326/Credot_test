

import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Whitelist() {
    return (
        <div>

            <Navbar />

            <div className='container mx-auto  h-[500px] mt-16 '>

                <p className='text-center font-semibold' > Wishlist </p>

                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-24' >
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                PRODUCT
                            </th>
                            <th scope="col" className="px-6 py-3">
                                PRICE
                            </th>
                            <th scope="col" className="px-6 py-3">
                                STOCK STATUS
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ACTION
                            </th>
                        </tr>
                    </thead>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-4">
                           <img src="./mobile.png" alt="" className='w-[30px] h-[30px]' />   Apple MacBook Pro 17"
                        </td>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            <button className='w-[100px] h-[30px] border-2 border-gray-600 mr-5 hover:bg-black hover:text-white '  > quick view </button>

                            <button  className='w-[100px] h-[30px] bg-black text-white hover:bg-white hover:text-black hover:border-2 border-gray-600 ' > add to cart </button>
                            
           
                        </td>
                    </tr>





                </table>

            </div>

            <Footer />



        </div>
    )
}

export default Whitelist


