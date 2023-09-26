import axios from "axios";


export const toDoAppInterceptor = axios.create()

toDoAppInterceptor.interceptors.request.use((config)=>{
    config.headers['code'] = "Alexandria Branch"
    console.log(config)
    console.log('Request Interceptor Runs')
    return config
})


