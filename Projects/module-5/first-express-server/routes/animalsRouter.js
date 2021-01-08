const express = require('express')

const animalsRouter = express.Router()
const uuid = require('uuid').v4


const animals = [
    {name: "rover", age: "5", _id: uuid() },
    {name: "toby", age: "6", _id: uuid() }
]


animalsRouter.get("/", (req, res)=> {
    res.send(animals)

})

animalsRouter.post("/", (req, res)=> {
    req.body._id = uuid()
    people.push(req.body)
    res.send(`Successfully added 
    ${req.body.name} to the database.`)
     
})
module.exports = animalsRouter