import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import useAppStore from '../context/Zustand';


const SellerLogin = () => {

    const {seller, setSeller,navigate, setShowUser, axios} = useAppStore()

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submit = async (e)=>{
        try {
            e.preventDefault();
            const {data} = await axios.post('/seller/login', {email, password})
            if(data.success){
                setSeller(true)
                navigate('/seller')
            }else{
                toast.error(data.error)
                 console.log(data.error)

            }
        } catch (error) {
                toast.error(data.error)
                console.log(data.error)
        }        
    }
    useEffect(()=>{
        if (seller) {
            navigate('/seller')
        }
    },[seller])

    return !seller && (<div onClick={()=>setShowUser(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center bg-white'>
        <form onSubmit={submit} onClick={(e)=>e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto"><span className="text-pink-500"> Seller Login</span> </p>
        
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-pink-300" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-pink-300" type="password" required />
            </div>

            <button className="bg-pink-500 hover:bg-pink-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">Login</button>
        </form></div>
    );
};

export default SellerLogin