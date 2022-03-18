'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('like', {
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
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      likeValue: {
        allowNull: false,
        default: true,
        type: Sequelize.BOOLEAN,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('like')
  },
}
