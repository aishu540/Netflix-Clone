import axios from "axios"

const api=axios.create({
    // baseURL:import.meta.env.VITE_API_URL
    baseURL:import.meta.env.VITE_CART_URL
})
export default api
