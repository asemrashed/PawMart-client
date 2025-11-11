import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER
})

const useAxios=()=>{
    console.log(import.meta.env.VITE_SERVER)
    return instance
}

export default useAxios;