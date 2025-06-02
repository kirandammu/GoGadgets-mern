import Address from '../models/Address.js'

export const addAddress = async (req,res) => {
    try {
        const {userId, address} = req.body
        await Address.create({...address,userId})
    } catch (error) {
        res.json({success:false, message:error.message})
    }   
}

export const getAddress = async (req,res) => {
    try {
        const {userId} = req.body
       const address = await Address.find({userId})
        res.json({success:true, address})
    } catch (error) {
                res.json({success:false, message:error.message})
    }
}