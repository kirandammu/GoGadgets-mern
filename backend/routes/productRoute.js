import express from 'express'
import { addProduct, deleteProduct, productList, singleProduct } from '../controllers/productController.js'
import upload from '../config/multer.js'

const productRoute = express.Router()

productRoute.post('/add', upload.array('images', 4)  , addProduct)
productRoute.get('/all', productList)
productRoute.get('/single/:userId', singleProduct)
productRoute.post('/delete/:userId', deleteProduct)

export default productRoute