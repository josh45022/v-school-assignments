const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
app.use(express.json())
app.use(morgan("dev"))
const BountyModel = require("./models/bountyData.js")


mongoose.connect("mongodb://localhost:27017/bountyhunterdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB.")
)


app.get("/bounties", (req, res, next)=>{
    BountyModel.find(
        (err, bounties) => {
            if(err) {
                res.status(200)
                return next(err)
            }
            res.status(200).send(bounties)
        }
    )
    
})

app.get("/bounties/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    BountyModel.findOne(
        {_id: bountyId},
        (err, bounty) => {
            if(err) {
                res.status(200)
                return next(err)
            }
            return res.status(200).send(bounty)
        }
    )
})

app.post("/bounties", (req, res, next)=>{
    const newBounty = new BountyModel(req.body)
    newBounty.save(
        (err, newItem) => {
            if(err) {
                res.status(500)
                return next(err)
                }
            return res.status(201).send(newItem)
        }
    )   
})

app.delete("/bounties/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    BountyModel.findOneAndDelete(
        {_id: bountyId},
        (err, newItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send('Successfully deleted item!')
        }
    )
})

app.put("/bounties/:bountyId", (req, res, next)=> {
    const bountyId = req.params.bountyId

    BountyModel.findOneAndUpdate(
        {_id: bountyId},
        req.body,
        {new: true},
        (err, newItem)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newItem)
        })
})

app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})
