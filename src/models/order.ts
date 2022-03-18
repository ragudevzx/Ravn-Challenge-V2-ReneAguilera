const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'
import user from './user'

/**
 * @openapi
 * components:
 *  schemas:
 *   Order:
 *     type: object
 *     required:
 *         - userId
 *         - total
 *     properties:
 *       userId:
 *         type: integer
 *         description: User Id
 *       total:
 *         type: integer
 *         description: Total amount of the order
 *       orderDetails:
 *         $ref: '#/components/schemas/orderDetails'
 */

const order = sequelize.define('order', {
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

user.hasMany(order)
order.belongsTo(user)

export default order
