

const express=require("express");
const router=express();
const control=require("../Control/authContro")
const middilwaer =require("../Middelware/index")


router.post("/signup",control.signup_post_data)    // signup post req,res


router.post("/login",control.login_post_data) // login post req,res

router.get("/userdata",middilwaer.auth_verify,control.find_userdata)












module.exports=router