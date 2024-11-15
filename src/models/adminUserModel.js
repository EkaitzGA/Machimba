import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const user = sequelize.define("user",{
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    register_date:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull:true
    }
})

export default user