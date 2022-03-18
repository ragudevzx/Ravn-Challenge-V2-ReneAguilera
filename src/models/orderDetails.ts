const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'
import order from './order'

/**
 * @openapi
 * components:
 *  schemas:
 *   orderDetails:
 *     type: object
 *     required:
 *         - orderId
 *         - productId
 *         - quantity
 *     properties:
 *       orderId:
 *         type: integer
 *         description: product productCategoryId
 *       productId:
 *         type: integer
 *         description: product price
 *       quantity:
 *         type: integer
 *         description: product price
 */
const orderDetails = sequelize.define('orderDetails', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  orderId: {
    allowNull: false,
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

order.hasMany(orderDetails, {
  foreignKey: 'orderId',
  as: 'orderdet',
})
orderDetails.belongsTo(order)

export default orderDetails
