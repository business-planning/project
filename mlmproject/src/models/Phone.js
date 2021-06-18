module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define("Phone",{
        // Userid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        tel:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty: true
            }
        }
    });
    Phone.associate=model=>{
        Phone.belongsTo(model.Profile,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Phone
}