import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import userService from "../services/users"

const Sidebar = ({setUser,user,navMobile}) => {
  const [createModal,setCreateModal] = useState(false)
  const [loginModal,setLoginModal] = useState(false)

  const handleUserLogin = async (event) =>{
    event.preventDefault();
    try {
        const username = event.target.username.value
        const pw = event.target.pw.value
        const login = await userService.login({username,pw})
        setUser(login.data)
        alert("Logged in")
        setLoginModal(false)
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
  return (
    <div className={navMobile ? "sidebar-mobile" : "sidebar"}>
        <div className="user">
            {!user ? <>
                    <button className="login-account" onClick={()=>setLoginModal(true)}>
                        <i class="icon-user"></i>Log in 
                    </button>
                    <button className="create-account" onClick={()=>setCreateModal(true)}><i class="icon-user"></i>Create account</button>
                    </>: <div className="my-account">
                        <p>Welcome, {user.name}</p>
                        <button>My account</button>
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
        <div className="cart">
            <span className="cart-items"><i className="icon-shopping-cart" style={{marginRight:"5px"}}></i>69 items</span>
            <span className="cart-money">$420</span>
        </div>
        <div className="search">
            <input type="text" className="search-input" placeholder='Search...'/>
            <button className="search-btn"><i class="icon-search"></i></button>
        </div>

        <div className="categories">
            <h4>Categories</h4>
            <ul>
                    <li><Link to="/" style={{fontSize: "20px"}}><i class="icon-home"></i></Link></li>
                    <li><Link to="/category/motherboard">Motherboard</Link></li>
                    <li><Link to="/category/cpu">CPU</Link></li>
                    <li><Link to="/category/ram">RAM</Link></li>
                    <li><Link to="/category/graphics-card">Graphics Card</Link></li>
                    <li><Link to="/category/hard-drive">Hard drive</Link></li>
                    <li><Link to="/category/power-supply">Power supply</Link></li>
                    <li><Link to="/category/case">Case</Link></li>
            </ul>
        </div>
        <div className="pages">
            <h4>Pages</h4>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar