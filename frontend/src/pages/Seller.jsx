import React from 'react'
import { assets } from '../assets/assets';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useAppContext } from '../context/Context';
import toast from 'react-hot-toast';

const Seller = () => {

    const {setSeller, axios, navigate} = useAppContext()

    const logout =async (e)=>{
        try {
            e.preventDefault();
            const {data} = await axios.post('/seller/logout')
            if(data.success){
                setSeller(true)
                navigate('/')
                toast.success(data.message)
            }else{
                toast.error(data.error)
            }
        } catch (error) {
                toast.error(data.error)        }       
    }

    const sidebarLinks = [
        { name: "Add Products", path: "/seller", icon: assets.add_icon },
        { name: "Products List", path: "/seller/list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon},
    ];

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
                <Link to={'/'}><img src={assets.logo}/></Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Dammu</p>
                    <button onClick={logout} className='border bg-black text-white cursor-pointer rounded text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className='flex'>
                <div className="md:w-64 w-16 border-r h-[600px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <NavLink to={item.path} key={item.name} end={item.path === '/seller'}
                        className={({isActive})=>`flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-gray-500/10 border-blue-500 text-[blue]"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        <img src={item.icon} alt="" />
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div> 
            <Outlet />
            </div>
        </>
    );
};

  


export default Seller
