

const usermodel=require("../Database/Model/userModel");
const cartmodel=require("../Database/Model/cart")
const bcrypt=require("bcrypt")



module.exports={

      user_signup:(data)=>{     // user signup Database query 

          return new Promise(async(resolve,reject)=>{

            const userdata=await usermodel.findOne({email:data.email}); // user exist checking

            if(userdata){

                  resolve({exist:true});
            }else{

                 data.password=await bcrypt.hash(data.password,10); // user password hashing

                 const final = new usermodel(data)
                 
                 final.save().then(()=>{

                      resolve({flag:true})
                 }).catch(err=>{

                      reject({err:err})
                 })
            }



                
          })
      },


      user_login:(data)=>{

         return new Promise(async(resolve,reject)=>{

                try {

                    const userdata=await usermodel.findOne({email:data.email})  // user data find using email

                if(!userdata){

                      resolve({emailerr:true})
                }else{

                    const final=await bcrypt.compare(data.password,userdata.password)  //   find result and user enter password compare

                    if(!final){

                        resolve({flag:false})
                    }else{

                         resolve({flag:true,data:userdata})
                    }
                
                }
                    
                } catch (error) {

                    reject({err:error})
                    
                }
         
            })
      
        },



        get_userdata:(userid)=>{

             return new Promise( async(resolve,reject)=>{

              try {

                const result=await cartmodel.findOne({user:userid})

                if(!result){

                       resolve({empty:true})
                }else{

                     const num=result.products.length

                     resolve({flag:true,data:num})
                }
                
              } catch (error) {

                reject()
                
              }

                   
             })
        }






    }