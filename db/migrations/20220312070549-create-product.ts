'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productStoreId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      productName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      information: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isActive: {
        allowNull: false,
        default: true,
        type: Sequelize.BOOLEAN,
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('product')
  },
}
