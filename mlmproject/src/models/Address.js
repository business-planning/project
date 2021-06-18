module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {
        // Userid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        Street: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                notEmpty: true
            },
        },
        City: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    Address.associate = model => {
        Address.belongsTo(model.Profile,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Address
}