import React from 'react'
import {categories} from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='py-4'>
      <div className='flex items-end flex-col mx-auto w-60 py-8'>
              <div className='font-semibold text-2xl uppercase text-black'>Category <span className='text-gray-600'>Items</span></div>
              <span className='w-26 h-0.5 bg-black'></span>        
        </div> 
      <div className='grid grid-cols-2 md:flex gap-x-6 justify-between '>
        {categories.map((item, id)=>{
            return(
                <Link to={`/products/${item.path.toLowerCase()}`} key={id} className={`w-32 rounded-md flex flex-col justify-center pb-2.5 border border-gray-200 shadow-2xl`}>
                    <img src={item.image} className='w-32' />
                    <p className='text-center text-sm font-semibold text-gray-800 py-1'>{item.text}</p>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default Categories
