const express = require("express")

const app = express()

const foreignMod = require("./middleWareFunc.js")



app.use("/", (req, res, next)=>{
    console.log("I'm just going to pause the server's operations for a short moment.")
    next()
})


app.get("/", foreignMod.middleWareFunc, (req, res)=>{
    res.send("Get request successfully sent!")
})

app.listen(7000, () =>(console.log("Server is running on Port 7000")))