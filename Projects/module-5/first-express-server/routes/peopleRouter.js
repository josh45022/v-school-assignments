const { Router } = require("express")
const express = require("express")
const uuid = require('uuid').v4

const peopleRouter = express.Router()
peopleRouter.use(express.json())

const people = [
    {name: "joe", age: "20", _id: uuid() },
    {name: "jane", age: "21", _id: uuid() }
]


peopleRouter.get("/", (req, res)=> {
    res.send(people)

})

//Params
peopleRouter.get("/:personId", (req, res) => {
    const personId = req.params.personId
    const foundPerson = people.find( (person) => personId === person._id)
    res.send(foundPerson)
})

//Queries
peopleRouter.get("/search/age", (req, res) =>{
    console.log(req)
    const age = req.query.age
    const foundPeople = people.filter(person => person.age === age)
    res.send(foundPeople)
})

peopleRouter.post("/", (req, res)=> {
    req.body._id = uuid()
    people.push(req.body)
    res.send(`Successfully added 
    ${req.body.name} to the database.`)
     
})

peopleRouter.delete("/:personId", (req, res) => {
    const personId = req.params.personId
    const personIndex = people.findIndex(person => person._id === personId)
    people.splice(personIndex, 1)
    res.send("Successfully deleted movie!")


})

peopleRouter.put("/:postPersonId", (req, res)=> {
    const postPersonId = req.params.postPersonId
    const postPersonIndex = people.findIndex(person => person._id === postPersonId)
    const updatedPeople = Object.assign(people[postPersonIndex], req.body)
    console.log(req.body)
    console.log(updatedPeople)
    res.send(updatedPeople)

})
module.exports = peopleRouter