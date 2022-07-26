import React, { useState } from 'react';
import logo from "./img.png"

const App = () =>{

  const [navMobile,setNavMobile] = useState(false)

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
         <img className="logo" src={logo}></img>
         <hr style={{marginTop: "20px", borderColor: "grey"}}></hr>
         <div className="container">
            <div className={navMobile ? "sidebar-mobile" : "sidebar"}>
                  <div className="cart">
                        <span className="cart-items"><i className="icon-shopping-cart" style={{marginRight:"5px"}}></i>69 items</span>
                        <span className="cart-money">$420</span>
                  </div>
                  <div className="search">
                        <input type="text" className="search-input" placeholder='Search product...'/>
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
                  content
            </div>
         </div>
         </div>
      );

}
export default App;