import express from 'express'
import { isAuth, login, logout, register } from '../controllers/userController.js'
import AuthUser from '../middleware/AuthUser.js'

const userRoute = express.Router()

userRoute.post('/register', register)
userRoute.post('/login', login)
userRoute.get('/islogin',AuthUser, isAuth)
userRoute.get('/logout',AuthUser, logout)
// userRoute.put('/cart',AuthUser, UpdateCart)

export default userRoute