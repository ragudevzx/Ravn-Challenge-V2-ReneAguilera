const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'

/**
 * @openapi
 * components:
 *  schemas:
 *   cart:
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
 *         description: Cart total Amount
 *       cartDetails:
 *         $ref: '#/components/schemas/cartDetails'
 */
const cart = sequelize.define('cart', {
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

export default cart
