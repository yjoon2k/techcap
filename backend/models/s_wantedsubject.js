module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        studentID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        subject:{
            type: DataTypes.STRING(16),
            allowNull:true,
        },
        grade:{
            type: DataTypes.INTEGER,
            allowNull:ture,
        },
    },{
        timestamps:false,
    });
}