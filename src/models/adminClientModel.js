import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import User from "./adminUserModel.js";

const client = sequelize.define("client", {
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // 'User' would also work
            key: 'user_id',
        },
    }
})

export default client;

client.belongsTo(User,{
    foreignKey: 'user_id',
  });
User.hasOne(client,{
    foreignKey: 'user_id',
  });