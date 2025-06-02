import express from 'express'
import { addProduct, deleteProduct, productList, singleProduct } from '../controllers/productController.js'
import upload from '../config/multer.js'
import { AuthSeller } from '../middleware/AuthSeller.js'

const productRoute = express.Router()

productRoute.post('/add', AuthSeller, upload.array('images', 4)  , addProduct)
productRoute.get('/all', productList)
productRoute.get('/single/:userId', singleProduct)
productRoute.post('/delete/:userId', AuthSeller, deleteProduct)

export default productRoute