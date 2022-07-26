import React, { Component, useState } from 'react';

const App = () =>{
   const [navbarVisible, setNavbarVisible] = useState(false)


   return(
         <div>
            <div className="navbar">
               <span className="logo"><span className="chad">Chad</span><span className="ware">ware</span></span>
               <ul className={navbarVisible ? "navbar-elements-mobile" : "navbar-elements"}>
                  <p className="nav-home">Home</p>
                  <div className="products">
                     <span className="products">Products</span>
                     <div className={navbarVisible ? "products-dropdown-mobile" : "products-dropdown"}>
                        <p>Motherboard</p>
                        <p>Graphic Card</p>
                        <p>CPU</p>
                     </div>
                  </div>
                  <li style={{color:"#f9f9f9"}}>About</li>
                  <p className="nav-login">Account</p>
               </ul>
               <div className="hamburger" onClick={()=>setNavbarVisible(!navbarVisible)}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
               </div>
               
            </div>
         </div>
      );

}
export default App;