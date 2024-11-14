import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const history = sequelize.define("purchase_history",{
    history_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
   /*  Faltan más datos a falta de actualizar la base de datos */
})

export default history