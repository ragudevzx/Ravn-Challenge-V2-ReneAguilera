const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'
import cart from './cart'

/**
 * @openapi
 * components:
 *  schemas:
 *   cartDetails:
 *     type: object
 *     required:
 *         - cartId
 *         - productId
 *         - quantity
 *     properties:
 *       productId:
 *         type: integer
 *         description: product Id
 *       quantity:
 *         type: integer
 *         description: quantity ofproduct
 */

const cartDetails = sequelize.define('cartDetails', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  cartId: {
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

cart.hasMany(cartDetails, {
  foreignKey: 'cartId',
  as: 'cartdeta',
})
cartDetails.belongsTo(cart)

export default cartDetails
