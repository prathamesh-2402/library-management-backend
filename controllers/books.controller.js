const Books = require("../models/books.model");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  try {
    if (
      req.body.title == null ||
      req.body.author == null ||
      req.body.isbn == null ||
      req.body.genre == null ||
      req.body.availability == null ||
      req.body.quantity == null ||
      req.body.branch_id == null
    ) {
      res.request(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const book = {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
      genre: req.body.genre,
      availability: req.body.availability,
      quantity: req.body.quantity,
      branch_id: req.body.branch_id,
    };
    const data = await Books.create(book);
    res.status(201).send({
      message: "Book created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while creating the book.",
    });
  }
};

exports.getAll = async (req, res) => {
    try {
        const filter = {};
        if(req.query.title){
            filter.title = {
                [Op.iLike] : `%${req.query.title}%`,
            }
        }
        if(req.query.author){
            filter.author = {
                [Op.iLike] : `%${req.query.author}%`,
            }
        }
        if(req.query.genre){
            filter.genre = {
                [Op.iLike] : `%${req.query.genre}%`,
            }
        }
        if(req.query.branch_id){
            filter.branch_id = req.query.branch_id;
        }
        if(req.query.availability){
            filter.availability = {
                [Op.iLike] : `%${req.query.availability}%`,
            }
        }
        const data = await Books.findAll({where: filter})
        res.status(201).send({
          message: "Books retrieved successfully",
          data: data,
        });
      } catch (error) {
        res.status(500).send({
          message: error.message || "An error occurred while retrieving books.",
        });
    }
};

exports.getOne = async (req, res) => {
    try {
        const data = await Books.findOne({where: {id: req.params.id}});
        res.status(201).send({
          message: "Books retrieved successfully",
          data: data,
        });
      } catch (error) {
        res.status(500).send({
          message: error.message || "An error occurred while retrieving books.",
        });
    }
};

exports.update = async (req, res) => {
    try {
        const data = await Books.update(req.body ,{where: {id: req.params.id}});
        res.status(201).send({
          message: "Book updated successfully",
          data: data,
        });
      } catch (error) {
        res.status(500).send({
          message: error.message || "An error occurred while updating book.",
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const data = await Books.destroy({where: {id: req.params.id}});
        res.status(201).send({
          message: "Book deleted successfully",
          data: data,
        });
      } catch (error) {
        res.status(500).send({
          message: error.message || "An error occurred while deleting book.",
        });
    }
};
