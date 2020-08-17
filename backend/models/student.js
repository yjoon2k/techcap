module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        studentID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        pw:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        name:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        school:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        student_register:{
            type: DataTypes.DATETIME,
            allowNull:false,
        },
        sex:{
            type: DataTypes.TINYINT(2),
            allowNull:false,
        },
        toTeacher:{
            type: DataTypes.STRING(50),
            allowNull:true,
        },
        address:{
            type: DataTypes.STRING(50),
            allowNull:true,
        },
    },{
        timestamps:false,
    });
}