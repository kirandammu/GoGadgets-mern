import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {useAppContext} from '../context/Context'
import { assets } from '../assets/assets';
import Item from '../components/Item'
import { AiOutlineLoading } from "react-icons/ai";
import Products from '../pages/Products';
import useAppStore from '../context/Zustand';

const Product = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const {product, addToCart} = useAppStore()
    const [thumbnail, setThumbnail] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const pro = product.find(item => item._id === id);

    useEffect(() => {
        if (product.length>0) {
          let productCopy = product.slice()
            productCopy = productCopy.filter((item)=>item.category?.[0] == pro.category)

            setRelated(productCopy.slice(0,5))
          setThumbnail(pro.images?.[0] || null);
        }
        setLoading(false);
      
    }, [pro]);

    if (loading || !product.find(item => item._id === id)) {
      return <div className='top-0 right-0 left-0 h-[70vh] bottom-0 flex items-center justify-center'><AiOutlineLoading className='animate-spin text-gray-800 text-5xl font-semibold'/></div>;
    }

    

    return (
        <div>
        <div className="m-14 mx-6">
            <p>
                <Link to={'/'}>Home</Link> /
                <Link to={'/products'}>Products</Link> /
                <Link to={`/products/${pro.category}`}>{pro?.category}</Link> /
                <span className="text-[red]"> {pro?.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col justify-between h-[420px]">
                        {pro?.images?.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border w-24 h-24 p-0.5 border-gray-500/30 rounded overflow-hidden flex items-center justify-center cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} className='h-[96%]' />
                            </div>
                        ))}
                    </div>

                    <div className="border bg-white border-gray-500/30 w-[460px] h-[420px] rounded overflow-hidden flex items-center justify-center p-4">
                        <img src={thumbnail} alt="Selected product " className='h-[100%]' />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{pro.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                                <img src={i<3 ? assets.star_icon : assets.star_dull_icon} className='w-4' key={i} />
                            
                        ))}
                        <p className="text-sm text-gray-500 ml-2 ">{Math.floor(Math.random()*1000)} reviews</p>
                    </div>

                    <div className="mt-6">
                        <div className='flex gap-x-3 items-end'><p className="text-gray-500/70 line-through">MRP: ₹{pro.price}</p><span className='text-green-600 text-xl'>{Math.floor((pro.price-pro.offerPrice)/100)}%</span></div>
                        <p className="text-2xl font-medium">MRP: <span className='text-[red]'>₹{pro.offerPrice}</span></p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {pro.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={()=>{addToCart(pro._id)}} className="w-full py-3.5 cursor-pointer font-medium bg-gray-300 rounded-md text-black hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button onClick={()=>{addToCart(pro._id); navigate('/cart')}} className="w-full py-3.5 cursor-pointer font-medium bg-black rounded-md text-white hover:bg-gray-900 transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='flex items-end flex-col mx-auto w-60 pb-8'>
        <div className='font-semibold text-2xl uppercase text-black'>Related <span className='text-gray-400'>Products</span></div>
        <span className='w-26 h-0.5 bg-black'></span>        
      </div>
      <div className='grid grid-cols-5'>{
            related.map((pro,i)=>{
                return(
                <Item key={i} product={pro}/>
            )})
        }</div>
        <p onClick={()=>{navigate('/products'); scrollTo(0,0)}} className='text-center mt-10 mx-auto cursor-pointer p-4 py-2 bg-gray-200 w-32 rounded-xl'>See More</p>
        </div>
        </div>
    );
};
export default Product