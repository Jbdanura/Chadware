import React, { useEffect, useState } from 'react'
import {useParams,Link} from "react-router-dom"
import axios from "axios"


const Category = () => {
  const category = useParams().category
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () => {
      axios.get("http://localhost:3003/api/products/category/"+category).then(result=>setProducts(result.data))
    }
    getProducts()
  },[category])

  const orderProducts = async(event) => {
    axios.get(`http://localhost:3003/api/products/category/${category}?order=${event.target.value}`).then(result=>setProducts(result.data))
  }

  return (
    <div className="category-container">
      <p className="title">{category}</p>
      <div className="order-dropdown">
          <label htmlFor="order">Order by:</label>
          <select name="order" onChange={(event)=>orderProducts(event)}>
          <option value="">-</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>
        <div className="product-grid-container category-grid">
            {products.map((product,i)=>{
                return  <Link to={"/product/"+product.id}><div className="product-grid" key={i}>
                    <div className="info">
                        <img className="info-img" src={`http://localhost:3003/${product.id}.png`}></img>
                        <p className="info-name">{product.name}</p>
                        <div className="price">
                            {product.deal ? <>
                              <p className="info-price">${product.price}</p>
                              <span className="price-deal">${product.dealPrice}</span>
                            </> : <p className="normal-price">${product.price}</p>}
                        </div>
                        <button className="info-btn">BUY</button>
                    </div>
                </div></Link>
            })}
          </div>
    </div>
  )
}

export default Category