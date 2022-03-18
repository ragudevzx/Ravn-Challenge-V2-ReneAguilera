const { Sequelize } = require('sequelize')

const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const host = process.env.DB_HOST
const password = process.env.DB_PASSWORD

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: database,
  username: username,
  password: password,
  host: host,
  define: {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  },
})

sequelize.sync()
;(async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()

export default sequelize
