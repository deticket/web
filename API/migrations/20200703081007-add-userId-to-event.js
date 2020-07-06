'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Events', 'userId', Sequelize.UUID);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Events', 'userId');
  }
};
