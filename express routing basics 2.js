import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>HOME 🏠 </h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>ABOUT 😶‍🌫️ </h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>CONTACT 📲 </h1>");
});
app.get("/work",(req,res)=>{
    res.send("<h1>MY WORK 💪</h1>");
});
app.listen(8000,()=>console.log("server up!"));
// Adding a comment 