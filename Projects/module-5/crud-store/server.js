const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/crudstoredb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    , ()=> console.log("Connected to the DB.")
)

app.use("/inventory", require("./routes/inventoryRouter.js"))

app.use((err, req, res, next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => {
    console.log('Server is running on Port 7000')
})