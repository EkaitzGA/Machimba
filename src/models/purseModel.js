//hacer imports

const Purse = sequelize.define('product', {
    product_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STING,
        allowNull:false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true
    },
    collection:{
        type: DataTypes.ENUM('Antique Collection', 'Permanent Collection', 'Unique Collection', 'Vintage Summer Collection', 'New York Collection', 'Hilma Collection'),
        allowNull:false
    },
    price:{
        type: DataTypes.INT.UNSIGNED,
        allowNull:false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull:true
    },
    color:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    material:{
        type: DataTypes.STRING,
        allowNull:false,
    }

})

export default Purse;

// Collection
// price
// Image
// Color
// material