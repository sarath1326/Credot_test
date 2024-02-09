


const mongoose=require("mongoose");
 require("dotenv").config()




  module.exports.DB_Connect=()=>{

        mongoose.connect(process.env.DB_URL).then(()=>{

               console.log("DB connected")
        }).catch(err=>{

               console.log("DB connecting failed",err)
        })
  }