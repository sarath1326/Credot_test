

const express=require("express");
const router=express();

const middilwaer=require("../Middelware/index")
const control=require("../Control/cartContro")






router.post("/addcart",middilwaer.auth_verify,control.add_cart)  // add cart post request

router.get("/viewcart",middilwaer.auth_verify,control.view_cart)






module.exports=router