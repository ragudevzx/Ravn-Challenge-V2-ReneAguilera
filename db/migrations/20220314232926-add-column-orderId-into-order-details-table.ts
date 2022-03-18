module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orderDetails', 'orderId', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'order',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('orderDetails', 'orderId')
  },
}
