import cartDetailsModel from '../models/cartDetails'

const cartDetailsController = {
  updateCartDetails: async (cardDetails) => {
    try {
      const newCartDetailList = [cardDetails]
      // Iterate cartDeatails
      newCartDetailList.forEach(async (details) => {
        // Verify if there is arealdy a record created
        const detailFromDb = await cartDetailsModel.findOne({
          where: { cartId: details.id, productId: details.productId },
        })
        if (detailFromDb) {
          // if there is already a record we will updated it
          await cartDetailsModel.update(
            { quantity: details.quantity },
            { where: { cartId: details.id, productId: details.productId } },
          )
        } else {
          // if not we will save it
          const newCartDetail = new cartDetailsModel({
            cartId: details.id,
            productId: details.productId,
            quantity: details.quantity,
          })
          newCartDetail.save()
        }
      })
    } catch (error) {
      error.message
    }
  },
}

export default cartDetailsController
