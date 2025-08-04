import React, { useState, useEffect } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import useAppStore from '../context/Zustand'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
    const navigate = useNavigate()
    const {user, logout, setShowUser, search, setSearch} = useAppStore()

    useEffect(()=>{
        if (search.length>0) {
            navigate('/products')
        }
    },[search])

    return (
        <nav className="flex sticky top-0 items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white z-40">

            <NavLink to={'/'}>
                <div className='flex items-end flex-col mx-auto w-40'>
                        <div className='font-semibold text-2xl uppercase text-[red]'>Go <span className='text-gray-600'>Gadgets</span></div>
                        <span className='w-26 h-0.5 bg-black'></span>        
                </div> 
            </NavLink>
            <div className="hidden sm:flex items-center gap-8">
                
                <NavLink to={'/'}  className={({isActive})=>`${isActive? 'border-b-2' : ''}`} >Home</NavLink>
                <NavLink to={'/products'}  className={({isActive})=>`${isActive? 'border-b-2' : ''}`} >All Products</NavLink>
                {user && <NavLink to={'/myorder'} >My Orders</NavLink>}
                <NavLink to={'/contact'} >Contact</NavLink>
                
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-md">
                    <input onChange={(e)=>setSearch(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} className='w-4 h-4' alt="" />
                </div>


                {user && (<div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    < FaShoppingCart className='text-2xl font-bold'/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full">3</button>
                </div>)}
                {!user ? (<button onClick={()=>setShowUser(true)} className="cursor-pointer px-8 py-2 bg-black hover:bg-silver-600 transition text-white rounded-md">
                    Login
                </button>):(<div className='group relative'>
                    <img src={assets.profile_icon} className='w-10' />
                    <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200  w-30 rounded-md text-sm z-40'>
                        <li className='p-1.5 pl-3 hover:bg-black/20 cursor-pointer' onClick={()=>navigate('myorder')}>My Orders</li>
                        <li className='p-1.5 pl-3 hover:bg-black/20 cursor-pointer' onClick={()=>navigate('seller')}>Seller</li>
                        <li className='p-1.5 pl-3 hover:bg-black/20 cursor-pointer' onClick={logout}>Logout</li>
                    </ul>
                </div>)}
            </div>

        
        </nav>
    )
}

export default Navbar
