import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("welcome to express.js");
});
app.listen(8000,()=>console.log("server up"));