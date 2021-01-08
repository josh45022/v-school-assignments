const express = require("express")
const app = express()
const uuid = require("uuid").v4

app.use(express.json())

const bounties = [
    {
        firstName: "Jeff",
        lastName: "Brown",
        living: true, 
        bountyAmount: 51,
        type: "Sith",
        _id:  uuid()
    },
    {
        firstName: "Claude",
        lastName: "Clyde",
        living: true, 
        bountyAmount: 41,
        type: "Sith",
        _id:  uuid()
    }
]

app.get("/bounties", (req, res)=>{
    res.send(bounties)
})

app.post("/bounties", (req, res)=>{
    req.body._id = uuid()
    bounties.push(req.body)
    res.send(bounties)
})

app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})
