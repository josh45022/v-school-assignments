const express = require('express')
const inventoryRouter = express.Router()
const InventoryModel = require("../models/inventory.js")


//GET All
inventoryRouter.get('/', (req, res, next)=>{
    InventoryModel.find(
        (err, inventoryItem)=> {
             if(err) {
                res.status(500)
                 return next(err)
             }
             return res.status(200).send(inventoryItem)
        }
    )
})

//GET One
inventoryRouter.get("/:itemId", (req, res, next)=>{
    const itemId = req.params.itemId
    InventoryModel.findOne(
        {_id: itemId},
        (err, inventoryItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
        return res.status(200).send(inventoryItem)
        }
    )
})

//POST 
inventoryRouter.post('/', (req, res, next) => {
    const newInventoryItem = new InventoryModel(req.body)
    newInventoryItem.save(
        (err, newItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newItem)
        }
    )
})

//DELETE
inventoryRouter.delete('/:itemId', (req, res, next) => {
    const itemId = req.params.itemId
    InventoryModel.findOneAndDelete(
        {_id: itemId},
        (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send("Successfully deleted item!")
        }

    )
})

//PUT
inventoryRouter.put('/:itemId', (req, res, next)=>{
    const itemId = req.params.itemId
    InventoryModel.findOneAndUpdate(
        {_id: itemId},
        req.body,
        {new: true},
        (err, updatedItem) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = inventoryRouter