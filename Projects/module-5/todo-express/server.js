const express = require("express")
const uuid = require("uuid").v4

const app = express()

app.use(express.json())

const todos = [
    {
        name: "Cut the grass",
        description: "A beautiful blend of grass cutting goodness",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/Bob_at_Easel.jpg",
        completed: false,
        _id: uuid()
    },
    {
        name: "Paint the picture",
        description: "A beautiful blend of picture painting goodness",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/Bob_at_Easel.jpg",
        completed: false,
        _id: uuid()
    }    
]
app.get("/todos", (req, res)=> {
    res.send(todos)
})
app.get("/todos/:todoId", (req, res)=> {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

app.post("/todos", (req, res)=> {
    req.body._id = uuid()
    todos.push(req.body)
    console.log(todos)
    res.send("Sucessfully posted")
}) 
app.put("/todos/:todoId", (req, res)=> {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body) //decided to be extra here
    res.send(updatedTodo)
})
app.delete("/todos/:todoId", (req, res)=> {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted")
})
app.listen(7000,()=> console.log("Server is running on Port 7000"))