import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import cloudinaryConnect from './config/cloudinary.js'
import addressRoute from './routes/addressRoute.js'


const app = express()
const port = process.env.PORT || 4500

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:'http://localhost:5173', credentials:true}))

//configurations
connectDB()
cloudinaryConnect()

//routes
app.use('/user', userRoute)
// app.use('/seller', sellerRoute)
app.use('/product', productRoute)
app.use('/address', addressRoute)

app.get('/', (req,res)=> res.send('hello world'))

app.listen(port, ()=>console.log(`server is running at ${port}`))