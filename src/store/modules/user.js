import { login, getUserInfo} from '@/api/sys'
import md5 from 'md5'
import {setItem, getItem,removeAllItem} from '@/utils/storage'
import {TOKEN} from '@/constant'
import router from '@/router'

export default {
    namespaced: true,
    state: () => ({
        token: getItem(TOKEN) || '',
        userInfo:{}
    }),
    mutations: {
        setToken(state, token){
            state.token = token
            setItem(TOKEN, token)
        },
        setUserInfo (state, userInfo){
            state.userInfo = userInfo
        }
    },
    actions: {

        //登录请求动作
        login (context, userInfo) {
            const {username, password} =userInfo
            return new Promise((resolve, reject) => {
                login ({
                    username,
                    password: md5(password)
                }).then(data =>{
                    this.commit('user/setToken',data.token)
                    resolve()
                }).catch(err =>{
                    reject(err)
                })
            })
        },
        async getUserInfo (context) {
            const res = await getUserInfo()
            this.commit('user/setUserInfo', res)
            return res
        },
        logout (state) {
            this.commit('user/setToken',state.TOKEN)
            this.commit('user/setUserInfo',{})
            removeAllItem()
            //TODO:清理权限
            router.push('/login')
        }
    }
}