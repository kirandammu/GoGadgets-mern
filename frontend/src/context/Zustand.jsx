import { create } from 'zustand'
import { toast } from 'react-hot-toast'
import axios from 'axios'

axios.defaults.baseURL = 'https://gogadgets-mern-server.onrender.com'
axios.defaults.withCredentials = true

const useAppStore = create((set, get) => ({
  user: null,
  seller:true,
  axios,
  showUser: false,
  product: [],
  cartItems: {},
  search: [],

  // Fetch user info
  fetchUser: async () => {
    try {
      const { data } = await axios.get('/user/islogin')
        set({ user: data?.user, showUser: false })
        console.log(data?.user)
    } catch (error) {
      set({ user: null })
      console.error(error)
    }
  },
  


  // Fetch products
  
  fetchProduct: async () => {
    try {
      const { data } = await axios.get('/product/all')
      if (data.success) {
        set({ product: data.allProducts })
      } else {
        toast.error(data.error)
      }
    } catch (error) {
      toast.error(error.message)
    }
  },

  // Cart actions
  addToCart: (itemId) => {
    const cart = structuredClone(get().cartItems)
    if (cart[itemId]) {
      cart[itemId] += 1
    } else {
      cart[itemId] = 1
    }
    set({ cartItems: cart })
    toast.success('Add to Cart')
  },

  updateCartItems: (itemId, quantity) => {
    const cart = structuredClone(get().cartItems)
    cart[itemId] = quantity
    set({ cartItems: cart })
    toast.success('Cart Updated')
  },

  RemoveFromCart: (itemId) => {
    const cart = structuredClone(get().cartItems)
    if (cart[itemId]) {
      cart[itemId] -= 1
      if (cart[itemId] === 0) delete cart[itemId]
    }
    set({ cartItems: cart })
    toast.success('Remove From Cart')
  },

  // Logout
  logout: async (navigate) => {
    try {
      const { data } = await axios.get('/user/logout')
      if (data.success) {
        toast.success(data.message)
        set({ user: null })
        navigate('/')
      } else {
        toast.error(data.message)
        console.log(data.error)
      }
    } catch (error) {
      console.log(error.message)
    }
  },

  

  // Setters
  setSearch: (search) => set({ search }),
  setShowUser: (value) => set({ showUser: value }),
  setUser: (user) => set({ user }),
}))



export default useAppStore
