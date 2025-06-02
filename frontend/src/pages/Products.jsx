import React, { useEffect, useState } from 'react'
import Item from '../components/Item'
import { useAppContext } from '../context/Context'

const Products = () => {
    const {product, search} = useAppContext()
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(()=>{
        if (search.length>0) {
            setFilterProducts(product.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())))
        }
        else{setFilterProducts(product)}
    },[product,search])

  return (
    <div>
      <div className='flex items-end flex-col mx-auto w-60 py-8'>
              <div className='font-semibold text-2xl uppercase text-black'>all <span className='text-gray-600'>products</span></div>
              <span className='w-26 h-0.5 bg-black'></span>        
        </div> 
      <div className='grid grid-cols-5 gap-y-5'>
        {filterProducts.filter(item=>item).map((product,index)=>{
        return(
            <div key={index}>
                      <Item product={product}/>

            </div>
        )
      })}
      </div>
    </div>
  )
}

export default Products
