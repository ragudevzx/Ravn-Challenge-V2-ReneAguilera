'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      total: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('order')
  },
}
