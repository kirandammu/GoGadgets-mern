import React, { useEffect } from 'react'
import { useAppContext } from '../../context/Context';
import { assets } from '../../assets/assets';
import toast from 'react-hot-toast';

const ProductList = () => {

    const {product, axios, fetchProduct} = useAppContext()

    useEffect(()=>{
        
            fetchProduct()
    },[])
    const removed = async (userId)=>{
       const {data} = await axios.post(`/product/delete/${userId}`)
        toast.success(data.message)
    await fetchProduct()}
    
    return (
        <div className="flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Product</th>
                                <th className="px-4 py-3 font-semibold truncate">Category</th>
                                <th className="px-4 py-3 font-semibold truncate hidden md:block">Selling Price</th>
                                <th className="px-4 py-3 font-semibold truncate">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {product.map((product) => (
                                <tr key={product._id} className="border-t border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded p-2">
                                            <img src={product?.images?.[0]} alt="Product" className="w-16" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full text-wrap line-clamp-2">{product.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3 max-sm:hidden">₹{product.offerPrice}</td>
                                    <td className="px-4 py-3 cursor-pointer" ><img src={assets.remove_icon} onClick={()=> removed(product._id)}/></td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default ProductList