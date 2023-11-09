import axios from "axios"

import { Loading, Message } from 'element-ui'

/* 全局封装loading加载效果 */
// let loadingInstance = null
// function startLoading() {
//     loadingInstance = Loading.service({
//         fullscreen: true,
//         text: 'Loading...',
//         background: 'rgba(0, 0, 0, 0.3)'
//     })
// }
// function endLoading() {
//     loadingInstance.close()
// }
// let needLoadingRequestCount = 0
// function showFullScreenLoading() {
//     if (needLoadingRequestCount === 0) {
//         startLoading()
//     }
//     needLoadingRequestCount++
// }
// function tryHideFullScreenLoading() {
//     if (needLoadingRequestCount <= 0) return
//     needLoadingRequestCount--
//     if (needLoadingRequestCount === 0) {
//         endLoading()
//     }
// }

export function newindex(config) {

    const instance = axios.create({
        baseURL: process.env.VUE_APP_URL,
        timeout: 5000,
    })

    // 请求拦截 通过axios拦截器添加token验证
    instance.interceptors.request.use(config => {
        var token = window.sessionStorage.getItem("token")

        if (token) {
            config.headers.Authorization = 'Bearer ' + token
            config.headers['think-lang'] = window.sessionStorage.getItem("lang")
        }

        // showFullScreenLoading()
        return config
    }, error => {
        // tryHideFullScreenLoading()
        Message.error({ message: '请求超时!' })
        return Promise.reject(error)
    })

    instance.interceptors.response.use((res) => {
        // if (res.msg == "无效token") router.push("/login");
        // if (res.code == 404) router.push("/notfount");
        //这里的错误编码字典不是固定的需要后端给我们的数据判断

        return res;
    }, (err) => {
            Promise.reject(err);
        }
    );

    return new Promise((resolve, reject) => {
        instance(config)
            .then(response => {
                // tryHideFullScreenLoading()
                //token 无效，清除本地token
                if (response.data.code == 'failed') {
                    // debugger
                    removeToken();
                }
                resolve(response)
            }, err => {
                // tryHideFullScreenLoading()
                reject(err)
            })
            .catch((error) => {
                // tryHideFullScreenLoading()
                reject(error)
            })
    })
}