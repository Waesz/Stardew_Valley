const ASTUCECONTROLLER = require('../controllers/astuceVillageoisController.js');
const passport = require("passport");
const routerAstuces = require('express').Router();


routerAstuces.get('/showAll', ASTUCECONTROLLER.getAllAstuces);  
routerAstuces.get('/:id',ASTUCECONTROLLER.getAstuce)
routerAstuces.post('/AddAstuce',passport.authenticate('jwt', { session: false }),ASTUCECONTROLLER.AddAstuce);

module.exports = routerAstuces;

    