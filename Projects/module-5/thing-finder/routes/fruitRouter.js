const express = require('express')

const fruitRouter = express.Router()

const uuid = require('uuid').v4

const fruit = [
    {
        type: "banana",
        brand: "chiquita",
        price: 0.5,
        _id: uuid()
    },
    {
        type: "apple",
        brand: "gala",
        price: 0.5,
        _id: uuid()
    },
    {
        type: "orange",
        brand: "naval",
        price: 0.75,
        _id: uuid()
    }
]

fruitRouter.get("/",(req, res)=>{
    res.send(fruit)
})

fruitRouter.get("/:fruitId", (req, res)=> {
    const fruitId = req.params.fruitId 
    const foundFruit = fruit.find(fruit => fruit._id === fruitId)
    res.send(foundFruit)
})

fruitRouter.get("/search/brand", (req, res)=> {
    const brand = req.query.brand
    const matchedBrand = fruit.filter(fruit => fruit.brand === brand )
    res.send(matchedBrand)

})


module.exports = fruitRouter
