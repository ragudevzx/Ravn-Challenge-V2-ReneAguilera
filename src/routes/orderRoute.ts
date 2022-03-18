import orderController from '../controllers/orderController'
import { Router } from 'express'
import managerAuth from '../middlewares/managerAuth'
import auth from '../middlewares/auth'
const orderRouter = Router()

/**
 * @openapi
 * '/v1/orders/create':
 *  post:
 *     tags:
 *     - Orders
 *     summary: Create a product
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/Order'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
orderRouter.post('/create', auth, managerAuth, orderController.createOrder)

/**
 * @openapi
 * '/v1/orders/get/{id}':
 *  get:
 *     tags:
 *     - Orders
 *     summary: Endpoint to list a order by Id
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: orders Successfully retrieved
 */
orderRouter.get('/get/:id', auth, managerAuth, orderController.getOrder)

export default orderRouter
