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

app.delete("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(person => person._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted from the list`)
})

app.put("/bounties/:bountyId", (req, res)=> {
    req.body._id = uuid()
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(person => person._id === bountyId)
    const updatedBounties = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounties)
})

app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})
