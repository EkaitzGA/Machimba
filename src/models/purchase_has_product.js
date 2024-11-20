import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Purchase_has_product = sequelize.define("purchase_has_product", {
    purchase_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }
})

export default Purchase_has_product;