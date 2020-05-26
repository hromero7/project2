module.exports = function (sequelize, DataTypes) {
    var Carrier = sequelize.define("Carrier", {
        carrier_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
        { timestamps: false });
    return Carrier;
};