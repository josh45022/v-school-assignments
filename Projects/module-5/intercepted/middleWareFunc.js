const express = require("express")

const app = express()

const middleWareFunc = app.use("/", (req, res, next)=> {
    console.log("I'm just going to pause the server's operations AGAIN for a short moment.")
    next()
})

// const middleWareFunc = () => console.log("HIIIIIIIIIIII")

module.exports = {express, app, middleWareFunc}