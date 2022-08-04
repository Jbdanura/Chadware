import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({baseUrl,addItem}) => {
  const [product,setProduct] = useState(null)
  const [quantity,setQuantity] = useState(0)
  const id = useParams().product

  useEffect(()=>{
    const getProduct=async()=>{
      axios.get(baseUrl + "api/products/product/"+id).then(result=>setProduct(result.data))
    }
    getProduct()
  },[product])

  const changeQuantity = (plus) => {
    if(plus){
        setQuantity(quantity+1)
    } else {
        if(quantity !== 0){
            setQuantity(quantity-1)
        }
    }
  }
  const toCart = () => {
    if(quantity>0){
      const productToCart = product
      productToCart.quantity = quantity
      addItem(productToCart)
    }
  }

  return (
    <div className="product-detail-container">{product && 
        <div className="product-detail">
            <img src={`${baseUrl + product.id}.png`}/>
            <div className="product-detail-info">
                <p className="name">{product.name}</p>
                <p className="price">${product.price}</p>
                <div className="quantity">
                    <p>Quantity: </p>
                    <button className="minus" onClick={()=>changeQuantity(false)}>-</button>
                    <p>{quantity}</p>
                    <button className="plus" onClick={()=>changeQuantity(true)}>+</button>
                </div>
                <button className="to-cart" onClick={() => toCart()}><i className="icon-shopping-cart" style={{marginRight: "10px"}}></i>Add to cart</button>
            </div>
        </div>
        }
    </div>
  )
}

export default ProductDetail