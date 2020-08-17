module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        teacherID:{
            type: DataTypes.STRING(45),
            allowNull:false,
        },
        subject:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        grade:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },

    },{
        timestamps:false,
    });
}