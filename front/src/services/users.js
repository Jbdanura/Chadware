import axios from "axios"
const baseUrl = "https://chadware-7qkl.onrender.com/"

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const login = async(credentials) => {
    const response = await axios.post(baseUrl + "api/users/login", credentials)
    return response
}

const create = async(credentials) => {
    const response = await axios.post(baseUrl + "api/users/new",credentials)
    return response
}

const updateCart = async(cart)=>{
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.post(baseUrl + "api/users/cart", {cart}, config)
    return response.data
}
const getCart = async()=>{
    const config = {
        headers: {Authorization: token}
    }
    const response = await axios.get(`${baseUrl}api/users/cart`, config)
    return response.data
}

export default {login, create,updateCart,getCart,setToken}