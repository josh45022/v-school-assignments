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



fruitRouter.get("/brand", (req, res)=> {
    console.log(req.query)
    const brand = req.query.brand
    const matchedBrand = fruit.filter(item => item.brand === brand )
    console.log(matchedBrand)
    res.send(matchedBrand)

})
fruitRouter.get("/:fruitId", (req, res)=> {
    const fruitId = req.params.fruitId 
    const foundFruit = fruit.find(fruit => fruit._id === fruitId)
    res.send(foundFruit)
})

fruitRouter.post("/", (req, res) => {
     console.log(req.body)
     fruit.push(req.body)
     res.send("Sucessfully posted fruit.")
})

module.exports = fruitRouter
