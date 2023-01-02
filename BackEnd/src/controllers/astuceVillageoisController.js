const db = require('../database');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

//CREATION DU MODEL
const astucetable = db.astucesvillageois;





const getAllAstuces = async (req,res) => {

    let astuces = await astucetable.findAll({
        attributes:[
        'id',
        'title',
        'text',
        'idVillageois',
        'approved'
        ]
        
        })
        res.status(200).send(astuces);

}



const getAstuce = async(req,res) => {
id = req.params.id;
console.log(id)
let astuce = await astucetable.findOne({where:{id}})

res.status(200).send(astuce);




}







module.exports = {
getAllAstuces,
getAstuce
}