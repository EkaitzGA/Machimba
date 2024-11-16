import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import userModel from "./userModel.js";


const Worker = sequelize.define("worker", {
    worker_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

export default Worker;

userModel.hasOne(Worker, {foreignKey: 'user_id'});
Worker.belongsTo(userModel, {foreignKey: 'user_id'});

