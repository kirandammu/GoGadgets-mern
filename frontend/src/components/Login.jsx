import React from 'react'
import { useAppContext } from '../context/Context';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const Login = () => {

    const {setShowUser, setUser, axios} = useAppContext()

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const submit = async (e) => {
    try {
        e.preventDefault();
        

        const { data } = await axios.post(`/user/${state}`, { 
            name, 
            email, 
            password 
        },  {
    headers: { 'Content-Type': 'application/json' }
        });

        // More robust response handling
        if (data?.success) {
            toast.success(data.message || "Operation successful");
            setUser(data.user);
            setShowUser(false);
        } else {
            throw new Error(data?.message || "Unknown server response");
        }

    } catch (error) {
        // Proper Axios error handling
        const errorMessage = error.response?.data?.message || 
                            error.message || 
                            "An unknown error occurred";
        
        toast.error(errorMessage);
        console.error("Submission error:", error);
        
        // Optional: Handle specific error cases
        if (error.response?.status === 401) {
            // Handle unauthorized access
        }
    }
};

    return (<div onClick={()=>setShowUser(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center bg-black/60'>
        <form onSubmit={submit} onClick={(e)=>e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-10 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
             <div className='flex items-center flex-col mx-auto w-60 pb-4'>
              <div className='font-semibold text-2xl uppercase text-black'>User <span className='text-gray-600'>{state === 'login' ?  'Login': 'Register'}</span></div>
              <span className='w-26 h-0.5 bg-black'></span>        
        </div> 
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-gray-400" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-gray-400" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-gray-400" type="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-[blue] cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-[blue] cursor-pointer">click here</span>
                </p>
            )}
            <button className="bg-black hover:bg-gray-900 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form></div>
    );
};

export default Login