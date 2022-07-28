import axios from "axios"

const login = async(credentials) => {
    const response = await axios.post("http://localhost:3003/api/users/login", credentials)
    return response
}

const create = async(credentials) => {
    const response = await axios.post("http://localhost:3003/api/users/new",credentials)
    return response
}
export default {login, create}