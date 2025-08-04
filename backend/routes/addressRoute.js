import express from 'express'
import AuthUser from '../middleware/AuthUser.js'
import { addAddress, getAddress } from '../controllers/addressController.js'

const addressRoute = express.Router()

addressRoute.post('/add',AuthUser, addAddress)
addressRoute.get('/get', getAddress)

export default addressRoute