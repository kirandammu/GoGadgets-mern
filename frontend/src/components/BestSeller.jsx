import React from 'react'
import { useAppContext } from '../context/Context'
import Item from './Item'

const BestSeller = () => {

  const {product} = useAppContext()
  return (
    <div>
        <div className='flex items-end flex-col mx-auto w-60 py-8'>
              <div className='font-semibold text-2xl uppercase text-black'>Offer <span className='text-gray-600'>Products</span></div>
              <span className='w-26 h-0.5 bg-black'></span>        
        </div> 
        <div className='flex flex-col gap-y-2 md:flex md:flex-row items-center justify-between '>
        {product.filter((product)=>product).slice(0,5).map((product, index)=>{
          return(
          <div  key={index} >
              <Item product={product} />
          </div>
  )})}
        </div>
    </div>
  )
}

export default BestSeller
