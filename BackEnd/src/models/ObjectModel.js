
module.exports = (sequelize, DataTypes) => {


    const ObjectVillageois = sequelize.define("object", {
    
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        Nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Vit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Adresse: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        Mariage: {
            type: DataTypes.STRING,
            allowNull: false

        }
    },
    {timestamps : false,
    tableName: 'villageois'}
    )
    
    
    return ObjectVillageois;
    
    }