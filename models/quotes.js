// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

// Add a flag for complete so that it's false by default if not given a value

module.exports = function (sequelize, DataTypes) {
  var Quote = sequelize.define("Quote", {
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    direct: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    outbound_carrierId: {
      type: DataTypes.INTEGER, 
      allowNull: false
     },
    outbound_originId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outbound_destinationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outbound_departure: {
      type: DataTypes.DATE,
      allowNull: false
    },
    inbound_carrierId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inbound_originId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inbound_destinationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inbound_departure: {
      type: DataTypes.DATE,
      allowNull: false
    },
    quote_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
    
  },

  {timestamps: false});
  // changed to hasOne
  // change foreign key to same name on both tables
  // Quote.associate = function(models) {
  //   Quote.hasOne(models.Place, {foreignKey: "placeId"});
  // };
  return Quote;
};
