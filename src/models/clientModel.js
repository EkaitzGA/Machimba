import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import userModel from "./userModel.js";

const Client = sequelize.define("client", {
    client_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

export default Client;

userModel.hasOne(Client, {foreignKey: 'user_id'});
Client.belongsTo(userModel, {foreignKey: 'user_id'});