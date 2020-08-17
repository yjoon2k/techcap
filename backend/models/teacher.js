module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        teacherID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        pwID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        name:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        school:{
            type: DataTypes.STRING(16),
            allowNull:true,
        },
        grade:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        status:{
            type: DataTypes.TINYINT(3),
            allowNull:false,
        },
        teacher_register:{
            type: DataTypes.DATETIME,
            allowNull:false,
        },
        sex:{
            type: DataTypes.TINYINT(2),
            allowNull:false,
        },
        address:{
            type: DataTypes.STRING(50),
            allowNull:true,
        },
    },{
        timestamps:false,
    });
}