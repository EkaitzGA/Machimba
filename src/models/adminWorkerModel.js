import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import User from "./adminUserModel.js";


const worker = sequelize.define("worker", {
    worker_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: User, 
            key: 'user_id',
        },
    }
})

export default worker;

worker.belongsTo(User,{foreignKey: 'user_id',});
User.hasOne(worker,{foreignKey: 'user_id',});