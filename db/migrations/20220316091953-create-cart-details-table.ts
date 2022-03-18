'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cartDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('cartDetails')
  },
}
