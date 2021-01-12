// const { Router } = require("express")
const express = require("express")
const uuid = require('uuid').v4
const peopleRouter = express.Router()
const Person = require('../models/peopleData.js')




//Get All
peopleRouter.get("/", (req, res, next)=> {

    Person.find((err, people)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(people)
    })


})



// //Params
// peopleRouter.get("/:personId", (req, res, next) => {
//     const personId = req.params.personId
//     const foundPerson = people.find( (person) => personId === person._id)
//     if(!foundPerson){
//         const error = new Error(`The item with id ${personId} was not found`)
//         res.status(500)
//         return  next(error)
//     }
//     res.status(200).send(foundPerson)

// })

//Queries
// peopleRouter.get("/search/age", (req, res, next) =>{
//     console.log(req)
//     const age = req.query.age
//     const foundPeople = people.filter(person => person.age === age)
//     if(!age) {
//         const error = new Error("You must provide an age")
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundPeople)
// })

peopleRouter.post("/", (req, res)=> {
    const newPerson = new Person(req.body)
    newPerson.save((err, savedPerson)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedPerson)
    }) 
     
})

peopleRouter.delete("/:personId", (req, res, next) => {
    const personId = req.params.personId

    Person.findOneAndDelete({personId}, (err, deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send("Successfully deleted person!")
    })


})

peopleRouter.put("/:postPersonId", (req, res)=> {
    const postPersonId = req.params.postPersonId
    const postPersonIndex = people.findIndex(person => person._id === postPersonId)
    const updatedPeople = Object.assign(people[postPersonIndex], req.body)
    console.log(req.body)
    console.log(updatedPeople)
    res.status(201).send(updatedPeople)

})

module.exports = peopleRouter