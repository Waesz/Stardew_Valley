const db = require('../database');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

//CREATION DU MODEL
const User = db.users;




// CODE PRINCIPALE 

//dash
const dashboard = async(req,res)=>{

 res.json("the requested data");     


}




//Login 

const login = async(req,res) =>{

   

const {email,password} = req.body;

const userWithEmail = await User.findOne({where:{email}})
.catch((err) =>{
console.log("Error : ",err);  
});

if(!userWithEmail)return res.status(403).send({message:"User not found."});


correctPass = bcrypt.compareSync(password,userWithEmail.password);


if(!correctPass)return res.status(403).send({message:"Wrong password."});


const jwtToken = jwt.sign(
{id: userWithEmail.id},
process.env.SALT)


res.status(200).send({message:"welcome back!", token : jwtToken});


}












//CREATION D'UN UTILISATEUR 

//A MODIFIER 

const register = async (req,res) => {


  let uz = await User.findOne({where:{email : req.body.email}})

  if(uz != null)return res.status(400).send("Utilisateur existe déja.");


const hashedPassword = await bcrypt.hash(req.body.password, 10);
 
if(!req.body.email){return res.status(400).send("Fill all fields")}
if(!req.body.pseudo){return res.status(400).send("Fill all fields")}
if(!req.body.password){return res.status(400).send("Fill all fields")}


let info = {

email: req.body.email,
pseudo: req.body.pseudo,
name: req.body.name ? req.body.name : null,
lastName: req.body.lastName ? req.body.lastName: null,
password: hashedPassword,
isAdmin: false,

}

console.log("user added")

const user = await User.create(info);
res.status(200).send(user);
}





const updateInfo = async (req,res) => {
   
    let hashedPassword = "";
   if(req.body.password){
    
     hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.update(  {
        password : hashedPassword
      },
      {
        where: { id: req.user.id },
      })

      console.log("password updated")

}       
    let info = {
    
    email: req.body.email,
    pseudo: req.body.pseudo,
    name: req.body.name ? req.body.name : null,
    lastName: req.body.lastName ? req.body.lastName: null,
    isAdmin: false,
    
    }
    
    
    const user = await User.update(  {
        name: info.name,
        lastName: info.lastName,
        pseudo: info.pseudo,
        email: info.email
      },
      {
        where: { id: req.user.id },
      })
    res.status(200);
    }














//VOIR INFOS D'UN UTILISATEURS 
const getUserInfo = async (req,res) => {

email = req.user.email;

let user = await User.findOne({where:{email}})



res.status(200).send(user);

}


module.exports = {
dashboard,
login,
register,
getUserInfo,
updateInfo

}