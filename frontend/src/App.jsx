import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Error from './pages/Error'
import { useAppContext } from './context/Context'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'
import Product from './components/Product'
import Cart from './pages/Cart'
import SellerLogin from './pages/SellerLogin'
import Seller from './pages/Seller'
import AddProduct from './pages/seller/AddProduct'
import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'
import Contact from './pages/Contact'
import { AiOutlineLoading } from "react-icons/ai";

const App = () => {

  const{showUser, seller} = useAppContext()
  const [loading, setLoading] = useState(true)

  const isSellerPath = useLocation().pathname.includes('seller')

 

  return   (
    <div>
      {!isSellerPath && <Navbar/> }
      {showUser? <Login/> : null}

      <div className={`${isSellerPath ? '':'px-6 md:px-16 lg:px-32 py-10'}`}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products/:category' element={<ProductCategory/>}/>
          <Route path='/products/:category/:id' element={<Product/>}/>
          <Route path='/seller' element={seller?<Seller/>:<SellerLogin/>}>
              <Route index element={seller? <AddProduct/>: null}/>
              <Route path='list' element={<ProductList/>}/>
              <Route path='orders' element={<Orders/>}/>   
          </Route>
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
    </div>
  )
}

export default App
