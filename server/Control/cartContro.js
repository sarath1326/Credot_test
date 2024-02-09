

const cartService = require("../service/cartService")
const JWT = require("jsonwebtoken")

module.exports = {


      add_cart: (req, res) => {

            const token = req.cookies.credot_demo

            const { proid, quantity } = req.body

            JWT.verify(token, "sarath1937", (err, result) => {

                  const data = {

                        user: result.id,
                        prodata: req.body

                  }

                  cartService.add_new_cart(data).then((respo) => {

                        if (respo.new) {

                              res.json({ new: true })

                              return

                        } else if (respo.exist) {

                              res.json({ exist: true })
                              return
                        } else {

                              res.json({ update: true })
                              return
                        }



                  }).catch(err => {

                        res.json({ err: true })
                        return

                  })


            })

      },

      view_cart: (req, res) => {

            const token = req.cookies.credot_demo

            JWT.verify(token, "sarath1937", (err, result) => {

                  const userid = result.id

                  cartService.view_cart(userid).then((respo) => {

                        res.json({flag:true,data:respo.data})

                  }).catch(err => {

                      res.json({flag:false})

                  })

            })



      }
}