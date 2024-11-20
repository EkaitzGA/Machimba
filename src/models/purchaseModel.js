import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import phpModel from './purchase_has_product.js'
import purseModel from './purseModel.js'


const Purchase = sequelize.define("purchase", {
    purchase_id: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.ENUM('pendiente', 'aceptado/solicitado'),
        defaultValue: 'pendiente',
        allowNull: false,
    },
    client_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
})

export default Purchase;

Purchase.belongsToMany(purseModel, {through:phpModel, foreignKey: 'purchase_id'})
purseModel.belongsToMany(Purchase, {through:phpModel, foreignKey: 'product_id'})
