const express = require("express");
const router = express.Router();

const Book = require("../models/book");
const Issue = require("../models/issue");





router.post("/addBook", async (req, res) => {
    try {
        const { title, author, publisher, year, copies } = req.body;
        console.log("req.body", req.body)
        if (req.body._id) {
            const obj = await Issue.find({ _id: req.body._id })
            obj[0].isRecom = false
            await obj[0].save()
        }
        const book = await new Book({ title, author, publisher, year, copies })
        await book.save()
    } catch (error) {
        console.log(error);
    }


})

router.delete('/deleteBook', async (req, res) => {
    try {
        // console.log("i am here")
        const { name } = req.body; // Assuming you send the book name in the request body

        // Find and delete the book by name
        const deletedBook = await Book.findOneAndDelete({ title: name });

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully', deletedBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get("/allBook", (req, res) => {
    Book.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
            data
        );
    });
});


// PUT route to edit a book by ID
router.put('/editBook/:id', async (req, res) => {
    try {
        const { title, author, publisher, year, copies } = req.body;
        const bookId = req.params.id;

        // Find the book by ID
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        // Update the book with the new values
        book.title = title || book.title;
        book.author = author || book.author;
        book.publisher = publisher || book.publisher;
        book.year = year || book.year;
        book.copies = copies || book.copies;

        // Save the updated book
        await book.save();

        res.status(200).json({ message: 'Book updated successfully', updatedBook: book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




module.exports = router;