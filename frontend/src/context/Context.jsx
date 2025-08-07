import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import axios from 'axios'

axios.defaults.baseURL = 'https://gogadgets-mern-server.onrender.com'
axios.defaults.withCredentials = true

// const api = axios.create({
//   baseURL: 'http://localhost:4500',
//   withCredentials: true,
// });

 export const AppContext = createContext()

const Context = ({children}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [seller, setSeller] = useState(false)
    const [showUser, setShowUser] = useState(false)
    const [product, setProduct] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [search, setSearch] = useState([])

    const fetchSeller = async ()=>{
      try {
        const {data} = await axios.get('/seller/isSeller');
        if(data.success){
          setSeller(true)
        }else{
          setSeller(false)
        }
      } catch (error) {
        setSeller(false)
      }
    }

    const fetchUser = async () => {
      try {
        const {data} = await axios.get('/user/islogin')
        if (data.success) {
          setUser(data.user)
          setShowUser(false)
        }
      } catch (error) {
          setUser(null)
          console.log(error)
      }
    }

    const addToCart = ()=>{
      let cartData = structuredClone(cartItems)
      let itemId;
      if(cartData[itemId]){
        cartData[itemId] += 1
      }else{
        cartData[itemId] = 1
      }
      setCartItems(cartData)
      toast.success('Add to Cart')
    }    

    const updateCartItems = (itemId, quantity)=>{
      let cartData = structuredClone(cartItems)
      cartData[itemId] = quantity
      setCartItems(cartData)
      toast.success('Cart Updated')
    }
    const RemoveFromCart = (itemId)=>{
      let cartData = structuredClone(cartItems)
      if(cartData[itemId]){
        cartData[itemId] -= 1
        if (cartData[itemId] === 0) {
              delete cartData[itemId]
        }  
      }
      setCartItems(cartData)
      toast.success('Remove From Cart')
    }    


    const fetchProduct = async ()=>{
      try {
        const {data} = await axios.get('/product/all')
        if (data.success) {
          setProduct(data.allProducts)
        }else{
          toast.error(data.error)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    const logout = async () => {
     try {
       const {data} = await axios.get('/user/logout')
      if(data.success){
          toast.success(data.message)
          setUser(null)
          navigate('/')
      }else{
        toast.error(data.message)
        console.log(data.error)
      }
     } catch (error) {
       toast.error(error.message)
     }
    }

    useEffect(()=>{
      fetchUser()
      fetchProduct()
      fetchSeller()
    },[])

    const value = {navigate, user, setUser, seller, setSeller,showUser, setShowUser,
       product, addToCart, RemoveFromCart, updateCartItems, search, setSearch, axios, fetchProduct, logout }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default Context

export const useAppContext = ()=>{
    return useContext(AppContext)
}
