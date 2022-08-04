import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Deals from "./components/Deals"
import Topbar from './components/Topbar';
import {Routes,Route,HashRouter} from "react-router-dom"
import Category from './components/Category';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const App = () =>{
  const [navMobile,setNavMobile] = useState(false)
  const [user,setUser] = useState(null)
  const [cart,setCart] = useState([])
  const [cartItems,setCartItems] = useState(0)
  const [cartPrice,setCartPrice] = useState(0)

  const baseUrl = "http://localhost:3003/"

  const addItem = (item) => {
      const repeated = cart.find(i => i.id === item.id)
      if(repeated){
         repeated.quantity += item.quantity
         const newCart = cart.filter(product => product.id !== item.id)
         setCart([...newCart,repeated])
      } else {
         setCart([...cart,item])
      }
      
      setCartItems(cartItems + item.quantity)
      setCartPrice(cartPrice + (item.price*item.quantity))
  }
  const changeQuantity = (id,plus)=>{
      const product = cart.find(i => i.id === id)
      if(product){
         if(!plus && product.quantity > 1){
            product.quantity -= 1
            setCartItems(cartItems-1)
            setCartPrice(cartPrice-product.price)
         } else if (!plus && product.quantity === 1){
            const newCart = cart.filter(i => i.id !== id)
            setCart(newCart)
            setCartItems(cartItems-1)
            setCartPrice(cartPrice-product.price)
            return
         }
         if(plus){
            product.quantity += 1
            setCartItems(cartItems+1)
            setCartPrice(cartPrice+product.price)
         }
      }
      const newCart = cart.filter(i => i.id !== id ? i : product)
      setCart(newCart)
  }
  console.log(cart)
  return(
      <div>
         <HashRouter>
         <Topbar setNavMobile={setNavMobile} navMobile={navMobile} cartItems={cartItems} cartPrice={cartPrice}/>
         <div className="container">  
               <Sidebar baseUrl={baseUrl} setUser={setUser} user={user} navMobile={navMobile} cartItems={cartItems} cartPrice={cartPrice}/>
               <Routes>
                  <Route path="/category/:category" element={<Category baseUrl={baseUrl}/>}/>
                  <Route path="/" element={<Deals baseUrl={baseUrl}/>}/>
                  <Route path="/about" element={<About baseUrl={baseUrl}/>}/>
                  <Route path="/product/:product" element={<ProductDetail baseUrl={baseUrl} addItem={addItem}/>}/>
                  <Route path="/cart" element={<Cart baseUrl={baseUrl} cart={cart} cartPrice={cartPrice} changeQuantity={changeQuantity}/>}/>
               </Routes>
         </div>
         </HashRouter>
      </div>
      );

}
export default App;