module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('admin',{
        studentID:{
            type: DataTypes.STRING(16),
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
            allowNull:true,
        },

    },{
        timestamps:false,
    });
}