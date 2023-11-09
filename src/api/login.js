import { newindex } from "network/axios"

/** ==========================登录==========================*/
//请求获取登录
export function getIndex(address, signature, message, name) {
    return newindex({
        url: '/auth/login',
        method: "post",
        data: {
          address, 
          signature, 
          message, 
          name
        }
    })
}