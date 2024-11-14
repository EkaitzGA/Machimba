import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const client = sequelize.define("client",{
    client_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
    },
    address:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    user_id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false
    }
})

export default client