import cartController from '../controllers/cartController'
import { Router } from 'express'
import managerAuth from '../middlewares/managerAuth'
import auth from '../middlewares/auth'
const orderRouter = Router()

/**
 * @openapi
 * '/v1/cart/update':
 *  post:
 *     tags:
 *     - Cart
 *     summary: This endpoint creates and update user's cart and cart details
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/cart'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/cart'
 *      400:
 *        description: Bad request
 */

orderRouter.post('/update', auth, managerAuth, cartController.updateCart)

export default orderRouter
