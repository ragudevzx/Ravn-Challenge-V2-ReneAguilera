const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'
import product from './product'

const productCategory = sequelize.define('productCategory', {
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

productCategory.hasMany(product, {
  foreignKey: 'productCategoryId',
  as: 'productsCat',
})

product.belongsTo(productCategory)

export default productCategory
