const { Router } = require("express")
const express = require("express")
const uuid = require('uuid').v4

const peopleRouter = express.Router()
const people = [
    {name: "joe", age: "20", _id: uuid() },
    {name: "jane", age: "21", _id: uuid() }
]


peopleRouter.get("/", (req, res)=> {
    res.send(people)

})

peopleRouter.post("/", (req, res)=> {
    req.body._id = uuid()
    people.push(req.body)
    res.send(`Successfully added 
    ${req.body.name} to the database.`)
     
})

module.exports = peopleRouter