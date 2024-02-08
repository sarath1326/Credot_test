


const authservice = require("../service/authService")

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

                res.json({ emailerr:true })
                return

            } else if (respo.flag) {

                res.json({ flag:true })
                return
            } else {

                res.json({ msg: "password err" })
                return
            }
        }).catch(err => {

            res.json({ msg: "server " })
            return
        })



    }

}