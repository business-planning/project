module.exports = (sequelize, DataTypes) => {
    const Company= sequelize.define("Company",{
        Name:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: true
            },
            location:{
                type:DataTypes.STRING,
                allowNull:false,
                validate:{
                    notEmpty:true
                }
            }
        }
    })
    return Company
}