module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        teacherID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        studentID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        }
    },{
        timestamps:false,
    });
}