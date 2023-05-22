import axios from 'axios'


const baseUrl = axios.create({ baseURL: "https://ecommerce-backend-v5ja.onrender.com" })

export default baseUrl