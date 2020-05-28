module.exports = function (sequelize, DataTypes) {
    var Place = sequelize.define("Place", {
        placeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        iata_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skyscanner_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
        { timestamps: false });
    // Place.associate = function(models) {
    //     Place.belongsTo(models.Quote);
    // }
    return Place;
};