module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
       classID:{
            type: DataTypes.STRING(45),
            allowNull:false,
        },
        teacherID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        studentID:{
            type: DataTypes.STRING(16),
            allowNull:false,
        },
        register:{
            type: DataTypes.DATETIME,
            allowNull:false,
        },
        starttime:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        endtime:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        date:{
            type: DataTypes.STRING(16),
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