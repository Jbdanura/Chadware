import React, { useState } from 'react';
import logo from "./img.png"
import Deal1 from "./deals/1.png"
import Deal2 from "./deals/2.png"
import Deal3 from "./deals/3.png"
import Deal4 from "./deals/4.png"
import Deal5 from "./deals/5.png"
import userService from "./services/users"

const App = () =>{

  const [navMobile,setNavMobile] = useState(false)
  const [user,setUser] = useState(null)
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

  return(
      <div>
         <div className="mobile-menu">
            <div className="hamburger" onClick={()=>setNavMobile(!navMobile)}>
                  <div className='line'></div>
                  <div className='line'></div>
                  <div className='line'></div>
            </div>
            <div className="cart">
                  <span className="cart-items"><i className="icon-shopping-cart" style={{marginRight:"5px"}}></i>69 items</span>
                  <span className="cart-money">$420</span>
            </div>
         </div>
         <div className="intro">
            <img className="logo" src={logo}></img>
            <hr style={{marginTop: "20px", borderColor: "grey"}}></hr>
         </div>
         <div className="container">
            <div className={navMobile ? "sidebar-mobile" : "sidebar"}>
                  <div className="user">
                        {!user ? <>
                              <button className="login-account" onClick={()=>setLoginModal(true)}>
                                    Log in 
                              </button>
                              <button className="create-account" onClick={()=>setCreateModal(true)}>Create account</button>
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
                              <li>Motherboard</li>
                              <li>CPU</li>
                              <li>RAM</li>
                              <li>Graphics Card</li>
                              <li>Hard drive</li>
                              <li>Monitor</li>
                              <li>Peripheric</li>
                              <li>Power supply</li>
                              <li>Case</li>
                        </ul>
                  </div>
                  <div className="pages">
                        <h4>Pages</h4>
                        <ul>
                              <li>About</li>
                              <li>Contact</li>
                        </ul>
                  </div>
            </div>
            <div className="content">
                  <h3 className="deals-title">Best deals</h3>
                  <div className="deals-products">
                        <div className="product-grid-container">
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal1}></img>
                                          <p className="info-name">Gigabyte GeForce GTX 1660 SUPER OC 6GB GDDR6</p>
                                          <div className="price">
                                                <p className="info-price">$250</p>
                                                <span className="price-deal">$200</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal2}></img>
                                          <p className="info-name">MSI PRO MP241X 23.8" LED FullHD 75Hz</p>
                                          <div className="price">
                                                <p className="info-price">$250</p>
                                                <span className="price-deal">$200</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal3}></img>
                                          <p className="info-name">Tempest Spectra RGB Torre ATX Negra</p>
                                          <div className="price">
                                                <p className="info-price">$250</p>
                                                <span className="price-deal">$200</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal4}></img>
                                          <p className="info-name">Intel Core i5-11400F 2.6 GHz</p>
                                          <div className="price">
                                                <p className="info-price">$250</p>
                                                <span className="price-deal">$200</span>
                                          </div>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal5}></img>
                                          <p className="info-name">Gigabyte B560M DS3H V2</p>
                                          <div className="price">
                                                <p className="info-price">$250</p>
                                                <span className="price-deal">$200</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
         </div>
         </div>
      );

}
export default App;