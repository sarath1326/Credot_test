


const mongoose=require("mongoose");




  module.exports.DB_Connect=()=>{

        mongoose.connect('mongodb://127.0.0.1:27017/credot').then(()=>{

               console.log("DB connected")
        }).catch(err=>{

               console.log("DB connecting failed",err)
        })
  }