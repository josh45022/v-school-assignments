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
peopleRouter.get("/search/favColor", (req, res, next) =>{
    Person.find(
        {favColor: req.query.favColor},
        (err, people) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            res.status(200).send(people)
        }
    )

})


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

    Person.findOneAndDelete({_id: personId}, (err, deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }

        res.status(200).send("Successfully deleted person!")
    })


})

peopleRouter.put("/:personId", (req, res, next)=> {
    const personId = req.params.personId
    Person.findOneAndUpdate(
        {_id: personId},
        req.body,
        {new: true},
        (err, updatedPerson)=>{
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPerson)
        }
    )
})

module.exports = peopleRouter