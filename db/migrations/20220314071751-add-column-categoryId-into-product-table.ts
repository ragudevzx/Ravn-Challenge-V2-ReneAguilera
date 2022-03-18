module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('product', 'productCategoryId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'productCategory',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('product', 'productCategoryId')
  },
}
