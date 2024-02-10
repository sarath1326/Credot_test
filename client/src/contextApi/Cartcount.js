

import { createContext } from "react";
import { useState } from "react";


export const CartContext=createContext(null)





export const CartProvider=(props)=>{

const [count,setcount]=useState(10)

    return(

      <CartContext.Provider value={{count,setcount}}  >

        {
            props.children
        }

      </CartContext.Provider>

    )
}