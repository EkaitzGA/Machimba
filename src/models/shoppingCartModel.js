import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Purchase = sequelize.define('purchase', {
    purchase_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    address:{
        type: DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull:false
    },
    date:{
        type: DataTypes.TIMESTAMP
    },
    status:{
        type: DataTypes.ENUM,
    },
    clients_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
    }
})

export default Purchase;
// purchase_id, address, phone, date, status, client_id