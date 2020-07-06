'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      start: {
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
      url: {
        type: Sequelize.STRING
      },
      online_event: {
        type: Sequelize.BOOLEAN
      },
      logo_url: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      number_of_tickets: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      ticket_price: {
        type: Sequelize.INTEGER
      },
      address_city: {
        type: Sequelize.STRING
      },
      address_country: {
        type: Sequelize.STRING
      },
      address_street_and_number: {
        type: Sequelize.STRING
      },
      address_post_code: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};