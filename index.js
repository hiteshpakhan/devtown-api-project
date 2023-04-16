const express = require('express');

// database
const database = require("./database");

// initialling express 
const booky = express();

/*
to get all the book
*/
booky.get("/", (req, res) => {
    return res.json({books: database.books});
});

/*
to get specific book
*/
booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter(
        (b) => b.ISBN == req.params.isbn
    );

    if(getSpecificBook.length === 0){
        return res.json({error: `No book found of isbn no ${req.params.isbn}`})
    }

    return res.json({book: getSpecificBook});
});

/*
to get list of books based on category
*/
booky.get("/c/:category", (req, res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )

    if(getSpecificBook.length === 0){
        return res.json({error: `No book found of the category : ${req.params.category}`})
    }
});




booky.listen(3000,() => {
    console.log("Server is up and running");
});

