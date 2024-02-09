


const mongoose=require("mongoose")
const cartmodel = require("../Database/Model/cart")



module.exports = {


    add_new_cart: (data) => {


       

        return new Promise( async (resolve, reject) => {

            const { user, prodata } = data

            const objproid= new mongoose.Types.ObjectId(prodata.proid)

            const updatedata={proid:objproid,quantity: prodata.quantity}
           
            // const proid_objid= new mongoose.Types.ObjectId(prodata.proid) // product id convert string to obji
     
          
            const userdata=await cartmodel.findOne({user:user})  //  check first do has user in the  cart

           
            if(!userdata){    // if user don't have in the cart  then create new user cart

            const savedata = {
                user: user,
                products: [{ proid: objproid, quantity: prodata.quantity }]
               
            }

           

            const final=new cartmodel(savedata)

            final.save().then(()=>{
                 
                resolve({new:true})
           
                }).catch(err=>{

                  reject()
            })



           } else{    // if user has in the cart then check  do have products already in the cart

             const products_exist=userdata.products.findIndex((obj)=>obj.proid===objproid)

             if(products_exist!=-1){  // if products has in the cart sent msg

                   resolve({exist:true})
             
                }else{  // if the  products don't has in the user cart then update user cart arrya

                    cartmodel.updateOne({user:user},{

                        $push:{
                             
                              products:updatedata
                        }
                    
                    }).then(()=>{

                        resolve({update:true})
                    
                    }).catch(err=>{

                         reject()
                    })
             }

                  
           }


             

           
            

             
       
        })
    },

    view_cart:(userid)=>{

          return new Promise( async (resolve,reject)=>{

             const userdata=await cartmodel.findOne({user:userid})

             if(userdata){

                if(userdata.products.length===0){

                    resolve({flag:false})
               
                   }else{

                    let cartlist=await cartmodel.aggregate([

                         {
                            $match:{user:userid}                         
                        },{

                            $unwind:"$products"
                        },
                        {

                            $project:{

                                item:"$products.proid",
                                quantity:"$products.quantity"

                            }
                            

                        },
                        {
                            
                         $lookup:{

                             from:"products",
                             localField:"item",
                             foreignField:"_id",
                             as:"cartitems"
                                    
                                }
                        
                        },
                        {

                            $project:{

                                item:1,quantity:1,cartitems:{$arrayElemAt:["$cartitems",0]}

                            }
                        }

                    ])
   

                    console.log(cartlist)
                    resolve({data:cartlist})
   
                }
             }

              
          })
    }
}