// 请求工具封装
import { apiUrl } from '@/config/urlConfig'

export const get = (url, params = {}) => {
    return request(url, 'GET', params)
}

export const post = (url, params = {}) => {
    return request(url, 'POST', params)
}

export const request = (url, method, params = {}) => {
    return new Promise((resolve, reject) => {
        wx.request({
            params,
            method,
            url: apiUrl + url,
            success: res => {
                if (res.data.code === 0) {
                    resolve(res.data.data)
                } else {
                    reject(res.data)
                }
            }
        })
    })
}