


const express=require("express")

const router=express();

const control=require("../Control/productsContro")





router.post("/addnew",control.new_Products_Add) // add new products router

router.get("/all",control.get_all_products)

router.get("/all/:proid",control.single_pro_view)







module.exports=router ;
