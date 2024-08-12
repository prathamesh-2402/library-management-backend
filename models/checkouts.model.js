const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Checkouts = sequelize.define("checkouts", {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    user_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    isbn: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    checkout_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    return_date: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
},{ timestamps: false } );

module.exports = Checkouts;