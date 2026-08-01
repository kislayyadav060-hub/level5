import express from "express";
const app=express();
app.use(express.json());
const port=3000;

import dotenv from "dotenv";
dotenv.config();



// app.get("/",(req,res)=>{
//     return res.json({message:"hello from ai"});
// });
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Website</title>
            <style>
                body{
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 40px;
                }

                h1{
                    color: #333;
                }

                img{
                    width: 500px;
                    border-radius: 10px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Welcome</h1>

            <img
                src="https://static.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg"
                alt="AI Image"
            >
        </body>
        </html>
    `);
});


app.post("/ai",async(req,res)=>{
    return res.status(200).json({"ai":"deployment" });
});


app.listen(port,()=>{
    console.log("server started");
});