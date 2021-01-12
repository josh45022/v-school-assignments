const express = require('express')

const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan("dev"))
//Fake Data
mongoose.connect("mongodb://localhost:27017/peopledb",
{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
}
, () => console.log("Connected to the DB")
)
//Routes
app.use("/people", require("./routes/peopleRouter.js")) 

app.use("/animals", require("./routes/animalsRouter.js")) 

app.use("/", (req, res, next)=> {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED!")
    next()
})

//Middleware Function Stuff
app.use("/", (res, req, next) => {
    req.body = {name: "Rick"}
    next()
})
app.get("/", (req, res, next)=> {
    console.log("Get request received")
    res.send(req.body)
})

//Err Handling Stuff
app.use((err, req, res, next)=> {
    console.log(err)
    return res.send({errMsg: err.message})
})


//Postman POST - body, raw, JSON
app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})
