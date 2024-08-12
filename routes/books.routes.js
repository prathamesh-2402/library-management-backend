const books = require("../controllers/books.controller.js");

var router = require("express").Router();

//create a Book
router.post("/", books.create);

//get all Books
router.get("/", books.getAll);

//get one Book
router.get("/:id", books.getOne);

//update a Book
router.put("/:id", books.update);

//delete a Book
router.delete("/:id", books.delete);

module.exports = router;