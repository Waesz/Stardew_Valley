const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(
dbConfig.DB,
dbConfig.USER,
dbConfig.PASSWORD, 
{
host : dbConfig.HOST,
dialect: dbConfig.dialect,
}

)


sequelize.authenticate().then(()=>{
console.log('connected...');
})
.catch(err =>{
console.log('Error'+err);



})


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/userModel.js')(sequelize,DataTypes)
db.astucesvillageois = require('../models/astuceModel.js')(sequelize,DataTypes)
db.objectVillageois = require('../models/ObjectModel')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('syncing done.');  
})

module.exports =db;





