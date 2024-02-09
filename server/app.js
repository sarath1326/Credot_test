

const express = require("express");
const app = express()
const DB = require("./Database/connect")
const authRout = require("./Routers/authRout")
const proRout=require("./Routers/productsRout")
const cartRout=require("./Routers/cartRout")
const cors = require("cors")
const bodyparser= require("body-parser")
const cookieparser=require("cookie-parser");




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(cookieparser());


DB.DB_Connect()  // DataBase Connecting func

app.use(cors({

    origin: ["https://credot-test.onrender.com"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}))





app.use("/auth", authRout) // auth router 

app.use("/products",proRout) /// products router

app.use("/cart",cartRout)  // cart router









app.listen(3001, () => {

    console.log("server started ")
})