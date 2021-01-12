const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvetorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    worthIt: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("InventoryModel", InvetorySchema)
