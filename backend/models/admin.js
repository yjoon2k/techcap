module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        adminID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        pw:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(16),
            allowNull:false,
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        sex:{
            type:DataTypes.TINYINT,
            allowNull:false,
        },
    },{
        timestamps:false,
    });
}