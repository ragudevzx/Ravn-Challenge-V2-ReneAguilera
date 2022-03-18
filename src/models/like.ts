const Sequelize = require('sequelize')
import sequelize from '../../db/config-sequelize'

const like = sequelize.define('like', {
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
  productId: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  likeValue: {
    allowNull: false,
    default: true,
    type: Sequelize.BOOLEAN,
  },
})

export default like
