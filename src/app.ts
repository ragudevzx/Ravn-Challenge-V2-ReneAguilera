require('dotenv').config()
import swaggerDocs from './util/swagger'

import productRouter from './routes/productRoutes'
import userRouter from './routes/userRoutes'
import orderRouter from './routes/orderRoute'
import cartRouter from './routes/cartRoutes'

const cors = require('cors')
const helmet = require('helmet')
const express = require('express')

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN_URL }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/v1/user', userRouter)
app.use('/v1/product', productRouter)
app.use('/v1/orders', orderRouter)
app.use('/v1/cart', cartRouter)

app.listen(3001, async () => {
  console.log('Server on port 3001')
  swaggerDocs(app)
})
