const express =require("express");
const DBConnect = require("./DBConnect")
const cors = require('cors')
const rout=require("./routing")
const app=express();
app.use(express.json())
app.use(cors())
app.use(express.static("./images"))
DBConnect();

app.get("/",rout.getDemo)
app.get("/users",rout.getusers)
app.get("/login",rout.getlogin)
app.get("/users/:id",rout.getusers)
app.post("/users",rout.createuser)
app.post("/users/upload",rout.upload.single("file"),rout.uploadImg)
app.put("/users/:id",rout.updateuser)
app.delete("/users/:id",rout.deleteuser)

app.listen(4000,()=>{
    console.log("Server Started....");
})
