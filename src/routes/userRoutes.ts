import userController from '../controllers/userController'
import { Router } from 'express'
const userRouter = Router()

/**
 * @openapi
 * '/v1/user/register':
 *  post:
 *     tags:
 *     - User
 *     summary: User Registration
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/user'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/user'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
userRouter.post('/register', userController.register)
/**
 * @openapi
 * '/v1/user/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Login a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/auth'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/auth'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
userRouter.post('/login', userController.login)

/**
 * @openapi
 * /v1/user/logout:
 *  get:
 *     tags:
 *     - User
 *     summary: User Logout
 *     responses:
 *       200:
 *         description: Logout Successfully
 */
userRouter.get('/logout', userController.logout)

userRouter.get('/refresh_token', userController.refreshToken)

export default userRouter
