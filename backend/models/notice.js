module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        ID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        story:{
            type: DataTypes.STRING(500),
            allowNull:false,
        },
        register:{
            type: DataTypes.DATETIME,
            allowNull:false,
        },
        title:{
            type: DataTypes.STRING(50),
            allowNull:false,
        },
        views:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        type:{
            type: DataTypes.TINYINT,
            allowNull:false,
        },
    },{
        timestamps:false,
    });
}