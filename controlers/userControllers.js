const {sequelize} = require('../config/dbConnexion')
const userModel = require('../models/user')
const {DataTypes} = require('sequelize')

const User = userModel(sequelize,DataTypes)

exports.getAllUsers = (req,res)=>{
    User.findAll()
    .then((users)=>{
        res.status(200)
        console.log(users);
    })
    .catch(err=>console.log(err))
}

exports.getUser = (req,res)=>{
    User.findOne({where:{id:req.params.id}})
    .then((users)=>{
       res.status(200)
       console.log(users);
       
    })
    .catch((err)=>console.error({err}))

  }

exports.createUser = (req, res, next) => {
    User.create({username:"pathy",mail:"pat@fmail.com"})
    .then(()=>console.log('enregistrement reussi'))
    .catch(err=>console.log("enregistrement echoué",err))
}
 
exports.modifyUser = (req,res)=>{
    User.update({username:"eugène",mail:"e@fmail.com"}, {where:{id:req.params.id}})
    .then(()=>console.log('modification reussie'))
    .catch(err=>console.log("modification echoué",err))
}

exports.deleteUser = (req,res)=>{
    User.destroy({where:{id:req.params.id}})
    .then(()=>console.log('suppression reussie'))
    .catch(err=>console.log("suppression echoué",err))
}