import sequelize from '../../db/config-sequelize'
import orderModel from '../models/order'
import orderModelDetails from '../models/orderDetails'
import productController from './productController'

const orderController = {
  createOrder: async (req, res) => {
    try {
      const { userId, total } = req.body
      const data = req.body.orderDetails
      const transaction = await sequelize.transaction()

      // Creating a new instance of order
      const newOrder = new orderModel(
        {
          userId,
          total,
        },
        { transaction },
      )

      // intance saved
      await newOrder.save()

      // Iterate orderDetails to add id and to saved it and also update product stock
      data.map(async (newOrderDetail) => {
        newOrderDetail.orderId = newOrder.id
        productController.updateStockProduct(newOrderDetail)
        const newOrderDetails = new orderModelDetails(newOrderDetail, transaction)
        await newOrderDetails.save()
      })

      return res.status(200).json({ msg: 'Order has been created successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
  getOrder: async (req, res) => {
    try {
      const order = await orderModel.findOne({
        where: { id: req.params.id },
        include: [{ association: 'orderdet' }],
      })

      res.json({
        status: 'success',
        result: order.length,
        order: order,
      })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
}

export default orderController
