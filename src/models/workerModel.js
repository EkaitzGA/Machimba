import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import adminUserModel from "./adminUserModel.js";


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

adminUserModel.hasOne(Worker, {foreignKey: 'user_id'});
Worker.belongsTo(adminUserModel, {foreignKey: 'user_id'});

