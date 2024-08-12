const Branches = require("../models/branches.model");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  try {
    if (
      req.body.name == null ||
      req.body.state == null ||
      req.body.city == null ||
      req.body.address == null
    ) {
      res.request(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const branch = {
      name: req.body.name,
      state: req.body.state,
      city: req.body.city,
      address: req.body.address,
    };

    const data = await Branches.create(branch);
    res.status(201).send({
      message: "Branch created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while creating the branch.",
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const filter = {};
    if (req.query.state) {
      filter.state = {
        [Op.iLike]: `%${req.query.state}%`,
      };
    }
    if (req.query.city) {
      filter.city = {
        [Op.iLike]: `%${req.query.city}%`,
      };
    }
    const data = await Branches.findAll({ where: filter });
    res.status(201).send({
      message: "Branches retrieved successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while retrieving Branches.",
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const data = await Branches.findOne({ where: { id: req.params.id } });
    res.status(201).send({
      message: "Branches retrieved successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while retrieving branches.",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await Branches.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(201).send({
      message: "Branch updated successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while updating branch.",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await Branches.destroy({ where: { id: req.params.id } });
    res.status(201).send({
      message: "Branch deleted successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while deleting branch.",
    });
  }
};
