import axios from "axios"
import useAuth from "./useAuth"
import { useEffect } from "react"

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure=()=>{
    const {user} = useAuth()
    useEffect(()=>{
        const reqInterceptor = instance.interceptors.request.use(
        (config)=>{
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        }
        )
        const resInterceptor = instance.interceptors.response.use(
            (res)=>{
                console.log('from secAxios', res)
                return res
            }, 
            (err)=>{
                console.log(err)
            }
        )

        return()=>{
            instance.interceptors.request.eject(reqInterceptor)
            instance.interceptors.response.eject(resInterceptor)
        }
        },[user])
        return instance
    }

export default useAxiosSecure;