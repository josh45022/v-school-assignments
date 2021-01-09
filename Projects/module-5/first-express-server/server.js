const express = require('express')

const app = express()
const uuid = require('uuid').v4
// ('uuid').v4 stands for version 4 of uuid

//Fake Data


app.use("/people", require("./routes/peopleRouter.js")) 

app.use("/animals", require("./routes/animalsRouter.js")) 

app.use("/", (req, res, next)=> {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED!")
    next()
})
app.use("/", (res, req, next) => {
    req.body = {name: "Rick"}
    next()
})
app.get("/", (req, res, next)=> {
    console.log("Get request received")
    res.send(req.body)
})



//Postman POST - body, raw, JSON

app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})
