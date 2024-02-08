

const express=require("express");
const router=express();
const control=require("../Control/authContro")


router.post("/signup",(req,res)=>{

        console.log(req.body)
        res.json({msg:"data reseved"})
        return


    })    // signup post req,res






router.post("/login",control.login_post_data) // login post req,res










module.exports=router