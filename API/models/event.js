'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    url: DataTypes.STRING,
    online_event: DataTypes.BOOLEAN,
    logo_url: DataTypes.STRING,
    category: DataTypes.STRING,
    number_of_tickets: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    ticket_price: DataTypes.INTEGER,
    address_city: DataTypes.STRING,
    address_country: DataTypes.STRING,
    address_street_and_number: DataTypes.STRING,
    address_post_code: DataTypes.STRING,
    userId: DataTypes.UUID,
    ticket_markup: DataTypes.INTEGER,
    allow_ticket_resale: DataTypes.BOOLEAN
  }, {});
  Event.associate = function (models) {
    // associations can be defined here
  };
  return Event;
};