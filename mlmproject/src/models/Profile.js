module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        // Userid: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //         notEmpty: true
        //     }
        // },
        Username :{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Profile.associate = model => {
        // Profile.hasMany(model.Company, {
        //     onDelete: 'cascade'
        // }),
        // Profile.hasMany(model.Address, {
        //     onDelete: 'cascade'
        // }),
        // Profile.hasMany(model.Phone, {
        //     onDelete: 'cascade'
        // })
        Profile.belongsTo(model.Credentials,{
            foreignkey:{
                allowNull:false
            }
        })
    };

    return Profile
}