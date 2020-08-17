module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        ID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        story:{
            type: DataTypes.STRING(150),
            allowNull:false,
        },
    },{
        timestamps:false,
    });
}