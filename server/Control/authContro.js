


const authservice = require("../service/authService")
const JWT = require("jsonwebtoken")
require("dotenv").config()

module.exports = {




    signup_post_data: (req, res) => {




        // signup post req contro fun 

        authservice.user_signup(req.body).then((respo) => {

            if (respo.exist) {

                res.json({ exist: true })
                return

            } else if (respo.flag) {

                res.json({ flag: true })
                return
            }
        }).catch(err => {

            res.status(500).json({ flag: false })
            return
        })


    },

    login_post_data: (req, res) => {   // login postt contro fun

        console.log("login")
        authservice.user_login(req.body).then((respo) => {

            if (respo.emailerr) {

                res.json({ emailerr: true })
                return

            } else if (respo.flag) {

                

                // jwt setup 

                const { _id, username } = respo.data     // login time user data get

             const token= JWT.sign({name:username,id:_id},process.env.JWT_PASS);

             console.log(token)

             res.cookie("credot_demo", token, {
                maxAge: 360000,
                sameSite:"none",
                secure:true,
                httpOnly:true
                
             })
             
             res.json({ flag: true,token:token })
             
             return


            } else {

                res.json({ msg: "password err" })
                return
            }
        }).catch(err => {

            res.json({ msg: "server " })
            return
        })



    },

    find_userdata:(req,res)=>{

        const token = req.cookies.credot_demo

        JWT.verify(token,process.env.JWT_PASS,(err,result)=>{

                const {id,name}=result

                authservice.get_userdata(id).then((respo)=>{

                      if(respo.empty){

                            res.json({empty:true,name:name})
                            return
                      
                        }else if(respo.flag){

                             res.json({flag:true,name:name,num:respo.data})
                             return
                        
                            }else{

                                   res.json({flag:false,name:name})
                                   return
                            }

                }).catch(err=>{

                     res.json({err:true,name:name})
                     return
                })
      
      
            })

         
    }

}