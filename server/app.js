

const express = require("express");
const app = express()
const DB = require("./Database/connect")
const authRout = require("./Routers/authRout")
const cors = require("cors")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


DB.DB_Connect()  // DataBase Connecting func

app.use(cors({

    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}))





app.use("/auth", authRout) // auth router 








app.listen(3001, () => {

    console.log("server started ")
})