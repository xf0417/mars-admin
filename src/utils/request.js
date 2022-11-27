import axios from 'axios'
import store from '@/store'
import {ElMessage} from 'element-plus'
import router from '@/router'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})
//请求拦截器
service.interceptors.request.use(config => {
    //注入token
    if(store.getters.token){
        config.headers.Authorization = 'Bearer ${store.getters.token}'
    }
    return config
},error => {
    return Promise.reject(error)
})
//响应拦截器
service.interceptors.response.use(
    response => {
        const {success, message, data} = response.data
        //判断请求是否成功
        if(success) {
            //成功后返回数据
            return data
        } else {
            //失败提示
            ElMessage.error(message)
            return Promise.reject(new Error(message))
        }
    }, 
    //请求失败

    error => { 
        ElMessage.error(error.message)
        return Promise.reject(error)
    }
    )

export default service