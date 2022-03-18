'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productCategory', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })
    await queryInterface.bulkInsert('productCategory', [
      {
        categoryName: 'Componentes',
      },
      {
        categoryName: 'Storage',
      },
      {
        categoryName: 'Network',
      },
      {
        categoryName: 'Accesories',
      },
      {
        categoryName: 'Apple Products',
      },
      {
        categoryName: 'Gamming',
      },
    ])
  },
  async down(queryInterface) {
    await queryInterface.dropTable('productCategory')
  },
}
