import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userService from "../services/users"

const Sidebar = ({baseUrl,setUser,user,navMobile,cartItems,cartPrice,setCart,setCartItems,setCartPrice}) => {
  const [createModal,setCreateModal] = useState(false)
  const [loginModal,setLoginModal] = useState(false)

  const navigate = useNavigate()

  const handleUserLogin = async (event) =>{
    event.preventDefault();
    try {
        const username = event.target.username.value
        const pw = event.target.pw.value
        const login = await userService.login({username,pw})
        setUser(login.data)
        alert("Logged in")
        setLoginModal(false)
        userService.setToken(login.data.token)
        const cart = await userService.getCart()
        if(cart.length > 0){
            setCart(cart)
            let total = 0;
            let items = 0;
            for(let i = 0; i < cart.length; i++){
                items += cart[i].quantity
                const price = cart[i].deal ? cart[i].dealPrice : cart[i].price
                console.log(price)
                total += price * cart[i].quantity
            }
            setCartItems(items)
            setCartPrice(total)
        }
        event.target.username.value = ""
        event.target.pw.value = ""
    } catch (error) {
        alert(error.response.data)
    }
  }

  const handleUserCreation = async(event)=>{
    event.preventDefault();
    try {
        const username = event.target.username.value
        const name = event.target.name.value
        const email = event.target.email.value
        const pw = event.target.pw.value
        const creation = await userService.create({username,name,email,pw})
        alert("Account created!")
        setCreateModal(false)
        event.target.username.value = ""
        event.target.name.value = ""
        event.target.email.value = ""
        event.target.pw.value = ""
    } catch (error) {
        alert(error.response.data)
    }
  }

  const searchProduct = async(event)=>{
    event.preventDefault()
    const name = event.target.product.value
    axios.get(baseUrl + "api/products/search/"+name)
    .then((result)=>{
        if(result.data){
            navigate(`/product/${result.data.id}`)
        }
    })
  }

  return (
    <div className={navMobile ? "sidebar-mobile" : "sidebar"}>
        <div className="user">
            {!user ? <>
                    <button className="login-account" onClick={()=>setLoginModal(true)}>
                        <i className="icon-user"></i>Log in 
                    </button>
                    <button className="create-account" onClick={()=>setCreateModal(true)}><i className="icon-user"></i>Create account</button>
                    </>: <div className="my-account">
                        <p>Welcome, {user.name}</p>
                        <span className="logout" onClick={()=>setUser(null)}>Log out</span>
                    </div>}
            <div className="modal"  style={createModal ? {display:"block"} : {display:"none"}}>
                    <button className="modal-close" onClick={()=>setCreateModal(false)}>X</button>
                    <form className="create-form" onSubmit={handleUserCreation}>
                        <p>Create account</p>
                        <input type="text" placeholder="Username..." name="username"/>
                        <input type="text" placeholder="Name..." name="name"/>
                        <input type="email" placeholder="Email..." name="email"/>
                        <input type="password" placeholder="Password..." name="pw"/>
                        <button className="submit" type="Submit">Create</button>
                    </form>
            </div>
            <div className="modal"  style={loginModal ? {display:"block"} : {display:"none"}}>   
                    <button className="modal-close" onClick={()=>setLoginModal(false)}>X</button>
                    <form className="login-form" style={loginModal ? {display:"block"} : {display:"none"}} onSubmit={handleUserLogin}>
                        <p>Log in</p>
                        <input type="text" placeholder="Username..." name="username"/>
                        <input type="password" placeholder="Password..." name="pw"/>
                        <button className="submit" type="Submit">Login</button>
                    </form>
            </div>
        </div>
        <Link to="/cart"><div className="cart">
            <span className="cart-items"><i className="icon-shopping-cart" style={{marginRight:"5px"}}></i>{cartItems} items</span>
            <span className="cart-money">${cartPrice}</span>
        </div></Link>
        <form className="search" onSubmit={searchProduct}>
            <input type="text" className="search-input" name="product" placeholder='Search...'/>
            <button className="search-btn" type="submit"><i className="icon-search"></i></button>
        </form>

        <div className="categories">
            <h4>Categories</h4>
            <ul>
                    <li><Link to="/" style={{fontSize: "20px"}}><i className="icon-home"></i></Link></li>
                    <li><Link to="/category/Motherboard">Motherboard</Link></li>
                    <li><Link to="/category/CPU">CPU</Link></li>
                    <li><Link to="/category/RAM">RAM</Link></li>
                    <li><Link to="/category/GPU">Graphics Card</Link></li>
                    <li><Link to="/category/HDD">Hard drive</Link></li>
                    <li><Link to="/category/PSU">Power supply</Link></li>
                    <li><Link to="/category/Case">Case</Link></li>
            </ul>
        </div>
        <div className="pages">
            <h4>Pages</h4>
            <ul>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar