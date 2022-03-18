const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'

export enum roles {
  MANAGER = 'manager',
  CLIENT = 'client',
}

/**
 * @openapi
 * components:
 *  securitySchemes:
 *   bearerAuth:
 *     type: http
 *     scheme: bearer
 *  security:
 *    - bearerAuth: []
 *  schemas:
 *    auth:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *        password:
 *          type: string
 *
 *    user:
 *      type: object
 *      required:
 *         - email
 *         - firstName
 *         - lastName
 *         - password
 *         - role
 *      properties:
 *       firstName:
 *         type: string
 *         description: user FirstName
 *       lastName:
 *         type: string
 *         description: user LastNAme
 *       email:
 *         type: string
 *         description: user Email
 *       password:
 *         type: string
 *         description: user Password
 *       role:
 *         type: string
 *         description: user Password
 */

const user = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  firstName: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  lastName: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING,
    isEmail: true,
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING,
    trim: true,
    min: 7,
  },
  role: {
    allowNull: false,
    type: Sequelize.STRING,
  },
})

export default user
