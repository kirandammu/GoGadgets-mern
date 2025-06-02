import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


//register --  /user/register
export const register = async(req,res)=>{
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            res.json({message:'All fields required'})
        }
        const exist = await User.findOne({email})
        if(exist){
            res.json({success:false, message:'try another email'})
        }
        const hashpassword = await bcrypt.hash(password, 10)

        const user = User.create({name,email,password:hashpassword})

        const token = jwt.sign({userId:user.id},process.env.JWT_SECRET, {expiresIn:'1d'})

        res.cookie('token', token, {httpOnly:true, sameSite:'strict', maxAge:1*24*60*60*1000})

        res.json({success:true, message:'Account Successfully Created'})



    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})

    }
}

//login --  /user/login
export const login = async (req,res)=>{
    try {
        const {email, password}=req.body
    if(!email || !password){
        res.json({message:'All fields required'})
    }
    const user = await User.findOne({email})
    if(!user){
        res.json({success:false, message:'invalid email'})
    }
    const checkPassword =await bcrypt.compare(password,user.password)
    if(!checkPassword){
        res.json({success:false, message:'wrong password'}) 
    }

        const token = jwt.sign({userId:user.id},process.env.JWT_SECRET, {expiresIn:'1d'})

    res.cookie('token', token, {httpOnly:true, sameSite:'strict', maxAge:1*24*60*60*1000})

    res.json({success:true, message:'login succesfully', user})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error})
    }
}

//authUser -- /user/isAuth
export const isAuth = async (req,res)=>{
    try{
        res.json(req.user)
    }catch(error){
        console.log(error.message)
        res.json({success:false, message:error.message})
    }

}


//logout user -- /user/logout
export const logout = async (req,res)=>{
    try {
        res.clearCookie('token',{httpOnly:true, sameSite:'strict', maxAge:0, secure: process.env.NODE_ENV === 'production'})
        res.json({success:true, message:'Logout successfully'})
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error})
    }
}

//cartItems ---/user/cart
export const UpdateCart = async (req,res) => {
    const {userId, cartItems} = req.body
    await User.findByIdAndUpdate(userId, {cartItems})
    
}



