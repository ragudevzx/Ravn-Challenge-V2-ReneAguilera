const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'

/**
 * @openapi
 * components:
 *  schemas:
 *   productStatus:
 *       type: object
 *       required:
 *         - id
 *         - isActive
 *       properties:
 *         id:
 *           type: integer
 *           escription: Product Id
 *         isActive:
 *           type: boolean
 *           escription: Status of the product
 *   product:
 *     type: object
 *     required:
 *         - productCategoryId
 *         - productStoreId
 *         - productName
 *         - price
 *         - information
 *         - imageUrl
 *         - isActive
 *         - stock
 *     properties:
 *       productCategoryId:
 *         type: integer
 *         description: product productCategoryId
 *       productStoreId:
 *         type: string
 *         description: product productStoreId
 *       productName:
 *         type: string
 *         description: product productName
 *       price:
 *         type: integer
 *         description: product price
 *       information:
 *         type: string
 *         description: product information
 *       imageUrl:
 *         type: string
 *         description: product imageUrl
 *       isActive:
 *         type: boolean
 *         description: product isActive
 *       stock:
 *         type: integer
 *         description: product stock
 */

const product = sequelize.define('product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  productCategoryId: {
    allowNull: false,
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

export default product
