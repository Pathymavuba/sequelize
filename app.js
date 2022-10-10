const express = require('express');
const userRoutes = require('./routes/userRoutes')

const app = express();
  

User.sync()

app.use('/api', userRoutes)





module.exports = app



  // app.post('/api/user',(req, res, next) => {
  //     User.create({username:"pathy",mail:"pat@fmail.com"})
  //   .then(()=>console.log('enregistrement reussi'))
  //   .catch(err=>console.log("enregistrement echoué",err))
     
  // })
  // app.get('/api/users',(req,res)=>{
  //   User.findAll()
  //    .then((users)=>{
  //       res.status(200)
  //       console.log(users);
        
  //    })
  //    .catch((err)=>console.error({err}))
    
  // })
  // app.get('/api/user/:id',(req,res)=>{
  //   User.findOne({where:{id:req.params.id}})
  //   .then((users)=>{
  //      res.status(200)
  //      console.log(users);
       
  //   })
  //   .catch((err)=>console.error({err}))

  // })


  // app.put('/api/user',(req,res)=>{
  //   User.update({username:"eugène",mail:"e@fmail.com"}, {where:{id:1}})
  //   .then(()=>console.log('modification reussie'))
  //   .catch(err=>console.log("modification echoué",err))
  // })


  // app.delete('/api/user',(req,res)=>{
  //   User.destroy({where:{id:3}})
  //   .then(()=>console.log('suppression reussie'))
  //   .catch(err=>console.log("suppression echoué",err))
  // })
  



 
    



