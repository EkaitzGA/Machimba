import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import userModel from "./userModel.js";

const Client = sequelize.define("client", {
    client_id: {
        type: DataTypes.INTEGER,
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
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default Client;

userModel.hasOne(Client, {foreignKey: 'user_id'});
Client.belongsTo(userModel, {foreignKey: 'user_id'});