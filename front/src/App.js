import React, { useState } from 'react';
import logo from "./img.png"
import Deal1 from "./deals/1.png"
import Deal2 from "./deals/2.png"
import Deal3 from "./deals/3.png"
import Deal4 from "./deals/4.png"
import Deal5 from "./deals/5.png"

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
         <div className="intro">
            <img className="logo" src={logo}></img>
            <hr style={{marginTop: "20px", borderColor: "grey"}}></hr>
         </div>
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
                                          <p className="info-price">$300</p>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal2}></img>
                                          <p className="info-name">MSI PRO MP241X 23.8" LED FullHD 75Hz</p>
                                          <p className="info-price">$120</p>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal3}></img>
                                          <p className="info-name">Tempest Spectra RGB Torre ATX Negra</p>
                                          <p className="info-price">$35</p>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal4}></img>
                                          <p className="info-name">Intel Core i5-11400F 2.6 GHz</p>
                                          <p className="info-price">$150</p>
                                    </div>
                              </div>
                              <div className="product-grid">
                                    <div className="info">
                                          <img className="info-img" src={Deal5}></img>
                                          <p className="info-name">Gigabyte B560M DS3H V2</p>
                                          <p className="info-price">$82</p>
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