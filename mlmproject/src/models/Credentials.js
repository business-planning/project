module.exports = (sequelize, DataTypes) => {
    const Credentials = sequelize.define("Credentials", {
        Userid:{
            type: DataTypes.INTEGER,
            allownull:false,
            validate:{
                notEmpty:true
            }
        },
        firstName:{
            type: DataTypes.STRING,
            allownull:false,
            validate:{
                notEmpty:true
            }
        },
        Password:{
            type: DataTypes.STRING,
            allownull:false,
            validate:{
                notEmpty:true
            }
        }
    }
    );
    return Credentials
}