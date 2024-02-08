

const express=require("express");
const router=express();
const control=require("../Control/authContro")


router.post("/signup",control.signup_post_data)    // signup post req,res






router.post("/login",control.login_post_data) // login post req,res










module.exports=router