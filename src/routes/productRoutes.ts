import productController from '../controllers/productController'
import managerAuth from '../middlewares/managerAuth'
import auth from '../middlewares/auth'
import { Router } from 'express'
const productRouter = Router()

/**
 * @openapi
 * '/v1/product/get':
 *  get:
 *     tags:
 *     - Products
 *     summary: Endpoint to list all the Products
 *     parameters:
 *      - in: query
 *        name: page
 *        schema:
 *         type: integer
 *        required: true
 *      - in: query
 *        name: size
 *        schema:
 *         type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Logout Successfully
 */
productRouter.get('/get', productController.getProducts)

/**
 * @openapi
 * '/v1/product/getByCategory/{id}':
 *  get:
 *     tags:
 *     - Products
 *     summary: Endpoint to list products by categoryId
 *     responses:
 *       200:
 *         description: Logout Successfully
 */
productRouter.get('/getByCategory/:id', managerAuth, productController.getProductsByCategory)

/**
 * @openapi
 * '/v1/product/create':
 *  post:
 *     tags:
 *     - Products
 *     summary: Create a product
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/product'
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
productRouter.post('/create', auth, managerAuth, productController.createProduct)

/**
 * @openapi
 * '/v1/product/delete/{id}':
 *  delete:
 *     tags:
 *     - Products
 *     summary: Endpoint to delete a Products
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: integer
 *        required: true
 *     responses:
 *       200:
 *         description: Logout Successfully
 */
productRouter.delete('/delete/:id', auth, managerAuth, productController.deleteProduct)

/**
 * @openapi
 * '/v1/product/update/{id}':
 *  put:
 *     tags:
 *     - Products
 *     summary: Endpoint to update a Products
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *         type: integer
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/product'
 *     responses:
 *       200:
 *         description: Updated Successfully
 */
productRouter.put('/update/:id', auth, managerAuth, productController.updateProduct)

/**
 * @openapi
 * '/v1/product/update-status':
 *  put:
 *     tags:
 *     - Products
 *     summary: Endpoint to update a Products
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/productStatus'
 *     responses:
 *       200:
 *         description: Updated Successfully
 */
productRouter.put('/update-status/:id', auth, managerAuth, productController.updateProductStatus)

/**
 * @openapi
 * '/v1/likes/like':
 *  post:
 *     tags:
 *     - Products
 *     summary: Endpint to add o remove a like
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/product'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/product'
 *      400:
 *        description: Bad request
 */
productRouter.post('/like', productController.like)

export default productRouter
