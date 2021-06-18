module.exports = (sequelize, Datatypes) => {
    const Address = sequelize.define("Address",{
        Street: {
            type: Datatypes.STRING,
            allownull: false,
            validate: {
                notEmpty: true
            },
        },
        City: {
            type: Datatypes.STRING,
            allownull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    {
        tableName: 'Employees'
    }
    return Address
}