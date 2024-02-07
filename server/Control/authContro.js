


const authservice = require("../service/authService")

module.exports = {




    signup_post_data: (req, res) => {  // signup post req contro fun 

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


        authservice.user_login(req.body).then((respo) => {

            if (respo.emailerr) {

                res.json({ mag: "email err" })
                return

            } else if (respo.flag) {

                res.json({ msg: "user login" })
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