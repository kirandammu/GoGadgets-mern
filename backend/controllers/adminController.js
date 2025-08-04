// import jwt from 'jsonwebtoken'


// const secretKey = 'dammukiran4'

// export const sellerLogin = async (req,res)=>{

//     try {
//         const {email, password}=req.body
//     if(!email || !password){
//         res.json({message:'All fields required'})
//     }
//     if(email === 'dammu123@gmail.com' && password === 'dammu123'){
//         const token = jwt.sign({email}, secretKey, {expiresIn:'1d'})

//         res.cookie('sellerToken', token, {httpOnly:true, sameSite:'strict', maxAge:1*24*60*60*1000})
    
//         res.json({success:true, message:'login'})
//     }
//     else{res.json({success:false, message:'Invalid Credentails'})}
    
//     } catch (error) {
//         console.log(error.message)
//         res.json({success:false, message:error})
//     }
// }

// //sellerAuth -- /user/isAuth
// export const isSellerAuth = async (req,res)=>{
//     try{
//         return res.json({success:true})
//     }catch(error){
//         console.log(error.message)
//         res.json({success:false, message:error})
//     }

// }


// //sellerLogout user -- /user/logout
// export const sellerLogout = async (req,res)=>{
//     try {
//         res.clearCookie('sellerToken',{httpOnly:true, sameSite:'strict', maxAge:0})
//         res.json({success:true, message:'Logout '})
//     } catch (error) {
//         console.log(error.message)
//         res.json({success:false, message:error})
//     }
// }