module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define("Phone",{
        tel:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        }
    });
    return Phone
}