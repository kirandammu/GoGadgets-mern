import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Item = ({product}) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=>{navigate(`/products/${String(product.category).toLowerCase()}/${product._id}`); window.scrollTo({top: 0, behavior: 'smooth'})}} className="bg-white cursor-pointer w-50 rounded-md pb-4 overflow-hidden border border-gray-500/30 shadow-2xl">
        <div className='w-56 h-48 overflow-hidden flex items-center justify-center md:w-52 px-1'><img className=" border-b w-[90%] h-[85%] p-2 border-gray-200" src={product.images?.[0]}/></div>
        <div className="flex flex-col items-start px-3">
            <p className="text-gray-500 text-sm mt-2">{product.category}</p>
            <p className="font-semibold line-clamp-2 h-12 ">{product.name}</p>
            <div className='flex gap-x-4 items-center'>
                <p className="font-medium text-gray-500 line-through">₹{product.price}</p>
                <p className="font-semibold text-xl">₹{product.offerPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default Item
