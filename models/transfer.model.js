const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Transfer = sequelize.define("transfer", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  from_branch: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  to_branch: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
  },
},{ timestamps: false, tableName: "transfer" } );

module.exports = Transfer;