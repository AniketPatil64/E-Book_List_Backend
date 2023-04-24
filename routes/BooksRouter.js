const Book = require("../Schema/BooksSchema");
const express = require("express");
const BookRouter =  express.Router();


// READ - Get all books
BookRouter.get("/allbooks", async (req, resp) => {
  try {
    const books = await Book.find();
    resp.status(200).json(books);
  } catch (err) {
    resp.status(400).json("Something went wrong");
  }
});


// READ - Get a specific book by ID
BookRouter.get("/:id", async (req, resp) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      resp.status(404).json("Book not found");
    } else {
      resp.status(200).json(book);
    }
  } catch (err) {
    resp.status(400).json("Something went wrong");
  }
});


// CREATE - Add a new book
BookRouter.post("/addbook", async (req, resp) => {
  try {
    console.log(req.body);
    const { title, ISBN, author, description, date, publisher } = req.body;
    const newBook = new Book({
      title,
      ISBN,
      author,
      description,
      date,
      publisher,
    });
    const savedBook = await newBook.save();
    resp.status(201).json(savedBook);
  } catch (err) {
    resp.status(400).json("Something went wrong");
  }
});


// UPDATE - Update a book by ID
BookRouter.put("/:id", async (req, resp) => {
  try {
    const { title, ISBN, author, description, date, publisher } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        ISBN,
        author,
        description,
        date,
        publisher,
      },
      { new: true }
    );
    if (!updatedBook) {
      resp.status(404).json("Book not found");
    } else {
      resp.status(200).json(updatedBook);
    }
  } catch (err) {
    resp.status(400).json("Something went wrong");
  }
});


// DELETE - Delete a book by ID
BookRouter.delete("/:id", async (req, resp) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      resp.status(404).json("Book not found");
    } else {
      resp.status(204).json("deleted successfully");
    }
  } catch (err) {
    resp.status(400).json("Something went wrong");
  }
});


module.exports = BookRouter;
