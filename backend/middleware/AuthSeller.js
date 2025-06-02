import jwt from 'jsonwebtoken'


const secretKey = 'dammukiran4'

export const AuthSeller = async (req, res, next)=>{
    const {sellerToken} = req.cookies

    if(!sellerToken){
        res.json({success:false, message:'Not Autherized'})
    }
    try {
        const tokenDecode = jwt.verify(sellerToken,secretKey)
        if(tokenDecode.email === 'dammu123@gmail.com'){
            next()
            return res.json({success:true})}
        else{
             res.json({success:false, message:'Not Autherized'})
        console.log('nternal error') }
        
    } catch (error) {
        res.json({success:false, message:error.message})
                console.log('server error')      }
}