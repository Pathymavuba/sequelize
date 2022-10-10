const {Sequelize}= require('sequelize')

const sequelize = new Sequelize('trigo','root','LaethiciaKandolo@14',{
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
.then(()=>{
  console.log('connexion reussie');
})
.catch(err=>console.log('connexion echouée',err))

module.exports = {sequelize}