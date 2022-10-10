
module.exports = (sequelize,DataTypes)=>{
   return  User = sequelize.define('user',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull : false,
        },
        mail:{
            type:DataTypes.STRING,
            allowNull : false,
        }
    },{
        timestamps:false
    })
}