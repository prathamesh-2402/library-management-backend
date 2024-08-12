const Checkouts = require("../models/checkouts.model");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  try {
    if (
      req.body.user_name == null ||
      req.body.isbn == null ||
      req.body.checkout_date == null ||
      req.body.due_date == null ||
      req.body.status == null
    ) {
      res.request(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const checkout = {
      user_name: req.body.user_name,
      isbn: req.body.isbn,
      checkout_date: req.body.checkout_date,
      due_date: req.body.due_date,
      return_date: req.body.return_date,
      status: req.body.status,
    };

    const data = await Checkouts.create(checkout);
    res.status(201).send({
      message: "Checkout created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "An error occurred while creating the checkout.",
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const filter = {};
    if (req.query.user_name) {
      filter.user_name = {
        [Op.iLike]: `%${req.query.user_name}%`,
      };
    }
    if (req.query.city) {
      filter.city = {
        [Op.iLike]: `%${req.query.city}%`,
      };
    }
    const data = await Checkouts.findAll({ where: filter });
    res.status(201).send({
      message: "Checkouts retrieved successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while retrieving Checkouts.",
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const data = await Checkouts.findOne({ where: { id: req.params.id } });
    res.status(201).send({
      message: "Checkouts retrieved successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while retrieving Checkouts.",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await Checkouts.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(201).send({
      message: "Checkout updated successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while updating checkout.",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await Checkouts.destroy({ where: { id: req.params.id } });
    res.status(201).send({
      message: "Checkout deleted successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while deleting checkout.",
    });
  }
};
