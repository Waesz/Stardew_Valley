const express = require('express');
const router = require('./routes/userRouter.js');
const routerAstuces = require('./routes/astucesVillageoisRoutes')
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const db = require('./database');
const villageois = db.objectVillageois;


require('dotenv').config({path:__dirname+'/config/.env'});

require('./auth/passport');
const app = express();
app.use(cors());



var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin" , "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-Auth-Token");  
    next();
}



    app.use(allowCrossDomain);
 



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());





//ROUTING 
app.use('/user', router);
app.use('/astuces', routerAstuces);


app.get("/objects/:id",async (req,res)=>{

    const Objectvillageois = await villageois.findOne({where:{id : req.params.id}})
.catch((err) =>{
console.log("Error : ",err);  
});

res.status(200).send(Objectvillageois)

})


app.get("/getObjects",async (req,res)=>{

    const Allvillageois = await villageois.findAll({
        attributes:[
            'id',
            'Nom',
            'Vit',
            'Adresse',
            'Mariage'
            ]


    })
   
        res.status(200).json(Allvillageois);

    })







app.listen(3000,() => console.log('Listening on port 3000...'));






