

const express=require("express");
const app=express()
const DB=require("./Database/connect")
const authRout=require("./Routers/authRout")


app.use(express.json());
app.use(express.urlencoded({extended:true}));


DB.DB_Connect()  // DataBase Connecting func


app.use("/auth",authRout) // auth router 








app.listen(3001,()=>{

      console.log("server started ")
})