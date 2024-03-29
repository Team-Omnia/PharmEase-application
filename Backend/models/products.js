const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection.js')

// product table
const Product = sequelize.define('product',{
    ProductId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Product_image:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Product_Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Expering_date:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Purchase_Price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Sales_price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    supllierName:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
    },
    CategoryId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
    },
    batch_Id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    

});




module.exports = {Product}