'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn('Events', 'allow_ticket_resale', Sequelize.BOOLEAN),
      queryInterface.addColumn('Events', 'ticket_markup', Sequelize.INTEGER),
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn('Events', 'allow_ticket_resale'),
      queryInterface.removeColumn('Events', 'ticket_markup'),
    ])
  }
};
