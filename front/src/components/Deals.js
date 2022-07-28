import React from 'react'
import Deal1 from "../deals/1.png"
import Deal2 from "../deals/2.png"
import Deal3 from "../deals/3.png"
import Deal4 from "../deals/4.png"
import Deal5 from "../deals/5.png"

const Deals = () => {
  return (
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
  )
}

export default Deals