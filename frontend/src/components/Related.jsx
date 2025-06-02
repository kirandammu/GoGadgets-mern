import React, { useEffect, useState } from 'react'
import Item from '../components/Item'
import {useAppContext} from '../context/Context'

const Related = ({category}) => {

    const [related,setRelated] = useState([])
    const {product} = useAppContext()

   useEffect(()=>{
    let productCopy = product.slice();

    if(product.length>0){
        productCopy = productCopy.filter(item=>category === item.category)

        setRelated(productCopy.slice(0,5))
        
    }
   },[product])

  return (
    <div className="related">
        <div className="display">
            {related.map((item, index)=>(
                <Item key={index} id={item._id} name={item.name} price={item.price} image={item.image} offerPrice = {item.offerPrice} />
            )
            )}
        </div>

    </div>
  )
}

export default Related
