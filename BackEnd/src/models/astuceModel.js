
module.exports = (sequelize, DataTypes) => {


    const AstuceV = sequelize.define("astuce", {
    
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idVillageois: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        approved: {
            type: DataTypes.BOOLEAN,
            allowNull: false
            
        },
        idUser:{
            type: DataTypes.INTEGER,          
            allowNull: false
        }
    },
    {timestamps : false,
    tableName: 'astucesvillageois'}
    )
    
    
    return AstuceV;
    
    }