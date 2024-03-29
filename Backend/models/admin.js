//const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection.js')

// Creating Admin table
const Admin = sequelize.define('admin',{
    adminId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false
    }

});




module.exports = {Admin}