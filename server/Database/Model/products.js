


const mongoose=require("mongoose");


const products= new mongoose.Schema({

     name:{

        type:String,
        require:true

     },

     image:{
          type:String,
          require:true
     } ,
     
     price:{

          type:String,
          require:true
     },
     type:{

          type:String,
          require:true
     }

    })



    const productsSchema= mongoose.model("products",products)

    module.exports=productsSchema