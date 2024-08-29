import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Deals from "./components/Deals"
import Topbar from './components/Topbar';
import {Routes,Route,HashRouter} from "react-router-dom"
import Category from './components/Category';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import axios from 'axios';
import userService from "./services/users"

const App = () =>{
  const [navMobile,setNavMobile] = useState(false)
  const [user,setUser] = useState(null)
  const [cart,setCart] = useState([])
  const [cartItems,setCartItems] = useState(0)
  const [cartPrice,setCartPrice] = useState(0)

  const baseUrl = "https://chadware-7qkl.onrender.com/"

  const addItem = async(item) => {
      const repeated = cart.find(i => i.id === item.id)
      if(repeated){
         repeated.quantity += item.quantity
         const newCart = cart.filter(product => product.id !== item.id)
         setCart([...newCart,repeated])
         if(user){
            userService.updateCart(newCart)
         }
      } else {
         const newCart = [...cart]
         newCart.push(item)
         console.log("new cart:",newCart)
         setCart(newCart)
         userService.updateCart(newCart);
      }
      setCartItems(cartItems + item.quantity)
      let itemPrice
      if(item.deal){
         itemPrice = item.dealPrice
      } else {
         itemPrice = item.price
      }
      setCartPrice(cartPrice + (itemPrice*item.quantity))

  }
  const changeQuantity = async(id,plus)=>{
      const product = cart.find(i => i.id === id)
      if(product){
         let productPrice = product.deal ? product.dealPrice : product.price    
         if(!plus && product.quantity > 1){
            product.quantity -= 1
            setCartItems(cartItems-1)
            setCartPrice(cartPrice-productPrice)
         } else if (!plus && product.quantity === 1){
            const newCart = cart.filter(i => i.id !== id)
            setCart(newCart)
            setCartItems(cartItems-1)
            setCartPrice(cartPrice-productPrice)
            return
         }
         if(plus){
            product.quantity += 1
            setCartItems(cartItems+1)
            setCartPrice(cartPrice+productPrice)
         }
      }
      const newCart = cart.filter(i => i.id !== id ? i : product)
      setCart(newCart)
      if(user){
         userService.updateCart(newCart)
      }

  }
  
   useEffect(()=>{
      const loggedUser = localStorage.getItem("user")
      if(loggedUser){
      const foundUser = JSON.parse(loggedUser)
      setUser(foundUser)
      }
   },[])

  return(
      <div>
         <HashRouter>
         <Topbar setNavMobile={setNavMobile} navMobile={navMobile} cartItems={cartItems} cartPrice={cartPrice}/>
         <div className="container">  
               <Sidebar baseUrl={baseUrl} setUser={setUser} user={user} navMobile={navMobile} cartItems={cartItems} 
               cartPrice={cartPrice} setCart={setCart} setCartItems={setCartItems} setCartPrice={setCartPrice}/>
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