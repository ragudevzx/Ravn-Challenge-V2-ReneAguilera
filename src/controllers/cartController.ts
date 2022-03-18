import sequelize from '../../db/config-sequelize'
import cartModel from '../models/cart'
import cartDetailsController from './cartDetailsController'

const cartController = {
  updateCart: async (req, res) => {
    try {
      const { userId, total } = req.body
      const data = req.body.cartDetails
      const transaction = await sequelize.transaction()

      // Confirm id a Cart exist
      const findCart = await cartModel.findOne({
        where: {
          userId: userId,
        },
      })

      if (!findCart) {
        //if do not exist then create one
        const newCart = new cartModel(
          {
            userId,
            total,
          },
          { transaction },
        )
        // Adding cart details
        await newCart.save()
        data.map(async (newCartDetail) => {
          newCartDetail.id = findCart.id
          cartDetailsController.updateCartDetails(newCartDetail)
        })
      } else {
        // if we already have a Cart we only need to update records
        findCart.update({ total }, { where: { id: findCart.id } })
        data.map(async (newCartDetail) => {
          newCartDetail.id = findCart.id
          cartDetailsController.updateCartDetails(newCartDetail)
        })
      }

      return res.status(200).json({ msg: 'Order has been created successfully' })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
}

export default cartController
