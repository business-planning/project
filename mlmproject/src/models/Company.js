module.exports = (sequelize, DataTypes) => {
    const Company= sequelize.define("Company",{
        // Userid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
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
    Company.associate=model=>{
        Company.belongsTo(model.Profile,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Company
}