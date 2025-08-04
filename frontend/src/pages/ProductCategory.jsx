import React from 'react'
import {categories} from '../assets/assets'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'
import useAppStore from '../context/Zustand'

const ProductCategory = () => {

    const {product} = useAppStore()
    const {category} = useParams()

    const searchCategory = categories.find((item)=>item.path.toLowerCase()=== category)

    const filterProducts = product.filter((product)=>String(product.category).toLowerCase()=== category)

  return (
    <div>
      {searchCategory && (
        <div>
            <div className='flex items-end flex-col w-60 pb-5'>
                <div className='font-semibold text-gray-700 text-2xl uppercase'>{searchCategory.text.toUpperCase()}</div>
                <span className='w-20 h-0.5 bg-black'></span>        
            </div>
            {filterProducts.length>0 ? (
            <div className='flex gap-8 flex-wrap items-center'>
                {filterProducts.map((product)=>(
                    <Item key={product._id} product={product}/>
                ))}
            </div>):(<div className='flex items-center justify-center h-[70vh]'>
                <p className='text-2xl font-medium text-[red]'>No products found in this category.</p>
            </div>)}
        </div>
      )}
    </div>
  )
}

export default ProductCategory
