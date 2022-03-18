module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cartDetails', 'cartId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'cart',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('cartDetails', 'cartId')
  },
}
