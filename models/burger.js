module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        // constraints
        // and column
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaulValue: false
        }
    });
    return Burger
}