



 const mongoos=require("mongoose");



 const cart=new mongoos.Schema({

        user:{

              type:String
        },

        products:Array
 })



 const cartSchema=mongoos.model("cart",cart)


 module.exports=cartSchema