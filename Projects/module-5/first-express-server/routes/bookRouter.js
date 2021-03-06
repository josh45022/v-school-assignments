const express = require("express")
const bookRouter = express.Router()
const Book = require("../models/booksData.js")

//Get all books

bookRouter.get("/", (req, res, next)=>{
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


//Get by author
bookRouter.get("/:authorId", (req, res, next) => {
    Book.find(
        {author: req.params.authorId},
        (err, books)=>{
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(books)
    })
})

//Add new book
bookRouter.post("/:authorId", (req, res, next)=>{
    req.body.author = req.params.authorId
    const newBook = new Book(req.body)
    newBook.save((err, savedBook)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

//Like A Book
bookRouter.put("/likes/:bookId", (req, res, next) => {
    Book.findOneAndUpdate(
        {_id: req.params.bookId},
        {$inc: {likes: 1}},
        (err, updatedBook) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }

    )
})

//find books by like range
bookRouter.get("/search/bylikes", (req, res, next) => {
    Book.where("likes").gte(5).exec(
        (err, book)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(books)
        }
    )
})

module.exports = bookRouter

