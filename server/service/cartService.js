

const { default: mongoose } = require("mongoose")
const cartmodel = require("../Database/Model/cart")



module.exports = {


    add_new_cart: (data) => {


       

        return new Promise( async (resolve, reject) => {

            const { user, prodata } = data
           
            // const proid_objid= new mongoose.Types.ObjectId(prodata.proid) // product id convert string to obji
     
           const userdata=await cartmodel.findOne({user:user})  //  check first do has user in the  cart

           if(!userdata){    // if user don't have in the cart  then create new user cart

            const savedata = {
                user: user,
                products: [{ proid: prodata.proid, quantity: prodata.quantity }]
               
            }

            const final=new cartmodel(savedata)

            final.save().then(()=>{
                 
                resolve({new:true})
           
                }).catch(err=>{

                  reject()
            })



           } else{    // if user has in the cart then check  do have products already in the cart

             const products_exist=userdata.products.findIndex((obj)=>obj.proid===prodata.proid)

             if(products_exist!=-1){  // if products has in the cart sent msg

                   resolve({exist:true})
             
                }else{  // if the  products don't has in the user cart then update user cart arrya

                    cartmodel.updateOne({user:user},{

                        $push:{
                             
                              products:prodata
                        }
                    
                    }).then(()=>{

                        resolve({update:true})
                    
                    }).catch(err=>{

                         reject()
                    })
             }

                  
           }


             

           
            

             
       
        })
    }
}