import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const history = sequelize.define("purchase_history",{
    history_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    purchase_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    client_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }, 
    date:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    },
    status:{
        type: DataTypes.ENUM("pendiente", "solicitado"),
        allowNull: false,
    },
    product_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_material:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_collection:{
        type: DataTypes.ENUM('Antique Collection', 'Permanent Collection', 'Unique Collection', 'Vintage Summer Collection', 'New York Collection', 'Hilma Collection'),
        allowNull: false,
    },
    

})

export default history


  
