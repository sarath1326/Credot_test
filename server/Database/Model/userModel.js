


const mongoose=require("mongoose");



const user= new mongoose.Schema({
     
       username:{
          type:String,
          require:true
          
       },

       email:{
          type:String,
          unique:true,
          require:true
       },

       password:{

            type:String,
            require:true
       }
})


const userSchema=mongoose.model("user",user);

module.exports=userSchema




