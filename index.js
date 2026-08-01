import express from "express";
const app=express();
app.use(express.json());
const port=3000;

import dotenv from "dotenv";
dotenv.config();



app.get("/",(req,res)=>{
    return res.json({message:"hello from ai"});
});


app.post("/ai",async(req,res)=>{
    return res.status(200).json({"ai":"deployment" });
});


app.listen(port,()=>{
    console.log("server started");
});