import express from 'express'
import { isSellerAuth, sellerLogin, sellerLogout } from '../controllers/adminController.js'
import {AuthSeller} from '../middleware/AuthSeller.js'

const sellerRoute = express.Router()

sellerRoute.post('/login',sellerLogin)
sellerRoute.get('/isSeller',AuthSeller, isSellerAuth)
sellerRoute.post('/logout',sellerLogout)

export default sellerRoute