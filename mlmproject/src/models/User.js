module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        Userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    // User.assosiate = model=>{
    //     User.hasMany(model.)
    // }
    return User
}