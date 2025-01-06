import express from "express";
const app=express();
app.get("/ab?cd",(req,res)=>{
    res.send("<h1>If the user hit (acd) or (abcd) then this code will run.</h1>");
});
app.listen(8000, () => console.log("Server Up!"));
