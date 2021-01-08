const express = require("express")

const app = express()

app.use("/fruit", "./fruitRouter.js")

const trashData = [
    {
        name: "Dave",
        lifestyle: "garbage"
    }
]

app.get("/", (req, res) => {
    res.send(trashData)
})

app.listen(7000, ()=>{
    console.log('This server is running on Port 7000')
})