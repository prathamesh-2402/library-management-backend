const Transfer = require("../models/transfer.model");
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

    const transfer = {
      from_branch: req.body.from_branch,
      to_branch: req.to_branch,
      isbn: req.body.isbn,
    };

    const data = await Transfer.create(transfer);
    res.status(201).send({
      message: "Transfer created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "An error occurred while creating the Transfer.",
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

exports.getOne = async (req, res) => {
  try {
    const data = await Transfer.findOne({ where: { id: req.params.id } });
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

exports.update = async (req, res) => {
  try {
    const data = await Transfer.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(201).send({
      message: "Transfer updated successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while updating Transfer.",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await Transfer.destroy({ where: { id: req.params.id } });
    res.status(201).send({
      message: "Transfer deleted successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while deleting Transfer.",
    });
  }
};
