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

    return res.json({book: getSpecificBook});
});

/*
to get the specific book based on language
*/
booky.get("/ln/:lang", (req, res)=>{
    const getSpecificBook = database.books.filter(
        (book) => book.language == req.params.lang
    );

    if(getSpecificBook.length === 0){
        return res.json({error: `there is no book that has the language ${req.params.lang}`})
    }

    return res.json({book: getSpecificBook});
});


/*
to get all the authors
*/
booky.get("/author", (req, res)=>{
    return res.json({authors: database.author});
});

/*
to get specific author
*/
booky.get("/id/:idnum", (req, res)=>{
    const getSpecificAuthor = database.author.filter(
        (author) => author.id == req.params.idnum
    )

    if(getSpecificAuthor.length === 0){
        return res.json({author: `there is no author that has the id : ${req.params.idnum}`})
    }

    return res.json({author: getSpecificAuthor});
});

/*
to get the author based on the book
*/
booky.get("/author/book/:isbn", (req,res)=>{
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    )

    if(getSpecificAuthor === 0){
        return res.json({author: `there is no author found with isbn number ${req.params.isbn}`})
    }

    return res.json({author: getSpecificAuthor});
});

/*
to get all the publications
*/
booky.get("/publications", (req,res)=>{
    return res.json({publications: database.publication});
});


booky.listen(3000,() => {
    console.log("Server is up and running");
});

