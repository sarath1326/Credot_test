


const JWT=require("jsonwebtoken");



 module.exports={      // auth verify midd

       auth_verify:async(req,res,next)=>{

                const token= req.cookies.credot_demo

                console.log(token)

                if(!token){

                    res.json({authfaild:true})
                    console.log("no token")
                    return
                
                  }else{

                        JWT.verify(token,"sarath1937",(err,result)=>{   // token verify
                                 
                              if(result){

                                      next()
                              }else{

                                     res.json({authfaild:true})

                                     console.log("expire")
                                     return
                              }
                        })

                }
            
       }

 }