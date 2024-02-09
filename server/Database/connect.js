


const mongoose=require("mongoose");
 require("dotenv").config()




  module.exports.DB_Connect=()=>{

        mongoose.connect('mongodb+srv://sarathsarath93366:sarath1937@cluster0.1b7z9mn.mongodb.net/?retryWrites=true&w=majority').then(()=>{

               console.log("DB connected")
        }).catch(err=>{

               console.log("DB connecting failed",err)
        })
  }