const Transfer = require("../models/transfer.model");
const Books = require("../models/books.model");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  try {
    if (
      req.body.from_branch == null ||
      req.body.to_branch == null ||
      req.body.isbn == null
    ) {
      res.request(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const branchUpdate = {
      branch_id: req.to_branch,
    };

    const updatedBook = await Books.update(branchUpdate, { where: { isbn: req.params.isbn } });
    if (updatedBook[0] === 0) {
      return res.status(404).send({
        message: "Book not found or already in the specified branch.",
      });
    }
    
    const transfer = {
      from_branch: req.body.from_branch,
      to_branch: req.body.to_branch,
      isbn: req.body.isbn,
    };

    const newTransfer = await Transfer.create(transfer);
    res.status(201).send({
      message: "Book Transfered successfully",
      updatedBook: updatedBook,
      newTransfer: newTransfer,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "An error occurred while Transfering the Book.",
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Transfer.findAll({});
    res.status(201).send({
      message: "Transfer retrieved successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while retrieving Transfer.",
    });
  }
};

// exports.getOne = async (req, res) => {
//   try {
//     const data = await Transfer.findOne({ where: { id: req.params.id } });
//     res.status(201).send({
//       message: "Transfer retrieved successfully",
//       data: data,
//     });
//   } catch (error) {
//     res.status(500).send({
//       message: error.message || "An error occurred while retrieving Transfer.",
//     });
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const data = await Transfer.update(req.body, {
//       where: { id: req.params.id },
//     });
//     res.status(201).send({
//       message: "Transfer updated successfully",
//       data: data,
//     });
//   } catch (error) {
//     res.status(500).send({
//       message: error.message || "An error occurred while updating Transfer.",
//     });
//   }
// };

// exports.delete = async (req, res) => {
//   try {
//     const data = await Transfer.destroy({ where: { id: req.params.id } });
//     res.status(201).send({
//       message: "Transfer deleted successfully",
//       data: data,
//     });
//   } catch (error) {
//     res.status(500).send({
//       message: error.message || "An error occurred while deleting Transfer.",
//     });
//   }
// };
